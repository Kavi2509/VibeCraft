import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen({ navigation }) {
  const [style, setStyle] = useState('');
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchCameraAsync({ quality: 0.5 });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleGenerate = () => {
    navigation.navigate('Suggestions', { image, style });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VibeCraft</Text>
      <Button title="Capture Room" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={styles.preview} />}
      <TextInput
        placeholder="Enter style (e.g. Minimalist)"
        value={style}
        onChangeText={setStyle}
        style={styles.input}
      />
      <Button
        title="Generate Suggestions"
        onPress={handleGenerate}
        disabled={!image || !style}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 32, textAlign: 'center', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 20 },
  preview: { width: '100%', height: 200, marginVertical: 20, borderRadius: 10 },
});