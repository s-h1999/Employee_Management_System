// src/pages/EmployeesPage.jsx
import { useState } from "react";
import { Avatar, Badge, MetricCard, PageHeader, Button, Table, Modal, FormRow, Input, Select } from "../components/ui";

const DEPT_BADGE = { Engineering: "eng", HR: "hr", Marketing: "mkt", Finance: "fin" };
const STATUS_BADGE = { Active: "active", Inactive: "inactive", Leave: "leave" };

const DEPT_OPTIONS = ["Engineering", "HR", "Marketing", "Finance"];
const STATUS_OPTIONS = ["Active", "Leave", "Inactive"];

const emptyForm = { name: "", email: "", phone: "", department: "Engineering", role: "", salary: "", joinDate: "", status: "Active" };

export default function EmployeesPage({ employees, onAdd, onRemove, onUpdate }) {
  const [search, setSearch] = useState("");
  const [filterDept, setFilterDept] = useState("All");
  const [showAdd, setShowAdd] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const [form, setForm] = useState(emptyForm);

  const filtered = employees.filter((e) =>
    (filterDept === "All" || e.department === filterDept) &&
    (e.name.toLowerCase().includes(search.toLowerCase()) ||
     e.role.toLowerCase().includes(search.toLowerCase()) ||
     e.email.toLowerCase().includes(search.toLowerCase()))
  );

  const active = employees.filter((e) => e.status === "Active").length;
  const onLeave = employees.filter((e) => e.status === "Leave").length;
  const depts = [...new Set(employees.map((e) => e.department))].length;

  function openAdd() { setForm(emptyForm); setEditTarget(null); setShowAdd(true); }
  function openEdit(emp) { setForm({ ...emp }); setEditTarget(emp.id); setShowAdd(true); }
  function closeModal() { setShowAdd(false); setEditTarget(null); }

  function handleSubmit() {
    if (!form.name || !form.email) return alert("Name and email are required.");
    if (editTarget !== null) {
      onUpdate(editTarget, form);
    } else {
      onAdd(form);
    }
    closeModal();
  }

  const change = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }));

  const rows = filtered.map((emp, i) => (
    <tr key={emp.id} style={{ borderBottom: "0.5px solid #e2e8f0" }}>
      <td style={{ padding: "11px 14px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Avatar name={emp.name} index={i} />
          <div>
            <p style={{ fontWeight: 500, fontSize: 14, margin: 0 }}>{emp.name}</p>
            <p style={{ fontSize: 12, color: "#64748b", margin: 0 }}>{emp.email}</p>
          </div>
        </div>
      </td>
      <td style={{ padding: "11px 14px" }}><Badge variant={DEPT_BADGE[emp.department] ?? "default"}>{emp.department}</Badge></td>
      <td style={{ padding: "11px 14px", color: "#64748b", fontSize: 14 }}>{emp.role}</td>
      <td style={{ padding: "11px 14px" }}><Badge variant={STATUS_BADGE[emp.status] ?? "default"}>{emp.status}</Badge></td>
      <td style={{ padding: "11px 14px", fontWeight: 500, fontSize: 14 }}>${emp.salary?.toLocaleString()}</td>
      <td style={{ padding: "11px 14px" }}>
        <div style={{ display: "flex", gap: 6 }}>
          <Button size="sm" variant="ghost" onClick={() => openEdit(emp)}>Edit</Button>
          <Button size="sm" variant="danger" onClick={() => { if (window.confirm(`Remove ${emp.name}?`)) onRemove(emp.id); }}>Remove</Button>
        </div>
      </td>
    </tr>
  ));

  return (
    <div>
      <PageHeader title="Employees">
        <Button onClick={openAdd}>+ Add Employee</Button>
      </PageHeader>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
        <MetricCard label="Total Employees" value={employees.length} sub="+2 this month" />
        <MetricCard label="Active" value={active} sub={`${Math.round(active / employees.length * 100)}% of staff`} />
        <MetricCard label="On Leave" value={onLeave} subColor="#d97706" sub="Currently away" />
        <MetricCard label="Departments" value={depts} />
      </div>

      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        <input
          placeholder="Search by name, role, or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: "8px 12px", border: "0.5px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }}
        />
        <select
          value={filterDept}
          onChange={(e) => setFilterDept(e.target.value)}
          style={{ padding: "8px 12px", border: "0.5px solid #e2e8f0", borderRadius: 8, fontSize: 14 }}
        >
          <option value="All">All Departments</option>
          {DEPT_OPTIONS.map((d) => <option key={d}>{d}</option>)}
        </select>
      </div>

      <Table
        headers={["Employee", "Department", "Role", "Status", "Salary", "Actions"]}
        rows={rows}
      />

      {showAdd && (
        <Modal title={editTarget ? "Edit Employee" : "Add New Employee"} onClose={closeModal}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <FormRow label="Full Name">
              <Input value={form.name} onChange={change("name")} placeholder="Jane Smith" />
            </FormRow>
            <FormRow label="Email">
              <Input value={form.email} onChange={change("email")} type="email" placeholder="jane@company.com" />
            </FormRow>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <FormRow label="Phone">
              <Input value={form.phone} onChange={change("phone")} placeholder="+1-555-0100" />
            </FormRow>
            <FormRow label="Role / Job Title">
              <Input value={form.role} onChange={change("role")} placeholder="Software Engineer" />
            </FormRow>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <FormRow label="Department">
              <Select value={form.department} onChange={change("department")} options={DEPT_OPTIONS} />
            </FormRow>
            <FormRow label="Status">
              <Select value={form.status} onChange={change("status")} options={STATUS_OPTIONS} />
            </FormRow>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <FormRow label="Salary (USD)">
              <Input value={form.salary} onChange={change("salary")} type="number" placeholder="70000" />
            </FormRow>
            <FormRow label="Join Date">
              <Input value={form.joinDate} onChange={change("joinDate")} type="date" />
            </FormRow>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 16 }}>
            <Button variant="outline" onClick={closeModal}>Cancel</Button>
            <Button onClick={handleSubmit}>{editTarget ? "Save Changes" : "Add Employee"}</Button>
          </div>
        </Modal>
      )}
    </div>
  );
}
