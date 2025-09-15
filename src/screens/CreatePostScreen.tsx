import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native';

export default function CreatePostScreen() {
  const [text, setText] = useState('');

  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        backgroundColor: '#0b0e14',
        flexGrow: 1,
      }}
    >
      <TextInput
        placeholder="Share your journey"
        placeholderTextColor="#6b7280"
        value={text}
        onChangeText={setText}
        multiline
        style={{
          backgroundColor: '#121722',
          color: '#e6eaf2',
          minHeight: 90,
          padding: 12,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#1b2230',
          marginBottom: 12,
        }}
      />
      <View style={{ flexDirection: 'row', gap: 8, marginBottom: 16 }}>
        {['photo-154', 'photo-155', 'photo-156'].map(k => (
          <Image
            key={k}
            source={{ uri: `https://picsum.photos/seed/${k}/200/140` }}
            style={{ width: 96, height: 72, borderRadius: 8 }}
          />
        ))}
      </View>
      <View style={{ flexDirection: 'row', gap: 12, marginBottom: 16 }}>
        <Button title="Add location" onPress={() => {}} />
        <Button title="Add tags" onPress={() => {}} />
      </View>
      <Button title="Share" onPress={() => {}} />
    </ScrollView>
  );
}
