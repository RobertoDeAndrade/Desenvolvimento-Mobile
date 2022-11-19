import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from 'react-native';

export const Artista = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Músicas</Text>
      <Text style={styles.text}>Artistas</Text>
      <Button onPress={() => navigation.navigate("Login")}>
        <Text>Voltar</Text>
      </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: 10,
    color: 'white',
  },
});
