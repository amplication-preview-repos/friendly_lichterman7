import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type MessageUpdateManyWithoutChatsInput = {
  connect?: Array<MessageWhereUniqueInput>;
  disconnect?: Array<MessageWhereUniqueInput>;
  set?: Array<MessageWhereUniqueInput>;
};
