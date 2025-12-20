import { User, type UserProps } from '../entities/User';
import { OAuthProfile } from 'src/modules/auth/interfaces';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findById(id: string): Promise<User | null>;
  abstract findByGoogleId(googleId: string): Promise<User | null>;
  abstract createOAuthUser(profile: OAuthProfile): Promise<User>;
  abstract updateById(
    id: string,
    user: Partial<UserProps>,
  ): Promise<User | null>;
}
