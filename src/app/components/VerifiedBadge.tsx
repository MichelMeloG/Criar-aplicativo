import { ShieldCheck } from "lucide-react";

export function VerifiedBadgeIcon() {
  return (
    <span className="inline-flex items-center justify-center w-4 h-4 ml-0.5 flex-shrink-0">
      <ShieldCheck
        size={16}
        strokeWidth={2}
        style={{ color: "#0F52BA" }}
        fill="#DBEAFE"
      />
    </span>
  );
}
