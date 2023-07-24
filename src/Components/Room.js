import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";
import { Link } from "react-router-dom";

const Room = ({ room }) => {
  return (
    <div className="bg-white shadow-2xl min-h-[400px] group text-center ">
      <div className="overflow-hidden">
        <img
          className="group-hover:scale-110 transition-all duration-300 w-full "
          src={room.image}
          alt=""
        />
      </div>

      {/*  name & description */}
      <div className="text-center">
        <h3 className="text-2xl pt-6">{room.name}</h3>
        <p className="max-w-[300px] max-auto mb-3  lg:mb-6"></p>
      </div>

      <div className="w-full flex justify-between  px-6 ">
        {/* size */}
        <div className="flex items-center gap-x-2">
          <div className="text-accent">
            <BsArrowsFullscreen className="text-[20px]" />
          </div>
          <div className="flex gap-x-1 text-lg">
            <div>size</div>
            <div>{room.size}m2</div>
          </div>
        </div>

        {/* room capacity */}
        <div className="flex items-center gap-x-2">
          <div className="text-accent">
            <BsPeople className="text-[22px]" />
          </div>
          <div className="flex gap-x-1 text-lg ">
            <div>size</div>
            <div>{room.maxPerson}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between w-full px-6 pb-6 pt-4">
        <p className="text-accent pt-2 font-medium">$450 / NIGHT</p>

        <Link
          to={`/room/${room.id}`}
          className="btn bg-white text-black border-2 border-slate-300  h-11 max-w-[150px] "
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default Room;
