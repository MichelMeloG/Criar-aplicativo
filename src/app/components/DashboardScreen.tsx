import { Eye, MessageCircle, Star, TrendingUp, ChevronRight, Settings, Bell } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNavigation } from "./BottomNavigation";
import { contactsList } from "../data/mockData";

export function DashboardScreen() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col bg-gray-50 pb-24 md:pb-8 font-sans"
    >
      {/* Header (Hidden on Desktop) */}
      <div
        className="bg-white px-4 pt-12 pb-4 md:hidden"
        style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs" style={{ color: "#6B7280" }}>Painel do Profissional</p>
            <h1
              className="text-xl"
              style={{ color: "#1F2937", fontWeight: 700 }}
            >
              Resumo da sua conta
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center relative"
              style={{ backgroundColor: "#F3F4F6" }}
            >
              <Bell size={18} style={{ color: "#1F2937" }} />
              <span
                className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                style={{ backgroundColor: "#EF4444", border: "1px solid white" }}
              />
            </button>
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#F3F4F6" }}
            >
              <Settings size={18} style={{ color: "#1F2937" }} />
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4 flex flex-col gap-4">
        {/* Premium Banner */}
        <div
          className="p-5 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0F52BA 0%, #1E90FF 100%)",
            borderRadius: 20,
            boxShadow: "0 8px 20px rgba(15,82,186,0.3)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-20"
            style={{ backgroundColor: "white" }}
          />
          <div
            className="absolute -bottom-8 -right-2 w-24 h-24 rounded-full opacity-10"
            style={{ backgroundColor: "white" }}
          />

          <div className="relative flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
              style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
            >
              ⚡
            </div>
            <div>
              <p className="text-xs text-white opacity-80">Plano atual: Gratuito</p>
              <p className="text-white font-semibold text-sm">Quer aparecer 3x mais?</p>
            </div>
          </div>
          <p className="text-white text-sm opacity-90 mb-4">
            Com o Plano Premium, seu perfil aparece primeiro nas buscas e você recebe mais contatos!
          </p>
          <button
            className="px-5 py-2.5 rounded-xl text-sm transition-all active:scale-95"
            style={{
              backgroundColor: "#FBBF24",
              color: "#1F2937",
              fontWeight: 700,
              fontFamily: "Inter, sans-serif",
            }}
          >
            🚀 Conheça o Plano Premium
          </button>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              icon: Eye,
              value: "45",
              label: "Visitas ao perfil",
              trend: "+12%",
              color: "#EFF6FF",
              iconColor: "#0F52BA",
            },
            {
              icon: MessageCircle,
              value: "12",
              label: "Contatos recebidos",
              trend: "+3",
              color: "#FFF7ED",
              iconColor: "#FF7518",
            },
            {
              icon: Star,
              value: "4.9",
              label: "Nota média",
              trend: "127 avaliações",
              color: "#FFFBEB",
              iconColor: "#F59E0B",
            },
            {
              icon: TrendingUp,
              value: "R$2.4k",
              label: "Receita estimada",
              trend: "este mês",
              color: "#ECFDF5",
              iconColor: "#10B981",
            },
          ].map((kpi, idx) => {
            const Icon = kpi.icon;
            return (
              <div
                key={idx}
                className="bg-white p-4"
                style={{
                  borderRadius: 16,
                  border: "1px solid #F3F4F6",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: kpi.color }}
                >
                  <Icon size={20} style={{ color: kpi.iconColor }} />
                </div>
                <p
                  className="text-2xl"
                  style={{ color: "#1F2937", fontWeight: 700 }}
                >
                  {kpi.value}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#6B7280" }}>
                  {kpi.label}
                </p>
                <span
                  className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded-md"
                  style={{ backgroundColor: "#ECFDF5", color: "#065F46", fontWeight: 600 }}
                >
                  {kpi.trend}
                </span>
              </div>
            );
          })}
        </div>

        {/* Status Toggle */}
        <div
          className="bg-white px-4 py-4 flex items-center justify-between"
          style={{ borderRadius: 16, boxShadow: "0 2px 6px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: "#10B981", boxShadow: "0 0 6px rgba(16,185,129,0.5)" }}
            />
            <div>
              <p className="text-sm" style={{ color: "#1F2937", fontWeight: 600 }}>
                Status: Disponível
              </p>
              <p className="text-xs" style={{ color: "#6B7280" }}>
                Clientes podem te contatar
              </p>
            </div>
          </div>
          <button
            className="px-3 py-1.5 rounded-lg text-xs"
            style={{
              backgroundColor: "#ECFDF5",
              color: "#065F46",
              fontWeight: 600,
              border: "1px solid #D1FAE5",
            }}
          >
            Alterar
          </button>
        </div>

        {/* Contacts List */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base" style={{ color: "#1F2937", fontWeight: 700 }}>
              Meus Contatos
            </h3>
            <button className="text-sm flex items-center gap-1" style={{ color: "#0F52BA", fontWeight: 500 }}>
              Ver todos <ChevronRight size={14} />
            </button>
          </div>

          <div
            className="bg-white overflow-hidden"
            style={{ borderRadius: 16, boxShadow: "0 2px 6px rgba(0,0,0,0.04)", border: "1px solid #F3F4F6" }}
          >
            {contactsList.map((contact, idx) => (
              <button
                key={contact.id}
                onClick={() => navigate(`/chat/${contact.id}`)}
                className="w-full px-4 py-4 flex items-center gap-3 text-left transition-all active:bg-gray-50"
                style={{
                  borderBottom: idx < contactsList.length - 1 ? "1px solid #F9FAFB" : "none",
                }}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={contact.avatar}
                    alt={contact.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {contact.unread > 0 && (
                    <span
                      className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white"
                      style={{ backgroundColor: "#0F52BA", fontWeight: 700 }}
                    >
                      {contact.unread}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p
                      className="text-sm"
                      style={{
                        color: "#1F2937",
                        fontWeight: contact.unread > 0 ? 700 : 600,
                      }}
                    >
                      {contact.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        color: contact.unread > 0 ? "#0F52BA" : "#9CA3AF",
                        fontWeight: contact.unread > 0 ? 600 : 400,
                        flexShrink: 0,
                      }}
                    >
                      {contact.time}
                    </p>
                  </div>
                  <p
                    className="text-xs truncate mt-0.5"
                    style={{ color: contact.unread > 0 ? "#374151" : "#9CA3AF" }}
                  >
                    {contact.lastMessage}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
