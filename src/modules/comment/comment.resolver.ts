import { UseGuards } from '@nestjs/common';
import { Resolver } from '@nestjs/graphql';

import { CommentDTO } from './comment.entity';
import { CommentService } from './comment.service';

@UseGuards()
@Resolver(() => CommentDTO)
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  // @Query(() => CommentConnection)
  // async customQuery(@Args() query: CommentQuery): Promise<ConnectionType<CommentDTO>> {
  //   const filter: Filter<CommentDTO> = {
  //     ...query.filter,
  //   };
  //   return CommentConnection.createFromPromise((q) => this.commentService.query(q), {
  //     ...query,
  //     ...{ filter },
  //   });
  // }

  // @Query(() => CommentDTO)
  // async customFindOneComment(@Args() input: CustomFindOneCommentArgs) {
  //   return null;
  // }

  // @Mutation(() => CommentDTO)
  // async customCreateOneComment(
  //   @Args('input') input: CustomCreateOneCommentInput,
  // ): Promise<CommentDTO> {
  //   return null;
  // }

  // @Mutation(() => [CommentDTO])
  // async customCreateManyComment(
  //   @Args('input') input: CustomCreateManyCommentInput,
  // ): Promise<CommentDTO> {
  //   return null;
  // }

  // @Mutation(() => CommentDTO)
  // async customUpdateOneComment(
  //   @Args('input') input: CustomUpdateOneCommentInput,
  // ): Promise<CommentDTO> {
  //   return null;
  // }

  // @Mutation(() => CommentDTO)
  // async customDeleteOneComment(
  //   @Args('input') input: CustomDeleteOneCommentInput,
  // ): Promise<CommentDTO> {
  //   return null;
  // }
}
