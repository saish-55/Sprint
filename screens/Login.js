import { View, Text, Image, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Lottie from 'lottie-react-native';


const Login = () => {
  return (

    <SafeAreaView className="relative  bg-gray-200 h-full">
        <ScrollView>
            
        <View className=" bg-gray-200 h-96 w-full mt-10">       
          <Lottie source={require('../assets/register.json.json')} autoPlay loop />
        </View>

        
  
        <View className="bg-white rounded-3xl  mt-5 items-center">
                <View className=" h-36 w-36 absolute inset-y-0 right-11 -top-24 mb-2">       
                    <Lottie source={require('../assets/cat.json.json')} autoPlay loop />
                </View>

                <View className=" w-full items-center border-b-2 border-gray-200 rounded-3xl">
                    <Image
                            source={require('../assets/Sprint_logo.png')}
                            className="  w-16 h-16 mt-7 mb-6  "/>
                </View>

                <TouchableOpacity className="flex-row items-center space-x-2 mt-10 border p-2 rounded-3xl border-gray-400">
                <Image
                        source={require('../assets/google.png')}
                        className="  w-6 h-6 z-20 py-2 "

                    />
                    <Text className="italic text-gray-600">
                        Login with Google
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                className="flex-row items-center space-x-2 m-5 mb-24 border p-2 rounded-3xl border-gray-400">
                <Image
                        source={require('../assets/facebook.png')}
                        className="  w-6 h-6 z-20 py-2 "

                    />
                    <Text className="italic text-gray-600">
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
        </View>
    

        </ScrollView>
    </SafeAreaView>
   
  )
}

export default Login