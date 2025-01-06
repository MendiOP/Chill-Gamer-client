import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/ErrorPage/Error";
import HighestRated from "../Components/HighestRatedSection/HighestRated";
import Home from "../Components/Home/Home";
import ReviewDetails from "../Components/ReviewDetails/ReviewDetails";
import Update from "../Update/Update";
import Addreview from "./../Components/AddReview/Addreview";
import Allreviews from "./../Components/Allreviews/Allreviews";
import GameWatchlist from "./../Components/GameWatchlist/GameWatchlist";
import Login from "./../Components/Login/Login";
import MyReviews from "./../Components/MyReviews/MyReviews";
import PrivateRoute from "./../Components/PrivateRoute/PrivateRoute";
import Register from "./../Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/allreviews",
        element: <Allreviews></Allreviews>,
      },
      {
        path: "/addreview",
        element: (
          <PrivateRoute>
            <Addreview></Addreview>
          </PrivateRoute>
        ),
      },
      {
        path: "/reviews/:id",
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-omega-orcin.vercel.app/reviews/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <ReviewDetails></ReviewDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateReview/:id",
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-omega-orcin.vercel.app/updateReview/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/myWatchlist",
        element: (
          <PrivateRoute>
            <GameWatchlist></GameWatchlist>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/highestrated",
        element: <HighestRated></HighestRated>,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
