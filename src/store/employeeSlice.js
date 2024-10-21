import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  employees: [],
  selectedEmployee: null,
};

const employeeSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployees(state, action) {
      state.employees = action.payload;
    },
    selectEmployee(state, action) {
      state.selectedEmployee = action.payload;
    },
    updateEmployee: (state, action) => {
      const index = state.employees.findIndex(emp => emp._id === action.payload._id);
      if (index !== -1) {
        state.employees[index] = action.payload; 
      }
    },
    deleteEmployee(state, action) {
      state.employees = state.employees.filter(emp => emp._id !== action.payload);
    },
  },
});

export const { setEmployees, selectEmployee, updateEmployee, deleteEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
