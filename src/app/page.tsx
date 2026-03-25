import Hero from "@/components/sections/Hero";
import Pain from "@/components/sections/Pain";
import Comparison from "@/components/sections/Comparison";
import WhatYouLearn from "@/components/sections/WhatYouLearn";
import ForWho from "@/components/sections/ForWho";
import Authority from "@/components/sections/Authority";
import Bonus from "@/components/sections/Bonus";
import Offer from "@/components/sections/Offer";
import Guarantee from "@/components/sections/Guarantee";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Pain />
      <Comparison />
      <WhatYouLearn />
      <ForWho />
      <Authority />
      <Bonus />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
