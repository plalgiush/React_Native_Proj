import { TextInput } from "react-native";
import { stylesInput } from "./styles";

export default function Input ({ placeholder, value, onChangeText, secureTextEntry }) {
    return (
        <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} style={stylesInput.textInput} />     
    );
};
