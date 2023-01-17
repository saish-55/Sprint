import { View, Text, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'

const UserDashBoard = () => {
  return (
    <SafeAreaView className="relative flex-1 bg-black ">
       <View className=" mt-3 justify-center py-6 px-4 bg-gray-800  rounded-3xl ">
            <Image
                source={require('../assets/Sprint.png')}
                className=" w-32 h-10 "
              />
          </View>
          <View className=" h-44 mt-2 w-full ">       
          <AnimatedLottieView source={require('../assets/select2.json')} autoPlay loop />
          </View>
        <ScrollView className="absolute bg-slate-800 w-full inset-x-0 rounded-t-3xl h-4/6 bottom-0">
            <View>
               
            </View>
        </ScrollView>
        <View className=" absolute inset-x-0 bottom-0 items-center">
        <View className=" h-12 mb-10 bg-[#14A9FF] w-10/12 rounded-3xl  ">

            
        </View>
        </View>
    </SafeAreaView>
  )
}

export default UserDashBoard