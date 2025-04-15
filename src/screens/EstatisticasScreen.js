import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';
import { estatisticas } from '../data';
import StatCard from '../components/StatCard';

const EstatisticasScreen = () => {
  const theme = useTheme();
  

  const mediaGolsPorJogo = () => (estatisticas.totalGols / estatisticas.totalJogos).toFixed(2);
  const mediaPublicoPorJogo = () => (estatisticas.totalPublico / estatisticas.totalJogos).toFixed(0);
  const mediaCartoesPorJogo = () => (estatisticas.totalCartoes / estatisticas.totalJogos).toFixed(2);

  const estatisticasGerais = [
    { title: "Total de Jogos", value: estatisticas.totalJogos },
    { title: "Total de Seleções", value: estatisticas.totalSelecoes },
    { title: "Total de Estádios", value: estatisticas.totalEstadios },
    { title: "Total de Jogadores", value: estatisticas.totalJogadores }
  ];

  const estatisticasPublico = [
    { title: "Total de Público", value: estatisticas.totalPublico.toLocaleString() },
    { title: "Média de Público/Jogo", value: mediaPublicoPorJogo() }
  ];

  const estatisticasGols = [
    { title: "Total de Gols", value: estatisticas.totalGols },
    { title: "Média de Gols/Jogo", value: mediaGolsPorJogo() }
  ];

  const estatisticasCartoes = [
    { title: "Total de Cartões", value: estatisticas.totalCartoes },
    { title: "Média de Cartões/Jogo", value: mediaCartoesPorJogo() },
    { title: "Cartões Amarelos", value: estatisticas.totalCartoesAmarelos },
    { title: "Cartões Vermelhos", value: estatisticas.totalCartoesVermelhos }
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Card style={[styles.headerCard, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <Text variant="headlineMedium" style={[styles.title, { color: theme.colors.primary }]}>
            Estatísticas da Copa 2022
          </Text>
        </Card.Content>
      </Card>


      <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Gerais</Text>
      <View style={styles.grid}>
        {estatisticasGerais.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </View>


      <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Público</Text>
      <View style={styles.grid}>
        {estatisticasPublico.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </View>


      <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Gols</Text>
      <View style={styles.grid}>
        {estatisticasGols.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </View>

      <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>Cartões</Text>
      <View style={styles.grid}>
        {estatisticasCartoes.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerCard: {
    marginBottom: 20,
    elevation: 4,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 8,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
});

export default EstatisticasScreen;