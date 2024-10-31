"use client";
import scss from "./PostAll.module.scss";
import { usePostAllQuery } from "@/redux/api/postAll";
import { FiMessageCircle } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import { RiBookmarkLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import LaikPost from "@/ui/LaikPost/LaikPoast";
import dayjs from "dayjs";
import { usePostLikeIdQuery, usePostLikeMutation } from "@/redux/api/postLike";
import LikeCount from "@/ui/likeCount/LikeCount";

const PostAll = () => {
  const { data } = usePostAllQuery();
  const [postLikeMutation] = usePostLikeMutation();
  const router = useRouter();

  return (
    <section className={scss.PostAll}>
      <div className="container">
        <div className={scss.content}>
          {data?.map((el) => {
            return (
              <div key={el.id} className={scss.post}>
                <div className={scss.userPhoto}>
                  <img className={scss.user} src={el.user.photo} alt="user" />
                  <h1 onClick={() => router.push(`/other-id/${el.userId}`)}>
                    {el.user.username}
                  </h1>
                  <h2> {dayjs(el.createdAt).format("MMM D, YYYY")} </h2>
                </div>
                <div className={scss.image}>
                  {el.mediaUrl.endsWith(".mp4") ? (
                    <video src={el.mediaUrl} controls className={scss.media} />
                  ) : (
                    <img src={el.mediaUrl} alt="img" className={scss.media} />
                  )}
                </div>
                <div className={scss.icons}>
                  <div className={scss.three}>
                    <LaikPost postId={el.id} />
                    <span>
                      <FiMessageCircle />
                    </span>
                    <span>
                      <LuSend />
                    </span>
                  </div>
                  <span>
                    <RiBookmarkLine />
                  </span>
                </div>
                <div className={scss.like}>
                  <LikeCount postId={el.id} />
                  <h2>marks</h2>
                  <h3>"Like"</h3>
                </div>

                <h4>{el.caption}</h4>
                <div className={scss.line}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PostAll;
