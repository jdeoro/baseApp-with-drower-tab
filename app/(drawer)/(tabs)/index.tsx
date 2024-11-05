import { Stack } from 'expo-router';
import axios from 'axios';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import { useEffect } from 'react';
import { View , Text} from 'react-native';

export default function Home() {
  useEffect(() => {
    const cargaDatos = async () => {
      const conexion = axios.create({
        url : 'https://www.themealdb.com/api/json/v1/1/categories.php'
      })
    }
    cargaDatos()
  }, [])

  return (
    <>
      <Stack.Screen options={{ title: 'Menu' }} />
      <View><Text>Menu Screen</Text></View>
    </>
  );
}
