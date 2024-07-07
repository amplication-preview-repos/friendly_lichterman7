import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ChannelWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
