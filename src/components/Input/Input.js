import { TextInput } from "react-native";
import { stylesInput } from "./styles";

export default function Input ({ placeholder }) {
    return (
        <TextInput placeholder={placeholder} style={stylesInput.input} />     
    );
};
