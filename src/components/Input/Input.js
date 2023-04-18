import { TextInput } from "react-native";
import { stylesInput } from "./styles";

export default function Input ({ placeholder, value, onChangeText }) {
    return (
        <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} style={stylesInput.input} />     
    );
};
