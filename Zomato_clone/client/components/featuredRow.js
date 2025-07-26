import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import ResturantCard from './resturantCard'
import { getFeaturedResturantById } from '../api'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme'

export default function FeatureRow({id, title, description, resturants}) {

  useEffect(() => {
    // getFeaturedResturantById(id).then(data=>{
    //   setResturants(data?.resturants);
    // })
  }, [id])
  
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">
            {description || `${resturants?.length || 0} restaurants available`}
          </Text>
        </View>
        
        <TouchableOpacity>
          <Text style={{color: themeColors.text}} className="font-semibold">See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal:15,
        }}
        className="overflow-visible py-5"
       >
        {
          resturants?.map((resturant, index) => {
            return (
                <ResturantCard
                  key={resturant.id || resturant._id || index}
                  id={resturant.id || resturant._id}
                  imgUrl={resturant.imgUrl || resturant.image}
                  title={resturant.title || resturant.name}
                  rating={resturant.rating}
                  type={resturant.type?.name || resturant.type}
                  address={resturant.address || "123 main street"}
                  description={resturant.description}
                  dishes={resturant.dishes}
                  lng={resturant.lng}
                  lat={resturant.lat}
                  reviews={resturant.reviews}
              />    
            )
          })
        }           
       </ScrollView>
    
    </View>
  )
}