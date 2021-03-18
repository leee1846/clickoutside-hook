import { useRef, useEffect, useState } from "react";

const useClickOutside = (initialValue) => {
  const buttonRef = useRef();
  const visibleContentRef = useRef();
  const [visible, setVisible] = useState(initialValue);

  useEffect(() => {
    const buttonHandeler = (event) => {
      if (buttonRef.current.contains(event.target)) {
        setVisible((prev) => !prev);
      } else if (!visibleContentRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("click", buttonHandeler);

    return () => {
      document.addEventListener("click", buttonHandeler);
    };
  }, []);

  return [buttonRef, visibleContentRef, visible];
};

export default useClickOutside;
