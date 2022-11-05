import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "kareem", email: "kareem@mail.com", password: "123" },
  { id: 2, name: "ahmed", email: "ahmed@mail.com", password: "111" },
];
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
