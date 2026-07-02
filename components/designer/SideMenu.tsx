import Image from "next/image";
import viewIcon from "@/assets/designer/icons/view.svg";
import dimensionsIcon from "@/assets/designer/icons/dimensions.svg";
import editIcon from "@/assets/designer/icons/edit.svg";
import leantosIcon from "@/assets/designer/icons/leantos.svg";
import openingsIcon from "@/assets/designer/icons/openings.svg";
import baysIcon from "@/assets/designer/icons/bays.svg";
import mezzIcon from "@/assets/designer/icons/mezznine.svg";
import propsIcon from "@/assets/designer/icons/props.svg";

const items = [
  { key: "view", label: "View", icon: viewIcon },
  { key: "dimensions", label: "Dimensions", icon: dimensionsIcon },
  { key: "edit", label: "Edit", icon: editIcon },
  { key: "leantos", label: "Leantos", icon: leantosIcon },
  { key: "openings", label: "Openings", icon: openingsIcon },
  { key: "bays", label: "Bays", icon: baysIcon },
  { key: "mezzanine", label: "Mezzanine", icon: mezzIcon },
  { key: "props", label: "Props", icon: propsIcon },
];

type SideMenuProps = {
  active?: string;
  onChange?: (key: string) => void;
  variant?: "vertical" | "mobile";
  className?: string;
};

export default function SideMenu({
  active = "view",
  onChange,
  variant = "vertical",
  className = "",
}: SideMenuProps) {
  const isMobile = variant === "mobile";

  if (isMobile) {
    return (
      <nav 
        className={`fixed bottom-0 left-0 right-0 z-[9999] bg-white/80 backdrop-blur-xl border-t border-slate-200/50 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.05)] ${className}`}
      >
        <div className="flex items-center justify-between px-2 overflow-x-auto no-scrollbar">
          {items.map((it) => {
            const isActive = active === it.key;
            return (
              <button
                key={it.key}
                onClick={() => onChange?.(it.key)}
                className={`flex flex-col items-center justify-center min-w-[72px] py-3 transition-all duration-300 relative ${isActive ? "text-primary" : "text-slate-400"
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-b-full shadow-[0_2px_10px_rgba(37,99,235,0.3)]" />
                )}
                
                <div className={`mb-1 transition-transform duration-300 ${isActive ? "scale-110" : "scale-100"}`}>
                  <Image
                    src={it.icon}
                    alt={it.label}
                    width={22}
                    height={22}
                    className={isActive ? "" : "opacity-50 grayscale"}
                  />
                </div>
                <span className={`text-[10px] font-bold tracking-tight ${isActive ? "opacity-100" : "opacity-70"}`}>
                  {it.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    );
  }

  // Desktop Vertical Menu
  return (
    <nav aria-label="Designer side menu" className={`pl-8 pt-6 pr-2 h-full ${className}`}>
      <ul className="flex flex-col gap-3">
        {items.map((it) => {
          const isActive = active === it.key;
          return (
            <li key={it.key}>
              <button
                onClick={() => onChange?.(it.key)}
                className={`size-16 flex flex-col items-center justify-center rounded-2xl shadow-sm transition-all duration-300 cursor-pointer ${isActive
                  ? "bg-primary text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] scale-105"
                  : "bg-white text-slate-500 hover:bg-slate-50 hover:text-slate-700"
                  }`}
                title={it.label}
              >
                <div className="mb-1">
                  <Image
                    src={it.icon}
                    alt={it.label}
                    width={24}
                    height={24}
                    className={isActive ? "filter invert brightness-0" : "opacity-70"}
                  />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider">{it.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
