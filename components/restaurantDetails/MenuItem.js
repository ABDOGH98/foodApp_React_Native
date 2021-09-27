import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { ADD_ITEM, selectCard } from "../../redux/reducers/cardReducer";

export default function MenuItem({ foods, restaurantName, hideCheckBox }) {
	const dispatch = useDispatch();
	const card = useSelector(selectCard);

	const isFoodInCard = (food, card) =>
		Boolean(
			card.items.find(
				(item) =>
					item.title === food.title && restaurantName === card.restaurantName,
			),
		);
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
			{foods.map((food, index) => (
				<View key={index}>
					<View style={styles.menuItem}>
						{hideCheckBox ? (
							<></>
						) : (
							<BouncyCheckBox
								iconStyle={{ borderColor: "lightgray", borderRadius: 7 }}
								fillColor="green"
								onPress={(checkBoxValue) =>
									dispatch(
										ADD_ITEM({ item: food, restaurantName, checkBoxValue }),
									)
								}
								isChecked={isFoodInCard(food, card)}
							/>
						)}

						<FoodInfo food={food} />
						<FoodImage food={food} />
					</View>
					<Divider
						width={1}
						orientation="vertical"
						style={{ marginHorizontal: 20 }}
					/>
				</View>
			))}
		</ScrollView>
	);
}

const FoodInfo = (props) => (
	<View style={{ width: 240, justifyContent: "space-evenly" }}>
		<Text style={styles.title}>{props.food.title}</Text>
		<Text>{props.food.description}</Text>
		<Text>{props.food.price}</Text>
	</View>
);

const FoodImage = (props) => (
	<View>
		<Image
			source={{ uri: props.food.image }}
			style={{ width: 100, height: 100, borderRadius: 8 }}
		/>
	</View>
);

const styles = StyleSheet.create({
	menuItem: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
	},
	title: {
		fontSize: 19,
		fontWeight: "bold",
	},
});
