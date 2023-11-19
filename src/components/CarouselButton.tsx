import { useImageContext } from "../hooks/useImageContext";

interface CarouselButtonProps {
  next?: boolean;
}

export const CarouselButton = ({ next }: CarouselButtonProps) => {
  const { goToNext, goToPrev, currentIndex } = useImageContext();
  return (
    <>
      {!next ? (
        <button
          disabled={currentIndex <= 0}
          onClick={goToPrev}
          className="h-14 w-14 bg-[#F6F6F6] disabled:cursor-not-allowed text-black lg:inline-flex rounded-md items-center justify-center hidden absolute top-1/2 -left-7 -translate-y-1/2 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-left"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      ) : (
        <button
          onClick={goToNext}
          disabled={currentIndex >= 3}
          className="h-14 w-14 bg-[#F6F6F6] disabled:cursor-not-allowed text-black lg:inline-flex rounded-md items-center justify-center hidden absolute top-1/2 -right-7 -translate-y-1/2 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-right"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}
    </>
  );
};
