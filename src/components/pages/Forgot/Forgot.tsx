import scss from "./Forgot.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";

const Forgot = () => {

  const onSubmit: SubmitHandler<ForgotResponse> = async (data) => {
    const forgot: ForgotResponse = {
      email: data.email,
      frontEndUrl: data.frontEndUrl,
    };
  };
  return (
    <section className={scss.Forgot}>
      <div className="container">
        <div className={scss.content}>
          <input
            type="text"
            placeholder="Email"
          />
          <button type="submit">AddTo</button>
        </div>
      </div>
    </section>
  );
};

export default Forgot;
