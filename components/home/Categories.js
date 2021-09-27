import React from "react";
import {
	Text,
	Image,
	StyleSheet,
	ScrollView,
	View,
	FlatList,
} from "react-native";

const items = [
	{
		image: require("../../assets/images/shopping-bag.png"),
		text: "Pick-up",
	},
	{
		image: require("../../assets/images/soft-drink.png"),
		text: "Soft Drinks",
	},
	{
		image: require("../../assets/images/bread.png"),
		text: "Bakery Items",
	},
	{
		image: require("../../assets/images/fast-food.png"),
		text: "Fast Foods",
	},
	{
		image: require("../../assets/images/deals.png"),
		text: "Deals",
	},
	{
		image: require("../../assets/images/coffee.png"),
		text: "Coffee & Tea",
	},
	{
		image: require("../../assets/images/desserts.png"),
		text: "Desserts",
	},
];

export default function Categories() {
	return (
		<ScrollView
			horizontal
			style={styles.categories}
			showsHorizontalScrollIndicator={false}
		>
			{items.map((item, index) => (
				<View style={styles.item} key={index}>
					<Image source={item.image} style={{ width: 50, height: 40 }} />
					<Text style={styles.textCategorie}>{item.text}</Text>
				</View>
			))}
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	textCategorie: {
		fontWeight: "bold",
		fontSize: 14,
	},
	categories: {
		marginTop: 10,
		backgroundColor: "white",
		paddingVertical: 7,
		paddingLeft: 20,
	},
	item: {
		alignItems: "center",
		marginRight: 30,
	},
});
