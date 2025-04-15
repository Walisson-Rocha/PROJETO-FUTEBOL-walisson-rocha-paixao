
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';

const EstadioCard = ({ estadio }) => {
  if (!estadio) return null;

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Image 
          source={{ uri: estadio.imagem }} 
          style={styles.image} 
          onError={(e) => console.log('Erro ao carregar imagem:', e.nativeEvent.error)}
        />
        <Text variant="titleLarge" style={styles.title}>{estadio.nome}</Text>
        <Text variant="bodyMedium">Cidade: {estadio.cidade}</Text>
        <Text variant="bodyMedium">Capacidade: {estadio.capacidade.toLocaleString()} lugares</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 4,
  },
  title: {
    marginBottom: 8,
  },
});

export default EstadioCard;