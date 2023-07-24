import { useParams } from "react-router-dom";
import { ContactInfo } from "../Components/ContactInfo";
import { PaymentNow } from "../Components/PaymentNow";
import { useMatch } from "react-router-dom";

const Reservation = () => {
  const { id } = useParams();

  const location = useMatch(`/booking/contact-info/${id}`);

  return (
    <section className="h-auto">
      {/* hero image  */}
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
          Reservation
        </h1>
      </div>

      <div className="flex flex-row justify-center ">
        <div className="container p-0 flex flex-col justify-between  my-6 ">
          <div className=" lg:w-9/12  w-full flex flex-row justify-between  fw-semibold  text-lg lg:py-9 p-2">
            <div
              className={`w-5/12 flex ${
                location?.pathname === `/booking/contact-info/${id}`
                  ? null
                  : "opacity-50 "
              }`}
            >
              <button className="rounded-full text-center border-0 fs-5 text-white h-[35px] w-[35px] bg-slate-600">
                1
              </button>
              <p className="p-1 ms-1 fs-5">Contact Info{/* rmation */}</p>
            </div>
            <hr className="mt-5 mx-8 w-full relative right-8 hidden md:block" />{" "}
            <div
              className={`w-5/12  flex  ${
                location?.pathname === `/booking/contact-info/${id}`
                  ? "opacity-50"
                  : null
              }`}
            >
              <button className=" rounded-full text-center border-0 fs-5 text-white h-[35px] w-[35px] bg-slate-600 ">
                2
              </button>
              <p className="p-1 ms-1 fs-5 ">Payment {/* Now */}</p>
            </div>
          </div>

          {location?.pathname === `/booking/contact-info/${id}` ? (
            <ContactInfo />
          ) : (
            <PaymentNow />
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
