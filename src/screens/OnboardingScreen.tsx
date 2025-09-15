import React from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        backgroundColor: '#0b0e14',
        flexGrow: 1,
      }}
    >
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200',
        }}
        style={{ height: 220, borderRadius: 12, marginBottom: 16 }}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          color: '#e6eaf2',
          marginBottom: 6,
        }}
      >
        Plan your next adventure
      </Text>
      <Text style={{ color: '#9aa0a6', marginBottom: 16 }}>
        Connect with fellow bikers, plan trips, and share your experiences.
      </Text>
      <View style={{ gap: 10 }}>
        <Button
          title="Sign Up"
          onPress={() => navigation?.navigate?.('Signup')}
        />
        <Button
          title="Log In"
          onPress={() => navigation?.navigate?.('Login')}
        />
      </View>
    </ScrollView>
  );
}
