import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import IonIcons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

export default function SearchBar({ setCity }) {
	const [cityInput, setCityinput] = useState("Los Angeles");

	return (
		<View style={styles.searchBar}>
			<View style={{ marginLeft: 10, alignItems: "flex-end" }}>
				<IonIcons name="location-sharp" size={24} />
			</View>
			<TextInput
				placeholder="Search"
				style={{
					backgroundColor: "#eee",
					borderRadius: 20,
					fontWeight: "bold",
					marginTop: 7,
					flex: 1,
					flexDirection: "row",
					padding: 12,
					fontSize: 14,
				}}
				onChangeText={(cityInput) => setCityinput(cityInput)}
				value={cityInput}
			/>

			<TouchableOpacity
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginRight: 8,
					backgroundColor: "white",
					padding: 9,
					borderRadius: 30,
				}}
				onPress={() => setCity(cityInput)}
			>
				<AntDesign
					name="clockcircle"
					size={15}
					color="black"
					style={{ marginRight: 6 }}
				/>
				<Text style={{ fontWeight: "bold" }}>Search</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	searchBar: {
		flexDirection: "row",
		marginTop: 15,
		alignItems: "center",
		backgroundColor: "#eee",
		borderRadius: 50,
		marginHorizontal: 7,
	},
});
