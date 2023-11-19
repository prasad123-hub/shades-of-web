import { type ReactNode, createContext, useReducer } from "react";

export type Image = {
  id: number;
  name: string;
  description: string;
  buttonText: string;
};

type ImageState = {
  images: Image[];
  currentIndex: number;
};

type ImageContextValue = ImageState & {
  goToNext: () => void;
  goToPrev: () => void;
};

const initialState: ImageState = {
  currentIndex: 0,
  images: [
    {
      id: 0,
      name: "img0",
      description:
        "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
      buttonText: "Arabian Ranches",
    },
    {
      id: 1,
      name: "img1",
      description:
        "Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and Arabian architecture.",
      buttonText: "Arabian Ranches II",
    },
    {
      id: 2,
      name: "img2",
      description:
        "The Centre of Now. The most prestigious square kilometre in the world. Downtown Dubai is no stranger to such accolades, and yet it’s hard to overstate the prominence of this community.",
      buttonText: "Downtown Dubai",
    },
    {
      id: 3,
      name: "img3",
      description:
        "Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully-planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City.",
      buttonText: "Dubai Hills Estate",
    },
    {
      id: 4,
      name: "img4",
      description:
        "Dubai Marina is one of the world’s largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water.",
      buttonText: "Dubai Marina",
    },
    {
      id: 5,
      name: "img5",
      description:
        "Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million square feet of lush greenery.",
      buttonText: "Emirates Living ",
    },
  ],
};

export const ImageContext = createContext<ImageContextValue | null>(null);

type ImageContextProviderProps = {
  children: ReactNode;
};

type NextImageAction = {
  type: "NEXT_IMAGE";
};

type PreviousImageAction = {
  type: "PREVIOUS_IMAGE";
};

type Action = NextImageAction | PreviousImageAction;

function imageReducer(state: ImageState, action: Action): ImageState {

  if (action.type === "NEXT_IMAGE") {

    return {
      ...state,
      currentIndex: state.currentIndex > 4 ? 4 : state.currentIndex + 1,
    };

  }
  if (action.type === "PREVIOUS_IMAGE") {

    return {
      ...state,
      currentIndex: state.currentIndex < 0 ? 0 : state.currentIndex - 1,
    };
  }
  
  return state;
}

export default function ImageContextProvider({
  children,
}: ImageContextProviderProps) {
  const [imageState, dispatch] = useReducer(imageReducer, initialState);

  const ctx: ImageContextValue = {
    currentIndex: imageState.currentIndex,
    images: imageState.images,
    goToNext: () => {
      dispatch({ type: "NEXT_IMAGE" });
    },
    goToPrev: () => {
      dispatch({ type: "PREVIOUS_IMAGE" });
    },
  };
  return <ImageContext.Provider value={ctx}>{children}</ImageContext.Provider>;
}
