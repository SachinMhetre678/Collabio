import { Button } from "../components/ui/button"; // Ensure this path is correct
import Image from "next/image"; // If you're using images, ensure you're importing correctly
import Hero from "./_components/Hero"; // Ensure the path to your Hero component is correct
import Header from "./_components/Header"; // Ensure the path to your Header component is correct
import AboutUs from './_components/AboutUs'; 
import Contact from './_components/Contact';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Contact />
      {/* You can add more sections/components here if needed */}
    </div>
  );
}
