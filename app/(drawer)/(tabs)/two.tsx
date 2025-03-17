import { Link, router, Stack } from 'expo-router';
import { View, Text, Button, Pressable } from 'react-native';

export default function Home() {

  const navigate = router

  const ir = () => {
    router.navigate('/opciones')
  }

  return (
    <>
        <Pressable onPress={ () => ir() } >
        <Text>Presionar acá</Text>

        </Pressable>

      
    </>
  );
}
