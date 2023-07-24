import Rooms from "../Components/Rooms";
import BookForm from "../Components/BookForm";
import HeroSlider from "../Components/HeroSlider";
import { About } from "../Components/About";
import { Review } from "../Components/Review";
import { Header } from "../Components/Header";
import { Restaurant } from "../Components/Restaurant";
import { useDispatch, useSelector } from "react-redux";
import React, { useCallback, useEffect, useState } from "react";
import { getRooms } from "../Redux/Guest/guestActions";

const Home = ({ header }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRooms());
  }, [dispatch]);

  let rooms = useSelector((state) => state.guest.rooms);

  const [searchRooms, setSearchRooms] = useState();

  // Search the right room
  const onSubmitHandler = (startDate, endDate, adults, kids) => {
    const values = {
      adults: adults,
      kids: kids,
    };

    let Adults = values.adults.split(" ");
    Adults = adults[0];

    let Kids = values.kids.split(" ");
    Kids = kids[0];

    const result = rooms.filter((item) => {
      return parseInt(Adults) + parseInt(Kids) === item.maxPerson;
    });
    setSearchRooms(result);
  };

  return (
    <>
      <Header header={header} />
      <HeroSlider />

      <div className="container mx-auto relative ">
        <div
          className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute  
         lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12"
        >
          <BookForm
            StyleLargeScreen={"lg:flex-row"}
            BookingRoom={onSubmitHandler}
          />
        </div>
      </div>

      <Rooms room={searchRooms ? searchRooms : rooms} />
      <Restaurant />
      <About />
      <Review />
    </>
  );
};

export default Home;
