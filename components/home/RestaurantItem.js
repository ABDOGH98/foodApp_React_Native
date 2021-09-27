import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export const localRestaurants = [
	{
		name: "Beachside Bar",
		image_url:
			"https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
		categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1244,
		rating: 4.5,
	},
	{
		name: "Benihana",
		image_url:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
		categories: ["Cafe", "Bar"],
		price: "$$",
		reviews: 1244,
		rating: 3.7,
	},
	{
		name: "India's Grill",
		image_url:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
		categories: ["Indian", "Bar"],
		price: "$$",
		reviews: 700,
		rating: 4.9,
	},
];

export default function RestaurantItem({ navigation, restaurantData }) {
	return (
		<View>
			{restaurantData.map((retaurant, index) => (
				<TouchableOpacity
					activeOpacity={1}
					key={index}
					onPress={() =>
						navigation.navigate("RestaurantDetail", {
							name: retaurant.name,
							image: retaurant.image_url,
							price: retaurant.price,
							reviews: retaurant.review_count,
							rating: retaurant.rating,
							categories: retaurant.categories,
						})
					}
				>
					<View
						style={{ marginTop: 10, padding: 15, backgroundColor: "white" }}
					>
						<RestaurantImage image={retaurant.image_url} />
						<RestaurantInfo name={retaurant.name} rating={retaurant.rating} />
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
}

const RestaurantImage = ({ image }) => (
	<>
		<Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
		<TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
			<AntDesign name="hearto" size={25} color="white" />
		</TouchableOpacity>
	</>
);

const RestaurantInfo = ({ name, rating }) => (
	<View
		style={{
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: 10,
			paddingHorizontal: 10,
		}}
	>
		<View>
			<Text style={{ fontSize: 16, fontWeight: "bold" }}>{name}</Text>
			<Text style={{ fontSize: 12, color: "gray" }}>30-45 min</Text>
		</View>
		<View
			style={{
				backgroundColor: "#eee",
				height: 30,
				width: 30,
				alignItems: "center",
				borderRadius: 15,
				justifyContent: "center",
			}}
		>
			<Text>{rating}</Text>
		</View>
	</View>
);
