import { Settings, LogOut, ChevronRight, Star, Shield, HelpCircle, Bell } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNavigation } from "./BottomNavigation";

export function ProfileScreen() {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Bell, label: "Notificações", desc: "Alertas e atualizações", color: "#0F52BA" },
    { icon: Shield, label: "Segurança", desc: "Senha e privacidade", color: "#10B981" },
    { icon: Star, label: "Avaliar o App", desc: "Deixe sua opinião", color: "#FBBF24" },
    { icon: HelpCircle, label: "Ajuda e Suporte", desc: "Central de ajuda", color: "#8B5CF6" },
    { icon: Settings, label: "Configurações", desc: "Preferências gerais", color: "#6B7280" },
  ];

  return (
    <div
      className="flex flex-col bg-gray-50 pb-24 md:pb-8 font-sans"
    >
      {/* Profile Header */}
      <div className="bg-white pt-12 md:pt-6 pb-6 px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1758874574397-e56dfcfc116d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200"
              alt="Perfil"
              className="w-20 h-20 rounded-full object-cover"
              style={{ border: "3px solid #0F52BA" }}
            />
            <button
              className="absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#0F52BA" }}
            >
              <span className="text-white text-xs">✏️</span>
            </button>
          </div>
          <div>
            <h2 className="text-xl" style={{ color: "#1F2937", fontWeight: 700 }}>
              João Carlos
            </h2>
            <p className="text-sm" style={{ color: "#6B7280" }}>
              joao.carlos@email.com
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ backgroundColor: "#EFF6FF", color: "#0F52BA", fontWeight: 600 }}
              >
                Cliente
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ backgroundColor: "#D1FAE5", color: "#065F46", fontWeight: 600 }}
              >
                ✓ Verificado
              </span>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className="flex items-center justify-around py-3 rounded-xl"
          style={{ backgroundColor: "#F9FAFB", border: "1px solid #F3F4F6" }}
        >
          {[
            { label: "Contratações", value: "8" },
            { label: "Avaliações", value: "6" },
            { label: "Favoritos", value: "12" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <p className="text-xl" style={{ color: "#1F2937", fontWeight: 700 }}>
                {stat.value}
              </p>
              <p className="text-xs" style={{ color: "#6B7280" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 mt-4 flex flex-col gap-3">
        {/* Menu Items */}
        <div
          className="bg-white overflow-hidden"
          style={{ borderRadius: 16, boxShadow: "0 2px 6px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6" }}
        >
          {menuItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <button
                key={idx}
                className="w-full px-4 py-4 flex items-center gap-3 text-left transition-all active:bg-gray-50"
                style={{
                  borderBottom: idx < menuItems.length - 1 ? "1px solid #F9FAFB" : "none",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon size={18} style={{ color: item.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm" style={{ color: "#1F2937", fontWeight: 600 }}>
                    {item.label}
                  </p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>
                    {item.desc}
                  </p>
                </div>
                <ChevronRight size={16} style={{ color: "#D1D5DB" }} />
              </button>
            );
          })}
        </div>

        {/* Logout */}
        <button
          onClick={() => navigate("/")}
          className="bg-white w-full px-4 py-4 flex items-center gap-3 text-left transition-all active:bg-gray-50"
          style={{
            borderRadius: 16,
            boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
            border: "1px solid #F3F4F6",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "#FEF2F2" }}
          >
            <LogOut size={18} style={{ color: "#EF4444" }} />
          </div>
          <div className="flex-1">
            <p className="text-sm" style={{ color: "#EF4444", fontWeight: 600 }}>
              Sair da conta
            </p>
          </div>
        </button>

        <p className="text-center text-xs" style={{ color: "#D1D5DB" }}>
          ObraLink v1.0.0 • Feito com ❤️ no Brasil
        </p>
      </div>

      <BottomNavigation />
    </div>
  );
}
