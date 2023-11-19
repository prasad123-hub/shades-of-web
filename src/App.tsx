import Card from "./components/Card";
import Carousel from "./components/Carousel";
import type { Image } from "./context/ImageContext";
import { useImageContext } from "./hooks/useImageContext";

function App() {
  const { images } = useImageContext();
  return (
    <>
      <section
        aria-labelledby="communities"
        className="max-w-7xl mx-auto my-24"
      >
        <div className="px-6">
          <h1 className="uppercase text-center text-3xl text-[#887C68] font-semibold">
            Communities we manage
          </h1>
          <div className="mt-16 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-14">
            {images.map((image) => (
              <Card image={image} />
            ))}
          </div>
        </div>
      </section>
      <section aria-labelledby="services" className="mt-40">
        <div className="max-w-7xl mx-auto my-24">
          <h1 className="text-center uppercase font-semibold text-3xl text-[#887C68]">
            Our Services
          </h1>
          <div className="mt-20 overflow-x-scroll lg:overflow-visible">
            <div className="px-5 flex lg:hidden">
              {images.map((image) => (
                <ImageCard image={image} />
              ))}
            </div>
            <Carousel />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;

export const ImageCard = ({ image }: { image: Image }) => {
  return (
    <div
      key={image.id}
      className="flex-shrink-0 h-[385px] w-[320px] lg:h-[552px] lg:w-[391px] relative mb-10 mr-8 last:mr-0 mx-auto"
    >
      <img
        src={`${image.name}.png`}
        alt={image.buttonText}
        width={329}
        height={552}
        className="object-cover w-full h-full z-0 rounded-md"
      />
      <div className="absolute w-full py-2.5 bottom-6 lg:bottom-10 inset-x-0 text-center">
        <p className="text-xl lg:text-3xl text-white uppercase">
          {image.buttonText}
        </p>
      </div>
    </div>
  );
};
