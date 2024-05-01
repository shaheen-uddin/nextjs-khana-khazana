import Image from "next/image";
import HeroSection from "./components/landing/HeroSection";
import RecipieCategories from "./components/landing/RecipieCategories";
import RecipeList from "./components/landing/RecipeList";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="container py-8">
        <div className="grid grid-cols-12 py-4">
          <RecipieCategories />
          <RecipeList />
        </div>
      </section>
    </main>
  );
}
