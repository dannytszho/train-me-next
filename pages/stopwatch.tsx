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
        setRemainingSecs((remainingSecs) => remainingSecs + 10);
      }, 10);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  return (
    <div>
      <h3>{`${mins}:${secs}:${ms}`}</h3>
      <button onClick={toggle} type="button">
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={reset} type="button">
        Reset
      </button>
    </div>
  );
};

export default StopWatch;
