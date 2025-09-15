import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';

export default function NewTripScreen() {
  const [where, setWhere] = useState('');
  const [when, setWhen] = useState('');

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        backgroundColor: '#0b0e14',
        flexGrow: 1,
      }}
    >
      <Text style={{ color: '#e6eaf2', fontWeight: '700', marginBottom: 12 }}>
        New Trip
      </Text>
      <TextInput
        placeholder="Where to?"
        placeholderTextColor="#6b7280"
        value={where}
        onChangeText={setWhere}
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
        placeholder="When?"
        placeholderTextColor="#6b7280"
        value={when}
        onChangeText={setWhen}
        style={{
          backgroundColor: '#121722',
          color: '#e6eaf2',
          padding: 12,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#1b2230',
          marginBottom: 12,
        }}
      />
      <View
        style={{
          height: 180,
          borderRadius: 12,
          backgroundColor: '#101521',
          borderWidth: 1,
          borderColor: '#1b2230',
          marginBottom: 16,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: '#9aa0a6' }}>Map preview</Text>
      </View>
      <Button title="Next" onPress={() => {}} />
    </ScrollView>
  );
}
