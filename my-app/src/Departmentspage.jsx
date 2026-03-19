// src/pages/DepartmentsPage.jsx
import { Avatar, PageHeader, Button } from "./ui";

const DEPT_COLORS = { Engineering: "#4f46e5", HR: "#be185d", Marketing: "#0369a1", Finance: "#15803d" };

export default function DepartmentsPage({ employees }) {
  const deptNames = [...new Set(employees.map((e) => e.department))];

  return (
    <div>
      <PageHeader title="Departments">
        <Button>+ New Department</Button>
      </PageHeader>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
        {deptNames.map((dept) => {
          const members = employees.filter((e) => e.department === dept);
          const active = members.filter((e) => e.status === "Active").length;
          const avgSalary = members.length ? Math.round(members.reduce((s, e) => s + (e.salary || 0), 0) / members.length) : 0;
          const color = DEPT_COLORS[dept] ?? "#4f46e5";
          const pct = Math.round(members.length / employees.length * 100);

          return (
            <div key={dept} style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, margin: 0 }}>{dept}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", margin: "2px 0 0" }}>{members.length} employees · {active} active</p>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: color + "20", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
                  {dept === "Engineering" ? "⚙️" : dept === "HR" ? "❤️" : dept === "Marketing" ? "📢" : "💹"}
                </div>
              </div>

              <div style={{ display: "flex", gap: 16, marginBottom: 14 }}>
                <div>
                  <p style={{ fontSize: 11, color: "#94a3b8", margin: "0 0 2px" }}>Avg Salary</p>
                  <p style={{ fontSize: 15, fontWeight: 600 }}>${avgSalary.toLocaleString()}</p>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: "#94a3b8", margin: "0 0 2px" }}>% of Workforce</p>
                  <p style={{ fontSize: 15, fontWeight: 600 }}>{pct}%</p>
                </div>
              </div>

              <div style={{ height: 6, background: "#f1f5f9", borderRadius: 3, marginBottom: 14, overflow: "hidden" }}>
                <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 3 }} />
              </div>

              <div style={{ display: "flex", gap: 6 }}>
                {members.slice(0, 5).map((m, i) => (
                  <Avatar key={m.id} name={m.name} index={i} />
                ))}
                {members.length > 5 && (
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#64748b" }}>
                    +{members.length - 5}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
