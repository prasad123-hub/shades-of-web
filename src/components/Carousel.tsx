import { Image } from "../context/ImageContext";
import { useImageContext } from "../hooks/useImageContext";
import { CarouselButton } from "./CarouselButton";

const Carousel = () => {
  const { currentIndex, images } = useImageContext();

  const visibleImages: Image[] = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="relative">
      <CarouselButton />
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-14">
        {visibleImages.map((image) => (
          <div key={image.id} className="lg:h-[552px] lg:w-[391px] relative">
            <img
              src={`${image.name}.png`}
              alt={image.buttonText}
              width={329}
              height={552}
              className="object-cover w-full h-full z-0 rounded-md"
            />
            <div className="absolute w-full py-2.5 bottom-10 inset-x-0 text-center">
              <p className="text-3xl text-white uppercase">
                {image.buttonText}
              </p>
            </div>
          </div>
        ))}
      </div>
      <CarouselButton next />
    </div>
  );
};

export default Carousel;
