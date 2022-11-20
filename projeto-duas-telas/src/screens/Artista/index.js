import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { 
  Container, 
  SubTitle, 
  Text1, 
  Title, 
  ViewHeader, 
  Text2, 
  ViewContainer, 
  ViewContainer1, 
  ViewContainer2,  
  ViewArtista,
  ImageArtista,
  TextArtista1,
  TextArtista2,
} from './styles';
import { Ionicons } from "@expo/vector-icons";

export const Artista = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <ViewHeader>
        <Ionicons name={"chevron-back-outline"} size={40} color={"#ddd"} />
      </ViewHeader>
      <Title>MÚSICAS</Title>
      <SubTitle>ARTISTAS</SubTitle>
      <ViewContainer>
        <ViewContainer1>
          <Ionicons name={"swap-vertical-outline"} size={20} color={"#ddd"}/>
          <Text1>Classificar</Text1>
          <Ionicons name={"chevron-down-outline"} size={20} color={"#ddd"}/>
        </ViewContainer1>
        <ViewContainer2>
          <Text2>Baixadas</Text2>
        </ViewContainer2>
      </ViewContainer>
      <ViewArtista>
        <ImageArtista source={require('../../../assets/avenged.jpg')} resizeMode='contain'></ImageArtista>
        <TextArtista1>Avenged Sevenfold</TextArtista1>
        <TextArtista2>...</TextArtista2>
      </ViewArtista>
      <ViewArtista>
        <ImageArtista source={require('../../../assets/disturbed.jpg')} resizeMode='contain'></ImageArtista>
        <TextArtista1>Disturbed</TextArtista1>
        <TextArtista2>...</TextArtista2>
      </ViewArtista>
      <ViewArtista>
        <ImageArtista source={require('../../../assets/metallica.jpg')} resizeMode='contain'></ImageArtista>
        <TextArtista1>Metallica</TextArtista1>
        <TextArtista2>...</TextArtista2>
      </ViewArtista>
      <ViewArtista>
        <ImageArtista source={require('../../../assets/volbeat.jpg')} resizeMode='contain'></ImageArtista>
        <TextArtista1>Volbeat</TextArtista1>
        <TextArtista2>...</TextArtista2>
      </ViewArtista>
      <StatusBar style="auto" />
    </Container>
  );
};