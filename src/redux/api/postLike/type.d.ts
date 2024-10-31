namespace POSTLIKE {
  type PostLikeIdResponse = PostLikeId;
  type PostLikeIdRequest = number;

  type PostLikeResponse = PostLikeres;
  type PostLikeRequest = number;

  type PostLikeDeleteResponse = {
    userId: number;
    postId: number;
  };
  type PostLikeDeleteRequest = number;
}
