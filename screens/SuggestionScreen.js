import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchAISuggestions } from '../services/aiService';

export default function SuggestionScreen({ route }) {
  const { image, style } = route.params;
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getSuggestions() {
      const suggestions = await fetchAISuggestions(image, style);
      setResults(suggestions);
      setLoading(false);
    }
    getSuggestions();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Suggestions for: {style}</Text>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        results.map((uri, idx) => (
          <Image key={idx} source={{ uri }} style={styles.image} />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  image: { width: '100%', height: 300, marginBottom: 20, borderRadius: 10 },
});