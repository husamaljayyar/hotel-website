import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../Valedation";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/User/userActions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const {
    user: { isLoading, error, user },
  } = useSelector((state) => state);

  console.log(user);
  // Disable the login button in the loading case
  const isDisabled = isLoading ? "disabled" : "";

  // unwrap function => useing to get result dispatch
  const submitHandler = (values) => {
    dispatch(userLogin({ values, navigate }));
  };

  return (
    <section className="h-auto">
      <div
        className="bg-room bg-cover bg-center h-[560px] relative flex bg-opacity-50
       justify-center items-center"
      >
        <img
          className="absolute inset-0 object-cover h-full  w-full"
          src={"/assets/images/hero-section.jpg"}
        />
        <div className="absolute w-full h-full bg-center bg-gray-900  bg-opacity-50  "></div>
        <h1 className="text-5xl text-white z-20 font-primary text-center leading-tight capitalize">
          Login now
        </h1>
      </div>

      <div className="flex flex-row justify-center">
        <div className="container max-w-[450px] flex flex-row justify-between  my-36">
          <form
            className="border-spacing-5 shadow-2xl w-full p-8 bg-white rounded-e-md py-14"
            onSubmit={handleSubmit(submitHandler)}
          >
            <div className="pb-8">
              <p className="text-accent text-5xl text-center font-light ">
                Login
              </p>
              <p className="text-center pt-11">
                Log in with the data that you entered during registration
              </p>
            </div>

            <input
              className="h-14 w-full mt-5 rounded-full p-5"
              name="email"
              type="email"
              placeholder="ُEmail"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <input
              class="h-14 w-full mt-5 rounded-full p-5 "
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="off"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>

            <button
              className={`h-14 bg-accent w-full text-white text-lg mt-5 rounded-full ${
                isDisabled && "opacity-50"
              }`}
              type="submit"
              disabled={isDisabled}
            >
              Login
            </button>
            <div className="mt-4 mb-4 ">
              <p className="text-red-500 text-center mb-2 ">
                {error && "Identifiant ou mot de passe incorrect"}
              </p>

              <hr class="w-full h-px   bg-gray-800" />
            </div>

            <p className="px-5 my-1 text-center text-gray-600">
              Did you forget your password?
            </p>
            <p className="px-5 text-center text-gray-600">
              Don't have an account? <Link to="/register"> Sign up </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Login;
