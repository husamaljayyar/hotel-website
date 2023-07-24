import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "../Valedation";
import { bookingInfo } from "../Redux/Booking/BookingAction";

export const ContactInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(bookingSchema),
  });

  let Id = useParams();
  Id = Id.id;

  const onSubmitHandler = (data) => {
    const values = {
      name: state.name,
      email: state.email,
      phone: data.phone,
      nationality: data.nationality,
      arrivalTime: data.arrivalTime,
    };
    dispatch(bookingInfo({ values, Id, navigate }));
  };

  return (
    <>
      <form
        className="container border-spacing-5 shadow-2xl sm:p-8 bg-white rounded-e-md "
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <p className="text-3xl text-center pt-5 pb-12 ">Contact Information </p>
        <div className=" text-lg flex flex-col items-center ">
          <div className=" w-full flex  sm:flex-row  flex-col items-center justify-between  sm:px-4 ">
            <div className="max-w-[470px] sm-w-8/12 w-11/12 sm:me-2 mt-4 md:mt-0 ">
              <input
                className="h-9 w-full me-2 border-b-[1.6px] border-gray-400 
                focus:outline-none bg-white text-gray-600  "
                type="text"
                value={state?.name}
                placeholder="Name"
                disabled
                {...register("name")}
              />
              <p className="text-red-600 text-base">{errors.name?.message}</p>
            </div>

            <div className="max-w-[470px] sm-w-8/12 w-11/12 sm:ms-2 mt-4 md:mt-0 ">
              <input
                className="h-9 w-full me-2 border-b-[1.6px] border-gray-400 
                focus:outline-none bg-white text-gray-600  "
                type="email"
                value={state?.email}
                placeholder="Email"
                disabled
                {...register("email")}
              />{" "}
              <p className="text-red-600 text-base">{errors.email?.message}</p>
            </div>
          </div>

          <div className=" w-full flex  sm:flex-row  flex-col items-center justify-between lg:mt-6 sm:px-4">
            <div className="max-w-[470px] sm-w-8/12 w-11/12 sm:me-2 mt-4 md:mt-0 ">
              <input
                className="h-9 w-full me-2 focus:outline-none border-b-[1.6px]
            border-gray-400 focus:border-slate-900 placeholder-gray-600  "
                type="number"
                placeholder="Phone"
                autoComplete="off"
                {...register("phone")}
              />

              <p className="text-red-600 text-base">{errors.phone?.message}</p>
            </div>

            <div className="max-w-[470px] sm-w-8/12 w-11/12 sm:ms-2  mt-4 md:mt-0">
              <input
                className="h-9 w-full me-2 focus:outline-none border-b-[1.6px] 
             border-gray-400 focus:border-slate-900 placeholder-gray-600  "
                type="text"
                placeholder="Nationality"
                autoComplete="off"
                {...register("nationality")}
              />
              <p className="text-red-600 text-base">
                {errors.nationality?.message}
              </p>
            </div>
          </div>
        </div>

        <ul className="flex flex-col justify-start items-start pt-2 mt-4 ms-4">
          <p className=" my-1  text-gray-600 font-bold">
            {" "}
            Review the internal rules
          </p>
          <p className=" my-1 text-gray-600 ">
            {" "}
            Your host is asking to agree to the following property rules:
          </p>
          <li className="">- No smoking</li>
          <li className="">- Parties/events are not allowed</li>
          <p className=" my-1  text-gray-600 ">
            By proceeding to the next step, you agree to these Internal Rules.
          </p>
        </ul>

        <hr className="w-full h-px mt-8 mb-4 bg-gray-800" />

        <div className="flex sm:flex-row flex-row justify-between items-center text-lg lg:my-6 my-0  ms-4">
          <div className="flex lg:flex-row flex-col relative sm:mb-0 mb-4">
            <p className="me-4 text-lg lg:pt-1 ">- Your arrival time:</p>
            <div>
              <input
                class="h-10 sm:w-44 w-36 px-4   text-black bg-gray-300  "
                type="time"
                autoComplete="off"
                {...register("arrivalTime")}
              />
              <p className="text-red-600 text-base pt-2">
                {errors.arrivalTime?.message}
              </p>
            </div>
          </div>

          <button
            className="h-12 bg-accent sm:w-48 w-32 text-white text-lg lg:mt-0"
            type="submit"
          >
            Check Now
          </button>
        </div>
      </form>
    </>
  );
};
