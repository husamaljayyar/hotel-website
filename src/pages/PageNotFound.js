export const PageNotFound = () => {
  return (
    <>
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
            Page Not Found
          </h1>
        </div>

        <div className="w-full h-[100vh]  flex flex-col items-center justify-center ">
          <div className="bg-white pb-14 flex flex-col items-center">
            <img
              className="w-[35rem] rounded-lg"
              src={"/assets/images/page-not-found/page-not-found.jpg"}
              alt="Page Not Found"
            />
          </div>
        </div>
      </section>
    </>
  );
};
