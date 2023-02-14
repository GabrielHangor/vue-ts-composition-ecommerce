import type { IUserAuthData, IUserMetaData } from '@/modules/user/models/user.interfaces';
import { supabase } from '@/supabase';
import type { SignInWithOAuthCredentials } from '@supabase/supabase-js';

export default class UserService {
  static async signUp({ email, password }: IUserAuthData) {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { firstName: 'Anonymous User', lastName: 'Anonymous User' } },
    });
    if (error) throw Error(error.message);
  }

  static async signIn({ email, password }: IUserAuthData) {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw Error(error.message);
  }

  static async signInWithOAuth(provider: SignInWithOAuthCredentials['provider']) {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: 'http://127.0.0.1:5173/vue-ts-composition-ecommerce/' },
    });
    if (error) throw Error(error.message);
  }

  static async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw Error(error.message);
  }

  static async sendPasswordResetLink(email: string) {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://gabrielhangor.github.io/vue-ts-composition-ecommerce/?update_password=1',
    });
    if (error) throw Error(error.message);
  }

  static async updatePassword(password: string) {
    const { error } = await supabase.auth.updateUser({ password });
    if (error) throw Error(error.message);
  }

  static async updateUserData(params: IUserMetaData) {
    const { email, ...metaData } = params;
    const { error } = await supabase.auth.updateUser({
      email,
      data: metaData,
    });
    if (error) throw Error(error.message);
  }
}
