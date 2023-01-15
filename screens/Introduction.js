import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';


const Introduction = () => {

  const navigation = useNavigation();
  return (
  
    <SafeAreaView className="flex-col relative bg-gray-300 h-full">
      <ScrollView>
        
        <View className=" justify-center items-center p-2 bg-white rounded-b-3xl ">
            <Image
                source={require('../assets/Sprint.png')}
                className=" w-44 h-16 "
              />
          </View>
            
          <View className=" h-96 w-full ">       
          <Lottie source={require('../assets/intro.json.json')} autoPlay loop />
          </View>

          <View className="bg-white rounded-3xl">
          <Text className=" text-black font-bold italic text-2xl px-12 py-4 mt-2" >Welcome to Sprint</Text>
        <Text className="text-gray-400  top-2 px-16 py-2 italic">
                        Easy to book nearby Venues.
        </Text>
        <Text className="text-gray-400 w-full px-16 py-2 mt-2 italic">
                        Play favorite sports with new friends.
        </Text>
        <Text className="text-gray-400 px-16 py-2 italic">
                        Join new Sport Communities
        </Text>
        <Text className="text-gray-400 px-16 py-2 italic">
                        Register your Venue
        </Text>
        <View className="items-center m-2 inset-x-0 bottom-0 ">
        <TouchableOpacity
                  onPress={() =>
                  navigation.navigate('login')}

                  className="bg-[#14A9FF] relative p-3 w-80 rounded-lg  flex-row mb-6 mt-5">

                    <Text className="font-bold text-lg italic text-center text-white">
                        Let's Begin
                    </Text>
                    <View className="absolute inset-y-0 right-0 justify-center mr-5" >

                    <ChevronRightIcon size={23} color={"#FFFFFF"}/>
                    </View>
            </TouchableOpacity>         
            </View>

          </View>
        
      </ScrollView>
    </SafeAreaView>
    
  )
}

export default Introduction