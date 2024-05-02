import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

const PhotoDetailsPage = ({ route, navigation }) => {
  const { photo } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: photo.uri }} style={styles.photo} />
      <View style={styles.details}>
        <Text style={styles.title}>{photo.title}</Text>
        <Text style={styles.description}>{photo.description}</Text>
        <Button title="Go back to gallery" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  photo: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  details: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
});

export default PhotoDetailsPage;
