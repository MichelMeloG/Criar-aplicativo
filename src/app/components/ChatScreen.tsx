import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Paperclip, Send, Phone, Video, MoreVertical } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { professionals, mockMessages } from "../data/mockData";

export function ChatScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [messages, setMessages] = useState(mockMessages);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const pro = professionals.find((p) => p.id === Number(id)) || professionals[0];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const newMsg = {
      id: messages.length + 1,
      sender: "client",
      text: inputValue.trim(),
      time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInputValue("");

    // Simulate professional reply
    setTimeout(() => {
      const reply = {
        id: messages.length + 2,
        sender: "professional",
        text: "Entendido! Vou verificar minha agenda e já te respondo. 👷‍♂️",
        time: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, reply]);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="flex flex-col h-screen"
      style={{ backgroundColor: "#F3F4F6", fontFamily: "Inter, sans-serif" }}
    >
      {/* Fixed Header */}
      <div
        className="bg-white px-4 pt-12 pb-3 flex items-center gap-3 flex-shrink-0"
        style={{ borderBottom: "1px solid #F3F4F6", boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
      >
        <button
          onClick={() => navigate(-1)}
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          <ArrowLeft size={18} style={{ color: "#1F2937" }} />
        </button>

        <img
          src={pro.avatar}
          alt={pro.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          style={{ border: "2px solid #E5E7EB" }}
        />
        <div className="flex-1">
          <p className="text-sm leading-tight" style={{ color: "#1F2937", fontWeight: 700 }}>
            {pro.name}
          </p>
          <div className="flex items-center gap-1.5">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#10B981" }}
            />
            <span className="text-xs" style={{ color: "#10B981", fontWeight: 500 }}>
              Online agora
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F3F4F6" }}>
            <Phone size={16} style={{ color: "#1F2937" }} />
          </button>
          <button className="w-9 h-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "#F3F4F6" }}>
            <MoreVertical size={16} style={{ color: "#1F2937" }} />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        {/* Date Badge */}
        <div className="flex justify-center">
          <span
            className="px-3 py-1 text-xs rounded-full"
            style={{ backgroundColor: "#E5E7EB", color: "#6B7280", fontWeight: 500 }}
          >
            Hoje
          </span>
        </div>

        {/* System Message Card */}
        <div className="flex justify-center">
          <div
            className="bg-white px-4 py-3 max-w-[85%]"
            style={{ borderRadius: 12, boxShadow: "0 2px 6px rgba(0,0,0,0.06)", border: "1px solid #F3F4F6" }}
          >
            <p className="text-xs mb-2" style={{ color: "#9CA3AF", fontWeight: 600 }}>
              📋 RESUMO DO PEDIDO
            </p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-2 text-xs">
                <span style={{ color: "#9CA3AF" }}>Serviço:</span>
                <span style={{ color: "#374151", fontWeight: 600 }}>Assentamento de Porcelanato</span>
              </div>
              <div className="flex gap-2 text-xs">
                <span style={{ color: "#9CA3AF" }}>Urgência:</span>
                <span style={{ color: "#374151", fontWeight: 600 }}>Próxima Semana</span>
              </div>
              <div className="flex gap-2 text-xs">
                <span style={{ color: "#9CA3AF" }}>Descrição:</span>
                <span style={{ color: "#374151", fontWeight: 600 }}>Reforma do banheiro</span>
              </div>
            </div>
          </div>
        </div>

        {/* Messages */}
        {messages.map((msg) => {
          const isClient = msg.sender === "client";
          const isSystem = msg.sender === "system";

          if (isSystem) return null;

          return (
            <div
              key={msg.id}
              className={`flex ${isClient ? "justify-end" : "justify-start"}`}
            >
              <div className="flex flex-col gap-1 max-w-[78%]">
                <div
                  className="px-4 py-2.5"
                  style={{
                    backgroundColor: isClient ? "#0F52BA" : "white",
                    color: isClient ? "white" : "#1F2937",
                    borderRadius: isClient
                      ? "16px 16px 0px 16px"
                      : "16px 16px 16px 0px",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                    fontSize: 14,
                    lineHeight: 1.5,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  {msg.text}
                </div>
                <span
                  className={`text-[10px] ${isClient ? "text-right" : "text-left"}`}
                  style={{ color: "#9CA3AF" }}
                >
                  {msg.time}
                </span>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div
        className="bg-white px-3 py-3 flex items-end gap-2 flex-shrink-0"
        style={{ borderTop: "1px solid #F3F4F6", paddingBottom: "env(safe-area-inset-bottom, 12px)" }}
      >
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          <Paperclip size={18} style={{ color: "#6B7280" }} />
        </button>

        <div
          className="flex-1 flex items-end px-4 py-2"
          style={{
            backgroundColor: "#F3F4F6",
            borderRadius: 20,
            minHeight: 44,
          }}
        >
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite uma mensagem..."
            rows={1}
            className="w-full bg-transparent outline-none resize-none"
            style={{
              fontSize: 14,
              color: "#1F2937",
              fontFamily: "Inter, sans-serif",
              lineHeight: 1.5,
              maxHeight: 100,
            }}
          />
        </div>

        <button
          onClick={handleSend}
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mb-0.5 transition-all active:scale-90"
          style={{
            backgroundColor: inputValue.trim() ? "#0F52BA" : "#E5E7EB",
            transition: "background-color 0.2s",
          }}
        >
          <Send size={16} style={{ color: inputValue.trim() ? "white" : "#9CA3AF" }} />
        </button>
      </div>
    </div>
  );
}
