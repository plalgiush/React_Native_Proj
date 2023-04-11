import { DefaultTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

export const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: '#25292e',
	},
};

export const stylesMainContainer = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
	},
});