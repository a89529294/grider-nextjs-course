import Hero from "@/components/hero";
import scaleImage from "public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imgAlt="steel factory"
      imgData={scaleImage}
      title="Scale your app to infinity"
    />
  );
}
