import { createSlice } from "@reduxjs/toolkit";

const OrderSlice = createSlice({
    name: "order",
    initialState: {
        totalorders: "",

    },
    reducers: {
        NoOrder: (state, action) => {
            state.totalorders = action.payload
        }
    }
})
export const { NoOrder } = OrderSlice.actions;
export default OrderSlice.reducer;
