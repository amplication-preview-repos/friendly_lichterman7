import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageCreateInput = {
  content?: string | null;
  sender?: string | null;
  chat?: ChatWhereUniqueInput | null;
};
