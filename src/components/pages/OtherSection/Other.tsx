"use client";
import { useParams } from "next/navigation";
import scss from "./Other.module.scss";
import { FC } from "react";
import { useOtherPostQuery } from "@/redux/api/postAll";

interface IOtherID {
  otherId: number;
}

const Other: FC<IOtherID> = () => {
  const { otherID } = useParams();
  const { data } = useOtherPostQuery(`${otherID}`);
  const name = data?.slice(0, 1)[0].user.username;
  const photo = data?.slice(0, 1)[0].user.photo;

  return (
    <section className={scss.Other}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <div className={scss.left}>
              <img src={photo} alt="img" />
            </div>
            <div className={scss.right}>
              <div className={scss.block1}>
                <h1>{name}</h1>
              </div>
              <div className={scss.block2}>
                <div className={scss.publications}>
                  <span>{data?.length}</span>
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
            {data?.map((el) => (
              <div className={scss.post}>
              {el.mediaUrl.endsWith(".mp4") ? (
                <video src={el.mediaUrl} controls className={scss.media} />
              ) : (
                <img src={el.mediaUrl} alt="img" className={scss.media} />
              )}
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Other;
