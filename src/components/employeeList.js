import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import {
  setEmployees,
  selectEmployee,
  deleteEmployee,
} from "../store/employeeSlice";
import { deleteEmp, getEmployeeList } from "../service/apiService";

const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployeeList();
  }, [dispatch]);

  const fetchEmployeeList = async () => {
    const response = await getEmployeeList();
    if (response?.isSuccess) {
      dispatch(setEmployees(response.data));
    }
  };

  const handleEdit = (employee) => {
    // dispatch(selectEmployee(employee));
    navigate(`/employee/edit/${employee._id}`);
  };

  const handleDelete = async (id) => {
    const response = await deleteEmp({ id: id }, true);
    if (response.isSuccess) {
      dispatch(deleteEmployee(id));
    }
  };

  return (
    <TableContainer
      component={Paper}
      style={{ margin: "20px auto", maxWidth: "80%" }}
    >
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#f5f5f5" }}>
            <TableCell align="center">
              <strong>Name</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Email</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Phone</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Salary</strong>
            </TableCell>
            <TableCell align="center">
              <strong>Actions</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees && employees.length > 0 ? (
            employees.map((employee) => (
              <TableRow
                key={employee._id}
                style={{
                  backgroundColor:
                    employee._id % 2 === 0 ? "#fafafa" : "#ffffff",
                }}
                hover
              >
                <TableCell align="center">{employee.fullName}</TableCell>
                <TableCell align="center">{employee.email}</TableCell>
                <TableCell align="center">{employee.phone}</TableCell>
                <TableCell align="center">{employee.salary}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit Employee">
                    <IconButton
                      color="primary"
                      onClick={() => handleEdit(employee)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete Employee">
                    <IconButton
                      color="secondary"
                      onClick={() => handleDelete(employee._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EmployeeList;
