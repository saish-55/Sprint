import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AnimatedLottieView from 'lottie-react-native'
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons"
import { SelectList } from 'react-native-dropdown-select-list'
import FontAwesome from"@expo/vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';
import SportsCard from '../components/SportsCard';
import  sanityClient from "../sanity"
import { urlFor } from '../sanity';


//DFDFDE
const UserDashBoard = () => {

  const[football,setfootball] = useState([])

  useEffect(() =>{
    sanityClient.fetch(`

    * [_type == "Football"]
      
    `).then((data) => {
      setfootball(data);
    });
  },[]);

  const imgss = <Image source={require('../assets/examples/34533-business-team.json')}
  className=" w-44 h-16 "/>
  
  const [selected, setSelected] = React.useState("");
  
  const data = [
      [<Image source={require('../assets/Icons/football.png')}
        className=" w-3 h-3 "/>,'  Football', ],
      [<Image source={require('../assets/Icons/shuttlecock.png')}
        className=" w-3 h-3 "/>,'  Badminton', ],
      [<Image source={require('../assets/Icons/cricket.png')}
        className=" w-3 h-3 "/>,'  Cricket', ],
      [<Image source={require('../assets/Icons/swimmer.png')}
      className=" w-3 h-3 "/>,'  Swimming',],
      [<Image source={require('../assets/Icons/billiard-ball.png')}
      className=" w-3 h-3 "/>,'  Pool', ],
      [<Image source={require('../assets/Icons/billiard.png')}
      className=" w-3 h-3 "/>,'  Snooker', ],
      [<Image source={require('../assets/Icons/tennis.png')}
      className=" w-3 h-3 "/>,'  Tennis',],
  ]

  return (
    
    <SafeAreaView className="relative flex-1 bg-black ">
      
      <Animatable.View animation={'fadeIn'} easing={'ease-in-out'} className=" mt-3  py-5 px-4 bg-gray-800  rounded-3xl flex-row items-center">
          
          
          <Animatable.Image animation="fadeInLeft" easing={'ease-in-out'}
                source={require('../assets/Sprint.png')}
                className=" w-36 h-14 "
              />
            

              <View className="absolute right-0 flex-row items-center space-x-4 mr-5">
                  <TouchableOpacity className="top-1" >
                      <Feather size={25} color={"#00FFF6"} name="message-square"></Feather>
                  </TouchableOpacity>

                  <TouchableOpacity >
                      <Feather size={42} color={"#00FFF6"} name="user"></Feather>
                  </TouchableOpacity>
                  
              </View>

          </Animatable.View>
          

            <Animatable.View animation={'fadeIn'} easing={'ease-in-out'} className=" h-64 bottom-8 w-full ">       
                <AnimatedLottieView source={require('../assets/examples/106689-cycle.json')} autoPlay loop />
            </Animatable.View>



        <Animatable.View animation={'fadeIn'} easing={'ease-in-out'} className="absolute bg-slate-800 w-full inset-x-0 rounded-t-3xl h-4/6 bottom-0">
            <View className="mb-3 mt-3 ml-1 w-40">
              <SelectList 
                  setSelected={(val) => setSelected(val)} 
                  data={data} 
                  save="value"
                  inputStyles={{color:'#FFFFFF',fontSize:14, fontWeight:'bold' }}
                  boxStyles={{ marginLeft:8, backgroundColor: '#111827', borderRadius: 40, borderColor:'#9CA3AF'}}
                  dropdownTextStyles={{color:'white', borderBottomColor: 'white'}}
                  dropdownStyles={{position:'absolute',marginTop:47,marginLeft: 13,backgroundColor: '#111827', borderColor:'#9CA3AF'}}
                  defaultOption={{ key: 1, value:'Select Sport' }}
                  arrowicon={<FontAwesome name="chevron-down" size={9} color={'#FFFFFF'} style={{ marginTop:4 }}/>}
                  search={false} 
              />
              </View>
              <ScrollView className="h-full -z-10 mt-2">
                <Animatable.View animation={'fadeIn'} easing={'ease-in-out'} delay={200} className="pb-36">
                
                
                {football?.map(footballs => (
                  <SportsCard
                  key={footballs._id}
                  id={footballs._id}
                  name={footballs.name}
                  location={footballs.location}
                  km={footballs.kilometers}
                  ratings={footballs.rating}
                  short_description={footballs.short_detail}
                  image={urlFor(footballs.image).url()}
                  locationbreif={footballs.location_brief}
                  amenity={footballs.amenities}
                  rule={footballs.venue_rules}
                  />
                ))}


                </Animatable.View>
              </ScrollView>
            
            
        </Animatable.View>



      {/*this is navbar code later on make it component*, remove booking from navbar add different*/}
        <View className=" absolute inset-x-0 bottom-0 items-center">
          <View className=" h-28 w-full bg-[#111827]  rounded-t-2xl justify-center ">
            <View className=" justify-center items-center flex-row space-x-16 mb-9">
            <TouchableOpacity className="items-center">
                          <Ionicons size={25} color={"#00FFF6"} name="home"></Ionicons>
                          <Text className="text-xs  text-[#00FFF6]">Home</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                          <Ionicons size={25} color={"#B2B2B2"} name="calendar-outline"></Ionicons>
                          <Text className="text-xs  text-[#B2B2B2]">Book</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                          <Ionicons size={27} color={"#B2B2B2"} name="people-outline"></Ionicons>
                          <Text className="text-xs  text-[#B2B2B2]">Meet</Text>
            </TouchableOpacity>
            <TouchableOpacity className="items-center">
                          <Ionicons size={23} color={"#B2B2B2"} name="bookmarks-outline"></Ionicons>
                          <Text className="text-xs  text-[#B2B2B2]">Learn</Text>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        
    </SafeAreaView>
  )
}

export default UserDashBoard