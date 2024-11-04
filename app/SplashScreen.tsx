import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function index() {
  return (
      <View className="flex flex-1 items-center justify-center bg-orange-500" >
        <Image className="flex px-11 mx-5 " source={require('../assets/delivery-1.webp')} />
        <Text className="text-lg text-white">Bienvenido</Text>
      </View>
  );
}