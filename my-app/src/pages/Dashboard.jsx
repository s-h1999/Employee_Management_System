import { useState, useEffect } from "react";

// ─── Icons ──────────────────────────────────────────────────────────────────
const GridIcon     = () => (<svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/><rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>);
const UsersIcon    = () => (<svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="6" cy="5" r="3"/><circle cx="11" cy="5" r="2.2"/><path d="M1 14c0-3 2.2-5 5-5s5 2 5 5"/><path d="M12 9c2 0 3.5 1.5 3.5 4"/></svg>);
const CalIcon      = () => (<svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}><rect x="1" y="3" width="14" height="11" rx="1.5"/><path d="M5 3V1.5M11 3V1.5M1 7h14"/></svg>);
const BriefIcon    = () => (<svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M13 6H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/><path d="M11 6V4a3 3 0 0 0-6 0v2"/></svg>);
const ClockIcon    = () => (<svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="8" cy="8" r="6"/><path d="M8 5v3l2 2"/></svg>);
const SettingsIcon = () => (<svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="8" cy="8" r="2.5"/><path d="M8 2v1.5M8 12.5V14M2 8h1.5M12.5 8H14M3.5 3.5l1 1M11.5 11.5l1 1M3.5 12.5l1-1M11.5 4.5l1-1"/></svg>);
const BellIcon     = () => (<svg width={15} height={15} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M8 1a5 5 0 0 1 5 5c0 3 1.5 4.5 1.5 4.5H1.5S3 9 3 6a5 5 0 0 1 5-5ZM6.5 14a1.5 1.5 0 0 0 3 0"/></svg>);
const UserIcon     = () => (<svg width={15} height={15} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="8" cy="5.5" r="3"/><path d="M2 14c0-3 2.7-5 6-5s6 2 6 5"/></svg>);
const PlusIcon     = () => (<svg width={12} height={12} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={2}><path d="M7 1v12M1 7h12"/></svg>);
const DeptIcon     = () => (<svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="5" cy="5" r="3"/><circle cx="11" cy="5" r="3"/><path d="M1 14c0-2.5 1.8-4 4-4M8 14c0-2.5 1.8-4 4-4M8 9a3.5 3.5 0 0 1 3.5 4"/></svg>);
const SunIcon      = () => (<svg width={15} height={15} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}><circle cx="8" cy="8" r="3"/><path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3 3l1 1M12 12l1 1M3 13l1-1M12 4l1-1"/></svg>);
const MoonIcon     = () => (<svg width={15} height={15} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5}><path d="M13.5 10A6 6 0 0 1 6 2.5a6 6 0 1 0 7.5 7.5Z"/></svg>);
const MenuIcon     = () => (<svg width={18} height={18} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M2 4h14M2 9h14M2 14h14"/></svg>);
const CloseIcon    = () => (<svg width={18} height={18} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={1.6}><path d="M3 3l12 12M15 3L3 15"/></svg>);

// ─── Data ────────────────────────────────────────────────────────────────────
const NAV_GROUPS = [
  { group: "Overview", items: [
    { label:"Dashboard",   icon:GridIcon,  active:true,  badge:null  },
    { label:"Employees",   icon:UsersIcon, active:false, badge:"248" },
    { label:"Attendance",  icon:CalIcon,   active:false, badge:null  },
  ]},
  { group: "Management", items: [
    { label:"Departments",    icon:DeptIcon,  active:false, badge:null },
    { label:"Payroll",        icon:BriefIcon, active:false, badge:null },
    { label:"Leave Requests", icon:CalIcon,   active:false, badge:"5"  },
    { label:"Reports",        icon:ClockIcon, active:false, badge:null },
  ]},
  { group: "System", items: [
    { label:"Settings", icon:SettingsIcon, active:false, badge:null },
  ]},
];

const STATS = [
  { label:"Total Employees", value:"248", change:"+12 this month",    trend:"up",      k:"emp",
    lightIcon:"bg-indigo-50",  darkIcon:"bg-[#1e2d6b]", lightStroke:"#4f46e5", darkStroke:"#818cf8" },
  { label:"Active Today",    value:"211", change:"85.1% attendance",  trend:"neutral", k:"act",
    lightIcon:"bg-green-50",   darkIcon:"bg-[#0d3324]", lightStroke:"#16a34a", darkStroke:"#4ade80" },
  { label:"On Leave",        value:"23",  change:"9.3% of workforce", trend:"down",    k:"lve",
    lightIcon:"bg-yellow-50",  darkIcon:"bg-[#3b2900]", lightStroke:"#ca8a04", darkStroke:"#fbbf24" },
  { label:"Open Positions",  value:"14",  change:"3 new this week",   trend:"up",      k:"pos",
    lightIcon:"bg-purple-50",  darkIcon:"bg-[#2d1b4e]", lightStroke:"#9333ea", darkStroke:"#c084fc" },
];

const EMPS = [
  { ini:"SR", name:"Sofia Reyes",  id:"#EMP-2201", dept:"Engineering", role:"Sr. Developer",     status:"Active",    joined:"Mar 10",
    av:"bg-indigo-100 text-indigo-600", avDk:"bg-indigo-900/50 text-indigo-300" },
  { ini:"JL", name:"James Liu",    id:"#EMP-2200", dept:"Design",       role:"UX Designer",       status:"Remote",    joined:"Mar 5",
    av:"bg-purple-100 text-purple-600", avDk:"bg-purple-900/50 text-purple-300" },
  { ini:"PM", name:"Priya Menon",  id:"#EMP-2199", dept:"Marketing",    role:"Content Lead",      status:"On Leave",  joined:"Feb 22",
    av:"bg-yellow-100 text-yellow-700", avDk:"bg-yellow-900/40 text-yellow-300" },
  { ini:"TW", name:"Tom Walker",   id:"#EMP-2198", dept:"HR",           role:"HR Specialist",     status:"Active",    joined:"Feb 18",
    av:"bg-sky-100 text-sky-700",       avDk:"bg-sky-900/40 text-sky-300" },
  { ini:"AC", name:"Amara Chen",   id:"#EMP-2197", dept:"Product",      role:"Product Manager",   status:"Active",    joined:"Feb 10",
    av:"bg-pink-100 text-pink-700",     avDk:"bg-pink-900/40 text-pink-300" },
  { ini:"DK", name:"David Kim",    id:"#EMP-2196", dept:"Finance",      role:"Financial Analyst", status:"Remote",    joined:"Jan 30",
    av:"bg-gray-200 text-gray-600",     avDk:"bg-slate-700 text-slate-300" },
];

const DEPT_BADGE = {
  Engineering: ["bg-green-50 text-green-700",   "bg-green-900/30 text-green-300"],
  Design:      ["bg-purple-50 text-purple-700",  "bg-purple-900/30 text-purple-300"],
  Marketing:   ["bg-orange-50 text-orange-700",  "bg-orange-900/30 text-orange-300"],
  HR:          ["bg-sky-50 text-sky-700",         "bg-sky-900/30 text-sky-300"],
  Product:     ["bg-pink-50 text-pink-700",       "bg-pink-900/30 text-pink-300"],
  Finance:     ["bg-gray-100 text-gray-700",      "bg-slate-700/40 text-slate-300"],
};

const STATUS_BADGE = {
  Active:     ["bg-green-100 text-green-700",   "bg-green-900/40 text-green-300"],
  Remote:     ["bg-indigo-100 text-indigo-700", "bg-indigo-900/40 text-indigo-300"],
  "On Leave": ["bg-yellow-100 text-yellow-700", "bg-yellow-900/30 text-yellow-300"],
};

const DEPTS = [
  { name:"Engineering", count:78, pct:72, bar:"bg-indigo-500" },
  { name:"Product",     count:42, pct:40, bar:"bg-violet-400" },
  { name:"Design",      count:31, pct:30, bar:"bg-purple-300" },
  { name:"Marketing",   count:27, pct:26, bar:"bg-amber-400"  },
  { name:"Finance",     count:22, pct:21, bar:"bg-emerald-400"},
  { name:"HR & Ops",    count:48, pct:44, bar:"bg-cyan-400"   },
];

const ACTIVITY = [
  { dotCls:"bg-indigo-500", name:"Sofia Reyes",   rest:"started onboarding",        time:"2 hours ago" },
  { dotCls:"bg-amber-400",  name:"Priya Menon",   rest:"submitted leave request",   time:"4 hours ago" },
  { dotCls:"bg-emerald-400",name:"James Liu",     rest:"completed training module", time:"Yesterday"   },
  { dotCls:"bg-red-400",    name:"3 leave reqs.", rest:"pending approval",          time:"Yesterday"   },
];

const HIRES = [
  {m:"Jan",p:38},{m:"Feb",p:52},{m:"Mar",p:80},{m:"Apr",p:46},{m:"May",p:30},{m:"Jun",p:57},
];

const EVENTS = [
  {day:"26",mon:"Mar",name:"Q1 Performance Reviews",sub:"All departments — 9:00 AM"},
  {day:"28",mon:"Mar",name:"New Hire Orientation",  sub:"3 employees — HR Room B"},
  {day:"01",mon:"Apr",name:"Payroll Processing",    sub:"March cycle — Finance team"},
  {day:"05",mon:"Apr",name:"Leadership Workshop",   sub:"Managers only — Online"},
];

// ─── Stat SVG paths ──────────────────────────────────────────────────────────
function StatSvg({ k, stroke }) {
  return (
    <svg width={15} height={15} viewBox="0 0 16 16" fill="none" stroke={stroke} strokeWidth={1.5}>
      {k==="emp"&&<><circle cx="6" cy="5" r="3"/><circle cx="11" cy="5" r="2.2"/><path d="M1 14c0-3 2.2-5 5-5s5 2 5 5"/><path d="M12 9c2 0 3.5 1.5 3.5 4"/></>}
      {k==="act"&&<><circle cx="8" cy="8" r="6"/><path d="M5 8l2 2 4-4"/></>}
      {k==="lve"&&<><rect x="1" y="3" width="14" height="11" rx="1.5"/><path d="M5 3V1.5M11 3V1.5M1 7h14"/></>}
      {k==="pos"&&<><path d="M13 6H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1Z"/><path d="M11 6V4a3 3 0 0 0-6 0v2"/></>}
    </svg>
  );
}

// ─── Sidebar Nav (reused in drawer + desktop) ────────────────────────────────
function SidebarNav({ dark, collapsed, onClose }) {
  const showLabel = !collapsed || !!onClose;

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={`flex items-center gap-2.5 border-b ${dark?"border-[#1e3a5f]":"border-gray-100"} ${showLabel?"px-5 py-5":"px-3 py-5 justify-center"}`}>
        <div className="w-8 h-8 bg-[#0f172a] rounded-lg flex items-center justify-center shrink-0">
          <svg width={18} height={18} viewBox="0 0 20 20" fill="none">
            <rect x="3" y="3" width="6" height="6" rx="1.5" fill="#6366f1"/>
            <rect x="11" y="3" width="6" height="6" rx="1.5" fill="#a5b4fc"/>
            <rect x="3" y="11" width="6" height="6" rx="1.5" fill="#a5b4fc"/>
            <rect x="11" y="11" width="6" height="6" rx="1.5" fill="#6366f1"/>
          </svg>
        </div>
        {showLabel && (
          <span style={{fontFamily:"'Syne',sans-serif",fontWeight:700}} className={`text-[15px] ${dark?"text-slate-100":"text-gray-900"}`}>
            work<span className="text-indigo-500">sync</span>
          </span>
        )}
        {onClose && (
          <button onClick={onClose} className={`ml-auto ${dark?"text-[#4f7299]":"text-gray-400"}`}>
            <CloseIcon/>
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-2.5 py-3">
        {NAV_GROUPS.map(({ group, items }) => (
          <div key={group} className="mb-1">
            {showLabel && (
              <p className={`text-[10px] font-medium tracking-widest uppercase px-2 mb-1 mt-3 ${dark?"text-[#4f7299]":"text-gray-400"}`}>
                {group}
              </p>
            )}
            {items.map(item => {
              const Ic = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={onClose || undefined}
                  className={`flex items-center gap-2.5 w-full rounded-lg mb-0.5 text-[13.5px] transition-colors
                    ${showLabel ? "px-2.5 py-2" : "px-2 py-2.5 justify-center"}
                    ${item.active
                      ? dark
                        ? "bg-[#1e3a5f] text-indigo-400 font-medium"
                        : "bg-indigo-50 text-indigo-600 font-medium"
                      : dark
                        ? "text-[#8baac8] hover:bg-[#162f4f] hover:text-slate-200"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
                    }`}
                >
                  <Ic/>
                  {showLabel && <span className="flex-1 text-left">{item.label}</span>}
                  {showLabel && item.badge && (
                    <span className="bg-indigo-500 text-white text-[10px] font-medium rounded-full px-2 py-0.5">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </nav>

      {/* User */}
      <div className={`flex items-center gap-2.5 border-t ${dark?"border-[#1e3a5f]":"border-gray-100"} ${showLabel?"px-4 py-3.5":"px-3 py-3.5 justify-center"}`}>
        <div className={`w-[34px] h-[34px] rounded-full flex items-center justify-center text-[12px] font-semibold shrink-0
          ${dark?"bg-[#1e3a5f] text-indigo-400":"bg-indigo-100 text-indigo-600"}`}>
          AK
        </div>
        {showLabel && (
          <div>
            <div className={`text-[13px] font-medium ${dark?"text-slate-200":"text-gray-800"}`}>Alex Kim</div>
            <div className={`text-[11px] ${dark?"text-[#4f7299]":"text-gray-400"}`}>HR Admin</div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function EmployeeDashboard() {
  const [dark, setDark]           = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [drawerOpen, setDrawer]   = useState(false);

  // Close drawer on large screens
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setDrawer(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const d  = dark; // shorthand
  const di = d ? 1 : 0;

  // Shared classes
  const bg      = d ? "bg-[#0d1b2e]"  : "bg-slate-50";
  const surface = d ? "bg-[#112240]"  : "bg-white";
  const surfAlt = d ? "bg-[#0d1b2e]"  : "bg-slate-50";
  const border  = d ? "border-[#1e3a5f]" : "border-gray-100";
  const borderSub = d ? "border-[#162f4f]" : "border-gray-50";
  const txt     = d ? "text-slate-200"  : "text-gray-900";
  const txtSub  = d ? "text-[#8baac8]"  : "text-gray-500";
  const txtMute = d ? "text-[#4f7299]"  : "text-gray-400";
  const card    = `${surface} border ${border} rounded-xl`;
  const btnGhost= `border ${border} rounded-lg flex items-center justify-center transition-colors
    ${d?"text-[#8baac8] hover:bg-[#162f4f]":"text-gray-500 hover:bg-gray-50"}`;

  return (
    <div className={`flex min-h-screen ${bg} ${txt} transition-colors duration-300`}
      style={{fontFamily:"'DM Sans',sans-serif"}}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Syne:wght@700&display=swap');
        * { box-sizing: border-box; }
        .syne { font-family: 'Syne', sans-serif; font-weight: 700; }
        .emp-row:hover td { background: ${d ? "#162f4f" : "#f8fafc"} !important; }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-thumb { background: ${d ? "#1e3a5f" : "#e2e8f0"}; border-radius: 99px; }
      `}</style>

      {/* ── Mobile overlay ─────────────────────────────────────────────── */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setDrawer(false)}
        />
      )}

      {/* ── Mobile/Tablet Drawer ────────────────────────────────────────── */}
      <div className={`fixed top-0 left-0 bottom-0 z-50 w-64 flex flex-col shadow-2xl lg:hidden
        ${surface} border-r ${border}
        transition-transform duration-250 ease-in-out
        ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <SidebarNav dark={d} collapsed={false} onClose={() => setDrawer(false)} />
      </div>

      {/* ── Desktop Sidebar ─────────────────────────────────────────────── */}
      <aside className={`hidden lg:flex flex-col shrink-0 border-r ${border} ${surface}
        transition-all duration-200
        ${collapsed ? "w-14" : "w-[220px]"}`}>
        <SidebarNav dark={d} collapsed={collapsed} onClose={null} />
        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`mx-auto mb-2.5 w-8 h-8 rounded-lg border ${border} text-xs ${btnGhost}`}>
          {collapsed ? "→" : "←"}
        </button>
      </aside>

      {/* ── Main ────────────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Topbar */}
        <header className={`${surface} border-b ${border} px-4 sm:px-6 py-3.5 flex items-center gap-2 sm:gap-3 transition-colors duration-300`}>

          {/* Hamburger — mobile & tablet */}
          <button
            onClick={() => setDrawer(true)}
            className={`lg:hidden w-9 h-9 shrink-0 ${btnGhost}`}>
            <MenuIcon/>
          </button>

          <h1 className={`syne text-[15px] sm:text-[18px] flex-1 truncate ${txt}`}>Dashboard</h1>

          {/* Search — hidden on mobile */}
          <div className={`hidden sm:flex items-center gap-2 ${surfAlt} border ${border} rounded-lg px-3 py-1.5 w-44 lg:w-56 shrink-0`}>
            <svg width={13} height={13} viewBox="0 0 16 16" fill="none" stroke={d?"#4f7299":"#9ca3af"} strokeWidth={1.8}>
              <circle cx="7" cy="7" r="5"/><path d="M11.5 11.5l3 3"/>
            </svg>
            <input className={`bg-transparent text-[13px] outline-none w-full ${txt} placeholder:${txtMute}`}
              placeholder="Search employees..."/>
          </div>

          {/* Date — lg only */}
          <span className={`hidden lg:block text-[12px] shrink-0 ${txtMute}`}>Tue, Mar 24, 2026</span>

          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            className={`w-9 h-9 shrink-0 rounded-lg border transition-all duration-200
              ${d ? "border-[#1e3a5f] bg-[#1e3a5f] text-indigo-400" : `border-gray-100 ${btnGhost}`}`}>
            {d ? <SunIcon/> : <MoonIcon/>}
          </button>

          {/* Bell */}
          <button className={`relative w-9 h-9 shrink-0 ${btnGhost}`}>
            <BellIcon/>
            <span className={`absolute top-1.5 right-1.5 w-[7px] h-[7px] bg-red-500 rounded-full border-2 ${d?"border-[#112240]":"border-white"}`}/>
          </button>

          {/* Profile — hidden on mobile */}
          <button className={`hidden sm:flex w-9 h-9 shrink-0 ${btnGhost}`}>
            <UserIcon/>
          </button>

          {/* Add Employee */}
          <button className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-[12px] font-medium rounded-lg border-none transition-colors shrink-0
            w-9 h-9 justify-center sm:w-auto sm:h-auto sm:px-3.5 sm:py-2">
            <PlusIcon/>
            <span className="hidden sm:inline">Add Employee</span>
          </button>
        </header>

        {/* Mobile search bar */}
        <div className={`sm:hidden px-4 py-2.5 border-b ${border} ${surface}`}>
          <div className={`flex items-center gap-2 ${surfAlt} border ${border} rounded-lg px-3 py-2`}>
            <svg width={13} height={13} viewBox="0 0 16 16" fill="none" stroke={d?"#4f7299":"#9ca3af"} strokeWidth={1.8}>
              <circle cx="7" cy="7" r="5"/><path d="M11.5 11.5l3 3"/>
            </svg>
            <input className={`bg-transparent text-[13px] outline-none w-full ${txt}`}
              placeholder="Search employees..."/>
          </div>
        </div>

        {/* ── Content ──────────────────────────────────────────────────── */}
        <main className="flex-1 p-4 sm:p-5 lg:p-7 overflow-auto">

          {/* Stat Cards — 2 col sm, 4 col md+ */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5 mb-5 sm:mb-6">
            {STATS.map(s => (
              <div key={s.label} className={`${card} p-4 sm:p-5`}>
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <span className={`text-[11px] sm:text-xs ${txtSub} leading-tight`}>{s.label}</span>
                  <div className={`w-7 h-7 sm:w-[30px] sm:h-[30px] rounded-lg flex items-center justify-center shrink-0 ${d ? s.darkIcon : s.lightIcon}`}>
                    <StatSvg k={s.k} stroke={d ? s.darkStroke : s.lightStroke}/>
                  </div>
                </div>
                <div className={`text-2xl sm:text-[26px] font-semibold tracking-tight leading-none mb-1.5 ${txt}`}>{s.value}</div>
                <div className={`text-[10.5px] sm:text-[11.5px] ${s.trend==="up"?"text-green-600":s.trend==="down"?"text-red-500":txtMute}`}>
                  {s.trend==="up"&&"▲ "}{s.trend==="down"&&"▼ "}{s.change}
                </div>
              </div>
            ))}
          </div>

          {/* Middle row — stacks on sm/md, side-by-side on lg */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-4 mb-4">

            {/* Employee Table */}
            <div className={`${card} overflow-hidden`}>
              <div className={`flex items-center justify-between px-4 sm:px-5 py-3.5 border-b ${border} flex-wrap gap-2`}>
                <span className={`text-[13.5px] font-medium ${txt}`}>Recent Employees</span>
                <div className="flex gap-2">
                  {["Filter","Export"].map(l => (
                    <button key={l} className={`text-[12px] px-3 py-1.5 rounded-lg border ${border} bg-transparent ${txtSub} hover:${surfAlt} transition-colors`}>{l}</button>
                  ))}
                </div>
              </div>
              {/* Horizontally scrollable on small screens */}
              <div className="overflow-x-auto">
                <table className="min-w-[520px] w-full">
                  <thead>
                    <tr className={surfAlt}>
                      {["Employee","Department","Role","Status","Joined"].map(h => (
                        <th key={h} className={`text-left text-[11px] font-medium uppercase tracking-wider px-4 py-2.5 border-b ${border} whitespace-nowrap ${txtMute}`}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {EMPS.map(e => (
                      <tr key={e.id} className={`emp-row border-b ${borderSub} transition-colors`}>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2.5">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold shrink-0 ${d ? e.avDk : e.av}`}>
                              {e.ini}
                            </div>
                            <div>
                              <div className={`text-[13px] font-medium whitespace-nowrap ${txt}`}>{e.name}</div>
                              <div className={`text-[11px] ${txtMute}`}>{e.id}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap
                            ${(DEPT_BADGE[e.dept]||DEPT_BADGE.Finance)[di]}`}>
                            {e.dept}
                          </span>
                        </td>
                        <td className={`px-4 py-3 text-[13px] whitespace-nowrap ${txtSub}`}>{e.role}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-medium whitespace-nowrap ${STATUS_BADGE[e.status][di]}`}>
                            {e.status}
                          </span>
                        </td>
                        <td className={`px-4 py-3 text-[13px] whitespace-nowrap ${txtMute}`}>{e.joined}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right panel — 2-col on md, 1-col on sm/xl */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4">

              {/* Department Breakdown */}
              <div className={`${card} overflow-hidden`}>
                <div className={`px-5 py-3.5 border-b ${border}`}>
                  <span className={`text-[13.5px] font-medium ${txt}`}>By Department</span>
                </div>
                <div className="px-5 py-4 space-y-3">
                  {DEPTS.map(dep => (
                    <div key={dep.name} className="flex items-center gap-3">
                      <span className={`text-[12px] w-20 shrink-0 ${txtSub}`}>{dep.name}</span>
                      <div className={`flex-1 h-1.5 rounded-full overflow-hidden ${d?"bg-[#1e3a5f]":"bg-slate-100"}`}>
                        <div className={`h-full rounded-full ${dep.bar}`} style={{width:`${dep.pct}%`}}/>
                      </div>
                      <span className={`text-[11px] w-6 text-right ${txtMute}`}>{dep.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity Feed */}
              <div className={`${card} overflow-hidden`}>
                <div className={`px-5 py-3.5 border-b ${border}`}>
                  <span className={`text-[13.5px] font-medium ${txt}`}>Recent Activity</span>
                </div>
                {ACTIVITY.map((a, i) => (
                  <div key={i} className={`flex gap-3 px-5 py-2.5 ${i < ACTIVITY.length-1 ? `border-b ${borderSub}` : ""}`}>
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${a.dotCls}`}/>
                    <div>
                      <p className={`text-[12.5px] leading-snug ${txtSub}`}>
                        <span className={`font-medium ${txt}`}>{a.name}</span> {a.rest}
                      </p>
                      <p className={`text-[11px] mt-0.5 ${txtMute}`}>{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom row — 1-col sm, 2-col md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            {/* Hires Chart */}
            <div className={`${card} overflow-hidden`}>
              <div className={`flex items-center justify-between px-5 py-3.5 border-b ${border}`}>
                <span className={`text-[13.5px] font-medium ${txt}`}>New Hires — 2026</span>
                <span className={`text-[12px] ${txtMute}`}>Monthly</span>
              </div>
              <div className="px-5 pt-4 pb-2">
                <div className="flex items-end gap-1.5 sm:gap-2 h-20">
                  {HIRES.map(h => (
                    <div key={h.m} className="flex-1 flex flex-col items-center gap-1">
                      <div
                        className={`w-full rounded-t min-h-[4px] transition-colors duration-300
                          ${h.m==="Mar" ? "bg-indigo-500" : d ? "bg-[#1e3a5f]" : "bg-indigo-200"}`}
                        style={{height:`${h.p}%`}}/>
                      <span className={`text-[10px] ${txtMute}`}>{h.m}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 sm:gap-5 px-5 pb-5 pt-2 flex-wrap">
                {[["Total Q1","45"],["Avg/month","15"]].map(([l,v]) => (
                  <div key={l}>
                    <div className={`text-[11px] ${txtMute}`}>{l}</div>
                    <div className={`text-lg sm:text-[20px] font-semibold tracking-tight ${txt}`}>{v}</div>
                  </div>
                ))}
                <div>
                  <div className={`text-[11px] ${txtMute}`}>Retention rate</div>
                  <div className="text-lg sm:text-[20px] font-semibold tracking-tight text-green-600">94%</div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className={`${card} overflow-hidden`}>
              <div className={`flex items-center justify-between px-5 py-3.5 border-b ${border}`}>
                <span className={`text-[13.5px] font-medium ${txt}`}>Upcoming Events</span>
                <button className={`text-[12px] px-3.5 py-1.5 rounded-lg border ${border} bg-transparent ${txtSub}`}>
                  View all
                </button>
              </div>
              {EVENTS.map((e, i) => (
                <div key={i} className={`flex items-center gap-3 px-5 py-2.5 ${i < EVENTS.length-1 ? `border-b ${borderSub}` : ""}`}>
                  <div className={`w-10 h-10 rounded-lg flex flex-col items-center justify-center shrink-0 border ${border}
                    ${d ? "bg-[#0d1b2e]" : "bg-slate-50"}`}>
                    <span className={`text-[15px] font-semibold leading-none ${txt}`}>{e.day}</span>
                    <span className={`text-[9px] uppercase tracking-wider ${txtMute}`}>{e.mon}</span>
                  </div>
                  <div className="min-w-0">
                    <div className={`text-[13px] font-medium truncate ${txt}`}>{e.name}</div>
                    <div className={`text-[11px] mt-0.5 ${txtMute}`}>{e.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}