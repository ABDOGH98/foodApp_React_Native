import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { selectCard } from "../../redux/reducers/cardReducer";
import OrderItem from "./OrderItem";
import LottieView from "lottie-react-native";

export default function ViewCarte({ navigation, restaurantName }) {
	const [modalVisible, setModalVisible] = useState(false);
	const card = useSelector(selectCard);
	const [loading, setLoading] = useState(false);

	const totalUSD =
		restaurantName === card.restaurantName &&
		card.items
			.map((item) => Number(item.price.replace("$", "")))
			.reduce((prev, curr) => prev + curr, 0);

	const checkoutModalContent = () => {
		return (
			<>
				<View style={styles.modalContainer}>
					<View style={styles.modalCheckoutContainer}>
						<Text style={styles.restaurantName}> {restaurantName} </Text>
						{card.items.map((item, index) => (
							<OrderItem key={index} item={item} />
						))}
						<View style={styles.subTotalContainer}>
							<Text style={styles.subTotalText}>Total</Text>
							<Text style={styles.subTotalText}>$ {totalUSD}</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "center",
							}}
						>
							<TouchableOpacity
								style={{
									marginTop: 10,
									backgroundColor: "black",
									width: 250,
									flexDirection: "row",
									alignItems: "center",
									justifyContent: "space-evenly",
									padding: 13,
									borderRadius: 30,
								}}
								onPress={() => {
									setModalVisible(false);
									setLoading(true);
									setTimeout(() => {
										setLoading(false);
										navigation.navigate("OrderCompleted", {
											restaurantName,
											totalUSD,
										});
									}, 3000);
								}}
							>
								<Text
									style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
								>
									Checkout
								</Text>
								<Text
									style={{ color: "white", fontSize: 20, fontWeight: "600" }}
								>
									{totalUSD ? "$ " + totalUSD : ""}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</>
		);
	};
	const styles = StyleSheet.create({
		modalContainer: {
			flex: 1,
			justifyContent: "flex-end",
			backgroundColor: "rgba(0,0,0,0.7)",
		},
		modalCheckoutContainer: {
			backgroundColor: "white",
			padding: 15,
			height: 500,
			borderWidth: 1,
		},
		restaurantName: {
			textAlign: "center",
			fontWeight: "700",
			fontSize: 25,
			marginBottom: 10,
		},
		subTotalContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			marginTop: 15,
		},
		subTotalText: {
			textAlign: "left",
			fontWeight: "600",
			fontSize: 20,
			marginBottom: 10,
		},
	});

	return (
		<>
			<Modal
				animationType="slide"
				visible={modalVisible}
				transparent={true}
				onRequestClose={() => setModalVisible(false)}
			>
				{checkoutModalContent()}
			</Modal>
			{totalUSD ? (
				<View
					style={{
						flex: 1,
						alignItems: "center",
						flexDirection: "row",
						position: "absolute",
						bottom: 10,
						justifyContent: "center",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "center",
							width: "100%",
						}}
					>
						<TouchableOpacity
							style={{
								marginTop: 20,
								backgroundColor: "black",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "space-around",
								padding: 13,
								borderRadius: 30,
								width: 200,
								position: "relative",
							}}
							onPress={() => setModalVisible(true)}
						>
							<Text
								style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
							>
								View Carte
							</Text>
							<Text
								style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
							>
								$ {totalUSD}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<></>
			)}
			{loading ? (
				<View
					style={{
						backgroundColor: "black",
						position: "absolute",
						top: 0,
						opacity: 0.6,
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						height: " 100%",
						width: "100%",
					}}
				>
					<LottieView
						style={{ height: 200 }}
						source={require("../../assets/animations/scanner.json")}
						autoPlay
						speed={3}
					/>
				</View>
			) : (
				<></>
			)}
		</>
	);
}
