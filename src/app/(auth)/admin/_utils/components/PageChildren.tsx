import HeroSection from "./HeroSection";
import QuickActionsSection from "./QuickActionsSection";
import StatsSection from "./StatsSection";
import SystemStatusSection from "./SystemStatusSection";

export default function PageChildren() {
  return (
    <div className="space-y-6">
      <HeroSection />
      <StatsSection />

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <QuickActionsSection />
        <SystemStatusSection />
      </section>
    </div>
  );
}
