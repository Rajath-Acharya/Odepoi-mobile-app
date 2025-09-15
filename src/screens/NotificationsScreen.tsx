import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

const items = [
  {
    id: '1',
    text: 'Liam commented on your trip',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: '2',
    text: 'Sophia liked your trip',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    id: '3',
    text: 'Ethan requested to join your trip',
    avatar: 'https://randomuser.me/api/portraits/men/74.jpg',
  },
];

export default function NotificationsScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        backgroundColor: '#0b0e14',
        flexGrow: 1,
      }}
    >
      <Text style={{ color: '#e6eaf2', fontWeight: '700', marginBottom: 12 }}>
        Notifications
      </Text>
      {items.map(n => (
        <View
          key={n.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
          }}
        >
          <Image
            source={{ uri: n.avatar }}
            style={{ width: 36, height: 36, borderRadius: 18, marginRight: 12 }}
          />
          <Text style={{ color: '#c8cfdb' }}>{n.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
