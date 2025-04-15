import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { LineChart, BarChart } from "react-native-chart-kit"; // Importando os gráficos
import { estatisticas } from "../data";
import StatCard from "../components/StatCard";

const EstatisticasScreen = () => {
  const theme = useTheme();

  const mediaGolsPorJogo = () =>
    (estatisticas.totalGols / estatisticas.totalJogos).toFixed(2);
  const mediaPublicoPorJogo = () =>
    (estatisticas.totalPublico / estatisticas.totalJogos).toFixed(0);
  const mediaCartoesPorJogo = () =>
    (estatisticas.totalCartoes / estatisticas.totalJogos).toFixed(2);

  const estatisticasGerais = [
    { title: "Total de Jogos", value: estatisticas.totalJogos },
    { title: "Total de Seleções", value: estatisticas.totalSelecoes },
    { title: "Total de Estádios", value: estatisticas.totalEstadios },
    { title: "Total de Jogadores", value: estatisticas.totalJogadores },
  ];

  const estatisticasPublico = [
    {
      title: "Total de Público",
      value: estatisticas.totalPublico.toLocaleString(),
    },
    { title: "Média de Público/Jogo", value: mediaPublicoPorJogo() },
  ];

  const estatisticasGols = [
    { title: "Total de Gols", value: estatisticas.totalGols },
    { title: "Média de Gols/Jogo", value: mediaGolsPorJogo() },
  ];

  const estatisticasCartoes = [
    { title: "Total de Cartões", value: estatisticas.totalCartoes },
    { title: "Média de Cartões/Jogo", value: mediaCartoesPorJogo() },
    { title: "Cartões Amarelos", value: estatisticas.totalCartoesAmarelos },
    { title: "Cartões Vermelhos", value: estatisticas.totalCartoesVermelhos },
  ];

  // Dados para o gráfico de Gols
  const dataGols = {
    labels: ["Gols/Jogo"], // Pode adicionar mais etiquetas conforme necessário
    datasets: [
      {
        data: [parseFloat(mediaGolsPorJogo())], // Média de gols por jogo
      },
    ],
  };

  // Dados para o gráfico de Público
  const dataPublico = {
    labels: ["Público/Jogo"], // Pode adicionar mais etiquetas conforme necessário
    datasets: [
      {
        data: [parseFloat(mediaPublicoPorJogo())], // Média de público por jogo
      },
    ],
  };

  // Dados para o gráfico de Cartões
  const dataCartoes = {
    labels: ["Cartões/Jogo"], // Pode adicionar mais etiquetas conforme necessário
    datasets: [
      {
        data: [parseFloat(mediaCartoesPorJogo())], // Média de cartões por jogo
      },
    ],
  };

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Card
        style={[styles.headerCard, { backgroundColor: theme.colors.surface }]}
      >
        <Card.Content>
          <Text
            variant="headlineMedium"
            style={[styles.title, { color: theme.colors.primary }]}
          >
            Estatísticas da Copa 2022
          </Text>
        </Card.Content>
      </Card>

      <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
        Gerais
      </Text>
      <View style={styles.grid}>
        {estatisticasGerais.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </View>

      <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
        Público
      </Text>
      <View style={styles.grid}>
        {estatisticasPublico.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </View>

      {/* Adicionando gráfico de Público */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <Text
            variant="titleLarge"
            style={[styles.title, { color: theme.colors.primary }]}
          >
            Gráfico de Público por Jogo
          </Text>
          <BarChart
            data={dataPublico}
            width={350} // Largura do gráfico
            height={220} // Altura do gráfico
            chartConfig={{
              backgroundColor: theme.colors.background,
              backgroundGradientFrom: theme.colors.background,
              backgroundGradientTo: theme.colors.surface,
              decimalPlaces: 2, // Quantos decimais mostrar
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Cor da linha
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Cor do texto
            }}
            verticalLabelRotation={30}
          />
        </Card.Content>
      </Card>

      <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
        Gols
      </Text>
      <View style={styles.grid}>
        {estatisticasGols.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </View>

      {/* Adicionando gráfico de Gols */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <Text
            variant="titleLarge"
            style={[styles.title, { color: theme.colors.primary }]}
          >
            Gráfico de Gols por Jogo
          </Text>
          <LineChart
            data={dataGols}
            width={350} // Largura do gráfico
            height={220} // Altura do gráfico
            chartConfig={{
              backgroundColor: theme.colors.background,
              backgroundGradientFrom: theme.colors.background,
              backgroundGradientTo: theme.colors.surface,
              decimalPlaces: 20, // Quantos decimais mostrar
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Cor da linha
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Cor do texto
            }}
          />
        </Card.Content>
      </Card>

      <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>
        Cartões
      </Text>
      <View style={styles.grid}>
        {estatisticasCartoes.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} />
        ))}
      </View>

      {/* Adicionando gráfico de Cartões */}
      <Card style={[styles.card, { backgroundColor: theme.colors.surface }]}>
        <Card.Content>
          <Text
            variant="titleLarge"
            style={[styles.title, { color: theme.colors.primary }]}
          >
            Gráfico de Cartões por Jogo
          </Text>
          <BarChart
            data={dataCartoes}
            width={350} // Largura do gráfico
            height={220} // Altura do gráfico
            chartConfig={{
              backgroundColor: theme.colors.background,
              backgroundGradientFrom: theme.colors.background,
              backgroundGradientTo: theme.colors.surface,
              decimalPlaces: 2, // Quantos decimais mostrar
              color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // Cor da linha
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Cor do texto
            }}
            verticalLabelRotation={30}
          />
        </Card.Content>
      </Card>
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
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    marginLeft: 8,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  card: {
    marginVertical: 12,
  },
});

export default EstatisticasScreen;
