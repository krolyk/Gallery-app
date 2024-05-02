import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const GalleryPage = ({ navigation }) => {
  const [photos, setPhotos] = useState([]);

  // Simulated data for demonstration
  useEffect(() => {
    // Fetch photos from your backend or storage service
    const fetchedPhotos = [
      { id: 1, title: 'Photo 1', description: 'Description 1', uri: 'https://via.placeholder.com/150' },
      { id: 2, title: 'Photo 2', description: 'Description 2', uri: 'https://via.placeholder.com/150' },
      { id: 3, title: 'Photo 3', description: 'Description 3', uri: 'https://via.placeholder.com/150' },
    ];
    setPhotos(fetchedPhotos);
  }, []);

  const renderPhotoItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('PhotoDetails', { photo: item })}>
      <View style={styles.photoItem}>
        <Image source={{ uri: item.uri }} style={styles.thumbnail} />
        <View style={styles.photoInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={renderPhotoItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  list: {
    flexGrow: 1,
  },
  photoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  thumbnail: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  photoInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

export default GalleryPage;
