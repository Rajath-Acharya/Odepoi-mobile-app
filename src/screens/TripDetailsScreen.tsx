import React from "react";
import { View, Text, Button, ScrollView } from "react-native";

export default function TripDetailsScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>The Coastal Loop</Text>
      <Text style={{ color: "#555", marginBottom: 8 }}>
        Oct 4–7 • 320 km • Intermediate
      </Text>
      <View style={{ flexDirection: "row", gap: 12, marginBottom: 12 }}>
        <Button title="Request to Join" onPress={() => {}} />
        <Button title="Chat" onPress={() => {}} />
      </View>
      <Text style={{ fontWeight: "600", marginTop: 8 }}>Itinerary</Text>
      <Text>Day 1: City → Coast (112 km)</Text>
      <Text>Day 2: Coast → Hills (98 km)</Text>
      <Text>Day 3: Hills → City (110 km)</Text>
    </ScrollView>
  );
}
