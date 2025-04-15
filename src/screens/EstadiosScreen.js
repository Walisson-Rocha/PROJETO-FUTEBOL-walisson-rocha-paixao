import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { estadios } from '../data';
import EstadioCard from '../components/EstadioCard';

const EstadiosScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={estadios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EstadioCard estadio={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 20,
  },
});

export default EstadiosScreen;