import React from "react";
import { View, Text, Image, StatusBar } from "react-native";

export default function About(props) {
	const { name, image, price, reviews, rating, categories } =
		props.route.params;

	const formattedCategories = categories.map((cat) => cat.title).join(" • ");

	const description = `${formattedCategories} ${
		price ? " • " + price : ""
	} • 🎫 • ${rating} ⭐ (${reviews}+)`;
	return (
		<View>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="light-content"
			/>
			<RestaurantImage image={image} />
			<RestaurantTitle name={name} />
			<RestaurantDescription description={description} />
		</View>
	);
}

const RestaurantImage = (props) => (
	<Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = (props) => (
	<Text
		style={{
			fontSize: 29,
			fontWeight: "bold",
			marginTop: 10,
			marginHorizontal: 15,
		}}
	>
		{props.name}
	</Text>
);

const RestaurantDescription = (props) => (
	<Text
		style={{
			marginTop: 10,
			marginHorizontal: 15,
			fontWeight: "600",
			fontSize: 15.5,
		}}
	>
		{props.description}
	</Text>
);
