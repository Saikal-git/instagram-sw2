interface SignInRes {
  accesToken: string;
  accesTokenExpration: string;
  refreshToken: string;
}

interface SignInReq {
  email: string;
  password: string;
}

interface SignUpRes {
  message: string;
  accesToken: string;
  accesTokenExpration: string;
  refreshToken: string;
}

interface SignUpReq {
  email: string;
  password: string;
  username: string;
  photo: string;
}

interface GetMeRes {
  profile: {
    id: string;
    username: string;
    role: string;
    email: string;
    isActive: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface PostAllReels {
  id: number;
  userId: number;
  caption: string;
  mediaUrl: string;
  mediaType: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    username: string;
    role: string;
    email: string;
    isActive: boolean;
    photo: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface PostMy {
  id: number;
  userId: number;
  caption: string;
  mediaUrl: string;
  mediaType: string;
  createdAt: string;
  updatedAt: string;
}

interface PostCreatereq {
  caption: string;
  mediaUrl: string;
  mediaType: string;
  file?: string[];
}

interface PostCreateRes {
  id: number;
  userId: number;
  caption: string;
  mediaUrl: string;
  mediaType: string;
  createdAt: string;
  updatedAt: string;
}

interface PostLikeId {
  postId: number;
  likesCount: number;
  isLike: boolean;
  likedUsers: [
    {
      username: string;
      photo: string;
      likedAt: string;
    }
  ];
}

interface OtherPost {
  id: number;
  userId: number;
  caption: string;
  mediaUrl: string;
  mediaType: string;
  createdAt: string;
  updatedAt: string;
  user: {
    id: number;
    username: string;
    role: string;
    email: string;
    isActive: boolean;
    photo: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface PostLikeres {
  userId: number;
  postId: number;
  createdAt: string;
  updatedAt: string;
}
interface PostLikeReq {
  postId: number;
}

interface PostDelete {
  message: string;
}

interface UploadPfofileRes {
  username: string;
  photo: string;
}

interface UploadPfofileReq {
  username: string;
  photo?: string;
  file?: string[];
}

interface ForgotRequest {
  message: string;
}

interface ForgotResponse {
  email: string;
  frontEndUrl: string;
}

interface IRefresh {
  userId: number
  id: number
  title: string
  completed: boolean
}