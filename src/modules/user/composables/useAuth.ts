import { ref } from 'vue';
import UserService from '@/modules/user/services/UserService';
import type { IUserAuthData } from '@/modules/user/models/user.interfaces';
import { supabase } from '@/supabase';
import type { User, AuthError } from '@supabase/supabase-js';

supabase.auth.onAuthStateChange((event, session) => {
  console.log(event, session);
  user.value = session?.user || null;
});

const user = ref<User | null>(null);

export const useAuth = () => {
  const isLoading = ref(false);
  const error = ref<AuthError | null>(null);

  const signUp = async ({ email, password }: IUserAuthData) => {
    error.value = null;

    try {
      isLoading.value = true;
      await UserService.signUp({ email, password });
    } catch (e) {
      console.error(e);
      error.value = e as AuthError;
    } finally {
      isLoading.value = false;
    }
  };

  const signIn = async ({ email, password }: IUserAuthData) => {
    error.value = null;

    try {
      isLoading.value = true;
      await UserService.signIn({ email, password });
    } catch (e) {
      console.error(e);
      error.value = e as AuthError;
    } finally {
      isLoading.value = false;
    }
  };

  const logout = async () => await UserService.logout();

  const isLoggedIn = () => !!user.value;

  return { isLoading, error, user, isLoggedIn, signUp, signIn, logout };
};
