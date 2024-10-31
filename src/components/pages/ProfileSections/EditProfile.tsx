"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import scss from "./EditProfile.module.scss";
import { useUploadFileMutation } from "@/redux/api/upload";
import { useUpdataProfileMutation } from "@/redux/api/auth";

const EditProfile = () => {
  const { register, handleSubmit } = useForm<UploadPfofileReq>();
  const [uploadFileMutation] = useUploadFileMutation();
  const [updataProfileMutation] = useUpdataProfileMutation();

  const onSubmit: SubmitHandler<UploadPfofileReq> = async (data) => {
    const selectedFile = data.file![0];
    const formData = new FormData();
    formData.append("file", selectedFile);
    const { data: media } = await uploadFileMutation(formData);
    const userData: UploadPfofileReq = {
      photo: String(media?.url),
      username: data.username,
    };
    const { data: post } = await updataProfileMutation(userData);
    console.log(
      "🚀 ~ constonSubmit:SubmitHandler<PostCreatereq>= ~ post:",
      post
    );
  };
  return (
    <div className={scss.edit}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register("file", { required: true })} />
        <input
          type="text"
          placeholder="UserName"
          {...register("username", { required: true })}
        />
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default EditProfile;
