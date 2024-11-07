import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        userid: "",
        name: "",
        email: "",
        role: [],
        gender: "",
        phone:"",
        avatar: "",
        joinedin: "",
    },
    reducers: {
        setId: (state, action) => {
            state.userid = action.payload;
        },
        setName: (state, action) => {
            state.name = action.payload;
        },
        SETMAIL: (state, action) => {
            state.email = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setAvatar: (state, action) => {
            state.avatar = action.payload;
        },
        setJoinedIn: (state, action) => {
            state.joinedin = action.payload;
        },
    }
});

export const { setId, setName, SETMAIL, setRole, setGender, setAvatar, setJoinedIn } = UserSlice.actions;
export default UserSlice.reducer;
