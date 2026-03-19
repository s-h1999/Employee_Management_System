// src/components/ui.jsx
// Reusable UI primitives used across pages

export function Avatar({ name, index = 0 }) {
  const palettes = [
    ["#ede9fe", "#6d28d9"], ["#fce7f3", "#be185d"], ["#e0f2fe", "#0369a1"],
    ["#dcfce7", "#15803d"], ["#fef3c7", "#d97706"], ["#fee2e2", "#dc2626"],
  ];
  const [bg, color] = palettes[index % palettes.length];
  const initials = name.split(" ").map((w) => w[0]).join("").toUpperCase();
  return (
    <div style={{
      width: 34, height: 34, borderRadius: "50%", background: bg, color,
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 12, fontWeight: 600, flexShrink: 0,
    }}>
      {initials}
    </div>
  );
}

export function Badge({ children, variant = "default" }) {
  const styles = {
    active:   { background: "#dcfce7", color: "#15803d" },
    inactive: { background: "#fee2e2", color: "#dc2626" },
    leave:    { background: "#fef3c7", color: "#d97706" },
    eng:      { background: "#ede9fe", color: "#6d28d9" },
    hr:       { background: "#fce7f3", color: "#be185d" },
    mkt:      { background: "#e0f2fe", color: "#0369a1" },
    fin:      { background: "#dcfce7", color: "#15803d" },
    default:  { background: "#f1f5f9", color: "#475569" },
  };
  return (
    <span style={{ ...styles[variant], padding: "3px 9px", borderRadius: 20, fontSize: 12, fontWeight: 500 }}>
      {children}
    </span>
  );
}

export function MetricCard({ label, value, sub, subColor = "#16a34a" }) {
  return (
    <div style={{ background: "#f8f9fb", border: "0.5px solid #e2e8f0", borderRadius: 10, padding: "14px 16px" }}>
      <p style={{ fontSize: 12, color: "#64748b", marginBottom: 4 }}>{label}</p>
      <p style={{ fontSize: 24, fontWeight: 700, color: "#1a202c" }}>{value}</p>
      {sub && <p style={{ fontSize: 12, color: subColor, marginTop: 2 }}>{sub}</p>}
    </div>
  );
}

export function PageHeader({ title, children }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
      <h1 style={{ fontSize: 20, fontWeight: 700, color: "#1a202c" }}>{title}</h1>
      <div style={{ display: "flex", gap: 8 }}>{children}</div>
    </div>
  );
}

export function Button({ children, onClick, variant = "primary", size = "md" }) {
  const base = {
    cursor: "pointer", border: "none", borderRadius: 8, fontWeight: 500,
    padding: size === "sm" ? "5px 10px" : "8px 16px",
    fontSize: size === "sm" ? 12 : 14,
  };
  const variants = {
    primary: { background: "#4f46e5", color: "#fff" },
    danger:  { background: "#fee2e2", color: "#dc2626" },
    ghost:   { background: "#f1f5f9", color: "#475569" },
    outline: { background: "#fff", color: "#1a202c", border: "0.5px solid #e2e8f0" },
  };
  return (
    <button onClick={onClick} style={{ ...base, ...variants[variant] }}>{children}</button>
  );
}

export function Table({ headers, rows }) {
  return (
    <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 10, overflow: "hidden" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead style={{ background: "#f8f9fb" }}>
          <tr>
            {headers.map((h) => (
              <th key={h} style={{ textAlign: "left", padding: "10px 14px", color: "#64748b", fontWeight: 500, fontSize: 12, borderBottom: "0.5px solid #e2e8f0" }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export function Modal({ title, onClose, children }) {
  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{
        position: "fixed", inset: 0, background: "rgba(0,0,0,.4)",
        display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000,
      }}
    >
      <div style={{ background: "#fff", borderRadius: 14, padding: 28, width: 420, maxHeight: "90vh", overflowY: "auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ fontSize: 16, fontWeight: 700 }}>{title}</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#94a3b8" }}>✕</button>
        </div>
        {children}
      </div>
    </div>
  );
}

export function FormRow({ label, children }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={{ display: "block", fontSize: 12, color: "#64748b", marginBottom: 4 }}>{label}</label>
      {children}
    </div>
  );
}

export function Input(props) {
  return (
    <input
      {...props}
      style={{
        width: "100%", padding: "8px 10px", border: "0.5px solid #e2e8f0",
        borderRadius: 7, fontSize: 14, outline: "none", boxSizing: "border-box",
        ...props.style,
      }}
    />
  );
}

export function Select({ options, ...props }) {
  return (
    <select
      {...props}
      style={{ width: "100%", padding: "8px 10px", border: "0.5px solid #e2e8f0", borderRadius: 7, fontSize: 14, ...props.style }}
    >
      {options.map((o) => (
        <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>
      ))}
    </select>
  );
}
