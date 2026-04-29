import { Wrench, HardHat, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

export function OnboardingScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-12 md:gap-20 px-6 py-12 bg-gray-50 font-sans">
      {/* Logo */}
      <div className="flex flex-col items-center gap-3">
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-blue-700">
          <HardHat size={44} color="white" strokeWidth={1.5} />
        </div>
        <div className="text-center">
          <h1 className="text-3xl tracking-tight text-gray-800 font-bold">
            ObraLink
          </h1>
          <p className="text-sm text-gray-500">
            O profissional certo para sua obra
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl">
        {/* Hero illustration */}
        <div className="flex flex-col items-center md:items-start gap-6 md:w-1/2">
          <div className="relative w-64 h-64 mx-auto md:mx-0">
            <img
              src="https://images.unsplash.com/photo-1740754699699-c8b4b1635faf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
              alt="Profissional"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute -bottom-4 -right-4 px-4 py-2 rounded-2xl bg-blue-700 shadow-lg shadow-blue-700/30">
              <p className="text-white text-xs font-semibold">
                ⭐ 4.9 • 1200+ profissionais
              </p>
            </div>
          </div>

          <div className="text-center md:text-left px-4 md:px-0">
            <h2 className="text-2xl mb-2 text-gray-800 font-bold">
              Construa ou Reforme com Segurança
            </h2>
            <p className="text-base text-gray-500">
              Selecione o seu perfil para começar.
            </p>
          </div>
        </div>

        {/* Action Cards */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-4 px-4 py-4 bg-white w-full transition-all active:scale-[0.98] rounded-2xl border border-gray-200 shadow-md"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-100">
              <Wrench size={24} className="text-blue-700" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-base text-gray-800 font-semibold">
                Quero Contratar
              </p>
              <p className="text-sm text-gray-500">
                Encontre profissionais perto de você
              </p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center gap-4 px-4 py-4 bg-white w-full transition-all active:scale-[0.98] rounded-2xl border border-gray-200 shadow-md"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-orange-100">
              <HardHat size={24} className="text-orange-500" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-base text-gray-800 font-semibold">
                Sou Profissional
              </p>
              <p className="text-sm text-gray-500">
                Divulgue seus serviços e conquiste clientes
              </p>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
