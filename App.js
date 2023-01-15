
import Introduction from './screens/Introduction';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Introduction" component={Introduction} options={{
          headerShown: false,
          }}  />
          <Stack.Screen name="login" component={Login}
          options={{ animation:'simple_push', headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
      
  );
}


