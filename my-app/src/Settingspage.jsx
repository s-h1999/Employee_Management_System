// src/pages/SettingsPage.jsx
import { useState } from "react";
import { PageHeader, Button, FormRow, Input, Select } from "../components/ui";

const Section = ({ title, children }) => (
  <div style={{ background: "#fff", border: "0.5px solid #e2e8f0", borderRadius: 12, padding: 24, marginBottom: 16 }}>
    <h3 style={{ fontSize: 14, fontWeight: 700, margin: "0 0 16px", color: "#1a202c" }}>{title}</h3>
    {children}
  </div>
);

export default function SettingsPage() {
  const [company, setCompany] = useState({
    name: "Acme Corporation",
    industry: "Technology",
    hrEmail: "hr@acme.com",
    address: "123 Main St, San Francisco, CA",
  });

  const [payroll, setPayroll] = useState({
    frequency: "Monthly",
    currency: "USD",
    taxRate: "12",
    bonusRate: "5",
  });

  const [saved, setSaved] = useState(false);

  function handleSave() {
    // In a real app, POST to your backend here
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const chg = (setter) => (field) => (e) => setter((p) => ({ ...p, [field]: e.target.value }));

  return (
    <div style={{ maxWidth: 560 }}>
      <PageHeader title="Settings" />

      <Section title="Company Information">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <FormRow label="Company Name">
            <Input value={company.name} onChange={chg(setCompany)("name")} />
          </FormRow>
          <FormRow label="Industry">
            <Input value={company.industry} onChange={chg(setCompany)("industry")} />
          </FormRow>
        </div>
        <FormRow label="HR Email">
          <Input value={company.hrEmail} onChange={chg(setCompany)("hrEmail")} type="email" />
        </FormRow>
        <FormRow label="Office Address">
          <Input value={company.address} onChange={chg(setCompany)("address")} />
        </FormRow>
      </Section>

      <Section title="Payroll Configuration">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <FormRow label="Pay Frequency">
            <Select value={payroll.frequency} onChange={chg(setPayroll)("frequency")} options={["Monthly", "Bi-weekly", "Weekly"]} />
          </FormRow>
          <FormRow label="Currency">
            <Select value={payroll.currency} onChange={chg(setPayroll)("currency")} options={["USD", "EUR", "GBP", "THB"]} />
          </FormRow>
          <FormRow label="Default Tax Rate (%)">
            <Input value={payroll.taxRate} onChange={chg(setPayroll)("taxRate")} type="number" min="0" max="100" />
          </FormRow>
          <FormRow label="Default Bonus Rate (%)">
            <Input value={payroll.bonusRate} onChange={chg(setPayroll)("bonusRate")} type="number" min="0" max="100" />
          </FormRow>
        </div>
      </Section>

      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Button onClick={handleSave}>Save Settings</Button>
        {saved && <span style={{ fontSize: 13, color: "#16a34a", fontWeight: 500 }}>✓ Saved successfully</span>}
      </div>
    </div>
  );
}
