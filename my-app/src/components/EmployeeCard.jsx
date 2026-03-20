import React from "react";

const employees = [
  { id: 1, name: "Leonard Krasner", team: "Engineering Team", position: "Senior Designer", email: "l.krasner@apple.com", photo: "https://i.pravatar.cc/600?img=11" },
  { id: 2, name: "Sarah Jenkins", team: "Design Team", position: "Creative Director", email: "s.jenkins@apple.com", photo: "https://i.pravatar.cc/600?img=5" },
  { id: 3, name: "Michael Chen", team: "Product Team", position: "Software Architect", email: "m.chen@apple.com", photo: "https://i.pravatar.cc/600?img=12" },
  { id: 4, name: "Anna Smith", team: "Marketing Team", position: "Lead Analyst", email: "a.smith@apple.com", photo: "https://i.pravatar.cc/600?img=9" },
];

const EmployeeCard = ({ employee }) => (
  // Overflow-hidden ensures the image is clipped by the card's 28px corners
  <div className="group w-full max-w-[480px] md:max-w-none mx-auto bg-white/70 backdrop-blur-3xl rounded-[28px] overflow-hidden border border-[#D2D2D7]/40 shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.07)] transition-all duration-500 ease-out">
    <div className="md:flex h-full">
      
      {/* IMAGE SECTION: MERGED
        1. We remove all p-4 padding.
        2. md:border-r adds a thin vertical separator for structure.
      */}
      <div className="md:shrink-0 h-48 md:h-full md:w-44 border-b md:border-b-0 md:border-r border-[#D2D2D7]/30">
        <img 
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" 
          src={employee.photo} 
          alt={employee.name} 
        />
      </div>

      {/* Content Section: Refined typography */}
      <div className="p-8 flex flex-col w-full">
        <div className="flex-grow">
          <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-[#86868B]">
            {employee.team}
          </span>
          <h2 className="block mt-1.5 text-[23px] font-semibold text-[#1D1D1F] leading-tight tracking-tight">
            {employee.name}
          </h2>
          <p className="mt-1 text-[16px] text-[#424245] font-medium">
            {employee.position}
          </p>
        </div>

        {/* Action Button: Apple-style pill */}
        <div className="mt-10 flex items-center justify-between">
          <span className="text-[14px] text-[#06c] hover:underline cursor-pointer font-medium tracking-tight">
             {employee.email}
          </span>
          <button className="h-9 px-5 flex items-center justify-center text-[13px] font-semibold text-white bg-[#0071E3] rounded-full hover:bg-[#0077ED] transition-colors active:opacity-80">
            View
          </button>
        </div>
      </div>
    </div>
  </div>
);

const EmployeeGrid = () => {
  return (
    // mt-24 provides the large top margin you wanted
    <div className="min-h-screen bg-[#FBFBFD] pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header: More Apple-style structure */}
        <div className="mb-14 px-2">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#1D1D1F]">
            Meet the Team
          </h1>
          <p className="text-xl md:text-2xl text-[#86868B] mt-2.5 max-w-2xl font-medium">
            Our exceptional engineers and designers, building the future.
          </p>
        </div>

        {/* 2-column grid to maximize the horizontal horizontal layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
          {employees.map((emp) => (
            <EmployeeCard key={emp.id} employee={emp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmployeeGrid;