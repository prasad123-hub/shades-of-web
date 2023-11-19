import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

export function useImageContext() {

  const imageCtx = useContext(ImageContext);

  if (imageCtx === null) {
    throw new Error("Something went wrong, -- This should not be happened");
  }
  
  return imageCtx;
}
