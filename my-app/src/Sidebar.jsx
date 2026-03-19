// src/components/Sidebar.jsx
const navItems = [
  { id: "employees", label: "Employees", icon: "👥" },
  { id: "departments", label: "Departments", icon: "🏢" },
  { id: "attendance", label: "Attendance", icon: "📅" },
  { id: "payroll", label: "Payroll", icon: "💰" },
  { id: "settings", label: "Settings", icon: "⚙️" },
];

export default function Sidebar({ activePage, onNavigate }) {
  return (
    <aside style={{ width: 210, background: "#fff", borderRight: "0.5px solid #e2e8f0", display: "flex", flexDirection: "column", flexShrink: 0 }}>
      <div style={{ padding: "20px 16px", borderBottom: "0.5px solid #e2e8f0" }}>
        <span style={{ fontWeight: 700, fontSize: 16, color: "#4f46e5" }}>EMS</span>
        <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 2 }}>Employee Management</p>
      </div>
      <nav style={{ flex: 1, padding: "8px 0" }}>
        {navItems.map((item) => {
          const isActive = activePage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "10px 16px",
                border: "none", background: isActive ? "#eef2ff" : "transparent",
                color: isActive ? "#4f46e5" : "#64748b", fontWeight: isActive ? 600 : 400,
                fontSize: 14, cursor: "pointer", textAlign: "left", transition: "all .15s",
              }}
            >
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              {item.label}
            </button>
          );
        })}
      </nav>
      <div style={{ padding: "12px 16px", borderTop: "0.5px solid #e2e8f0", fontSize: 12, color: "#94a3b8" }}>
        v1.0.0 · Acme Corp
      </div>
    </aside>
  );
}
