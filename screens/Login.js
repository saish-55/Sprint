import { View, Text, Image, SafeAreaView, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import Lottie from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

const Login = () => {
  return (
    <SafeAreaView className="relative  bg-black h-full">

      <ScrollView>
        <Animatable.View animation={'fadeIn'} easing={'ease-in-out'} className=" bg-black h-96 w-full mt-10">       
          <Lottie source={require('../assets/register.json.json')} autoPlay loop />
        </Animatable.View>


        <Animatable.View animation={'fadeIn'} easing={'ease-in-out'} className="bg-gray-800 rounded-3xl  mt-5 items-center">
                
                <View className=" w-full items-center border-b-2 border-gray-400 rounded-3xl">
                    <Image
                      source={require('../assets/Sprint_logo.png')}
                      className="  w-16 h-16 mt-7 mb-6  "/>
                </View>




                <Animatable.View animation="fadeInUp" delay={400} easing={'ease-in-out'} >
                    <TouchableOpacity 
                    className="flex-row items-center space-x-2 mt-10 border p-2 rounded-3xl border-gray-400">
                        <Image
                                source={require('../assets/google.png')}
                                className="  w-6 h-6 z-20 py-2 "
                        />
                        <Text className="italic text-white">
                            Login with Google
                        </Text>
                    </TouchableOpacity>
                  </Animatable.View>





                  <Animatable.View animation="fadeInUp" delay={600} easing={'ease-in-out'} >
                      <TouchableOpacity
                      className="flex-row items-center space-x-2 m-5 mb-24 border p-2 rounded-3xl border-gray-400">
                        <Image
                            source={require('../assets/facebook.png')}
                            className="  w-6 h-6 z-20 py-2 "
                          />
                          <Text className="italic text-white">
                                Login with Facebook
                          </Text>
                      </TouchableOpacity>
                </Animatable.View>



        </Animatable.View>

      </ScrollView>
      
</SafeAreaView>
  
  )
}

export default Login