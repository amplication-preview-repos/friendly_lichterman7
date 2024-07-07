import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChatWhereUniqueInput } from "../chat/ChatWhereUniqueInput";

export type MessageWhereInput = {
  id?: StringFilter;
  content?: StringNullableFilter;
  sender?: StringNullableFilter;
  chat?: ChatWhereUniqueInput;
};
