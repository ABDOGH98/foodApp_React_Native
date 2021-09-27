import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HeaderTabs(props) {
	return (
		<View style={styles.headerTab__main}>
			<HeaderButton
				text="Delivery"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>
			<HeaderButton
				text="Pickup"
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>
		</View>
	);
}

const HeaderButton = (props) => (
	<TouchableOpacity
		style={{
			backgroundColor: props.activeTab === props.text ? "black" : "white",
			...styles.btn,
		}}
		onPress={() => props.setActiveTab(props.text)}
	>
		<Text
			style={{
				color: props.activeTab === props.text ? "white" : "black",
				...styles.text,
			}}
		>
			{props.text}
		</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	headerTab__main: {
		flexDirection: "row",
		alignSelf: "center",
		paddingTop: 2,
	},
	btn: {
		paddingHorizontal: 16,
		paddingVertical: 6,
		borderRadius: 30,
	},
	text: {
		fontSize: 17,
		fontWeight: "bold",
	},
});
