import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";

export default function ResturantCard({
    id, 
    title,
    imgUrl,
    rating,
    type,
    address, 
    description,
    dishes,
    reviews,
    lng,
    lat
}) {
  const navigation = useNavigation();
  
  // Generate random reviews count if not provided
  const reviewCount = reviews || Math.floor(Math.random() * 500) + 50;
  
  return (
    <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate('Resturant', {
        id, 
        title,
        imgUrl,
        rating,
        type,
        address, 
        description,
        dishes,
        lng,
        reviews: reviewCount,
        lat
      })
    }}>
      <View style={{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}} className="mr-6 bg-white rounded-3xl shadow-lg">
          <Image  
            className="h-36 w-64 rounded-t-3xl" 
            source={{ uri: imgUrl || 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop'}} 
          />
        
        <View className="px-3 pb-4 space-y-2">
         
          <Text className="text-lg font-bold pt-2">{title}</Text>
          <View className="flex-row items-center space-x-1">
              <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
              <Text className="text-xs">
                  <Text className="text-green-700">{rating}</Text>
                  <Text className="text-gray-700"> ({reviewCount} reviews)</Text> · <Text className="font-semibold text-gray-700">{type}</Text>
              </Text>
          </View>
          <View className="flex-row items-center space-x-1">
              <Icon.MapPin color="gray" width={15} height={15} />
              <Text className="text-gray-700 text-xs"> Nearby · {address}</Text>
          </View>
          {dishes && dishes.length > 0 && (
            <View className="flex-row items-center space-x-1">
              <Text className="text-gray-600 text-xs">
                {dishes.length} dishes available
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

