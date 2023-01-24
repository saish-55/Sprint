import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import Ionicons from "@expo/vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native';

const SportsCard = ({id,name,location,address,km,ratings,short_description,image,long,lat, locationbreif,amenity,rule}) => {
    const navigation = useNavigation();
    return (
        
        <TouchableOpacity
        onPress={() =>
            navigation.navigate('venue', {
                id,name,location,address,km,ratings,short_description,image,long,lat, locationbreif,amenity,rule
            })}
        className="mt-5 mx-4 h-72 rounded-3xl border border-gray-400 bg-[#181818]">
            <View className="my-2 mx-5 relative">
                <View className="flex-row">
                <Animatable.Text  animation="fadeIn" easing={'ease-in-out'} delay={400} className="text-white font-bold  text-2xl">{name}</Animatable.Text>
                <Text className="text-gray-300 font-semibold italic text-xs absolute inset-y-0 right-4 mt-2">{ratings}</Text>
                <View className="absolute inset-y-0 right-0 mt-2">
                <Ionicons size={13} color={"#54B435"} name="star"></Ionicons>
                </View>
                </View>
                <View className="flex-row ">
                    <Animatable.Text animation="fadeIn" easing={'ease-in-out'} delay={500} className="text-gray-300  italic text-xs ">{location} </Animatable.Text>
                    <Animatable.Text animation="fadeIn" easing={'ease-in-out'} delay={550} className="text-gray-300  italic text-xs">{address}</Animatable.Text>
                </View>
                <Animatable.Text animation="fadeIn" easing={'ease-in-out'} delay={600} className="text-gray-400  italic text-xs">{km} km</Animatable.Text>
                <Animatable.View animation="fadeIn" easing={'ease-in-out'} delay={700} className="items-center">
                <Image
                source={{
                    uri: image
                }}
                className="h-40 mt-3 w-80 rounded-xl"
                />
                </Animatable.View>
                <Animatable.Text animation="fadeIn" easing={'ease-in-out'} delay={800} className="text-gray-300 mt-3 italic text-xs">{short_description}</Animatable.Text>
            </View>
        </TouchableOpacity>
    )
}

export default SportsCard