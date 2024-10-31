namespace POSTALL {
  type PostAllResponse = PostAllReels[];
  type PostAllRequest = void;

  type PostCreateResponse = PostCreateRes;
  type PostCreateRequest = PostCreatereq;

  type PostMyResponse = PostMy[];
  type PostMyRequest = void;

  type OtherPostResponse = OtherPost[];
  type OtherPostRequest = string;

  type PostDeleteResponse = PostDelete;
  type PostDeleteRequest = number;
}
