import * as graphql from "@nestjs/graphql";
import { ChannelResolverBase } from "./base/channel.resolver.base";
import { Channel } from "./base/Channel";
import { ChannelService } from "./channel.service";

@graphql.Resolver(() => Channel)
export class ChannelResolver extends ChannelResolverBase {
  constructor(protected readonly service: ChannelService) {
    super(service);
  }
}
