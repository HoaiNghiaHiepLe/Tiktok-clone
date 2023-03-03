import { forwardRef, useState } from "react";
import images from "~/assets/images";
import * as S from "./styles";

const Image = forwardRef(
  (
    {
      fallback: customFallback = images.noImage,
      className,
      src,
      alt,
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");
    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <S.ImageWrapper
        className={className}
        src={fallback || src}
        alt={alt}
        ref={ref}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
