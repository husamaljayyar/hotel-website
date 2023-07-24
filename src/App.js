import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { BookingSucces } from "./pages/BookingSucces";
import { PageNotFound } from "./pages/PageNotFound";
import { LoadingPage } from "./Components/LoadingPage";

const HomePage = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const RoomDetails = lazy(() => import("./pages/RoomDetails"));
const Register = lazy(() => import("./pages/Register"));
const Reservation = lazy(() => import("./pages/Reservation"));

const App = () => {
  const [header, setHeader] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });

  return (
    <>
      <Header header={header} />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<LoadingPage />}>
              <HomePage header={header} />
            </Suspense>
          }
        />

        <Route
          path="/room/:id"
          element={
            <Suspense fallback={<LoadingPage />}>
              <RoomDetails />
            </Suspense>
          }
        />

        <Route
          path="/booking/contact-info/:id"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Reservation />
            </Suspense>
          }
        />

        <Route
          path="/booking/payment-now/:id"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Reservation />
            </Suspense>
          }
        />

        <Route
          path="/login"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Login />
            </Suspense>
          }
        />

        <Route
          path="/register"
          element={
            <Suspense fallback={<LoadingPage />}>
              <Register />
            </Suspense>
          }
        />

        <Route
          path="/room/booking/payment-now/booking-succes"
          element={<BookingSucces />}
        />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
