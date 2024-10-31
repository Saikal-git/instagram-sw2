"use client";
import {
  usePostLikeDeleteMutation,
  usePostLikeIdQuery,
  usePostLikeMutation,
} from "@/redux/api/postLike";
import React, { FC } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";

interface ILaikProps {
  postId: number;
}
const LaikPost: FC<ILaikProps> = ({ postId }) => {
  const [postLikeMutation] = usePostLikeMutation();
  const [likeDeleteMutation] = usePostLikeDeleteMutation();
  const { data: post } = usePostLikeIdQuery(postId);
  const postLike = async (id: number) => {
    if (post?.isLike) {
      const { data: remove } = await likeDeleteMutation(id);
      console.log("🚀 ~ postLike ~ remove:", remove);
    } else {
      const { data: res } = await postLikeMutation(id);
      console.log("🚀 ~ postLike ~ res:", res);
    }
  };
  return (
    <>
      <span
        style={{ color: post?.isLike ? " red" : "" }}
        onClick={() => {
          postLike(postId);
        }}
      >
        <MdOutlineFavoriteBorder />
      </span>
    </>
  );
};

export default LaikPost;
