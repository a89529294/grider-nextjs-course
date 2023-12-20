import Hero from "@/components/hero";
import performanceImage from "public/performance.jpg";

export default function PerformancePage() {
  return (
    <Hero
      imgAlt="welding"
      imgData={performanceImage}
      title="We serve high performance applications"
    />
  );
}
