
import Hero from "./components/hero";
import Running from "./components/running";
import Essentials from "./components/essentials";
import Miss from "./components/miss";
import Card from "./productListing/card";
import Gear from "./components/gear";

export default function Home() {
  return (
   <main>
    <Hero />
    <Card />
   <Running />
   <Gear />
   <Miss />
   <Essentials />
   </main>
  );
}