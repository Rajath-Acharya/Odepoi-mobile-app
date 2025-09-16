import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
import { signInWithGoogle } from '../services/google';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: '#0b0e14' }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={{ padding: 24, flexGrow: 1, justifyContent: 'center' }}>
        <Text
          style={{
            color: '#e6eaf2',
            fontWeight: '700',
            textAlign: 'center',
            marginBottom: 6,
            fontSize: 24,
          }}
        >
          Sign in now
        </Text>
        <Text
          style={{ color: '#9aa0a6', textAlign: 'center', marginBottom: 18 }}
        >
          Please sign in to continue our app
        </Text>
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
            marginBottom: 6,
          }}
        />
        <Pressable onPress={() => {}}>
          <Text
            style={{ color: '#2aa3ff', marginBottom: 12, textAlign: 'right' }}
          >
            Forget Password?
          </Text>
        </Pressable>
        <Button title="Sign In" onPress={() => navigation.replace('Tabs')} />

        <Text style={{ color: '#9aa0a6', textAlign: 'center', marginTop: 14 }}>
          Don't have an account?{' '}
          <Text
            style={{ color: '#2aa3ff' }}
            onPress={() => navigation.navigate('Signup')}
          >
            Sign up
          </Text>
        </Text>

        <Text style={{ color: '#9aa0a6', textAlign: 'center', marginTop: 18 }}>
          Or connect
        </Text>

        <View style={{ alignItems: 'center', marginTop: 12 }}>
          <Pressable
            onPress={async () => {
              try {
                const res = await signInWithGoogle();
                if (res?.data || (res as any)?.user) {
                  navigation.replace('Tabs');
                }
              } catch (e: any) {
                Alert.alert('Google Sign-In failed', e?.message || String(e));
              }
            }}
            style={{
              backgroundColor: '#121722',
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: '#1b2230',
            }}
          >
            <Text style={{ color: '#e6eaf2' }}>Continue with Google</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
