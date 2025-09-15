import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";

export default function TripPlannerScreen() {
  const [title, setTitle] = useState("");
  const [dates, setDates] = useState("");
  const [waypoints, setWaypoints] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addWaypoint = () => {
    if (!input.trim()) return;
    setWaypoints((prev) => [...prev, input.trim()]);
    setInput("");
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Plan a Trip</Text>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
        style={{ borderWidth: 1, padding: 8, marginTop: 12 }}
      />
      <TextInput
        placeholder="Dates (e.g., Oct 4–7)"
        value={dates}
        onChangeText={setDates}
        style={{ borderWidth: 1, padding: 8, marginTop: 8 }}
      />
      <View style={{ flexDirection: "row", gap: 8, marginTop: 8 }}>
        <TextInput
          placeholder="Add waypoint"
          value={input}
          onChangeText={setInput}
          style={{ borderWidth: 1, padding: 8, flex: 1 }}
        />
        <Button title="Add" onPress={addWaypoint} />
      </View>
      <Text style={{ marginTop: 12, fontWeight: "600" }}>Waypoints</Text>
      {waypoints.map((w, idx) => (
        <Text key={idx} style={{ paddingVertical: 4 }}>
          • {w}
        </Text>
      ))}
      <Button title="Save Trip" onPress={() => {}} />
    </ScrollView>
  );
}
