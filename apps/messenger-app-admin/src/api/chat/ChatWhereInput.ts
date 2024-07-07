import { StringFilter } from "../../util/StringFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ChatWhereInput = {
  id?: StringFilter;
  messages?: MessageListRelationFilter;
};
