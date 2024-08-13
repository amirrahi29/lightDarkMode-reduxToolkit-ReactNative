import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk to initialize the dark mode state
export const initializeDarkMode = createAsyncThunk(
  'darkMode/initializeDarkMode',
  async () => {
    try {
      const darkMode = await AsyncStorage.getItem('darkMode');
      return JSON.parse(darkMode) || false;
    } catch (error) {
      console.error('Failed to load dark mode setting:', error);
      return false; // Default value
    }
  }
);

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: {
    mode: false, // Default value
    loading: 'idle',
    error: null
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializeDarkMode.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(initializeDarkMode.fulfilled, (state, action) => {
        state.mode = action.payload;
        state.loading = 'idle';
      })
      .addCase(initializeDarkMode.rejected, (state, action) => {
        state.loading = 'idle';
        state.error = action.error.message;
      });
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export const saveDarkMode = (mode) => async (dispatch) => {
  try {
    await AsyncStorage.setItem('darkMode', JSON.stringify(mode));
  } catch (error) {
    console.error('Failed to save dark mode setting:', error);
  }
};

export default darkModeSlice.reducer;
