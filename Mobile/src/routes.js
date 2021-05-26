import React from 'react';
import { Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Orcamento from './pages/Orcamento'

export default function Routes() {

    const screenOptionStyle = {
        headerStyle: {
            backgroundColor: '#050c3d'
        },
        headerTintColor: '#00a1fc',
        headerBackTitle: 'Voltar'
    }
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={screenOptionStyle}>
                <Stack.Screen 
                    name="Orcamento" 
                    component={Orcamento}
                    options={{
                        headerTitle: "Orçamento"
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}