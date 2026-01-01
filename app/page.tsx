import { HeroSection } from "@/components/sections/hero";
import { BusinessModelSection } from "@/components/sections/business-model";
import { ProjectsSection } from "@/components/sections/projects";
import { ImpactSection } from "@/components/sections/impact";
import { TrustSection } from "@/components/sections/trust";
import { BoardSection } from "@/components/sections/board";
import { ImpactCalculator } from "@/components/sections/impact-calculator";
import { SustainabilityTicker } from "@/components/sections/ticker";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SustainabilityTicker text="Kullanmadığınız eşyalar, başkasının hazinesi olsun. Sürdürülebilir bir gelecek için çalışıyoruz. " />
      <BusinessModelSection />
      <SustainabilityTicker text="Kullanmadığınız eşyalar, başkasının hazinesi olsun. Sürdürülebilir bir gelecek için çalışıyoruz. " />
      <ProjectsSection />
      <ImpactCalculator />
      <ImpactSection />
      <BoardSection />
      <TrustSection />
    </div>
  );
}
