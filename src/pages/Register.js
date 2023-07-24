import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../Valedation";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../Redux/User/userActions";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmitHandler = ({ name, email, password }) => {
    const values = {
      name: name,
      email: email,
      password: password,
    };
    dispatch(userRegister({ values, navigate }));
    reset();
  };

  // get user data from store
  const {
    user: { isLoading, error, user },
  } = useSelector((state) => state);

  // Disable the register button in the loading case
  const isDisabled = isLoading ? "disabled" : "";

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
          Register now
        </h1>
      </div>
      <div className=" flex flex-row justify-center">
        <div className="container max-w-[450px] flex flex-row justify-between my-36">
          <form
            className=" border-spacing-5 shadow-2xl w-full p-8 bg-white rounded-e-md  py-14"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="pb-8">
              <p className="text-accent text-5xl text-center font-light">
                Register
              </p>
              <p className="text-center pt-6">
                Register and get exclusive offers from us
              </p>
            </div>

            <input
              className="h-14 w-full mt-5 rounded-full p-5 bg-gray-100"
              type="text"
              placeholder="Full Name"
              autoComplete="off"
              {...register("name")}
            />
            <p>{errors.name?.message}</p>

            <input
              className="h-14 w-full mt-5 rounded-full p-5 bg-gray-100"
              type="email"
              placeholder="Email"
              autoComplete="off"
              {...register("email")}
            />
            <p>{errors.email?.message}</p>

            <input
              className="h-14 w-full mt-5 rounded-full p-5 bg-gray-100"
              type="password"
              placeholder="Password"
              autoComplete="off"
              {...register("password")}
            />
            <p>{errors.password?.message}</p>

            <input
              className="h-14 w-full mt-5 rounded-full p-5 bg-gray-100"
              type="password"
              placeholder="Confirm your password"
              autoComplete="off"
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword?.message}</p>

            <button
              className={`h-14 bg-accent w-full text-white text-lg mt-5 rounded-full ${
                isDisabled && "opacity-50"
              }`}
              type="submit"
              disabled={isDisabled}
            >
              Register
            </button>
            <p className="text-red-600">{error}</p>

            <hr className="w-full h-px mt-8 mb-4 bg-gray-800" />
            <p className="px-5 my-1 text-center text-gray-600">
              Have an account ? <Link to="/login"> Login </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Register;
