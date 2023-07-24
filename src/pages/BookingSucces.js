import React from "react";
import { VscCheck } from "react-icons/vsc";
import Button from "../Components/Button";

export const BookingSucces = () => {
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
          Booking Room
        </h1>
      </div>
      <div className=" w-full h-[100vh] flex flex-col justify-center items-center">
        <div className="bg-gray-700 rounded-xl w-[27rem] h-80 flex flex-col items-center  justify-center text-xl p-5 font-secondary ">
          <div className="bg-green-500 rounded-full w-16 h-16 flex justify-center items-center ">
            <VscCheck className="text-4xl text-white font-bold" />
          </div>
          <div className="mt-5 text-center text-white">
            <p className="my-2">Awesome!</p>
            <p className="my-2">
              Your booking has been confirmed <br />
              Check your email for details
            </p>
          </div>
          <Button
            className="w-full bg-green-500 h-14 text-white mt-7 flex justify-center items-center"
            text="OK"
            link="/"
          />
        </div>
      </div>{" "}
    </section>
  );
};
