export const Review = () => {
  return (
    <>
      <section className="h-auto flex flex-col items-center w-full bg-slate-50-500  pb-24 bg-slate-100  ">
        <div className="py-8 text-center">
          <p className="text-accent text-lg  ">TESTIMONIAL</p>
          <p className="text-4xl font-normal font-primary ">Happy Guests</p>
        </div>

        <div className="container  flex lg:flex-row flex-col items-center justify-between  p-0 m-0">
          <div className="w-80  h-[24rem]  flex flex-col items-center bg-white rounded-3xl p-10  leading-7	">
            <img
              className="w-20 rounded-full bg-black  border-solid  border-2 border-x-accent"
              src={"/assets/images/reviews/person_1.jpg"}
            />
            <p className="text-center py-3">Jean Smith</p>
            <p className="text-center">
              “I like staying at Royal court hotel.The staff were very friendly
              and fulfill all of our requirements.”
            </p>
          </div>

          <div className="w-80 h-[24rem]  flex flex-col items-center bg-white rounded-3xl p-10  leading-7  lg:mx-20 lg:my-0 my-2">
            <img
              className="w-20 rounded-full border-solid  border-2 border-x-accent"
              src={"/assets/images/reviews/person_2.jpg"}
            />

            <p className="text-center py-3">Jean Smith</p>
            <p className=" text-center">
              “The breakfast was wonderful and exceptional, and the service of
              the staff was very excellent, as they met requests with generosity
              and openness.”
            </p>
          </div>

          <div className="w-80 h-[24rem]  flex flex-col items-center bg-white rounded-3xl p-10  leading-7">
            <img
              className="w-20 rounded-full bg-black border-solid  border-2 border-x-accent"
              src={"/assets/images/reviews/person_3.jpg"}
            />
            <p className="text-center py-3">John Doe</p>
            <p className="text-center">
              “Very wonderful staff, they provide assistance in services for
              reservations outside the hotel as well, and they care about the
              happiness of visitors.”
            </p>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
};
