export const About = () => {
  return (
    <section className="lg:w-full  h-auto flex flex-col justify-center items-center my-10 m">
      <div className="container flex lg:flex-row flex-col justify-center  items-center  p-0 m-0 ">
        <img
          className="lg:h-[500px] sm:min-w-[50%] max-w-[90%] "
          src={"/assets/images/about/about-img.jpg"}
        />

        <div
          className="lg:h-[500px] sm:max-w-[90%] w-[90%] flex flex-col leading-loose lg:pl-16 
         border-solid border-x-[1.5px] border-b-[1.5px]  border-gray-200 p-2 sm:border-none sm:p-0"
        >
          <p className="text-accent text-lg mb-2 uppercase mt-4">About Us </p>
          <p className=" text-4xl font-semibold	  font-primary">
            {" "}
            Most Safe & Rated Hotel <br className="lg:block hidden" />
            In London.
          </p>

          <ul className="font-medium py-6">
            Book your room now and enjoy the best services and Features include:
            <li className=""> &#10004; Discounts and rewards.</li>
            <li className=""> &#10004; Offer multiple types of food.</li>
            <li className="">
              {" "}
              &#10004; Provide a comfortable environment free from noise
              disturbance.
            </li>
            <li className="">
              {" "}
              &#10004; Pay attention to the cleanliness of the place.
            </li>
            <li className="">
              {" "}
              &#10004; Contracting with a private company for the safety and
              security of the Hotel.{" "}
            </li>
          </ul>
          <button className=" h-12  w-44 text-white my-2 text-lg bg-accent">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};
