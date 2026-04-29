import { useState } from "react";
import { Bell, MapPin, Search, Star, ChevronRight, HardHat } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNavigation } from "./BottomNavigation";
import { VerifiedBadgeIcon } from "./VerifiedBadge";
import { professionals, categories } from "../data/mockData";

export function HomeScreen() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"rapidos" | "obras">("rapidos");
  const [searchValue, setSearchValue] = useState("");

  const filteredProfessionals = professionals.filter((p) => {
    if (!searchValue) return true;
    return (
      p.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.role.toLowerCase().includes(searchValue.toLowerCase()) ||
      p.skills.some((s) => s.toLowerCase().includes(searchValue.toLowerCase()))
    );
  });

  return (
    <div className="flex flex-col bg-gray-50 font-sans pb-24 md:pb-0">
      <div className="flex flex-1">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Mobile Header */}
          <div className="sticky top-0 z-40 px-4 pt-12 pb-3 bg-gray-50 md:hidden">
            {/* Row 1 */}
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1758874574397-e56dfcfc116d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100"
                  alt="Avatar"
                  className="w-9 h-9 rounded-full object-cover border-2 border-blue-600"
                />
                <div>
                  <p className="text-xs text-gray-500">Olá de volta,</p>
                  <p className="text-base leading-tight text-gray-800 font-bold">
                    João Carlos 👋
                  </p>
                </div>
              </div>
              <button onClick={() => navigate('/messages')} className="relative w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md">
                <Bell size={20} className="text-gray-800" />
                <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white" />
              </button>
            </div>
            {/* Row 2 - Location */}
            <button className="flex items-center gap-1.5 mt-1">
              <MapPin size={14} className="text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">
                Av. Paulista, São Paulo
              </span>
              <ChevronRight size={14} className="text-blue-600" />
            </button>

            {/* Search Bar */}
            <div className="mt-3 relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Buscar encanador, pedreiro..."
                className="w-full pl-11 pr-4 py-3 outline-none bg-white rounded-full border border-gray-200 text-sm text-gray-800 shadow-sm"
              />
            </div>
          </div>

          <div className="p-4">
            {/* Segmented Control */}
            <div className="flex mt-3 p-1 rounded-xl bg-gray-200 md:max-w-sm">
              <button
                onClick={() => setActiveTab("rapidos")}
                className={`flex-1 py-2.5 rounded-lg text-sm transition-all font-semibold ${
                  activeTab === "rapidos"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500"
                }`}
              >
                Serviços Rápidos
              </button>
              <button
                onClick={() => setActiveTab("obras")}
                className={`flex-1 py-2.5 rounded-lg text-sm transition-all font-semibold ${
                  activeTab === "obras"
                    ? "bg-blue-600 text-white"
                    : "text-gray-500"
                }`}
              >
                Grandes Obras
              </button>
            </div>

            {/* Category Carousel */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base text-gray-800 font-bold">
                  Categorias
                </h3>
                <button onClick={() => navigate('/search')} className="text-sm text-blue-600 font-medium">
                  Ver todas
                </button>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4" style={{ scrollbarWidth: "none" }}>
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => navigate('/search')}
                    className="flex flex-col items-center gap-1.5 flex-shrink-0 transition-all active:scale-95"
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl bg-blue-100">
                      {cat.icon}
                    </div>
                    <span className="text-xs text-gray-700 font-medium">
                      {cat.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Professionals Feed */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base text-gray-800 font-bold">
                  Profissionais na sua Região
                </h3>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold">
                  {filteredProfessionals.length} disponíveis
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredProfessionals.map((pro) => (
                  <button
                    key={pro.id}
                    onClick={() => navigate(`/professional/${pro.id}`)}
                    className="bg-white text-left w-full transition-all active:scale-[0.98] rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md"
                  >
                    {/* Row 1 */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <img
                          src={pro.avatar}
                          alt={pro.name}
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-gray-200"
                        />
                        <div>
                          <div className="flex items-center gap-1">
                            <span className="text-sm leading-tight text-gray-800 font-bold">
                              {pro.name}
                            </span>
                            {pro.verified && <VerifiedBadgeIcon />}
                          </div>
                          <p className="text-xs text-gray-500">{pro.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star
                          size={14}
                          className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="font-bold text-gray-700">
                          {pro.rating}
                        </span>
                        <span className="text-gray-400">
                          ({pro.reviews})
                        </span>
                      </div>
                    </div>
                    {/* Row 2 - Skills */}
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {pro.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden">
        <BottomNavigation />
      </div>
    </div>
  );
}
