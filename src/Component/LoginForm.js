import { useForm } from "react-hook-form";
import { useUserContext } from "../Context/UserContext";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn } = useUserContext();

  function onSubmit(data) {
    logIn(data.username);
    console.log(data);
    console.log(data.username);
  }

  return (
    <div className="login-container">
      <form
        className="bg-white p-5 rounded-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Login Form</h1>
        <hr />
        <div className="mb-3">
          <label htmlFor="validationCustomUsername" className="form-label">
            Username
          </label>
          <div className="input-group has-validation">
            <span className="input-group-text" id="inputGroupPrepend">
              @
            </span>
            <input
              type="text"
              className={`form-control ${errors?.username ? "is-invalid" : ""}`}
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              required=""
              {...register("username", { required: "Username is required" })}
            />
            {errors?.username && (
              <div className="invalid-feedback">{errors.username.message}</div>
            )}
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={`form-control ${errors?.email ? "is-invalid" : ""}`}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            autoComplete="email"
            {...register(
              "email",
              { required: "Email is required" },
              {
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              }
            )}
          />
          {errors?.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            autoComplete="current-password"
            type="password"
            className={`form-control ${errors?.password ? "is-invalid" : ""}`}
            id="exampleInputPassword1"
            {...register(
              "password",
              { required: "Password is required" },
              {
                minLength: {
                  value: 4,
                  message: "Password must have at least 4 characters",
                },
                maxLength: {
                  value: 10,
                  message: "Password must have at most 10 characters",
                },
              }
            )}
          />
          {errors?.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary rounded-pill">
          Submit
        </button>
      </form>
    </div>
  );
}

export { LoginForm };
