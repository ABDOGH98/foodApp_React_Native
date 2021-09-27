import React, { useEffect, useState } from "react";
import {
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	View,
} from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import RestaurantItem, {
	localRestaurants,
} from "../components/home/RestaurantItem";
import SearchBar from "../components/home/SearchBar";
import { globalStyles } from "../styles/GlobalStyle";

const YELP_API_KEY =
	"mBxImaj86YdK6HwBRxDkQgqiqSNvX2nMKEB8TRgujeloUtAdOhXOmHa5tFzz6q-YQBvYVTCTa2A2RQd9REn4AwrqcxywBr5c52fj55JxaOJiI82_eJTQQqWuIbBMYXYx";

export default function Home({ navigation }) {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);
	const [activeTab, setActiveTab] = useState("Delivery");
	const [city, setCity] = useState("Los Angeles");
	const getRestaurantFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};
		if (city !== "") {
			return fetch(yelpUrl, apiOptions)
				.then((res) => res.json())
				.then((data) => {
					setRestaurantData(
						data.businesses.filter((business) =>
							business.transactions.includes(activeTab.toLocaleLowerCase()),
						),
					);
				});
		}
	};
	useEffect(() => {
		getRestaurantFromYelp();
	}, [city, activeTab]);
	return (
		<SafeAreaView style={globalStyles.safeView}>
			<StatusBar backgroundColor="transparent" barStyle="dark-content" />
			<View style={styles.headerTabs}>
				<HeaderTabs setActiveTab={setActiveTab} activeTab={activeTab} />
				<SearchBar city={city} setCity={setCity} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItem
					restaurantData={restaurantData}
					navigation={navigation}
				/>
			</ScrollView>
			<Divider width={1} style={{ marginVertical: 1 }} />
			<BottomTabs />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	headerTabs: {
		backgroundColor: "white",
		paddingBottom: 20,
	},
});
