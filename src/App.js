import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmployeeList from "./components/employeeList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmpEdit from "./components/empEdit";

function App() {
  return (
    <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employee/edit/:id" element={<EmpEdit />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
