import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';

const StatCard = ({ title, value }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleMedium" style={styles.title}>{title}</Text>
        <Text variant="displaySmall" style={styles.value}>{value}</Text>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 5,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  value: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default StatCard;