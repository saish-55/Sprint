import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import Ionicons from "@expo/vector-icons/Ionicons"


const Rules = () => {
  return (
    <SafeAreaView className="bg-gray-800">

      <View className="items-center h-28">
      <View className="items-center bg-gray-900 h-20 w-96 rounded-3xl mt-4">
      <View className="absolute mt-7 ml-6 left-0">
          <Ionicons size={18} color={"#00FFF6"} name="chevron-back"></Ionicons>
          </View>
      <Text className="text-white font-bold text-2xl mt-6">Venue Rules</Text>
      <View className="absolute mt-7 h-6 w-6 mr-8 right-0">
        <LottieView source={require('../assets/examples/tasks.json')} autoPlay loop />
          </View>
      </View>
      </View>

    
      <ScrollView>
        <View className="items-center pb-32">
      <View className="mx-2 bg-gray-900 w-96 rounded-3xl h-56 mt-2 ">
      <View className="mx-3 mt-3 bg-gray-700 rounded-3xl w-20">
        <Text className="text-white font-semibold text-lg my-1 ml-4">Rules</Text>
        </View>
        <Text className="italic text-gray-400 text-xs mt-6 ml-6 mr-4">Sprint offers slots allotted by the venue and accepts no liability for facility usage that surpasses government guidelines.</Text>
        <Text className="italic text-gray-400 text-xs mt-4 ml-6 mr-4">Sprint is not liable, either directly or indirectly, for any loss, damage, or harm to property or person resulting from the facility's services.
        </Text>
        <Text className="italic text-gray-400 text-xs mt-4 ml-6 mr-4">No Smoking,

No Drinking.</Text>
      </View>

      <View className="mx-2 bg-gray-900 w-96 rounded-3xl h-56 mt-3 ">
      <View className="mx-3 mt-3 bg-gray-700 rounded-3xl w-48">
        <Text className="text-white font-semibold text-lg my-1 ml-4">Cancellation Policy</Text>
        </View>
        <Text className="italic text-gray-400 text-xs mt-6 ml-6 mr-4">100% Refundable if cancellation is made more than two days prior to the commencement of the slot.
</Text>
        <Text className="italic text-gray-400 text-xs mt-4 ml-6 mr-4">If a cancellation is made less than 24 hours prior to the commencement of the slot, there will be no refund.

        </Text>
        <Text className="italic text-gray-400 text-xs mt-4 ml-6 mr-4">If you cancel less than two days before your slot's start time, you'll receive a 50% refund.</Text>
      </View>

      <View className="mx-2 bg-gray-900 w-96 rounded-3xl h-60 mt-3 ">
      <View className="mx-3 mt-3 bg-gray-700 rounded-3xl w-72 items-center">
        <Text className="text-white font-semibold text-lg my-1 ">Additional Terms & Conditions</Text>
        </View>
        <Text className="italic text-gray-400 text-xs mt-6 ml-6 mr-4">Wearing football studs when playing at the facility is advised but not required.
</Text>
        <Text className="italic text-gray-400 text-xs mt-4 ml-6 mr-4">Metal studs are not permitted.

        </Text>
        <Text className="italic text-gray-400 text-xs mt-4 ml-6 mr-4">Arrive at the venue 10 minutes before the scheduled time.</Text>
        <Text className="italic text-gray-400 text-xs mt-4 ml-6 mr-4">Management is not liable for any personal things lost or injuries sustained during the game.</Text>
      </View>
      </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Rules