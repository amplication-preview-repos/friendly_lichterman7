import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GroupWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
};
