import { Message } from "./message";
import { User } from "./user";

export interface MessageState {
  loading: boolean;
  messages: Message[];
  error: string;
}

export interface State {
  users: User[];
  error: string | null;
  loadingStatus: boolean;
  quote: {
    loading: boolean;
    error: string;
    content: string;
  };
  currentUserState: {
    loading: boolean;
    user: User | null;
    error: string;
  };
  currentMessages: {
    loading: boolean;
    messages: Message[];
    error: string;
  }
}