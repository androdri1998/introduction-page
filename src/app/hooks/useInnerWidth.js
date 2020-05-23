import { useState, useEffect } from "react";

export default function useInnerWidth() {
  const [width, setWidth] = useState(window.screen.width);
  useEffect(() => {
    const resize = (fun) => () => {
      fun(window.innerWidth);
    };
    window.addEventListener("resize", resize(setWidth));

    return () => {
      window.removeEventListener("resize", resize(setWidth));
    };
  }, [setWidth]);

  return width;
}
