import Ajuda from "@/components/Home/Ajuda/Ajuda";
import BannerHome from "@/components/Home/BannerHome/BannerHome";
import Beneficios from "@/components/Home/Beneficios/Beneficios";

export default function Home() {
  return (
    <main className="w-fit h-fit">
      <BannerHome/>
      <Beneficios/>
      <Ajuda/>
    </main>
  );
}
