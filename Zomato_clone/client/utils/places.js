const GOOGLE_PLACES_API_KEY = "AIzaSyDy74D-fN0v1lKTZoM_Z-fb8eYh8b6uN8o";

export const getNearbyRestaurants = async (lat, lng) => {
  const radius = 5000; // 5km

  const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=restaurant&key=${GOOGLE_PLACES_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching places:", err);
    return [];
  }
};

export const geocodeCity = async (cityName) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(cityName)}&key=${GOOGLE_PLACES_API_KEY}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.results && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng };
    }
    return null;
  } catch (err) {
    console.error("Error geocoding city:", err);
    return null;
  }
};
