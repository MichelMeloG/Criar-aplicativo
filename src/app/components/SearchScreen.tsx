import { useState } from "react";
import { Search, SlidersHorizontal, MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNavigation } from "./BottomNavigation";
import { VerifiedBadgeIcon } from "./VerifiedBadge";
import { professionals } from "../data/mockData";

const filterCategories = [
  "Todos", "Elétrica", "Hidráulica", "Pintura", "Pedreiro", "Gesseiro", "Marcenaria",
];

export function SearchScreen() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filtered = professionals.filter((p) => {
    if (!searchValue && activeFilter === "Todos") return true;
    const matchSearch =
      !searchValue ||
      p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.role.toLowerCase().includes(searchValue.toLowerCase());
    return matchSearch;
  });

  return (
    <div
      className="flex flex-col bg-gray-50 pb-24 md:pb-8 font-sans"
    >
      {/* Mobile Header (Hidden on Desktop) */}
      <div
        className="bg-white sticky top-0 z-40 px-4 pt-12 pb-3 md:hidden"
        style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
      >
        <h1 className="text-xl mb-3 text-gray-800 font-bold">
          Buscar Profissionais
        </h1>
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: "#9CA3AF" }}
            />
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Buscar por serviço ou nome..."
              className="w-full pl-9 pr-4 py-3 outline-none"
              style={{
                backgroundColor: "#F3F4F6",
                borderRadius: 12,
                fontSize: 14,
                color: "#1F2937",
                fontFamily: "Inter, sans-serif",
                border: "none",
              }}
            />
          </div>
          <button
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#0F52BA" }}
          >
            <SlidersHorizontal size={18} color="white" />
          </button>
        </div>
        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto mt-3 pb-0.5" style={{ scrollbarWidth: "none" }}>
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-4 py-1.5 rounded-full text-sm flex-shrink-0 transition-all"
              style={{
                backgroundColor: activeFilter === cat ? "#0F52BA" : "#F3F4F6",
                color: activeFilter === cat ? "white" : "#6B7280",
                fontWeight: activeFilter === cat ? 600 : 400,
                fontFamily: "Inter, sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 mt-4 flex flex-col gap-3">
        {filtered.map((pro) => (
          <button
            key={pro.id}
            onClick={() => navigate(`/professional/${pro.id}`)}
            className="bg-white flex items-center gap-3 px-4 py-4 w-full text-left transition-all active:scale-[0.98]"
            style={{
              borderRadius: 16,
              boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
              border: "1px solid #F3F4F6",
            }}
          >
            <img
              src={pro.avatar}
              alt={pro.name}
              className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              style={{ border: "2px solid #E5E7EB" }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 min-w-0">
                  <span className="text-sm truncate" style={{ color: "#1F2937", fontWeight: 700 }}>
                    {pro.name}
                  </span>
                  {pro.verified && <VerifiedBadgeIcon />}
                </div>
                <div className="flex items-center gap-1 flex-shrink-0 ml-2">
                  <Star size={12} fill="#FBBF24" style={{ color: "#FBBF24" }} />
                  <span className="text-xs" style={{ color: "#1F2937", fontWeight: 600 }}>
                    {pro.rating}
                  </span>
                </div>
              </div>
              <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
                {pro.role}
              </p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: pro.available ? "#10B981" : "#9CA3AF" }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: pro.available ? "#10B981" : "#9CA3AF", fontWeight: 500 }}
                  >
                    {pro.available ? "Disponível" : "Ocupado"}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={11} style={{ color: "#9CA3AF" }} />
                  <span className="text-xs" style={{ color: "#9CA3AF" }}>
                    {pro.distance} km
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
}
