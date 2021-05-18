export interface AuthState {
  requestRegistrationStatus: RequestStatus;
  requestRegistrationError: RequestErrorView | null;
  userID: string;
}

export type RequestStatus = 'idle' | 'pending' | 'success' | 'failure';

export interface RequestErrorView {
  code: number;
  message: string;
}
