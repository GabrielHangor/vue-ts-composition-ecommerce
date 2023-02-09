import type { IUserAuthData } from '@/modules/user/models/user.interfaces';
import { supabase } from '@/supabase';

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

  static async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw Error(error.message);
  }
}
