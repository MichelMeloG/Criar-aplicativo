import { Home, Search, MessageCircle, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

export function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "Home", icon: Home, path: "/home" },
    { label: "Buscar", icon: Search, path: "/search" },
    { label: "Mensagens", icon: MessageCircle, path: "/messages" },
    { label: "Perfil", icon: User, path: "/profile" },
  ];

  return (
    <div
      className="fixed bottom-0 w-full left-0 bg-white z-50 md:hidden"
      style={{ boxShadow: "0 -2px 8px rgba(0,0,0,0.08)" }}
    >
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            location.pathname === tab.path ||
            (tab.path === "/home" &&
              (location.pathname.startsWith("/professional") ||
                location.pathname === "/dashboard")) ||
            (tab.path === "/messages" && location.pathname.startsWith("/chat"));
          return (
            <button
              key={tab.label}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center gap-0.5 px-4 py-1 rounded-lg transition-all"
            >
              <Icon
                size={22}
                style={{ color: isActive ? "#0F52BA" : "#9CA3AF" }}
                strokeWidth={isActive ? 2.5 : 1.8}
              />
              <span
                className="text-[10px]"
                style={{
                  color: isActive ? "#0F52BA" : "#9CA3AF",
                  fontWeight: isActive ? 600 : 400,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}