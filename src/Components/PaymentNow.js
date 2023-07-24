import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { getBooking } from "../Redux/Booking/BookingSlice";
import { payForBooking } from "../Redux/Booking/BookingAction";
import { useNavigate } from "react-router-dom";

export const PaymentNow = () => {
  const navigate = useNavigate();

  let Id = useParams();
  Id = Id.id;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooking());
  }, []);

  let {
    booking,
    booking: { startDate, endDate },
  } = useSelector((state) => state.booking);

  // Calculating the difference of days between two dates
  let StartDate = startDate;
  let EndDate = endDate;

  StartDate = new Date(StartDate);
  EndDate = new Date(EndDate);

  const days =  (StartDate, EndDate) => {
    let difference = StartDate.getTime() - EndDate.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  }

  // Calculate the total price
  let totalPrice = useSelector((state) => state.booking.booking.room?.price);
  totalPrice = totalPrice * days(StartDate, EndDate) * -1;

  return (
    <>
      <div className="flex flex-col border-spacing-5 shadow-2xl w-full p-8  bg-white rounded-e-md mb-16 mt-2">
        <div className="flex md:flex-row flex-col justify-around  my-4 border-l-yellow-700  ">
          <div className="lg:w-[40%] text-lg font-normal  p-5 leading-[3rem]  text-gray-600 rounded-lg ">
            <p className="text-3xl text-start  py-0 text-black ">Payment Now</p>

            <p className="mt-7">
              &#10004; A room that can accommodate 2 people.
            </p>
            <p>&#10004; Not equipped for children.</p>
            <p>&#10004; Price: $225</p>
            <p>&#10004; special requests: Nothing</p>
            <p>
              &#10004; You can cancel the reservation and get a refund within 24
              hours by going to the hotel branch.
            </p>
          </div>

          <section className="lg:w-[40%] rounded-3 px-8 pt-4 leading-relaxed  mt-lg-0 mt-2 bg-gray-100 text-black rounded-lg ">
            <p className="text-xl mx-5 my-4 font-semibold">
              Choose Your Payment Option
            </p>
            <p className="text-xl   mx-5 my-4 font-extralight">
              {" "}
              Once payment is confirmed, you have confirmed your reservation
            </p>
            <p className="text-xl mx-5 font-normal">
              {" "}
              Total Price: ${totalPrice}
            </p>
            <div className="pt-10 font-extralight">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "ATx8Na-9swFrVwvoIGlZWfw7-CJoXi4QaatMLp7pMMv0y8fEu49zwf6AYBnmdNLxS3G7i2gAhx5g4l0K",
                }}
              >
                <PayPalButtons
                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          description: "test",
                          amount: {
                            value: totalPrice,
                          },
                        },
                      ],
                    });
                  }}
                  onApprove={function (data, actions) {
                    return actions.order.capture().then(function (details) {
                      dispatch(
                        payForBooking({ Id, details, booking, navigate })
                      );
                    });
                  }}
                  onError={(err) => {
                    console.error("PayPal Checkout Error", err);
                  }}
                />
              </PayPalScriptProvider>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
