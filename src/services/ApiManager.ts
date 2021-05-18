import axios, {AxiosInstance} from 'axios';

const PROD_BASE_URL = '';
const STAGE_BASE_URL = 'https://beaver-chat.herokuapp.com/api/v1/';

const USE_PROD = false;

export interface ApiRequestError {
  statusCode: number;
  data: any;
}

class ApiManager {
  private static instance: ApiManager;
  private axiosInstance: AxiosInstance;
  private defaultHeaders = () => {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  };

  private authToken: string | null = null;

  constructor() {
    this.axiosInstance = axios.create();
    this.axiosInstance.defaults.baseURL = USE_PROD
      ? PROD_BASE_URL
      : STAGE_BASE_URL;
  }

  public static getInstance(): ApiManager {
    if (!this.instance) {
      this.instance = new ApiManager();
    }

    return this.instance;
  }

  public setToken(token: string) {
    this.authToken = token;
  }

  public get = (endpoint: string, params?: any) => {
    return this.axiosInstance
      .get(endpoint, {
        headers: {
          ...this.defaultHeaders(),
          ...(this.authToken
            ? {Authorization: `Bearer ${this.authToken}`}
            : {}),
        },
        params,
      })
      .catch(error => {
        return Promise.reject<ApiRequestError>({
          statusCode: error.response.status,
          data: error.response.data,
        });
      });
  };

  public post = (endpoint: string, data?: any) => {
    return this.axiosInstance
      .post(endpoint, data, {
        headers: {
          ...this.defaultHeaders(),
          ...(this.authToken
            ? {Authorization: `Bearer ${this.authToken}`}
            : {}),
        },
      })
      .catch(error => {
        return Promise.reject<ApiRequestError>({
          statusCode: error.response.status,
          data: error.response.data,
        });
      });
  };
}

export default ApiManager;
