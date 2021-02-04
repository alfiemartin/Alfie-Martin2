import React, { useRef } from "react";
import { useClockTime, useElementsHeight } from "../../hooks/MyHooks";

const ClockNormal = () => {
  let contRef = useRef<HTMLDivElement>();
  let circleRef = useRef<HTMLDivElement>();

  const time = useClockTime();
  const height = useElementsHeight(circleRef);

  let clockNumbers: number[] = [];
  while (clockNumbers.length < 12) clockNumbers.push(clockNumbers.length);

  return (
    <div ref={contRef} className="NORMAL clock-cont">
      <div ref={circleRef} className="circle-clock">
        {clockNumbers.map((number) => {
          return (
            <div
              className="hour-dashes clock-lines"
              key={number}
              style={{
                transform: `translateX(${-1}px) rotateZ(${
                  (number / 12) * 360 + 180
                }deg)  translateY(${height - 20}px)`,
              }}
            ></div>
          );
        })}
        <div
          className="hour-hand clock-lines"
          style={{
            transform: `translateX(${-2}px) rotateZ(${
              (time.hours / 12) * 360 + 180
            }deg) translateY(${0}px)`,
          }}
        ></div>
        <div
          className="minute-hand clock-lines"
          style={{
            transform: `translateX(${-2}px) rotateZ(${
              (time.minutes / 60) * 360 + 180
            }deg) translateY(${0}px)`,
          }}
        ></div>
        <div
          className="second-hand clock-lines"
          style={{
            transform: `translateX(${-2}px) rotateZ(${
              (time.seconds / 60) * 360 + 180
            }deg) translateY(${0}px)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ClockNormal;
