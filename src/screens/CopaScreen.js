import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { copa } from '../data';

const CopaScreen = () => {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Image source={{ uri: copa.imagem }} style={styles.image} />
          <Text variant="headlineMedium" style={styles.title}>{copa.nome}</Text>
          <Text variant="bodyLarge">Local: {copa.local}</Text>
          <Text variant="bodyLarge">Organização: {copa.organizacao}</Text>
          <Text variant="bodyLarge">Mascote: {copa.mascote}</Text>
          <Text variant="bodyLarge">Edição: {copa.edicao}ª</Text>
          <Text variant="bodyLarge">Ano: {copa.ano}</Text>
          <Text variant="bodyLarge">Campeão: {copa.campeao}</Text>
          <Text variant="bodyLarge">Vice-campeão: {copa.viceCampeao}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    margin: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  title: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CopaScreen;