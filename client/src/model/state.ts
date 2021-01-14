import { User } from "./user";


export interface State {
  users: User[];
  error: string | null;
  loadingStatus: boolean;
  quote: {
    loading: boolean;
    error: string;
    content: string;
  },
  currentUserState: {
    loading: boolean;
    user: User | null;
    error: string;
  }
}