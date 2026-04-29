import { Search } from "lucide-react";
import { useNavigate } from "react-router";
import { BottomNavigation } from "./BottomNavigation";
import { contactsList } from "../data/mockData";

export function MessagesScreen() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col bg-gray-50 pb-24 md:pb-8 font-sans"
    >
      {/* Mobile Header (Hidden on Desktop) */}
      <div
        className="bg-white sticky top-0 z-40 px-4 pt-12 pb-4 md:hidden"
        style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
      >
        <h1 className="text-xl mb-3 text-gray-800 font-bold">
          Mensagens
        </h1>
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            placeholder="Buscar conversa..."
            className="w-full pl-9 pr-4 py-3 outline-none bg-gray-100 rounded-xl text-sm text-gray-800"
          />
        </div>
      </div>

      <div className="px-4 mt-4">
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
                <span
                  className="absolute bottom-0 right-0 w-3 h-3 rounded-full"
                  style={{ backgroundColor: "#10B981", border: "2px solid white" }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p
                    className="text-sm"
                    style={{ color: "#1F2937", fontWeight: contact.unread > 0 ? 700 : 600 }}
                  >
                    {contact.name}
                  </p>
                  <div className="flex items-center gap-2">
                    <p
                      className="text-xs"
                      style={{ color: contact.unread > 0 ? "#0F52BA" : "#9CA3AF", fontWeight: contact.unread > 0 ? 600 : 400 }}
                    >
                      {contact.time}
                    </p>
                    {contact.unread > 0 && (
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] text-white"
                        style={{ backgroundColor: "#0F52BA", fontWeight: 700 }}
                      >
                        {contact.unread}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-xs truncate mt-0.5" style={{ color: "#9CA3AF" }}>
                  {contact.lastMessage}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
