import React from "react";
import { Text, SafeAreaView, StatusBar, View, ScrollView } from "react-native";
import { globalStyles } from "../styles/GlobalStyle";
import LottieView from "lottie-react-native";
import { useSelector } from "react-redux";
import { selectCard } from "../redux/reducers/cardReducer";
import MenuItem from "../components/restaurantDetails/MenuItem";
import { Divider } from "react-native-elements";

export default function OrderCompleted() {
	const card = useSelector(selectCard);
	const totalUSD = card.items
		.map((item) => Number(item.price.replace("$", "")))
		.reduce((prev, curr) => prev + curr, 0);
	return (
		<SafeAreaView
			style={{
				...globalStyles.safeView,
				marginTop: StatusBar.currentHeight,
				backgroundColor: "white",
			}}
		>
			<View style={{ margin: 15, alignItems: "center", flex: 1 }}>
				<StatusBar barStyle="dark-content" backgroundColor="white" />
				<LottieView
					style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
					source={require("../assets/animations/check-mark.json")}
					autoPlay
					loop={false}
					speed={0.9}
				/>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>
					Your order at {card.restaurantName} has been placed from ${totalUSD}
				</Text>
				<Divider width={2} orientation="vertical" style={{ marginTop: 15 }} />
				<ScrollView
					sty
					style={{ flex: 1 }}
					showsVerticalScrollIndicator={false}
				>
					<MenuItem
						foods={card.items}
						restaurantName={card.restaurantName}
						hideCheckBox={true}
					/>
					<LottieView
						style={{ height: 200, alignSelf: "center", marginBottom: 30 }}
						source={require("../assets/animations/cooking.json")}
						autoPlay
						speed={0.9}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
