import { useEffect, useState } from "react";
import { debounce } from "../utilities/MyFunctions";
import { ContRefType, TimeType } from "../utilities/MyTypes";

export const useClockTime = () => {
  const newDate = new Date();

  const [time, setTime] = useState<TimeType>({ hours: newDate.getHours(), minutes: newDate.getMinutes(), seconds: newDate.getSeconds() });
  const [clockTicker, setClockTicker] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTime({
        hours: newDate.getHours(),
        minutes: newDate.getMinutes(),
        seconds: newDate.getSeconds(),
      });
      setClockTicker(!clockTicker);
    }, 10);
  }, [clockTicker]);

  return time
}

export const useElementsHeight = (elementsRef: ContRefType) => {
  const [height, setHeight] = useState<number>(0);

  const windowSizeChanged = () => {
    setHeight(elementsRef.current.clientHeight / 2);
  }
  
  useEffect(() => {
    windowSizeChanged();
    window.addEventListener("resize", debounce(windowSizeChanged, 250));
    return () => window.removeEventListener("resize", debounce(windowSizeChanged, 250));
  });


  return height;
}