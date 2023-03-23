

import 'react-native-gesture-handler';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens/HomeScreen';
import { BankDetailScreen } from './screens/BankDetailScreen';



const Stack = createStackNavigator(); 

export const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="HomeScreen" 
                    component={HomeScreen} 
                    options={{ title:"Banks" }}    
                />
                <Stack.Screen 
                    name="BankDetailScreen" 
                    component={BankDetailScreen} 
                    options={{ title:"Detail Bank", headerShown: false  }}    
                />
            </Stack.Navigator>

        </NavigationContainer>
        
    )
}


export default App;