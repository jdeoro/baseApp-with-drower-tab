import '../global.css';

import {  Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthProvider from './provider/AuthProvider';
import { useState, useEffect } from 'react';
import SplashScreen from './SplashScreen';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false)
    }, 2000);


  }, [loading])
  



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {
        loading ? <SplashScreen /> :
        <AuthProvider>
        <Stack>
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
      </AuthProvider>

      }


    </GestureHandlerRootView>
  );
}
