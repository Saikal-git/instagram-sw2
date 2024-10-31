"use client";
import { useGetMeQuery } from "@/redux/api/auth";
import scss from "./Profile.module.scss";
import { usePostDeleteMutation, usePostMyQuery } from "@/redux/api/postAll";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";
import { useRouter } from "next/navigation";
import EditProfile from "./EditProfile";

const Profile = () => {
  const { data } = useGetMeQuery();
  const { data: myPost } = usePostMyQuery();
  const [postDeleteMutation] = usePostDeleteMutation();
  const router = useRouter();
  const [editProfile, setEditProfie] = useState(false);

  const postDelete = async (data: number) => {
    const { data: res } = await postDeleteMutation(data);
    console.log("🚀 ~ postLike ~ res:", res);
  };

  const logOut = () => {
    localStorage.removeItem("tokens");
    router.push("/sign-in");
  };

  return (
    <section className={scss.Profile}>
      {editProfile ? (
        <div className={scss.edit}>
          <div onClick={() => setEditProfie(false)} className={scss.bg}></div>
          <div className={scss.input}>
            <EditProfile />
          </div>
        </div>
      ) : null}
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <div className={scss.left}>
              <img src={data?.profile.photo} alt="img" />
            </div>
            <div className={scss.right}>
              <div className={scss.block1}>
                <h1>{data?.profile.username}</h1>
                <button onClick={() => setEditProfie(true)}>
                  Edit profile
                </button>
                <button>View archive</button>
                <button onClick={() => logOut()}>Log out</button>
              </div>
              <div className={scss.block2}>
                <div className={scss.publications}>
                  <span>{myPost?.length}</span>
                  <h2>publications</h2>
                </div>
                <div className={scss.subscribers}>
                  <span>165</span>
                  <h2>subscribers</h2>
                </div>
                <div className={scss.subscriptions}>
                  <span>40</span>
                  <h2>subscriptions</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={scss.line}></div>
          <div className={scss.bottom}>
            {myPost?.map((el) => (
              <div key={el.id} className={scss.post}>
                <div className={scss.image}>
                  {el.mediaUrl.endsWith(".mp4") ? (
                   <video src={el.mediaUrl} controls preload="metadata" className={scss.media} />
                  ) : (
                    <img src={el.mediaUrl} alt="img" className={scss.media} />
                  )}
                </div>
                <span onClick={() => postDelete(el.id)}>
                  <RiDeleteBin6Line />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
