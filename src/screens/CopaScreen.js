import React from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { copa } from '../data';

const CopaScreen = () => {
  return (
    
    <ImageBackground 
      source={{ uri: 'https://forbes.com.br/wp-content/uploads/2022/04/Life_Catar-hoteis-copa-do-mundo.jpg' }}
      style={styles.container}
    >

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
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    padding: 10,
  },
 
  card: {
    margin: 10,
    elevation: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
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
    fontSize: 22,
    color: '#000', 
  },
});

export default CopaScreen;
