import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

import Calculator from "./src/pages/Calculator/Calculator.js";
import Pizza from "./src/pages/Pizza/Pizza.js";
import Instagram from "./src/pages/Login_Insta/Instagram.js";
import teste from "./src/pages/teste/teste.js"
import Animes from "./src/pages/Animes/Animes.js"

export default function APP() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
        name="Calculator" 
        component={Calculator}
        />
        <Tab.Screen 
        name="Pizza" 
        component={Pizza} 
        options={{
          headerShown: false,
        }}
        />
        <Tab.Screen 
        name="Instagram" 
        component={Instagram} 
        options={{
          headerShown: false,
        }}
        />
       
      </Tab.Navigator>
    </NavigationContainer>
  );
}
