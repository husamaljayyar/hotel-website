import React, { useState, useCallback, memo, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../datepicker.css";
import { BsCalendar } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

const BookForm = memo(
  ({ StyleLargeScreen, MarginProperty, BookingRoom, Disable, errors }) => {
    // Set Date
    const [startDate, setStartDate] = useState(false);
    const [endDate, setEndDate] = useState(false);

    // Set strat Date
    const set_startDate = (date) => new Date() < date;
    const set_endDate = (date) => startDate < date;

    // Adults Dropdown
    const [open, setOpen] = React.useState(false);

    const [adults, setAdults] = useState("1 Adults");
    const lis = [
      { name: "1 Adults" },
      { name: "2 Adults" },
      { name: "3 Adults" },
      { name: "4 Adults" },
    ];

    // Kids Dropdown
    const [active, setActive] = React.useState(false);
    const [kids, setKids] = useState("0 Kids");
    const kidsList = [
      { name: "0 Kids" },
      { name: "1 Kids" },
      { name: "2 Kids" },
      { name: "3 Kids" },
    ];

    const handleButton = (e) => {
      e.preventDefault();
      BookingRoom(startDate, endDate, adults, kids);
    };

    return (
      <section className="">
        <form
          className={`flex flex-col w-full h-full rounded-lg ${StyleLargeScreen}`}
        >
          <div className="flex-1 border-r ">
            <div className="relative flex items-center justify-end h-[60px]  ">
              <div className="absolute z-10 pr-8">
                <div className=" ">
                  <BsCalendar className="text-accent text-base" />
                </div>
              </div>
              <DatePicker
                className="w-full h-full  "
                placeholderText="Check in"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                filterDate={set_startDate}
              />
            </div>
          </div>

          <div className={`flex-1 border-r 4 ${MarginProperty}`}>
            <div className="relative flex items-center justify-end h-[60px]  ">
              <div className="absolute z-10 pr-8">
                <div className=" ">
                  <BsCalendar className="text-accent text-base" />
                </div>
              </div>
              <DatePicker
                className="w-full h-full  "
                placeholderText="Check in"
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                filterDate={set_endDate}
              />
            </div>
          </div>

          {/*    Adults Dropdown     */}
          <div className="flex-1 border-r">
            <div className="h-[60px] flex-1">
              <div
                className="bg-white w-full px-8 flex items-center justify-between  h-[60px]"
                onClick={() => memo(setOpen(!open))}
              >
                {adults ? adults : "1 Adults"}
                <BsChevronDown
                  size={15}
                  className={`${open && "rotate-180"}`}
                />
              </div>
              <ul
                className={`bg-white mt-2overflow-y-auto ${
                  open ? " max-h-60 " : " max-h-0"
                }`}
              >
                {lis.map((item) => {
                  return (
                    <li
                      key={item.name}
                      className={`py-2 px-8 text-sm hover:bg-slate-300 hover:text-black text-white bg-slate-800 relative z-10 
                           ${open ? "block" : "hidden"}`}
                      onClick={() => memo(setAdults(item.name), setOpen(false))}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/*    Kids Dropdown     */}
          <div className={`flex-1 border-r   ${MarginProperty}`}>
            <div className="h-[60px] flex-1 ">
              <div
                className="bg-white w-full px-8 flex items-center justify-between  h-[60px]"
                onClick={() => memo(setActive(!active))}
              >
                {kids ? kids : "0 kids"}
                <BsChevronDown
                  size={15}
                  className={`${active && "rotate-180"}`}
                />
              </div>
              <ul
                className={`bg-white mt-2overflow-y-auto ${
                  active ? "max-h-60" : "max-h-0"
                }`}
              >
                {kidsList.map((item) => {
                  return (
                    <li
                      key={item.name}
                      className={`py-2 px-8 text-sm hover:bg-slate-300 hover:text-black text-white bg-slate-800 relative z-10 
                           ${active ? "block" : "hidden"}`}
                      onClick={() => memo(setKids(item.name), setActive(false))}
                    >
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <button
            className={`${
              Disable ? " bg-accent opacity-50 " : "bg-accent"
            } btn  min-h-[60px]`}
            onClick={handleButton}
            disabled={Disable}
          >
            Ckeck now
          </button>

          <p className="text-red-600 capitalize text-center pt-3">
            {Disable ? "User not found, please login and try again" : errors}
          </p>
        </form>
      </section>
    );
  }
);

export default BookForm;
