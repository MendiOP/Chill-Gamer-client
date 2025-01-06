import React, { useEffect, useState } from "react";
import Fade from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import ReviewCard from "./ReviewCard";

const Allreviews = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState("default");
  const [sortOption, setSortOption] = useState("default");

  // Fetch reviews based on selected genre or all reviews if no genre selected
  useEffect(() => {
    setLoading(true);
    const genreQuery =
      selectedGenre !== "default" ? `?genre=${selectedGenre}` : "";
    fetch(
      `https://chill-gamer-server-omega-orcin.vercel.app/reviews${genreQuery}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setFilteredReviews(data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedGenre]);

  // Function to handle sorting
  const handleSort = (event) => {
    const value = event.target.value;
    setSortOption(value);
    const [field, order] = value.split("-");

    const sortedReviews = [...filteredReviews].sort((a, b) => {
      if (order === "asc") {
        return a[field] - b[field];
      } else {
        return b[field] - a[field];
      }
    });

    setFilteredReviews(sortedReviews);
  };

  // Show loading state if data is still being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Helmet>
          <meta charSet="utf-8" />
          <title>All Reviews | Chill Gamer</title>
        </Helmet>
        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        <p className="ml-4 text-lg font-semibold">Loading data...</p>
      </div>
    );
  }

  return (
    <Fade>
      <div className="mt-10 mb-10 space-y-10">
        <Helmet>
          <meta charSet="utf-8" />
          <title>All Reviews | Chill Gamer</title>
        </Helmet>
        <div className="flex flex-col md:flex-row justify-between gap-3">
          <h1 className="font-bold text-3xl md:text-4xl text-center">
            Popular Games You Can Play
          </h1>
          <div className="flex items-center flex-col md:flex-row justify-center gap-4">
            <div className="flex items-center">
              <label htmlFor="Filter" className="mr-2">
                Filter:
              </label>
              <select
                id="Filter"
                className="select select-bordered select-sm"
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                <option value="default">Genre</option>
                <option value="Action">Action</option>
                <option value="Adventure">Adventure</option>
                <option value="RPG">RPG</option>
                <option value="Strategy">Strategy</option>
                <option value="Simulation">Simulation</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="Sort" className="mr-2">
                Sort:
              </label>
              <select
                id="Sort"
                className="select select-bordered select-sm"
                value={sortOption}
                onChange={handleSort}
              >
                <option value="default">Default</option>
                <option value="publishingYear-asc">Year (Low &gt; High)</option>
                <option value="publishingYear-dsc">Year (High &gt; Low)</option>
                <option value="rating-asc">Rating (Low &gt; High)</option>
                <option value="rating-dsc">Rating (High &gt; Low)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Display message if there are no reviews, otherwise show reviews */}
        {reviews.length === 0 ? (
          <div className="flex flex-col items-center mt-16 justify-center border border-gray-300 rounded-lg p-6 bg-gray-50 max-w-md mx-auto shadow-md">
            <span className="text-4xl mb-3">😔</span>
            <p className="text-2xl font-bold text-gray-600 text-center">
              There are no games available for this genre
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-fit mx-auto">
            {filteredReviews.map((review) => (
              <ReviewCard
                key={review._id}
                id={review._id}
                genre={review.genre}
                year={review.publishingYear}
                rating={review.rating}
                image={review.gameCover}
                title={review.gameTitle}
                description={review.reviewDescription}
                reviewerEmail={review.userEmail}
                reviewerName={review.userName}
              />
            ))}
          </div>
        )}
      </div>
    </Fade>
  );
};

export default Allreviews;
