import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  content: string;
  videoId: string;
}

@InputType()
export class UpdateCommentInput extends PartialType(CreateCommentInput) {}

/* ------------------------- Custom Resolver Inputs ------------------------- */
// @ArgsType()
// export class Comment Query extends QueryArgsType(Comment DTO) {}
// export const Comment Connection = Comment Query.ConnectionType;

// @ArgsType()
// export class CustomFindOneComment Args extends FindOneArgsType(Comment DTO) {}

// @InputType()
// export class CustomCreateOneComment Input extends CreateOneInputType(
//   'Comment ',
//   CreateComment Input,
// ) {}

// @InputType()
// export class CustomCreateManyComment Input extends CreateManyInputType(
//   'comment',
//   CreateComment Input,
// ) {}

// @InputType()
// export class CustomUpdateOneComment Input extends UpdateOneInputType(
//   Comment DTO,
//   UpdateComment Input,
// ) {}

// @InputType()
// export class CustomDeleteOneComment Input extends DeleteOneInputType(Comment DTO) {}
