import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Avatar, Text } from 'react-native-paper';

const JogadorCard = ({ jogador }) => {
  return (
    <Card style={styles.card}>
      <Card.Title
        title={jogador.nome}
        subtitle={`Número: ${jogador.numero}`}
        left={(props) => <Avatar.Image {...props} source={{ uri: jogador.imagem }} />}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
    elevation: 2,
  },
});

export default JogadorCard;