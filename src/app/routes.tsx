import { createHashRouter, Outlet, useNavigate, useLocation } from "react-router";
import { OnboardingScreen } from "./components/OnboardingScreen";
import { LoginScreen } from "./components/LoginScreen";
import { HomeScreen } from "./components/HomeScreen";
import { ProfessionalProfileScreen } from "./components/ProfessionalProfileScreen";
import { ChatScreen } from "./components/ChatScreen";
import { DashboardScreen } from "./components/DashboardScreen";
import { SearchScreen } from "./components/SearchScreen";
import { MessagesScreen } from "./components/MessagesScreen";
import { ProfileScreen } from "./components/ProfileScreen";
import { Bell, MapPin, Search as SearchIcon, HardHat } from "lucide-react";

function DesktopHeader({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <header className="hidden md:flex items-center justify-between p-4 border-b bg-white sticky top-0 z-50 w-full">
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={() => onNavigate('/home')}
      >
        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-700">
          <HardHat size={18} color="white" strokeWidth={1.5} />
        </div>
        <span className="text-lg text-gray-800 font-bold">ObraLink</span>
      </div>
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <SearchIcon
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            placeholder="Buscar encanador, pedreiro..."
            className="w-full pl-11 pr-4 py-2.5 rounded-full bg-gray-100 border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onNavigate('/search');
              }
            }}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => onNavigate('/messages')} 
          className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <Bell size={20} className="text-gray-700" />
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white" />
        </button>
        <img
          src="https://images.unsplash.com/photo-1758874574397-e56dfcfc116d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=100"
          alt="Avatar"
          onClick={() => onNavigate('/profile')}
          className="w-10 h-10 rounded-full object-cover border-2 border-blue-600 cursor-pointer"
        />
      </div>
    </header>
  );
}

function LeftSidebar({ onNavigate }: { onNavigate: (path: string) => void }) {
  const menuItems = [
    { icon: <SearchIcon size={20} />, label: "Início", path: "/home" },
    { icon: <Bell size={20} />, label: "Mensagens", path: "/messages" },
    { icon: <HardHat size={20} />, label: "Dashboard", path: "/dashboard" },
    { icon: <MapPin size={20} />, label: "Buscar Profissionais", path: "/search" },
  ];

  return (
    <aside className="hidden md:block w-64 p-4 border-r fixed h-[calc(100vh-73px)] overflow-y-auto bg-white">
      <nav className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onNavigate(item.path)}
            className="flex items-center gap-3 p-3 rounded-lg text-sm font-semibold transition-colors text-gray-600 hover:bg-gray-100"
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function Root() {
  const navigate = useNavigate();
  const location = useLocation();
  // Layout sem header nem sidebar (apenas onboarding e login)
  const isAuthRoute = location.pathname === '/' || location.pathname === '/login';

  if (isAuthRoute) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Outlet />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <DesktopHeader onNavigate={navigate} />
      <div className="flex flex-1">
        <LeftSidebar onNavigate={navigate} />
        <main className="flex-1 w-full md:pl-64">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export const router = createHashRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: OnboardingScreen },
      { path: "login", Component: LoginScreen },
      { path: "home", Component: HomeScreen },
      { path: "professional/:id", Component: ProfessionalProfileScreen },
      { path: "chat/:id", Component: ChatScreen },
      { path: "dashboard", Component: DashboardScreen },
      { path: "search", Component: SearchScreen },
      { path: "messages", Component: MessagesScreen },
      { path: "profile", Component: ProfileScreen },
    ],
  },
]);
