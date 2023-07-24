export const Restaurant = () => {
  return (
    <div
      id="restaurant"
      className="bg-slate-100 flex flex-col items-center justify-center pt-7  pb-16 mt-10"
    >
      <p className="text-accent text-lg  ">RESTO & BAR</p>
      <p className="text-4xl font-light  font-primary">Restaurant & Bar</p>

      <div className="container w-full flex flex-row sm:justify-between   justify-center  flex-wrap  p-0 m-0 mt-10 cursor-pointer	">
        <div
          className="hover:bg-white hover:text-black lg:w-[33%] w-11/12  sm:w-[49.7%] h-24 flex flex-row 
        items-center p-5 mt-1 bg-accent text-white cursor-pointer	"
        >
          <img
            className="w-14 h-14 rounded-full"
            src="/assets/images/lunch/CheesePizza.jpg"
            alt=""
          />
          <p className="text-xl p-6 font-light">Classic Cheese Pizza</p>
        </div>

        <div
          className="bg-white text-black lg:w-[33%]  sm:w-[49.7%] w-11/12 h-24  flex flex-row items-center p-5 mt-1 
         cursor-pointer"
        >
          <img
            className="w-14 h-14 rounded-full"
            src="/assets/images/lunch/ShishTawook-meal.jpg"
            alt=""
          />
          <p className="text-xl p-6 font-light">Shish Tawook meal</p>
        </div>

        <div
          className="hover:bg-white hover:text-black lg:w-[33%]  sm:w-[49.7%] w-11/12 h-24 flex flex-row items-center 
        p-5 mt-1  bg-accent text-white cursor-pointer	cursor-pointer	"
        >
          <img
            className="w-14 h-14 rounded-full"
            src="/assets/images/lunch/Pizza-meal.jpg"
            alt=""
          />
          <p className="text-xl p-6 font-light">Vegetable pizza meal</p>
        </div>

        <div
          className="hover:bg-white hover:text-black lg:w-[33%]  sm:w-[49.7%] w-11/12 h-24 flex flex-row items-center 
        p-5 mt-1  bg-accent  text-white cursor-pointer	cursor-pointer	"
        >
          <img
            className="w-14 h-14 rounded-full"
            src="/assets/images/lunch/Burger-meal.jpg"
            alt=""
          />
          <p className="text-xl p-6 font-light">Burger meal</p>
        </div>

        <div
          className="bg-white text-black lg:w-[33%] sm:w-[49.7%] w-11/12 h-24  flex flex-row items-center 
        p-5 mt-1 cursor-pointer	 "
        >
          <img
            className="w-14 h-14 rounded-full"
            src="/assets/images/lunch/Best-KFC-fried-chicken.jpg"
            alt=""
          />
          <p className="text-xl p-6 font-light">KFC Fried Chicken meal</p>
        </div>

        <div
          className="hover:bg-white hover:text-black lg:w-[33%]  sm:w-[49.7%] w-11/12 h-24 flex 
        flex-row items-center p-5 mt-1  bg-accent  text-white cursor-pointer"
        >
          <img
            className="w-14 h-14 rounded-full"
            src="/assets/images/lunch/Grilled-fish-meal.jpg"
            alt=""
          />
          <p className="text-xl p-6 font-light">Grilled fish meal</p>
        </div>

        <div
          className="hover:bg-white hover:text-black lg:w-[33%] sm:w-[49.7%] w-11/12 h-24 
         flex flex-row items-center p-5 mt-1 bg-accent text-white cursor-pointer"
        >
          <img
            className="w-14 h-14 rounded-full"
            src="/assets/images/lunch/Grilled-fish-meal.jpg"
            alt=""
          />
          <p className="text-xl p-6 font-light">Shawarma with cheese meal</p>
        </div>

        <div
          className="bg-white text-black lg:w-[33%]  sm:w-[49.7%] w-11/12 h-24  flex flex-row items-center 
        p-5 mt-1 cursor-pointer"
        >
          <img
            className="w-14 h-14 rounded-full"
            src="/assets/images/lunch/Chicken-shawarma-meal.jpg"
            alt=""
          />
          <p className="text-xl p-6 font-light">Chicken shawarma meal</p>
        </div>

        <div
          className="hover:bg-white hover:text-black lg:w-[33%]  sm:w-[49.7%] w-11/12 h-24 flex 
        flex-row items-center p-5 mt-1  bg-accent text-white cursor-pointer	"
        >
          <img
            className="w-14 h-14 rounded-full"
            src="/assets/images/lunch/Chicken-meal-with-rice.jpg"
            alt=""
          />
          <p className="text-xl p-6 font-light">Chicken meal with rice</p>
        </div>
      </div>
    </div>
  );
};
