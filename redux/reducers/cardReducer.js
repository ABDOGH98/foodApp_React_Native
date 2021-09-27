import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
	name: "card",
	initialState: {
		selectedItems: { items: [], restaurantName: "" },
	},
	reducers: {
		ADD_ITEM: (state, action) => {
			if (
				action.payload.restaurantName !== state.selectedItems.restaurantName
			) {
				state.selectedItems.restaurantName = "";
				state.selectedItems.items = [];
			}
			if (action.payload.checkBoxValue === true) {
				state.selectedItems = {
					items: [...state.selectedItems.items, action.payload.item],
					restaurantName: action.payload.restaurantName,
				};
			} else {
				state.selectedItems.items = state.selectedItems.items.filter(
					(item) => item.title !== action.payload.item.title,
				);
				if (state.selectedItems.items.length === 0) {
					state.selectedItems.restaurantName = "";
				}
			}
			console.log("---------------------------------- ");
			console.log(state);
		},
	},
});

export const { ADD_ITEM } = slice.actions;

export const selectCard = (state) => state.card.selectedItems;

export default slice.reducer;
