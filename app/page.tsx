
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import ImageSlider from "./components/Slider/ImageSlider";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Header/>
       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ImageSlider />
      </main>
      <section className="bg-white py-12"> 
        <Carousel 
          tags="Turismo en Buenos Aires"
          title="Turismo en Buenos Aires"
          buttonLabel="TODOS LOS BENEFICIOS"

        />
      </section>
      <section className="bg-gray-100 py-12"> 
      <Carousel 
          tags="haveVoucher"
          title="Codigos de descuento"
          subtitle="¿Sos socio de Club LA NACION? Descargá tu coódigo y disfrutá de los beneficios exclusivos en tus marcas favoritas."
          buttonLabel="TODOS LOS CODIGOS"
          haveVoucher = {true}
        />
      </section>
    </div>
  );
}
