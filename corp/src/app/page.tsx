import Hero from "@/components/hero";
import homeImage from "public/home.jpg";

export default function Home() {
  return (
    <Hero
      imgAlt="car factory"
      imgData={homeImage}
      title="Professional Cloud Hosting"
    />
  );
}
