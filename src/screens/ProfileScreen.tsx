import React from 'react';
import { View, Text, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0b0e14' }}>
      <View style={{ alignItems: 'center', paddingTop: 32, paddingBottom: 16 }}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/11.jpg' }}
          style={{ width: 88, height: 88, borderRadius: 44, marginBottom: 12 }}
        />
        <Text style={{ color: '#e6eaf2', fontWeight: '700', fontSize: 18 }}>
          Alex Rider
        </Text>
        <Text style={{ color: '#9aa0a6', marginTop: 6 }}>
          Trips 12 • Distance 4,230 km • Badges 6
        </Text>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: '#e6eaf2', marginTop: 8, fontWeight: '600' }}>
          Upcoming Trips
        </Text>
        <Text style={{ color: '#e6eaf2', marginTop: 8, fontWeight: '600' }}>
          Past Trips
        </Text>
        <Text style={{ color: '#e6eaf2', marginTop: 8, fontWeight: '600' }}>
          Posts
        </Text>
      </View>
    </View>
  );
}
