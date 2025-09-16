import React from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        backgroundColor: '#0b0e14',
        flexGrow: 1,
      }}
    >
      <View style={{ position: 'relative', marginBottom: 16 }}>
        <Pressable
          onPress={() => navigation?.replace?.('Tabs')}
          style={{
            position: 'absolute',
            right: 8,
            top: 8,
            zIndex: 1,
            padding: 8,
          }}
        >
          <Text style={{ color: '#e6eaf2' }}>Skip</Text>
        </Pressable>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1529281583201-9a55d681a973?w=1600&q=80',
          }}
          style={{ height: 340, borderRadius: 20 }}
          resizeMode="cover"
        />
      </View>

      <Text
        style={{
          fontSize: 26,
          fontWeight: '800',
          color: '#e6eaf2',
          textAlign: 'center',
          marginBottom: 10,
        }}
      >
        Life is short and the {''}
        <Text style={{ color: '#e6eaf2' }}>world is </Text>
        <Text style={{ color: '#ff8c3b' }}>wide</Text>
      </Text>

      <Text style={{ color: '#9aa0a6', textAlign: 'center', lineHeight: 20 }}>
        At Friends tours and travel, we customize reliable and trustworthy
        educational tours to destinations all over the world
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 18,
          marginBottom: 18,
        }}
      >
        <View
          style={{
            width: 28,
            height: 8,
            borderRadius: 8,
            backgroundColor: '#2aa3ff',
            marginHorizontal: 4,
          }}
        />
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 8,
            backgroundColor: '#314055',
            marginHorizontal: 4,
          }}
        />
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 8,
            backgroundColor: '#314055',
            marginHorizontal: 4,
          }}
        />
      </View>

      <Pressable
        onPress={() => navigation?.navigate?.('Login')}
        style={{
          backgroundColor: '#2a7bff',
          paddingVertical: 16,
          borderRadius: 18,
          alignItems: 'center',
          marginHorizontal: 8,
          marginTop: 6,
        }}
      >
        <Text style={{ color: '#ffffff', fontWeight: '700' }}>Get Started</Text>
      </Pressable>
    </ScrollView>
  );
}
