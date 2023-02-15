import { ref } from 'vue';
import UserService from '@/modules/user/services/UserService';
import { supabase } from '@/supabase';
import type { User, AuthError, Provider } from '@supabase/supabase-js';

supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session);
  user.value = session?.user || null;
});

const user = ref<User | null>(null);

export const useUser = () => {
  const handleServiceCall =
    <T>(serviceMethod: (params: T) => Promise<void>) =>
    async (params: T) => {
      error.value = null;
      try {
        isLoading.value = true;
        await serviceMethod(params);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e);
          console.log();
          error.value = e.message;
        }
      } finally {
        isLoading.value = false;
      }
    };

  const isLoading = ref(false);
  const error = ref<AuthError['message'] | null>(null);

  const signUp = handleServiceCall(UserService.signUp);

  const signIn = handleServiceCall(UserService.signIn);

  const signInWithOAuth = (provider: Provider) => UserService.signInWithOAuth(provider);

  const sendPasswordResetLink = handleServiceCall(UserService.sendPasswordResetLink);

  const updatePassword = handleServiceCall(UserService.updatePassword);

  const updateUserData = handleServiceCall(UserService.updateUserData);

  const logout = async () => await UserService.logout();

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
    updateUserData,
  };
};
