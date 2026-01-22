import { useEffect, useState } from 'react';

function useDisplayWidth() {
  const [getDisplayWidth, setDisplayWidth] = useState(0);

  useEffect(() => {
    function getWidthDisplay() {
      setDisplayWidth(window.innerWidth);
    }
    window.addEventListener('resize', getWidthDisplay);
    getWidthDisplay();
    return () => window.removeEventListener('resize', getWidthDisplay);
  }, []);
  return getDisplayWidth;
}

export {useDisplayWidth}