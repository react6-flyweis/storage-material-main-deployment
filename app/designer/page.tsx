"use client";

import { useState } from "react";
import DesignerHeader from "@/components/designer/DesignerHeader";
import SideMenu from "@/components/designer/SideMenu";
import ViewTab from "@/components/designer/ViewTab";
import DimensionsTab from "@/components/designer/DimensionsTab";
import EditTab from "@/components/designer/EditTab";
import LeantosTab from "@/components/designer/LeantosTab";
import OpeningsTab from "@/components/designer/OpeningsTab";
import BaysTab from "@/components/designer/BaysTab";
import MezzanineTab from "@/components/designer/MezzanineTab";
import PropsTab from "@/components/designer/PropsTab";
import { X } from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState<string>("view");
  const [showAlert, setShowAlert] = useState(true);

  const tabs = [
    "view",
    "dimensions",
    "edit",
    "leantos",
    "openings",
    "bays",
    "mezzanine",
    "props",
  ];

  const currentIndex = tabs.indexOf(activeTab);
  const prevDisabled = currentIndex <= 0;
  const nextDisabled = currentIndex >= tabs.length - 1;

  const goPrev = () => {
    if (prevDisabled) return;
    setActiveTab(tabs[Math.max(0, currentIndex - 1)]);
  };

  const goNext = () => {
    if (nextDisabled) return;
    setActiveTab(tabs[Math.min(tabs.length - 1, currentIndex + 1)]);
  };

  return (
    <>

      <DesignerHeader />
      <div className="flex flex-col h-[calc(100vh-64px)] bg-slate-950/5 overflow-hidden">
        <div className="flex flex-1 min-h-0 overflow-hidden  md:pb-0">
          <div className="hidden md:block md:border-r md:border-slate-200/60 bg-white/70">
            <SideMenu active={activeTab} onChange={setActiveTab} />
          </div>

          <div className="flex-1 min-h-0">
            {activeTab === "view" && (
              <ViewTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "dimensions" && (
              <DimensionsTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "edit" && (
              <EditTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "leantos" && (
              <LeantosTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "openings" && (
              <OpeningsTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "bays" && (
              <BaysTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "mezzanine" && (
              <MezzanineTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
            {activeTab === "props" && (
              <PropsTab
                onPrev={goPrev}
                onNext={goNext}
                prevDisabled={prevDisabled}
                nextDisabled={nextDisabled}
              />
            )}
          </div>
        </div>

        <SideMenu
          active={activeTab}
          onChange={setActiveTab}
          variant="mobile"
          className="md:hidden px-6 pb-4 relative z-[9999]"
        />
      </div>
    </>
  );
}
