import { Chat } from "../chat/Chat";

export type Message = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  sender: string | null;
  chat?: Chat | null;
};
