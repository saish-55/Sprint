import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import Lottie from 'lottie-react-native';
import { ChevronRightIcon } from "react-native-heroicons/solid";
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


const Introduction = () => {

  const navigation = useNavigation();
  return (
  
    <SafeAreaView className=" flex-1  relative bg-black h-full">


        <Animatable.View animation={'fadeIn'} easing={'ease-in-out'} className=" mt-3 justify-center py-3 px-4 bg-gray-800 items-center rounded-3xl ">
            <Animatable.Image animation={'fadeIn'} easing={'ease-in-out'} delay={300}
                source={require('../assets/Sprint.png')}
                className=" w-44 h-16 "
              />
          </Animatable.View>




          <ScrollView>
            
            <Animatable.View animation={'fadeIn'} easing={'ease-in-out'} className=" h-96 w-full ">       
              <Lottie source={require('../assets/intro.json.json')} autoPlay loop />
            </Animatable.View>
        
          
          <Animatable.View animation={'fadeIn'} easing={'ease-in-out'} className="bg-gray-800 rounded-3xl">
        
              <Animatable.Text animation="fadeInUp" delay={400} easing={'ease-in-out'} className=" text-white font-bold italic text-2xl px-12 py-4 mt-2" >Welcome to Sprint</Animatable.Text>
              <Animatable.Text animation="fadeInUp" delay={450} easing={'ease-in-out'}className="text-gray-400  top-2 px-16 py-2 italic">
                          Easy to book nearby Venues.
              </Animatable.Text>
              <Animatable.Text animation="fadeInUp" delay={500} easing={'ease-in-out'}className="text-gray-400 w-full px-16 py-2 mt-2 italic">
                              Play your favorite sports with new friends.
              </Animatable.Text>
              <Animatable.Text animation="fadeInUp" delay={550} easing={'ease-in-out'}className="text-gray-400 px-16 py-2 italic">
                              Join new Sport Communities
              </Animatable.Text>
              <Animatable.Text animation="fadeInUp" delay={600} easing={'ease-in-out'}className="text-gray-400 px-16 py-2 italic">
                              Register your Venue
              </Animatable.Text>


            <View className="items-center m-2 inset-x-0 bottom-0 ">
              
              <TouchableOpacity
                  onPress={() =>
                  navigation.navigate('selects')}
                  className=" bg-[#14A9FF] relative p-3 w-80 rounded-lg  flex-row mb-6 mt-5">
                      <Text className="font-bold text-lg italic text-center text-white">
                          Let's Begin
                      </Text>
                    <View className="absolute inset-y-0 right-0 justify-center mr-5" >
                        <Animatable.View animation="fadeInLeft" delay={1200} easing={'ease-in-out'}>
                        <ChevronRightIcon size={23} color={"#FFFFFF"}/>
                        </Animatable.View>
                    </View>
              </TouchableOpacity> 

            </View>
            
          </Animatable.View>
          </ScrollView>
    </SafeAreaView>
    
  )
}

export default Introduction