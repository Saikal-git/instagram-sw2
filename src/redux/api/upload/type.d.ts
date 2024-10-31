namespace UPLOAD {
  type UploadFileResponse = {
    name: string;
    format: string;
    url?: string;
  };
  type UploadFileRequest = FormData;
}
