import { useEffect, useRef, useState } from "react";

export default function Timer({
  countdown,
  setCountdown,
  timerActiv,
  setTimerActive,
  setWinner,
}) {
  const Timer = () => {
    const timerId = useRef();

    useEffect(() => {
      timerId.current = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timerId.current);
    }, []);

    useEffect(() => {
      if (countdown <= 0) {
        clearInterval(timerId.current);
        setTimerActive(false);
        setWinner(true);
        /* alert("END"); */
      }
    }, [countdown]);
  };
  if (timerActiv) {
    Timer();
  }

  return (
    <section className="offscreen">
      <p>{countdown}</p>
    </section>
  );
}
