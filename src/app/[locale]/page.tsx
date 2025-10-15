import BannerAboutMeComponent from "@/components/Banner/AboutMeBanner";
import AboutMeDetailComponent from "@/components/Banner/AboutMeDetail";
import HeroSection from "@/components/HeroSection/Hero";
import ProjectsCarrousselComponent from "@/components/Projects/ProjectsCarroussel";

export default function Home() {
  return (
    <section className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <HeroSection />
      <ProjectsCarrousselComponent />
      <BannerAboutMeComponent />
      <AboutMeDetailComponent />
    </section>
  );
}