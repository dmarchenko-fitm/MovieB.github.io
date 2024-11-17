import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { movie } from '../mockData';

export default function MovieDetailScreen({ route }) {
  const { movieId } = route.params;
  // У майбутньому можна знайти фільм за ID. Тут статично використовуємо `movie`.
  const selectedMovie = movie;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{selectedMovie.title} ({selectedMovie.year})</Text>
      <Text style={styles.description}>{selectedMovie.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
  },
});
