import { StatusBar } from 'expo-status-bar';
import { useNavigation } from "@react-navigation/native";
import { 
  Logo, 
  Container, 
  MyButton, 
  Title, 
  MyContainer, 
  ButtonText, 
  FooterText, 
  TextLogin, 
  TextCadastro, 
  InputLogin, 
  LinksText1, 
  LinksText2, 
  ContainerText1, 
  ContainerText2,
  ViewCadastro,
  ViewLogin,
  TextEmail,
} from './styles';
import { Ionicons } from "@expo/vector-icons";

export const Login = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Logo source={require('../../../assets/amazon-logo.png')} resizeMode='contain' />
      <Title>Bem-vindo</Title>
      <MyContainer>
        <ViewCadastro>
          <Ionicons name={"radio-button-off-outline"} size={20} color={"#ddd"} />
          <TextCadastro>Criar Conta. É novo na Amazon?</TextCadastro>
        </ViewCadastro>
        <ViewLogin>
          <Ionicons name={"radio-button-on-outline"} size={20} color={"#ddd"} />
          <TextLogin>Faça login. Já é cliente?</TextLogin>
        </ViewLogin>
        <TextEmail>E-mail ou número de telefone</TextEmail>
        <InputLogin />
        <MyButton onPress={() => navigation.navigate("Artista")}>
          <ButtonText>Continuar</ButtonText>
        </MyButton>
        <ContainerText1>
          Ao continuar, você concorda com as 
          <ContainerText2> Condições de Uso</ContainerText2>
          e com a
          <ContainerText2>Política de Privacidade</ContainerText2>
          da Amazon.
        </ContainerText1>
        <ContainerText2>Precisa de ajuda?</ContainerText2>
      </MyContainer>
      <LinksText1>Condições de Uso   Política de Privacidade</LinksText1>
      <LinksText2>Ajuda</LinksText2>
      <FooterText>@ 2021-2022 Amazon.com, Inc. ou suas afiliadas</FooterText>
      <StatusBar style="auto" />
    </Container>
  );
}