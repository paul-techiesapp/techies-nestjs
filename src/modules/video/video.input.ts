import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateVideoInput {
  title: string;
  url: string;
  thumbnail?: string;
}

@InputType()
export class UpdateVideoInput extends PartialType(CreateVideoInput) {}

/* ------------------------- Custom Resolver Inputs ------------------------- */
// @ArgsType()
// export class Video Query extends QueryArgsType(Video DTO) {}
// export const Video Connection = Video Query.ConnectionType;

// @ArgsType()
// export class CustomFindOneVideo Args extends FindOneArgsType(Video DTO) {}

// @InputType()
// export class CustomCreateOneVideo Input extends CreateOneInputType(
//   'Video ',
//   CreateVideo Input,
// ) {}

// @InputType()
// export class CustomCreateManyVideo Input extends CreateManyInputType(
//   'video',
//   CreateVideo Input,
// ) {}

// @InputType()
// export class CustomUpdateOneVideo Input extends UpdateOneInputType(
//   Video DTO,
//   UpdateVideo Input,
// ) {}

// @InputType()
// export class CustomDeleteOneVideo Input extends DeleteOneInputType(Video DTO) {}
