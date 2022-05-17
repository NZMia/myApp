import { createSlice } from '@reduxjs/toolkit';

const currentTheme = localStorage.getItem('lightMode');

export const toggleSlice = createSlice({
  name: 'toggle',

  initialState: {
    toggleState: false || JSON.parse(currentTheme)
  },

  reducers: {
    toggleSwitch(state) {
      state.toggleState = !state.toggleState;

      localStorage.setItem(
        'lightMode',
        JSON.stringify(state.toggleState ? true : false)
      );
    }
  }
});
export const { toggleSwitch } = toggleSlice.actions;

export default toggleSlice.reducer;
