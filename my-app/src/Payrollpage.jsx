// src/pages/PayrollPage.jsx
import { Avatar, Badge, MetricCard, PageHeader, Button } from "../components/ui";

export default function PayrollPage({ employees }) {
  const totalSalary = employees.reduce((s, e) => s + (Number(e.salary) || 0), 0);
  const avgSalary = employees.length ? Math.round(totalSalary / employees.length) : 0;

  return (
    <div>
      <PageHeader title="Payroll">
        <Button>Run Payroll</Button>
        <Button variant="outline">Export CSV</Button>
      </PageHeader>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 20 }}>
        <MetricCard label="Monthly Payroll" value={`$${Math.round(totalSalary / 12).toLocaleString()}`} sub="Per month" />
        <MetricCard label="Annual Payroll" value={`$${totalSalary.toLocaleString()}`} />
        <MetricCard label="Avg Salary" value={`$${avgSalary.toLocaleString()}`} />
        <MetricCard label="Next Run" value="Apr 1" sub="14 days away" subColor="#d97706" />
      </div>

      <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
          <thead style={{ background: "#f8f9fb" }}>
            <tr>
              {["Employee", "Base Salary", "Bonus (5%)", "Tax (12%)", "Net Pay", "Status"].map((h) => (
                <th key={h} style={{ textAlign: "left", padding: "10px 14px", color: "#64748b", fontWeight: 500, fontSize: 12, borderBottom: "0.5px solid #e2e8f0" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, i) => {
              const base = Number(emp.salary) || 0;
              const bonus = Math.round(base * 0.05);
              const tax = Math.round(base * 0.12);
              const net = base + bonus - tax;
              return (
                <tr key={emp.id} style={{ borderBottom: "0.5px solid #e2e8f0" }}>
                  <td style={{ padding: "11px 14px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Avatar name={emp.name} index={i} />
                      <div>
                        <p style={{ margin: 0, fontWeight: 500 }}>{emp.name}</p>
                        <p style={{ margin: 0, fontSize: 12, color: "#64748b" }}>{emp.role}</p>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: "11px 14px" }}>${base.toLocaleString()}</td>
                  <td style={{ padding: "11px 14px", color: "#16a34a", fontWeight: 500 }}>+${bonus.toLocaleString()}</td>
                  <td style={{ padding: "11px 14px", color: "#dc2626", fontWeight: 500 }}>-${tax.toLocaleString()}</td>
                  <td style={{ padding: "11px 14px", fontWeight: 700 }}>${net.toLocaleString()}</td>
                  <td style={{ padding: "11px 14px" }}>
                    <Badge variant={emp.status === "Active" ? "active" : "inactive"}>
                      {emp.status === "Active" ? "Processed" : "Pending"}
                    </Badge>
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
