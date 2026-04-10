import { CoreValues } from "@/components/CoreValues";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InteractiveMission } from "@/components/InteractiveMission";
import { Navigation } from "@/components/Navigation";
import { SocialSection } from "@/components/SocialSection";
import { StoryNarrative } from "@/components/StoryNarrative";
import { TeamSection } from "@/components/TeamSection";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <InteractiveMission />
        <StoryNarrative />
        <CoreValues />
        <TeamSection />
        <SocialSection />
      </main>
      <Footer />
    </>
  );
}
