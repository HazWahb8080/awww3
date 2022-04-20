import React, { useCallback, useRef, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";
export default function FeatureSlide({
  title,
  description,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      console.log(index);
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div ref={ref} className="slide">
      
      <h3 className="slide-title">{title}</h3>
      <h6 className="slide-description">{description}</h6>
    </div>
  );
}