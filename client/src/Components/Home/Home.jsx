import React from "react";
import Helmet from "react-helmet";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Comparison from "../GameComparison/Comparison";
import Header from "../Header/Header";
import HighestRated from "../HighestRatedSection/HighestRated";
import News from "../News/News";
import Slider from "../Slider/Slider";

const Home = () => {
  const location = useLocation();

  let isHomePath = location.pathname === "/";

  return (
    <div className="md:w-full font-general">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Chill Gamer</title>
      </Helmet>
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800">
        <Header />
      </header>
      <main className="lg:w-2/3 lg:mx-auto">
        {isHomePath && (
          <>
            <Slider></Slider>
            <hr className="mt-12" />
            <Comparison></Comparison>
            <hr className="mt-12 mb-12" />
            <HighestRated></HighestRated>
            <hr className="mt-12 mb-12" />
            <News />
            <hr className="mt-12 mb-12" />
          </>
        )}
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Home;
