// src/pages/AttendancePage.jsx
import { Avatar, Badge, PageHeader } from "./Ui";

// In a real app, fetch this from your backend for the selected week
function generateMockAttendance(employees) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  return employees.map((emp) => ({
    ...emp,
    attendance: days.map((day) => ({
      day,
      present: emp.status === "Inactive" ? false : Math.random() > 0.15,
    })),
  }));
}

export default function AttendancePage({ employees }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const records = generateMockAttendance(employees);

  const totalPresent = records.reduce((sum, r) => sum + r.attendance.filter((a) => a.present).length, 0);
  const totalSlots = records.length * days.length;
  const overallRate = totalSlots > 0 ? Math.round(totalPresent / totalSlots * 100) : 0;

  return (
    <div>
      <PageHeader title="Attendance">
        <span style={{ fontSize: 13, color: "#64748b", alignSelf: "center" }}>Week of Mar 17, 2026</span>
      </PageHeader>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginBottom: 20 }}>
        <div style={{ background: "#f8f9fb", border: "0.5px solid #e2e8f0", borderRadius: 10, padding: 14 }}>
          <p style={{ fontSize: 12, color: "#64748b" }}>Overall Rate</p>
          <p style={{ fontSize: 24, fontWeight: 700, color: "#1a202c" }}>{overallRate}%</p>
        </div>
        <div style={{ background: "#f8f9fb", border: "0.5px solid #e2e8f0", borderRadius: 10, padding: 14 }}>
          <p style={{ fontSize: 12, color: "#64748b" }}>Days Tracked</p>
          <p style={{ fontSize: 24, fontWeight: 700, color: "#1a202c" }}>{days.length}</p>
        </div>
        <div style={{ background: "#f8f9fb", border: "0.5px solid #e2e8f0", borderRadius: 10, padding: 14 }}>
          <p style={{ fontSize: 12, color: "#64748b" }}>Employees</p>
          <p style={{ fontSize: 24, fontWeight: 700, color: "#1a202c" }}>{employees.length}</p>
        </div>
      </div>

      <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead style={{ background: "#f8f9fb" }}>
            <tr>
              <th style={{ textAlign: "left", padding: "10px 14px", color: "#64748b", fontWeight: 500, fontSize: 12, borderBottom: "0.5px solid #e2e8f0" }}>Employee</th>
              {days.map((d) => (
                <th key={d} style={{ textAlign: "center", padding: "10px 14px", color: "#64748b", fontWeight: 500, fontSize: 12, borderBottom: "0.5px solid #e2e8f0" }}>{d}</th>
              ))}
              <th style={{ textAlign: "center", padding: "10px 14px", color: "#64748b", fontWeight: 500, fontSize: 12, borderBottom: "0.5px solid #e2e8f0" }}>Rate</th>
            </tr>
          </thead>
          <tbody>
            {records.map((emp, i) => {
              const presentCount = emp.attendance.filter((a) => a.present).length;
              const rate = Math.round(presentCount / days.length * 100);
              const rateVariant = rate >= 80 ? "active" : rate >= 60 ? "leave" : "inactive";
              return (
                <tr key={emp.id} style={{ borderBottom: "0.5px solid #e2e8f0" }}>
                  <td style={{ padding: "10px 14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Avatar name={emp.name} index={i} />
                      <span style={{ fontWeight: 500 }}>{emp.name}</span>
                    </div>
                  </td>
                  {emp.attendance.map(({ day, present }) => (
                    <td key={day} style={{ textAlign: "center", padding: "10px 14px", color: present ? "#16a34a" : "#dc2626", fontWeight: 600, fontSize: 16 }}>
                      {present ? "✓" : "✗"}
                    </td>
                  ))}
                  <td style={{ textAlign: "center", padding: "10px 14px" }}>
                    <Badge variant={rateVariant}>{rate}%</Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
