import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import * as Animatable from 'react-native-animatable';
import Ionicons from "@expo/vector-icons/Ionicons"

// add maap address in sanity call here // aminities issue // venue rules next popup page // courts entry
const Venue = () => {
    const { params: {
        id,
        name,
        location,
        address,
        km,
        ratings,
        short_description,
        image,
        long,
        lat,
        locationbreif,
        amenity,
        rule
    },} = useRoute();

  return (
    <ScrollView className="bg-gray-800" >
    
      <Image
       source={{
        uri: urlFor(image).url(),
       }}
       className ="w-full h-56"
      />
      <View className="bg-gray-800 -mt-5 h-full rounded-t-3xl ">
        
      <View className="flex-row mt-4 mx-2 fixed bg-gray-700 rounded-3xl h-16 items-center">
                <Animatable.Text  animation="fadeIn" easing={'ease-in-out'} delay={120} className="text-white font-bold text-3xl ml-4">{name}</Animatable.Text>
                <Animatable.Text  animation="fadeIn" easing={'ease-in-out'} delay={160} className="text-gray-300 mr-4 font-semibold italic text-xs absolute inset-y-0 right-4 mt-6">{ratings}</Animatable.Text>
                <Animatable.View animation="fadeIn" easing={'ease-in-out'} delay={200} className="absolute inset-y-0 mr-4 right-0 mt-6">
                <Ionicons size={13} color={"#54B435"} name="star"></Ionicons>
                </Animatable.View>
      </View>
      <View className="mx-2 bg-gray-900 rounded-3xl h-20 mt-5">
      <Text className=" ml-4 mt-2 text-base text-gray-200 font-semibold">Location</Text>
      <View className=" flex-row items-center">
      <Text className="w-40 mt-1 mx-5 italic text-gray-400 text-xs ">{locationbreif}</Text>

        <TouchableOpacity className="absolute inset-y-0 right-0 -mt-2 mr-4 flex-row space-x-1 items-center border w-16 h-8 justify-center rounded-xl border-[#00fff7a0] ">
        <Text className="text-gray-300 text-xs">Maps</Text>
        <Ionicons size={15} color={"#00FFF6"} name="locate-outline"></Ionicons>
        </TouchableOpacity>
      </View>
      </View>

      <View className="mx-2 bg-gray-900 rounded-3xl h-20 mt-3 ">
      <Text className=" ml-4 mt-2 text-base text-gray-200 font-semibold">Amenities</Text>
          <Text className=" mt-1 mx-5 italic text-gray-400 text-xs">{amenity}</Text>
      </View>

      <View className="mx-2 bg-gray-900 rounded-3xl h-16 mt-3 ">
      <Text className=" ml-4 mt-2 text-base text-gray-200 font-semibold">Venue Rules</Text>
        <View className="absolute mt-6 mr-6 right-0">
          <Ionicons size={18} color={"#00FFF6"} name="chevron-forward-outline"></Ionicons>
          </View>
        <Text className=" mt-1 mx-5 italic text-gray-400 text-xs">{rule}</Text>
      </View>

      <View className="mx-2 bg-gray-900 rounded-3xl h-96 mt-3 "></View>
      <View className="mx-2 bg-gray-900 rounded-3xl h-96 mt-3 "></View>
      <View className="mx-2 bg-gray-900 rounded-3xl h-96 mt-3 "></View>


      </View>
     




      

    
    </ScrollView>
  )
}

export default Venue