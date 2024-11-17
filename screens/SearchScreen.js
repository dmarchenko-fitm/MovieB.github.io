import React from 'react';
import { FlatList, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { search } from '../mockData';

export default function SearchScreen({ navigation }) {
  const renderMovie = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('MovieDetail', { movieId: item.id })}
    >
      <View style={styles.itemContainer}>
        <Text style={styles.movieTitle}>{item.title} ({item.year})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={search}
        renderItem={renderMovie}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
