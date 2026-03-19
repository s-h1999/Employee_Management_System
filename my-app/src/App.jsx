import { useState } from "react";
import Sidebar from "./components/Sidebar";
import EmployeesPage from "./pages/EmployeesPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import AttendancePage from "./pages/AttendancePage";
import PayrollPage from "./pages/PayrollPage";
import SettingsPage from "./pages/SettingsPage";
import { employees as initialEmployees } from "./data/employees";

export default function App() {
  const [page, setPage] = useState("employees");
  const [employees, setEmployees] = useState(initialEmployees);

  const addEmployee = (emp) => {
    setEmployees((prev) => [...prev, { ...emp, id: prev.length + 1 }]);
  };

  const removeEmployee = (id) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  const updateEmployee = (id, data) => {
    setEmployees((prev) => prev.map((e) => (e.id === id ? { ...e, ...data } : e)));
  };

  const pages = { employees: EmployeesPage, departments: DepartmentsPage, attendance: AttendancePage, payroll: PayrollPage, settings: SettingsPage };
  const CurrentPage = pages[page];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "system-ui, sans-serif", background: "#f8f9fb" }}>
      <Sidebar activePage={page} onNavigate={setPage} />
      <main style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
        <CurrentPage employees={employees} onAdd={addEmployee} onRemove={removeEmployee} onUpdate={updateEmployee} />
      </main>
    </div>
  );
}
