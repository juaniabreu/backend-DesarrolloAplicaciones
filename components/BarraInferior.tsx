import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { Text } from 'react-native';

// Screens de ejemplo (reemplazá estas con las reales cuando las crees)
import HomeScreen from '../screens/HomeScreen';
import RecipesScreen from '../screens/RecipesScreen';
import CoursesScreen from '../screens/CoursesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator id={undefined}
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#1D1A31',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#E5731A',
        tabBarInactiveTintColor: '#ccc',
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Inicio') {
            return <Ionicons name="home" size={size} color={color} />;
          } else if (route.name === 'Recetas') {
            return <MaterialCommunityIcons name="pot-mix" size={size} color={color} />;
          } else if (route.name === 'Cursos') {
            return <FontAwesome5 name="graduation-cap" size={size} color={color} />;
          } else if (route.name === 'Perfil') {
            return <Ionicons name="person" size={size} color={color} />;
          }
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Recetas" component={RecipesScreen} />
      <Tab.Screen name="Cursos" component={CoursesScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
