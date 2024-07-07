import { Message } from "../message/Message";

export type Chat = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  messages?: Array<Message>;
};
