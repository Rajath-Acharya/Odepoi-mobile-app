import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  title: string;
  subtitle?: string;
  upvotes?: number;
};

export default function TripCard({ title, subtitle, upvotes = 0 }: Props) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: '#1b2230',
        backgroundColor: '#0f141f',
        borderRadius: 12,
        padding: 12,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: '600', color: '#e6eaf2' }}>
        {title}
      </Text>
      {subtitle ? (
        <Text style={{ color: '#9aa0a6', marginTop: 2 }}>{subtitle}</Text>
      ) : null}
      <Text style={{ marginTop: 8, color: '#c8cfdb' }}>Upvotes: {upvotes}</Text>
      <View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
        <Button title="Join" onPress={() => {}} />
        <Button title="Suggest Idea" onPress={() => {}} />
      </View>
    </View>
  );
}
