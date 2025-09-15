import React from 'react';
import { View, Text } from 'react-native';

type Props = {
  author: string;
  text: string;
  likes?: number;
};

export default function PostCard({ author, text, likes = 0 }: Props) {
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
      <Text style={{ fontWeight: '600', color: '#e6eaf2' }}>@{author}</Text>
      <Text style={{ marginTop: 6, color: '#c8cfdb' }}>{text}</Text>
      <Text style={{ marginTop: 8, color: '#9aa0a6' }}>Likes: {likes}</Text>
    </View>
  );
}
