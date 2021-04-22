import React, { useState, useEffect } from "react";

function useInViewport(ref: React.RefObject<HTMLElement>) {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const Obs = new IntersectionObserver((entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        setInViewport(entry.isIntersecting);
      });
    });

    if (ref.current !== null) {
      Obs.observe(ref.current);
    }
  });

  return inViewport;
}

export default useInViewport;
