import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./pages/Home";
import RestaurantDetail from "./pages/RestaurantDetail";
import { Provider } from "react-redux";
import store from "./redux/store";
import OrderCompleted from "./pages/OrderCompleted";

export default function RootNavigation() {
	const stack = createNativeStackNavigator();
	const screenOption = {
		headerShown: false,
	};
	return (
		<Provider store={store}>
			<NavigationContainer>
				<stack.Navigator screenOptions={screenOption}>
					<stack.Screen name="Home" component={Home} />
					<stack.Screen
						name="RestaurantDetail"
						component={RestaurantDetail}
						options={{ animation: "slide_from_right" }}
					/>
					<stack.Screen name="OrderCompleted" component={OrderCompleted} />
				</stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
