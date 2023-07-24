import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getRoom } from "../Redux/Guest/guestActions";
import * as ReactIcons from "react-icons/fa";
import BookForm from "../Components/BookForm";
import { addBooking } from "../Redux/Booking/BookingAction";

const RoomDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRoom(id));
  }, [dispatch]);

  const FacilitiesIcons = [
    { name: "Wifi", icon: <ReactIcons.FaWifi /> },
    { name: "Coffee", icon: <ReactIcons.FaCoffee /> },
    { name: "Bath", icon: <ReactIcons.FaBath /> },
    { name: "Parking Space", icon: <ReactIcons.FaParking /> },
    { name: "Swimming Pool", icon: <ReactIcons.FaSwimmingPool /> },
    { name: "Breakfast", icon: <ReactIcons.FaHotdog /> },
    { name: "GYM", icon: <ReactIcons.FaStopwatch /> },
    { name: "Drinks", icon: <ReactIcons.FaCocktail /> },
  ];

  let {
    user: { user },
    guest: { room },
  } = useSelector((state) => state);

  const [errors, setErrors] = useState(false);

  // Booking room //
  const onSubmitHandler = (startDate, endDate, adults, kids) => {

    
    const values = {
      id: Math.random().toString(16).slice(2),
      user: {
        name: user.name,
        email: user.email,
      },
      room: {
        name: room.name,
        size: room.size,
        price: room.price,
        maxPerson: room.maxPerson,
      },
      startDate: startDate,
      endDate: endDate,
      adults: adults,
      kids: kids,
    };

    if (startDate && endDate) {
      dispatch(addBooking(values));
      navigate(`/booking/contact-info/${values.id}`);
    } else {
      setErrors("please specify the date");
    }
  };

  return (
    <section>
      {/*  Banner  */}
      <div className="bg-room bg-cover bg-center h-[560px] relative flex bg-opacity-50 justify-center items-center">
        <img
          className="absolute inset-0 object-cover h-full w-full"
          src={"/assets/images/hero-section.jpg"}
          alt=""
        />

        <div className="absolute w-full h-full bg-center bg-gray-900  bg-opacity-60  "></div>
        <h1 className="text-5xl text-white z-20 font-primary text-center leading-tight capitalize">
          {room.name} Details
        </h1>
      </div>

      {/*  Start Page  */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-20">
          {/* Left */}
          <div className="flex flex-col lg:w-[60%] px-6  ">
            <h3 className="h2">{room.name}</h3>
            <p className="mb-8">{room.description}</p>
            <img className="mb-8" src={room.image} alt="" />

            {/* Facilities */}
            <div className="mt-6 mb-5">
              <h3 className="h3 ">Room Facilities</h3>
              {/* show Facilities name and Facilities icon */}
              <div className="flex flex-row lg:mb-0 flex-wrap py-4  ">
                {room.facilities?.map((item, index) => {
                  return FacilitiesIcons.map((element) => {
                    if (item === element.name)
                      return (
                        <div className="text-4x1 w-48 flex flex-row p-2 ">
                          <span className="text-accent pe-3 pt-[0.27rem]">
                            {element.icon}
                          </span>
                          {element.name}
                        </div>
                      );
                  });
                })}
              </div>
            </div>
            <div>
              {/*  rules */}
              <div className="lg:mb-0 mb-16 ">
                <h3 className="h3">Hotel Rules</h3>
                <p className="mb-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  nulla itaque laboriosam
                </p>
                <ul className="flex flex-col gap-y-4 ">
                  <li className="flex items-center gap-x-4">
                    <FaCheck className="text-accent" />
                    Check-in- 3:00 PM - 9:00 PM
                  </li>

                  <li className="flex items-center gap-x-4">
                    <FaCheck className="text-accent" />
                    Check-out- 10:30 AM
                  </li>

                  <li className="flex items-center gap-x-4">
                    <FaCheck className="text-accent" />
                    No Pets
                  </li>
                  <li className="flex items-center gap-x-4">
                    <FaCheck className="text-accent" />
                    No Smoking
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="w-full h-full lg:w-[40%]">
            <div className="py-8 px-6 bg-accent/20 mb-12 rounded-xl h-auto ">
              <div className="flex flex-col space-y-4 mb-4 w-full">
                <h3 className="text-xl pb-2 font-primary tracking-[2px] text-stone-900">
                  Your Booking
                </h3>

                <BookForm
                  MarginProperty={"my-3"}
                  BookingRoom={onSubmitHandler}
                  errors={errors}
                  Disable={!user.token && true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
