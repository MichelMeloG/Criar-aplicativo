import { useState } from "react";
import { ArrowLeft, Star, MapPin, Share2, Heart } from "lucide-react";
import { useNavigate, useParams } from "react-router";
import { VerifiedBadgeIcon } from "./VerifiedBadge";
import { QuoteBottomSheet } from "./QuoteBottomSheet";
import { professionals } from "../data/mockData";

export function ProfessionalProfileScreen() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showQuoteSheet, setShowQuoteSheet] = useState(false);
  const [liked, setLiked] = useState(false);

  const pro = professionals.find((p) => p.id === Number(id)) || professionals[0];

  return (
    <div className="flex flex-col bg-gray-50 font-sans pb-24 md:pb-0">
      <div className="w-full max-w-7xl mx-auto">
        {/* Cover Photo Hero */}
        <div className="relative h-48 md:h-64">
          <img
            src={pro.coverPhoto}
            alt="Capa"
            className="w-full h-full object-cover md:rounded-b-2xl"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="absolute top-6 left-4 md:top-8 md:left-8 w-10 h-10 rounded-full flex items-center justify-center transition-all active:scale-95 bg-white/90 backdrop-blur-sm"
          >
            <ArrowLeft size={20} className="text-gray-800" />
          </button>
          {/* Like Button */}
          <button
            onClick={() => setLiked(!liked)}
            className="absolute top-6 right-4 md:top-8 md:right-8 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm"
          >
            <Heart
              size={18}
              className={liked ? "text-red-500" : "text-gray-600"}
              fill={liked ? "currentColor" : "none"}
            />
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:gap-8 px-4 md:px-8">
          {/* Left Column (Info) */}
          <div className="md:w-1/3">
            {/* Profile Card */}
            <div className="bg-white md:mx-0 -mt-8 relative z-10 p-5 rounded-2xl shadow-lg">
              {/* Avatar overlapping hero */}
              <div className="flex items-end gap-4 mb-4">
                <img
                  src={pro.avatar}
                  alt={pro.name}
                  className="w-24 h-24 rounded-full object-cover -mt-16 border-4 border-white shadow-md"
                />
                <div className="flex-1 pb-1">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h2 className="text-xl text-gray-800 font-bold">
                      {pro.name}
                    </h2>
                    {pro.verified && <VerifiedBadgeIcon />}
                  </div>
                  <p className="text-sm text-gray-500">{pro.role}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex items-center gap-1.5">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span className="font-bold text-gray-800">{pro.rating}</span>
                  <span className="text-gray-400">
                    ({pro.reviews} avaliações)
                  </span>
                </div>
                <div className="w-1 h-1 rounded-full bg-gray-300" />
                <div className="flex items-center gap-1">
                  <MapPin size={14} className="text-gray-400" />
                  <span className="text-gray-500">{pro.distance} km</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm leading-relaxed mb-4 text-gray-500">
                {pro.bio}
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {pro.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 text-gray-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Prices Section */}
            <div className="bg-white md:mx-0 mt-4 p-5 rounded-2xl shadow-md">
              <h3 className="text-base mb-4 font-bold text-gray-800">
                Preços Base
              </h3>
              <div className="flex flex-col">
                {pro.services.map((service, idx) => (
                  <div key={idx}>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-sm text-gray-700">
                        {service.name}
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        {service.price}
                      </span>
                    </div>
                    {idx < pro.services.length - 1 && (
                      <div className="w-full border-t border-dashed border-gray-200" />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-xs mt-3 text-gray-400">
                * Preços podem variar conforme complexidade do serviço.
              </p>
            </div>
          </div>

          {/* Right Column (Portfolio & Reviews) */}
          <div className="md:w-2/3 mt-4 md:mt-0">
            {/* Portfolio Section */}
            <div className="bg-white md:mx-0 p-5 rounded-2xl shadow-md">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-gray-800">
                  Portfólio
                </h3>
                <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-bold">
                  {pro.portfolio.length} fotos
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {pro.portfolio.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square overflow-hidden rounded-xl"
                  >
                    <img
                      src={img}
                      alt={`Portfólio ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews teaser */}
            <div className="bg-white md:mx-0 mt-4 mb-28 p-5 rounded-2xl shadow-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-gray-800">
                  Avaliações
                </h3>
                <div className="flex items-center gap-1.5">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-bold text-gray-800">
                    {pro.rating}/5.0
                  </span>
                </div>
              </div>
              {/* Review cards would go here */}
              <p className="text-sm text-gray-500">
                As avaliações detalhadas aparecerão aqui.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowQuoteSheet(true)}
          className="px-6 py-3 rounded-full text-white font-semibold transition-all active:scale-95 bg-orange-500 hover:bg-orange-600 shadow-lg shadow-orange-500/30"
        >
          Pedir Orçamento no Chat
        </button>
      </div>

      <QuoteBottomSheet
        isOpen={showQuoteSheet}
        onClose={() => setShowQuoteSheet(false)}
        professional={pro}
      />
    </div>
  );
}
