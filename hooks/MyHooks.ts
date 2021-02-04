import { useEffect, useState } from "react";
import { debounce } from "../utilities/MyFunctions";
import { ContRefType, TimeType } from "../utilities/MyTypes";

export const useClockTime = () => {
  const [time, setTime] = useState<TimeType>({ hours: 0, minutes: 0, seconds: 0 });
  const [clockTicker, setClockTicker] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      const newDate = new Date();
      setTime({
        hours: newDate.getHours(),
        minutes: newDate.getMinutes(),
        seconds: newDate.getSeconds(),
      });
      setClockTicker(!clockTicker);
    }, 10);
  }, [clockTicker]);

  useEffect(() => {
    
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
  }, []);


  return height;
}