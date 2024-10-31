"use client"
import { usePostLikeIdQuery } from "@/redux/api/postLike";
import React, { FC } from "react";

interface ILikeCountProps {
  postId: number;
}

const LikeCount:FC<ILikeCountProps> = ({ postId }) => {
  const { data: post } = usePostLikeIdQuery(postId);
  return (
    <div>
      <h1>{post?.likesCount}</h1>
    </div>
  );
};

export default LikeCount;
