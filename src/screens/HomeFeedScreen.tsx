import React from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  Pressable,
} from 'react-native';
import TripCard from '../components/TripCard';
import PostCard from '../components/PostCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const mockData = [
  {
    id: 't1',
    type: 'trip',
    title: 'Coastal Loop',
    dates: 'Oct 4–7',
    upvotes: 12,
  },
  {
    id: 'p1',
    type: 'post',
    author: 'mira',
    text: 'Sunrise over the ridge!',
    likes: 123,
  },
];

function Chip({ label, active }: { label: string; active?: boolean }) {
  return (
    <Pressable
      style={{
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 16,
        marginRight: 8,
        backgroundColor: active ? '#2aa3ff' : '#1a1f29',
      }}
    >
      <Text style={{ color: active ? '#fff' : '#9aa0a6', fontSize: 12 }}>
        {label}
      </Text>
    </Pressable>
  );
}

export default function HomeFeedScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#0b0e14' }}>
      <FlatList
        data={mockData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 12 }}>
            {item.type === 'trip' ? (
              <TripCard
                title={item.title ?? ''}
                subtitle={item.dates}
                upvotes={item.upvotes}
              />
            ) : (
              <PostCard
                author={item.author ?? ''}
                text={item.text ?? ''}
                likes={item.likes}
              />
            )}
          </View>
        )}
        ListHeaderComponent={
          <View style={{ padding: 12 }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                color: '#e6eaf2',
                marginBottom: 12,
              }}
            >
              Dream Trips
            </Text>
            <TextInput
              placeholder="Search for trips"
              placeholderTextColor="#6b7280"
              style={{
                backgroundColor: '#121722',
                color: '#e6eaf2',
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#1b2230',
                marginBottom: 10,
              }}
            />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ marginBottom: 12 }}
            >
              <Chip label="Popular" active />
              <Chip label="Newest" />
              <Chip label="Upcoming" />
            </ScrollView>
          </View>
        }
      />
    </SafeAreaView>
  );
}
