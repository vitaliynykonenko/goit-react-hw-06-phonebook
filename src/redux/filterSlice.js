import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(_, { payload }) {
      return payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const getFilter = state => state.filter;