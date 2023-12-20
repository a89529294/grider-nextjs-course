import Hero from "@/components/hero";
import reliabilityImage from "public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgAlt="welding"
      imgData={reliabilityImage}
      title="Super high reliability hosting"
    />
  );
}
