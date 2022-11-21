import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';
import { Container } from "./styles";

export const MyNavbar = () => {
    return (
        <Container>
            <TouchableOpacity onPress={() => console.log("Início")}>
                <Ionicons name={"home-outline"} size={30} color={"#ddd"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Encontrar")}>
                <Ionicons name={"search-outline"} size={30} color={"#ddd"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Biblioteca")}>
                <Ionicons name={"person-outline"} size={30} color={"#00BCD4"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Alexa")}>
                <Ionicons name={"radio-button-off-outline"} size={30} color={"#ddd"} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Upgrade")}>
                <Ionicons name={"star-outline"} size={30} color={"#ddd"} />
            </TouchableOpacity>
        </Container>
    )
};