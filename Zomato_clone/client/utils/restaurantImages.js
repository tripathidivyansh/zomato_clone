export const restaurantImages = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop"
];

export const getRandomRestaurantImage = () => {
  const randomIndex = Math.floor(Math.random() * restaurantImages.length);
  return restaurantImages[randomIndex];
}; 