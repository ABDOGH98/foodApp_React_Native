import React from "react";
import { View, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function BottomTabs() {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-around",
				paddingTop: 10,
				width: "100%",
				backgroundColor: "#F1F1F1",
			}}
		>
			<Icon text="Home" icon="home" />
			<Icon text="Browse" icon="search" />
			<Icon text="Grocery" icon="shopping-bag" />
			<Icon text="Orders" icon="receipt" />
			<Icon text="Account" icon="user" />
		</View>
	);
}

const Icon = ({ text, icon }) => (
	<View style={{ alignItems: "center" }}>
		<FontAwesome5 name={icon} size={30} color="black" />
		<Text style={{ fontWeight: "bold", fontSize: 15 }}>{text}</Text>
	</View>
);
