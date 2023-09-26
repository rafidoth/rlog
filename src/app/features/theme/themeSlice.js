import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      if (state.theme === "light") state.theme = "dark";
      else if (state.theme === "dark") state.theme = "light";
    },
    assignTheme: (state, action) => {
      state.theme = action.payload.theme;
    },
  },
});

export const { changeTheme, assignTheme } = themeSlice.actions;

export default themeSlice.reducer;
