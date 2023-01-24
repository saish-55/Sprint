import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import Lottie from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


const Select = () => {
    
  const navigation = useNavigation();
  return (
    <SafeAreaView className = "bg-black h-full">
        <ScrollView className="mt-1">
            <Animatable.View animation={'fadeIn'} easing={'ease-in-out'} >
                <Animatable.Image animation="fadeInLeft" delay={300}
                    source={require('../assets/Sprint.png')}
                    className=" w-44 h-16 ml-5 mt-3 "
                />


                <View className="items-center">


                        <TouchableOpacity 
                            onPress={() => navigation.navigate('login')} 
                            className="mt-7  space-x-2 rounded-3xl w-10/12 bg-gray-800 border border-gray-200 shadow-sm shadow-white">
                                    <Animatable.View animation="fadeIn" delay={200} easing={'ease-in-out'}  className=" h-72 items-center w-full" >       
                                        <Lottie source={require('../assets/select3.json')} autoPlay loop />
                                    </Animatable.View>   
                                    <Animatable.Text animation="fadeIn" delay={800} easing={'ease-in-out'} className="font-extrabold pl-5 italic bottom-5 text-lg text-white">
                                        Register as user
                                    </Animatable.Text>
                            </TouchableOpacity>
                        

                        <TouchableOpacity  
                            onPress={() => navigation.navigate('login')} 
                            className="mt-6 mb-5 space-x-2 rounded-3xl w-10/12 bg-gray-800 border  border-gray-200 shadow-sm shadow-white">
                                <Animatable.View animation="fadeIn" delay={200} easing={'ease-in-out'} className="  h-72 items-center w-full">       
                                    <Lottie source={require('../assets/select1.json')} autoPlay loop />
                                </Animatable.View>   
                                <Animatable.Text animation="fadeIn" delay={800} easing={'ease-in-out'} className=" text-white font-extrabold pl-5 italic bottom-5 text-lg">
                                    Register as owner
                                </Animatable.Text>
                        </TouchableOpacity>
                    

            
                </View>
            </Animatable.View>
        </ScrollView>
    </SafeAreaView>
)
}

export default Select