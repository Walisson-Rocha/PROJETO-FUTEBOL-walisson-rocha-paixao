import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { brasil } from '../data';
import JogadorCard from '../components/JogadorCard';

const BrasilScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Image source={{ uri: brasil.imagem }} style={styles.image} />
          <Text variant="headlineMedium" style={styles.title}>{brasil.nome}</Text>
          <Text variant="bodyLarge">Treinador: {brasil.treinador}</Text>
          <Text variant="bodyLarge">Títulos da Copa: {brasil.titulos_copa_mundo}</Text>
          <Text variant="bodyLarge">Administrador: {brasil.administrador}</Text>
          <Text variant="bodyLarge">Estádio: {brasil.estadio}</Text>
        </Card.Content>
      </Card>

      <Text variant="titleLarge" style={styles.subtitle}>Jogadores</Text>
      
      <FlatList
        data={brasil.jogadores}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JogadorCard jogador={item} />}
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
  card: {
    marginBottom: 15,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  title: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subtitle: {
    margin: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
});

export default BrasilScreen;