import React, { useState, useEffect, useRef } from 'react';

// Single 300x250 Banner Ad rendered inside an isolated iframe
function AdBanner({ id }: { id: number }) {
  const adHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    html, body { width: 100%; height: 100%; overflow: hidden; display: flex; justify-content: center; align-items: center; background: transparent; }
  </style>
</head>
<body>
  <script type="text/javascript">
    atOptions = {
      'key' : '9120e6932cff4b0757e097740b2e83a4',
      'format' : 'iframe',
      'height' : 250,
      'width' : 300,
      'params' : {}
    };
  </script>
  <script type="text/javascript" src="https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js"></script>
</body>
</html>`;

  return (
    <div className="w-[300px] h-[250px] bg-slate-50 border border-slate-200/80 rounded-sm overflow-hidden flex items-center justify-center shadow-xs">
      <iframe
        title={`ad-banner-${id}`}
        srcDoc={adHtml}
        width={300}
        height={250}
        className="w-[300px] h-[250px] border-0 overflow-hidden block"
        scrolling="no"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation"
      />
    </div>
  );
}

// 5 Banner Ads cleanly placed directly below
function FiveAdsContainer() {
  return (
    <div className="w-full max-w-6xl mt-2 pb-6 flex flex-col items-center">
      <div className="flex flex-wrap justify-center items-center gap-3">
        {[1, 2, 3, 4, 5].map((num) => (
          <AdBanner key={num} id={num} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const TARGET_URL = 'https://glamourpicklessteward.com/udxbksznss?key=0f3fabd9e1807a38532b233a146ab5a8';
  const INITIAL_SECONDS = 3;

  const [step, setStep] = useState<'timer' | 'video'>('timer');
  const [timeLeft, setTimeLeft] = useState<number>(INITIAL_SECONDS);

  const startTimestampRef = useRef<number>(Date.now());

  // Rock-solid timestamp based countdown timer: never skips, lags, or drifts
  useEffect(() => {
    if (step !== 'timer') return;

    startTimestampRef.current = Date.now();
    const durationMs = INITIAL_SECONDS * 1000;

    const interval = setInterval(() => {
      const elapsedMs = Date.now() - startTimestampRef.current;
      const remainingSec = Math.max(0, Math.ceil((durationMs - elapsedMs) / 1000));
      
      setTimeLeft(remainingSec);

      if (elapsedMs >= durationMs) {
        clearInterval(interval);
        setStep('video');
      }
    }, 100);

    return () => clearInterval(interval);
  }, [step]);

  // Progress for visual indicator
  const progressRatio = Math.max(0, Math.min(1, timeLeft / INITIAL_SECONDS));
  const circleRadius = 78;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference * (1 - progressRatio);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-0 m-0 select-none font-sans">
      {/* Main Content: Starts flush at the very top, zero wasted space */}
      <main className="w-full flex flex-col items-center p-0 m-0">
        {step === 'timer' ? (
          /* PAGE 1: 3-SECOND STOPWATCH TIMER */
          <div className="flex flex-col items-center justify-center text-center w-full pt-4 pb-2">
            {/* Stopwatch Container */}
            <div className="relative w-48 h-56 flex items-center justify-center mx-auto">
              <svg
                viewBox="0 0 200 220"
                className="w-full h-full drop-shadow-xs"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Crown & Buttons */}
                <rect x="91" y="4" width="18" height="22" rx="3" fill="#111827" />
                <rect x="84" y="0" width="32" height="9" rx="2" fill="#111827" />
                <rect
                  x="36"
                  y="22"
                  width="15"
                  height="9"
                  rx="2"
                  transform="rotate(-35 36 22)"
                  fill="#111827"
                />
                <rect
                  x="150"
                  y="14"
                  width="15"
                  height="9"
                  rx="2"
                  transform="rotate(35 150 14)"
                  fill="#111827"
                />

                {/* Outer Ring */}
                <circle
                  cx="100"
                  cy="115"
                  r="85"
                  stroke="#111827"
                  strokeWidth="11"
                  fill="#ffffff"
                />

                {/* Dynamic animated smooth green progress circle */}
                <circle
                  cx="100"
                  cy="115"
                  r={circleRadius}
                  stroke="#7bc653"
                  strokeWidth="14"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  transform="rotate(-90 100 115)"
                  strokeLinecap="round"
                  className="transition-[stroke-dashoffset] duration-150 ease-linear"
                />

                {/* Dial Ticks */}
                <line x1="100" y1="36" x2="100" y2="48" stroke="#111827" strokeWidth="4.5" />
                <line x1="179" y1="115" x2="167" y2="115" stroke="#111827" strokeWidth="4.5" />
                <line x1="100" y1="194" x2="100" y2="182" stroke="#111827" strokeWidth="4.5" />
                <line x1="21" y1="115" x2="33" y2="115" stroke="#111827" strokeWidth="4.5" />
                <line x1="156" y1="59" x2="148" y2="67" stroke="#111827" strokeWidth="3" />
                <line x1="156" y1="171" x2="148" y2="163" stroke="#111827" strokeWidth="3" />
                <line x1="44" y1="171" x2="52" y2="163" stroke="#111827" strokeWidth="3" />
                <line x1="44" y1="59" x2="52" y2="67" stroke="#111827" strokeWidth="3" />
              </svg>

              <div className="absolute top-[54%] left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center">
                <span className="text-5xl font-black text-black tracking-tighter leading-none">
                  {timeLeft}
                </span>
                <span className="text-lg font-extrabold text-black tracking-normal -mt-0.5">
                  sec
                </span>
              </div>
            </div>

            <p className="mt-3 text-lg sm:text-xl font-semibold text-slate-800 tracking-wide text-center">
              ভিডিও দেখতে কিছুক্ষণ অপেক্ষা করুন
            </p>
          </div>
        ) : (
          /* PAGE 2: ORIGINAL SIZED CLICKABLE VIDEO PLAYER IMAGE */
          <div className="w-full flex flex-col items-center justify-center px-4 pt-2">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer mx-auto max-w-md w-full text-center"
            >
              <img
                src="https://i.ibb.co.com/pjh6bp9G/Screenshot-20260928-141210.jpg"
                alt="Video Player"
                className="max-w-full h-auto block mx-auto"
              />
            </a>
          </div>
        )}
      </main>

      {/* 5 Banner Ads: Positioned directly beneath video player image */}
      <FiveAdsContainer />
    </div>
  );
}
