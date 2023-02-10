import { ref } from 'vue';
import AuthService from '@/modules/user/services/AuthService';
import { supabase } from '@/supabase';
import type { User, AuthError, Provider } from '@supabase/supabase-js';

supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session);
  user.value = session?.user || null;
});

const user = ref<User | null>(null);

export const useAuth = () => {
  const handleServiceCall =
    <T>(serviceMethod: (params: T) => Promise<void>) =>
    async (params: T) => {
      error.value = null;
      try {
        isLoading.value = true;
        await serviceMethod(params);
      } catch (e) {
        console.error(e);
        error.value = e as AuthError;
      } finally {
        isLoading.value = false;
      }
    };

  const isLoading = ref(false);
  const error = ref<AuthError | null>(null);

  const signUp = handleServiceCall(AuthService.signUp);

  const signIn = handleServiceCall(AuthService.signIn);

  const signInWithOAuth = (provider: Provider) => AuthService.signInWithOAuth(provider);

  const sendPasswordResetLink = handleServiceCall(AuthService.sendPasswordResetLink);

  const updatePassword = handleServiceCall(AuthService.updatePassword);

  const logout = async () => await AuthService.logout();

  const isLoggedIn = () => !!user.value;

  return {
    isLoading,
    error,
    user,
    signUp,
    signIn,
    updatePassword,
    sendPasswordResetLink,
    logout,
    isLoggedIn,
    signInWithOAuth,
  };
};
