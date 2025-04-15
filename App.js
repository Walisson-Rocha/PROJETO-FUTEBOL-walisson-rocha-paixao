import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CopaScreen from './src/screens/CopaScreen';
import EstadiosScreen from './src/screens/EstadiosScreen';
import BrasilScreen from './src/screens/BrasilScreen';
import EstatisticasScreen from './src/screens/EstatisticasScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0d47a1',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          tabBarActiveTintColor: '#0d47a1',
          tabBarInactiveTintColor: '#555',
        }}
      >
        <Tab.Screen
          name="Copa"
          component={CopaScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="trophy" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Estádios"
          component={EstadiosScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="stadium" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Brasil"
          component={BrasilScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="soccer" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Estatísticas"
          component={EstatisticasScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="chart-bar" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});