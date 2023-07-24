import Room from "../Components/Room";

const Rooms = ({ room }) => {
  return (
    <>
      <section id="rooms" className="pt-24">
        <div className="container mx-auto lg:px-0">
          <div
            className="grid grid-cols-1 max-w-sm mx-auto gap-[30px]
          lg:grid-cols-3 lg:max-w-none lg:mx-0"
          >
            {room?.map((data) => {
              return <Room room={data} key={data.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
