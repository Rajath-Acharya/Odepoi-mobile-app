import { StatusBar, useColorScheme } from 'react-native';
import React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeFeedScreen from './screens/HomeFeedScreen';
import MyTripsScreen from './screens/MyTripsScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const AppDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#0b0e14',
      card: '#0f1115',
      text: '#e6eaf2',
      border: '#151922',
      primary: '#2aa3ff',
    },
  };

  function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#2aa3ff',
          tabBarInactiveTintColor: '#9aa0a6',
          tabBarStyle: {
            backgroundColor: '#0f1115',
            borderTopColor: '#151922',
          },
          tabBarLabelStyle: { fontSize: 11, marginBottom: 2 },
          sceneStyle: { backgroundColor: '#0b0e14' },
          tabBarIcon: ({ color, size, focused }) => {
            const map: Record<string, [string, string]> = {
              Discover: ['compass-outline', 'compass'],
              'My Trips': ['bicycle-outline', 'bicycle'],
              Post: ['add-circle-outline', 'add-circle'],
              Profile: ['person-outline', 'person'],
              Notifications: ['notifications-outline', 'notifications'],
            };
            const pair = map[route.name as keyof typeof map] ?? [
              'ellipse-outline',
              'ellipse',
            ];
            const name = focused ? pair[1] : pair[0];
            return <Ionicons name={name} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Discover" component={HomeFeedScreen} />
        <Tab.Screen name="My Trips" component={MyTripsScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
      </Tab.Navigator>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={isDarkMode ? AppDarkTheme : DefaultTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Onboarding" component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
          <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
