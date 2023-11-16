// Customer's rating data
const ratingData = [
    { restaurant: 'KFC', rating: 5 },
    { restaurant: 'Burger King', rating: 4 },
    { restaurant: 'KFC', rating: 3 },
    { restaurant: 'Domino', rating: 2 },
    { restaurant: 'Subway', rating: 3 },
    { restaurant: 'Domino', rating: 1 },
    { restaurant: 'Subway', rating: 4 },
    { restaurant: 'Pizza Hut', rating: 5 }
  ];
  
  // Calculate the average rating for all restaurants
  const calculateAverageRating = (data) => {
    const ratingMap = {};
    const countMap = {};
  
    data.forEach((entry) => {
      const { restaurant, rating } = entry;
  
      if (!ratingMap[restaurant]) {
        ratingMap[restaurant] = 0;
        countMap[restaurant] = 0;
      }
  
      ratingMap[restaurant] += rating;
      countMap[restaurant]++;
    });
  
    const result = Object.keys(ratingMap).map((restaurant) => ({
      restaurant,
      averageRating: ratingMap[restaurant] / countMap[restaurant]
    }));
  
    return result;
  };
  
  // List of all restaurants with average rating greater than or equal to 4
  const highRatedRestaurants = calculateAverageRating(ratingData).filter(
    (entry) => entry.averageRating >= 4
  );
  
  console.log("Expected Response for a:", calculateAverageRating(ratingData));
  console.log("Expected Response for b:", highRatedRestaurants);
  