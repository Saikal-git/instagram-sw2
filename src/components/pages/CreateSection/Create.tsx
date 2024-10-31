"use client";
import { usePostCreateMutation } from "@/redux/api/postAll";
import scss from "./Create.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { useUploadFileMutation } from "@/redux/api/upload";

const Create = () => {
  const [postCreateQuery] = usePostCreateMutation();
  const { register, handleSubmit } = useForm<PostCreatereq>();
  const [uploadFileMutation] = useUploadFileMutation();

  const onSubmit: SubmitHandler<PostCreatereq> = async (data) => {
    const selectedFile = data.file![0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    const { data: media } = await uploadFileMutation(formData);
    const userData: PostCreatereq = {
      caption: data.caption,
      mediaUrl: String(media?.url),
      mediaType: data.mediaType,
    };
    console.log(userData);

    const { data: post } = await postCreateQuery(userData);
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<PostCreatereq>= ~ post:",
      post
    );
  };
  return (
    <section className={scss.Create}>
      <div className="container">
        <div className={scss.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="file" {...register("file", { required: true })} />
            <input
              type="text"
              placeholder="Caption"
              {...register("caption", { required: true })}
            />

            <input
              defaultValue={"PHOTO"}
              type="text"
              placeholder="MediaType"
              {...register("mediaType", { required: true })}
            />
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Create;
