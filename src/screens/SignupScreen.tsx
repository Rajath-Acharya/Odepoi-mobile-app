import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native';

export default function SignupScreen({ navigation }: any) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: '#0b0e14' }}
    >
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200',
        }}
        style={{ height: 220 }}
        resizeMode="cover"
      />
      <View style={{ padding: 16 }}>
        <Text
          style={{
            color: '#e6eaf2',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 12,
          }}
        >
          Join the Ride
        </Text>

        <TextInput
          placeholder="Username"
          placeholderTextColor="#6b7280"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          style={{
            backgroundColor: '#121722',
            color: '#e6eaf2',
            padding: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#1b2230',
            marginBottom: 10,
          }}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#6b7280"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          style={{
            backgroundColor: '#121722',
            color: '#e6eaf2',
            padding: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#1b2230',
            marginBottom: 10,
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#6b7280"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={{
            backgroundColor: '#121722',
            color: '#e6eaf2',
            padding: 12,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#1b2230',
            marginBottom: 10,
          }}
        />

        <Button
          title="Create Account"
          onPress={() => navigation.replace('Tabs')}
        />
        <Text style={{ color: '#9aa0a6', textAlign: 'center', marginTop: 14 }}>
          Already have an account?{' '}
          <Text
            style={{ color: '#2aa3ff' }}
            onPress={() => navigation.navigate('Login')}
          >
            Log In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
