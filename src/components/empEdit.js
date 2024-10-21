import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee } from "../store/employeeSlice";
import EmpImage from "../assets/EmpImage.png";
import { editEmp, getIndividualEmp } from "../service/apiService";

const EmpEdit = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [employeeData, setEmployeeData] = useState({
    fullName: "",
    email: "",
    phone: "",
    image: "",
    age: "",
    salary: "",
  });

  useEffect(() => {
    fetchSingleEmployee();
  }, [id]);

  const fetchSingleEmployee = async () => {
    const response = await getIndividualEmp({ id: id });
    if (response) {
      setEmployeeData(response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("empdata", employeeData);
    const response = await editEmp(id, employeeData, true);
    if (response.isSuccess) {
      dispatch(updateEmployee({ ...employeeData, ...response }));
      navigate("/");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Edit Employee: {employeeData?.fullName}</h2>
      <img src={EmpImage} alt="Employee" style={{ width: "250px" }} />
      <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={2}
        >
          <Box width={{ xs: "100%", sm: "45%" }}>
            <TextField
              label="Name"
              name="fullName"
              value={employeeData?.fullName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
          <Box width={{ xs: "100%", sm: "45%" }}>
            <TextField
              label="Email"
              name="email"
              value={employeeData?.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
          <Box width={{ xs: "100%", sm: "45%" }}>
            <TextField
              label="Phone"
              name="phone"
              value={employeeData?.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
          <Box width={{ xs: "100%", sm: "45%" }}>
            <TextField
              label="Age"
              name="age"
              value={employeeData?.age}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
          <Box width={{ xs: "100%", sm: "45%" }}>
            <TextField
              label="Salary"
              name="salary"
              value={employeeData?.salary}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
          <Box width={{ xs: "100%", sm: "45%" }}>
            <TextField
              label="Image URL"
              name="image"
              value={employeeData?.image}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Box>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Update
        </Button>
      </form>
    </div>
  );
};

export default EmpEdit;
