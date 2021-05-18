import ApiManager from '../ApiManager';
import LocalStorage from '../local';

const REGISTRATION = 'auth';

class AuthRepository {
  private static instance: AuthRepository;

  private constructor() {}

  public static getInstance(): AuthRepository {
    if (!this.instance) {
      this.instance = new AuthRepository();
    }

    return this.instance;
  }

  public static registration = () => {
    return ApiManager.getInstance().get(REGISTRATION);
  };

  public static getTokenFromLocalStorage = () => {
    return LocalStorage.get('auth_token');
  };

  public static saveTokenToLocalStorage = (token: string) => {
    return LocalStorage.set('auth_token', token);
  };
}

export default AuthRepository;
