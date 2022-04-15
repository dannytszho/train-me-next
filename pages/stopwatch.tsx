import React, { useEffect, useState } from 'react';

interface IProps {
  number: number;
  time: number;
  mins: number;
  sec: number;
  ms: number;
}

const formatNumber = (number: IProps) => `0${number}`.slice(-2);

const getRemaining = (time: IProps) => {
  const mins = Math.floor((+time / 60000) % 60);
  const secs = Math.floor((+time / 1000) % 60);
  const ms = (+time / 10) % 1000;
  return {
    mins: formatNumber(mins as any),
    secs: formatNumber(secs as any),
    ms: formatNumber(ms as any),
  };
};
const StopWatch = () => {
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs, ms } = getRemaining(remainingSecs as any);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setRemainingSecs(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        // eslint-disable-next-line no-shadow
        setRemainingSecs((remainingSecs) => remainingSecs + 10);
      }, 10);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h3 className="text-7xl m-10">{`${mins}:${secs}:${ms}`}</h3>
      <div>
        <button
          className="border border-blue-200 py-1 h-20 w-20 justify-center rounded-full m-6 text-2xl"
          onClick={toggle}
          type="button"
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button
          className="border border-blue-200 py-1 h-20 w-20 justify-center rounded-full m-6 text-2xl"
          onClick={reset}
          type="button"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
