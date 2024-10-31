namespace AUTH {
  type SignInResponse = SignInRes;
  type SignInRequest = SignInReq;

  type SignUpResponse = SignUpRes;
  type SignUpRequest = SignUpReq;

  type GetMeResponse = GetMeRes;
  type GetMeRequest = void;

  type EditResponse = void;
  type EditRequest = UploadPfofileReq;

  type ForgotResponse = ForgotResponse;
  type ForgotRequest = ForgotRequest;
}
