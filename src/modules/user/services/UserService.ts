import type { IUserAuthData, IUserMetaData } from '@/modules/user/models/user.models';
import { supabase } from '@/supabase';
import type { AuthProviders } from '@/modules/user/models/user.models';


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

  static async signInWithOAuth(provider: AuthProviders) {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: 'https://gabrielhangor.github.io/vue-ts-composition-ecommerce/' },
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
