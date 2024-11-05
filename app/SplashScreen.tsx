import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function index() {
  return (
      <View className="bg-orange-500 p-16 items-center flex flex-1 justify-center" >
        <Image className=' w-[350px] ' source={require('../assets/delivery.webp')} />
        <Text className=" text-4xl text-white font-bold">Foody</Text>
        <Text className=" text-xl text-gray-300 font-bold">delivery</Text>        
        <Text className="text-lg text-white mt-10">cargando...</Text>
      </View>
  );
}