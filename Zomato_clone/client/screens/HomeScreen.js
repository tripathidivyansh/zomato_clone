import { View, Text, SafeAreaView, StatusBar, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/categories';
import FeatureRow from '../components/featuredRow';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import * as Location from 'expo-location';
import { getNearbyRestaurants, geocodeCity } from '../utils/places';
import { generateDummyMenu } from '../utils/dummyMenu';
import { getRandomRestaurantImage } from '../utils/restaurantImages';

export default function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [locationLabel, setLocationLabel] = useState('Loading...');
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  // Function to search dishes in restaurants and filter by location
  const searchDishes = (query) => {
    if (!query.trim()) {
      setFilteredRestaurants(restaurants);
      return;
    }
    const filtered = restaurants.filter(restaurant => {
      return restaurant.dishes.some(dish =>
        dish.name.toLowerCase().includes(query.toLowerCase()) ||
        dish.description.toLowerCase().includes(query.toLowerCase()) ||
        dish.cuisine.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredRestaurants(filtered);
  };

  // Function to change location
  const changeLocation = () => {
    Alert.prompt(
      "Change Location",
      "Enter city name (e.g., Noida, Delhi, Mumbai):",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Change",
          onPress: async (newLocation) => {
            if (newLocation && newLocation.trim()) {
              setLocationLabel(newLocation.trim());
              // Geocode city to get lat/lng
              const coords = await geocodeCity(newLocation.trim());
              if (coords) {
                // Fetch restaurants for new city
                const places = await getNearbyRestaurants(coords.lat, coords.lng);
                const enriched = places.map((place) => ({
                  id: place.place_id,
                  title: place.name,
                  address: place.vicinity,
                  imgUrl: place.photos?.[0]?.photo_reference
                    ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos[0].photo_reference}&key=AIzaSyDy74D-fN0v1lKTZoM_Z-fb8eYh8b6uN8o`
                    : getRandomRestaurantImage(),
                  rating: place.rating || 4,
                  type: "Nearby",
                  lat: place.geometry.location.lat,
                  lng: place.geometry.location.lng,
                  dishes: generateDummyMenu(),
                }));
                setRestaurants(enriched);
                setFilteredRestaurants(enriched);
              }
            }
          }
        }
      ],
      "plain-text"
    );
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setLocationLabel('Permission Denied');
        return;
      }

      const sub = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 10000,
          distanceInterval: 50
        },
        async (loc) => {
          const coords = loc.coords;
          setCurrentLocation(coords);
          
          const address = await Location.reverseGeocodeAsync(coords);
          if (address.length > 0) {
            const a = address[0];
            setLocationLabel(`${a.city}, ${a.region}`);
            // Fetch restaurants for detected city
            const cityCoords = await geocodeCity(a.city);
            if (cityCoords) {
              const places = await getNearbyRestaurants(cityCoords.lat, cityCoords.lng);
              const enriched = places.map((place) => ({
                id: place.place_id,
                title: place.name,
                address: place.vicinity,
                imgUrl: place.photos?.[0]?.photo_reference
                  ? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos[0].photo_reference}&key=AIzaSyDy74D-fN0v1lKTZoM_Z-fb8eYh8b6uN8o`
                  : getRandomRestaurantImage(),
                rating: place.rating || 4,
                type: "Nearby",
                lat: place.geometry.location.lat,
                lng: place.geometry.location.lng,
                dishes: generateDummyMenu(),
              }));
              setRestaurants(enriched);
              setFilteredRestaurants(enriched);
            }
          }
        }
      );

      return () => sub?.remove();
    })();
  }, []);

  // Update filtered restaurants when search query or selectedLocation changes
  useEffect(() => {
    searchDishes(searchQuery);
  }, [searchQuery, restaurants]);

  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      {/* search bar */}
      <View className="flex-row items-center space-x-2 px-4 pb-2 mt-3">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height="25" width="25" stroke="gray" />
          <TextInput 
            placeholder='Search dishes, restaurants...' 
            className="ml-2 flex-1" 
            keyboardType='default'
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity 
            onPress={changeLocation}
            className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300"
          >
            <Icon.MapPin height="20" width="20" stroke="gray" />
            <Text className="text-gray-600">{locationLabel}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ backgroundColor: themeColors.bgColor(1) }} className="p-3 rounded-full">
          <Icon.Sliders height={20} width={20} strokeWidth="2.5" stroke="white" />
        </View>
      </View>

      {/* main */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }}>
        <Categories />
        <View className="mt-5">
          <Text className="text-xl font-bold px-4">
            {searchQuery ? `Search Results for "${searchQuery}"` : "Nearby Restaurants"}
          </Text>
          {filteredRestaurants.length === 0 && searchQuery ? (
            <Text className="text-gray-500 px-4 mt-2">No restaurants found with that dish.</Text>
          ) : (
            filteredRestaurants.map((res) => (
              <FeatureRow
                key={res.id}
                id={res.id}
                title={res.title}
                resturants={[res]}
                description={res.description}
                featuredCategory="Nearby"
              />
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
