import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router";

interface QuoteBottomSheetProps {
  isOpen: boolean;
  professional: any;
  onClose: () => void;
}

const urgencyOptions = [
  { id: "urgente", label: "Urgente", emoji: "🚨" },
  { id: "semana", label: "Próxima Semana", emoji: "📅" },
  { id: "cotacao", label: "Apenas Cotação", emoji: "💬" },
];

const serviceOptions = [
  "Assentamento de Porcelanato",
  "Instalação Elétrica",
  "Pintura",
  "Hidráulica / Encanamento",
  "Reboco / Massa",
  "Drywall / Gesso",
  "Outro",
];

export function QuoteBottomSheet({ isOpen, professional, onClose }: QuoteBottomSheetProps) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedUrgency, setSelectedUrgency] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  const handleStart = () => {
    setVisible(false);
    setTimeout(() => {
      navigate(`/chat/${professional?.id || 1}`);
    }, 300);
  };

  if (!isOpen && !visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          backgroundColor: visible ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0)",
        }}
        onClick={handleClose}
      />

      {/* Sheet */}
      <div
        className="relative bg-white w-full max-w-[430px] mx-auto flex flex-col transition-transform duration-300"
        style={{
          borderRadius: "24px 24px 0 0",
          maxHeight: "80vh",
          transform: visible ? "translateY(0)" : "translateY(100%)",
          paddingBottom: "env(safe-area-inset-bottom, 16px)",
        }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full" style={{ backgroundColor: "#D1D5DB" }} />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b" style={{ borderColor: "#F3F4F6" }}>
          <h2 className="text-lg" style={{ color: "#1F2937", fontWeight: 700 }}>
            Pedir Orçamento
          </h2>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X size={16} style={{ color: "#6B7280" }} />
          </button>
        </div>

        <div className="overflow-y-auto px-6 py-4 flex flex-col gap-5">
          {/* Step 1 */}
          <div>
            <label
              className="block mb-2 text-sm"
              style={{ color: "#374151", fontWeight: 600 }}
            >
              Qual o serviço desejado?
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full px-4 py-3 outline-none appearance-none"
              style={{
                border: "1.5px solid #E5E7EB",
                borderRadius: 8,
                fontSize: 14,
                color: selectedService ? "#1F2937" : "#9CA3AF",
                fontFamily: "Inter, sans-serif",
                backgroundColor: "white",
              }}
            >
              <option value="" disabled>Selecione um serviço...</option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Step 2 */}
          <div>
            <label
              className="block mb-2 text-sm"
              style={{ color: "#374151", fontWeight: 600 }}
            >
              Quando você precisa?
            </label>
            <div className="flex gap-2">
              {urgencyOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSelectedUrgency(opt.id)}
                  className="flex-1 py-2.5 px-2 rounded-lg text-xs transition-all flex flex-col items-center gap-1"
                  style={{
                    border: `1.5px solid ${selectedUrgency === opt.id ? "#0F52BA" : "#E5E7EB"}`,
                    backgroundColor: selectedUrgency === opt.id ? "#EFF6FF" : "white",
                    color: selectedUrgency === opt.id ? "#0F52BA" : "#6B7280",
                    fontWeight: selectedUrgency === opt.id ? 600 : 400,
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <span className="text-base">{opt.emoji}</span>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <label
              className="block mb-2 text-sm"
              style={{ color: "#374151", fontWeight: 600 }}
            >
              Descreva o problema
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Ex: Preciso reformar o banheiro, trocar o piso..."
              rows={3}
              className="w-full px-4 py-3 outline-none resize-none"
              style={{
                border: "1.5px solid #E5E7EB",
                borderRadius: 8,
                fontSize: 14,
                color: "#1F2937",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.6,
              }}
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="px-6 py-4">
          <button
            onClick={handleStart}
            className="w-full py-4 rounded-xl text-white transition-all active:scale-[0.98]"
            style={{
              backgroundColor: "#FF7518",
              fontWeight: 600,
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              boxShadow: "0 4px 12px rgba(255,117,24,0.3)",
            }}
          >
            💬 Iniciar Chat Seguro
          </button>
        </div>
      </div>
    </div>
  );
}
