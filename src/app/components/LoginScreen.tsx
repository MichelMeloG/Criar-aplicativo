import { useState } from "react";
import { ArrowLeft, Eye, EyeOff, HardHat } from "lucide-react";
import { useNavigate } from "react-router";

export function LoginScreen() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    navigate("/home");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans md:items-center md:justify-center">
      <div className="w-full max-w-md px-6 pt-12 pb-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-95 bg-gray-100"
          >
            <ArrowLeft size={20} className="text-gray-800" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-700">
              <HardHat size={18} color="white" strokeWidth={1.5} />
            </div>
            <span className="text-lg text-gray-800 font-bold">
              ObraLink
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8">
          <h1 className="text-2xl mb-1 text-gray-800 font-bold">
            {isLogin ? "Bem-vindo de volta!" : "Crie sua conta"}
          </h1>
          <p className="text-gray-500">
            {isLogin
              ? "Entre para continuar usando o ObraLink"
              : "Cadastre-se e encontre os melhores profissionais"}
          </p>
        </div>

        {/* Toggle Login/Signup */}
        <div className="flex mb-8 p-1 rounded-xl bg-gray-100">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2.5 rounded-lg text-sm transition-all ${
              isLogin
                ? "bg-white text-blue-700 font-semibold shadow-sm"
                : "bg-transparent text-gray-500"
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2.5 rounded-lg text-sm transition-all ${
              !isLogin
                ? "bg-white text-blue-700 font-semibold shadow-sm"
                : "bg-transparent text-gray-500"
            }`}
          >
            Cadastrar
          </button>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4 flex-1">
          {!isLogin && (
            <div className="relative">
              <label
                htmlFor="name"
                className={`absolute left-4 transition-all duration-200 ${
                  name
                    ? "top-2 text-xs text-blue-700"
                    : "top-1/2 -translate-y-1/2 text-gray-400"
                }`}
              >
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pt-6 pb-2 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="relative">
            <label
              htmlFor="email"
              className={`absolute left-4 transition-all duration-200 ${
                email
                  ? "top-2 text-xs text-blue-700"
                  : "top-1/2 -translate-y-1/2 text-gray-400"
              }`}
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pt-6 pb-2 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className={`absolute left-4 transition-all duration-200 ${
                password
                  ? "top-2 text-xs text-blue-700"
                  : "top-1/2 -translate-y-1/2 text-gray-400"
              }`}
            >
              Senha
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pt-6 pb-2 px-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-xl text-white font-semibold transition-all active:scale-[0.98] bg-blue-700 hover:bg-blue-800"
          >
            {isLogin ? "Entrar" : "Criar conta"}
          </button>
        </div>
      </div>
    </div>
  );
}
