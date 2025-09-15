import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

function Section({ title, children }: any) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ color: '#e6eaf2', fontWeight: '700', marginBottom: 8 }}>
        {title}
      </Text>
      {children}
    </View>
  );
}

export default function MyTripsScreen() {
  return (
    <ScrollView
      contentContainerStyle={{
        padding: 16,
        backgroundColor: '#0b0e14',
        flexGrow: 1,
      }}
    >
      <Section title="Upcoming Trips">
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400',
            }}
            style={{ width: 96, height: 64, borderRadius: 8 }}
          />
          <View>
            <Text style={{ color: '#e6eaf2' }}>Coastal Ride</Text>
            <Text style={{ color: '#9aa0a6' }}>San Francisco, CA</Text>
          </View>
        </View>
      </Section>
      <Section title="Past Trips">
        <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1516567727245-2e4b4b3c3c89?w=400',
            }}
            style={{ width: 96, height: 64, borderRadius: 8 }}
          />
          <View>
            <Text style={{ color: '#e6eaf2' }}>Desert Adventure</Text>
            <Text style={{ color: '#9aa0a6' }}>Phoenix, AZ</Text>
          </View>
        </View>
      </Section>
      <Section title="Pending Requests">
        <Text style={{ color: '#9aa0a6' }}>City Tour • New York, NY</Text>
      </Section>
    </ScrollView>
  );
}
