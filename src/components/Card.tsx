import { Image } from "../context/ImageContext";

const Card = ({ image }: { image: Image }) => {
  return (
    <div
      key={image.id}
      className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] mb-10 md:mb-0"
    >
      <img
        src={`${image.name}.png`}
        alt={image.buttonText}
        width={329}
        height={292}
        className="object-cover w-full h-64"
      />
      <div className="pt-8 h-[300px] flex flex-col justify-center">
        <div className="grow">
          <p className="text-base text-[#887C68] px-6">{image.description}</p>
        </div>
        <div className="py-6 bg-[#F8F8F8] px-6">
          <h6 className="text-2xl text-[#887C68]">{image.buttonText}</h6>
        </div>
      </div>
    </div>
  );
};

export default Card;
