import './gesto-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Button, ScrollView, StyleSheet } from 'react-native';

// Importá todas las pantallas necesarias
import SplashScreen from './screens/SplashScreen';
import NoConnectionScreen from './screens/NoConnectionScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import RecipeDetailScreen from './screens/RecipeDetailScreen';
import CourseDetailScreen from './screens/CourseDetailScreen';


const Stack = createStackNavigator();

const MenuScreen = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <Button title="Ir a Splash" onPress={() => navigation.navigate('Splash')} />
    <Button title="Ir a Home" onPress={() => navigation.navigate('Home')} />
    <Button title="Ir a Sin conexión" onPress={() => navigation.navigate('NoConnection')} />
    <Button title="Ir a Perfil" onPress={() => navigation.navigate('Profile')} />
    <Button title="Ir a Detalle de Receta" onPress={() => navigation.navigate('RecipeDetail', { id: '1' })} />
    <Button title="Ir a Detalle de Curso" onPress={() => navigation.navigate('CourseDetail', { id: '1' })} />
  </ScrollView>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NoConnection" component={NoConnectionScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="RecipeDetail" component={RecipeDetailScreen} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
    justifyContent: 'center',
  },
});
