import { Stack } from 'expo-router';
import { View , Text} from 'react-native';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

import { useAuth } from '../provider/AuthProvider';

export default function Home() {
  //const {item} = useAuth()

  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <View>
          <Text>screen Home</Text>        
      </View>
    </>
  );
}
