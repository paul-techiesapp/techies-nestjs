import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { VideoDTO } from './video.entity';
import { VideoService } from './video.service';

@UseGuards()
@Resolver(() => VideoDTO)
export class VideoResolver {
  constructor(private readonly videoService: VideoService) {}

  // @Query(() => VideoConnection)
  // async customQuery(@Args() query: VideoQuery): Promise<ConnectionType<VideoDTO>> {
  //   const filter: Filter<VideoDTO> = {
  //     ...query.filter,
  //   };
  //   return VideoConnection.createFromPromise((q) => this.videoService.query(q), {
  //     ...query,
  //     ...{ filter },
  //   });
  // }

  // @Query(() => VideoDTO)
  // async customFindOneVideo(@Args() input: CustomFindOneVideoArgs) {
  //   return null;
  // }

  // @Mutation(() => VideoDTO)
  // async customCreateOneVideo(
  //   @Args('input') input: CustomCreateOneVideoInput,
  // ): Promise<VideoDTO> {
  //   return null;
  // }

  // @Mutation(() => [VideoDTO])
  // async customCreateManyVideo(
  //   @Args('input') input: CustomCreateManyVideoInput,
  // ): Promise<VideoDTO> {
  //   return null;
  // }

  // @Mutation(() => VideoDTO)
  // async customUpdateOneVideo(
  //   @Args('input') input: CustomUpdateOneVideoInput,
  // ): Promise<VideoDTO> {
  //   return null;
  // }

  // @Mutation(() => VideoDTO)
  // async customDeleteOneVideo(
  //   @Args('input') input: CustomDeleteOneVideoInput,
  // ): Promise<VideoDTO> {
  //   return null;
  // }
}
