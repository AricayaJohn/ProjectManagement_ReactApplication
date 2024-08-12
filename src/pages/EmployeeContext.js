import React, { createContext, useState, useContext, useEffect } from 'react';

const EmployeeContext = createContext();

export const useEmployees = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error("Error fetching employees:", error));
  }, []);

  const addEmployee = (newEmployee) => {
    setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
