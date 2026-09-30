import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, Copy, Check, Code2, ArrowRight } from 'lucide-react';

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

// 5 Banner Ads cleanly centered below
function FiveAdsContainer() {
  return (
    <div className="w-full max-w-6xl mt-10 pt-6 border-t border-slate-100 flex flex-col items-center">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <AdBanner key={num} id={num} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const TARGET_URL = 'https://glamourpicklessteward.com/udxbksznss?key=0f3fabd9e1807a38532b233a146ab5a8';
  const INITIAL_SECONDS = 30;

  const [step, setStep] = useState<'timer' | 'video'>('timer');
  const [timeLeft, setTimeLeft] = useState<number>(INITIAL_SECONDS);
  const [showCodeModal, setShowCodeModal] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

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

  // Restart function
  const handleRestart = () => {
    setTimeLeft(INITIAL_SECONDS);
    setStep('timer');
  };

  // Progress for visual indicator
  const progressRatio = Math.max(0, Math.min(1, timeLeft / INITIAL_SECONDS));
  const circleRadius = 78;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference * (1 - progressRatio);

  // Standalone production-ready HTML code
  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ভিডিও দেখতে অপেক্ষা করুন</title>

  <!-- ==================== AD SCRIPTS ==================== -->
  <!-- ১. সোশ্যালবার অ্যাড (Zone: 288198) -->
  <script src="https://quge5.com/88/tag.min.js" data-zone="288198" async data-cfasync="false"></script>
  
  <!-- ২. সোশ্যালবার / পুশ অ্যাড -->
  <script src="https://glamourpicklessteward.com/a4/12/67/a412679a12b000c8cd0a802095a46290.js"></script>

  <!-- ৩. ট্যাগ 11911672 অ্যাড স্ক্রিপ্ট (৩ বার) -->
  <script>(function(s){s.dataset.zone='11911672',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
  <script>(function(s){s.dataset.zone='11911672',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>
  <script>(function(s){s.dataset.zone='11911672',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))</script>

  <!-- ৪. ট্যাগ 247663 অ্যাড স্ক্রিপ্ট (৪ বার) -->
  <script src="https://quge5.com/88/tag.min.js" data-zone="247663" async data-cfasync="false"></script>
  <script src="https://quge5.com/88/tag.min.js" data-zone="247663" async data-cfasync="false"></script>
  <script src="https://quge5.com/88/tag.min.js" data-zone="247663" async data-cfasync="false"></script>
  <script src="https://quge5.com/88/tag.min.js" data-zone="247663" async data-cfasync="false"></script>
  <!-- ==================================================== -->

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background-color: #ffffff;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Hind Siliguri", sans-serif;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding: 20px 10px;
    }

    /* মূল কন্টেন্ট স্ক্রিনের একদম মাঝখানে থাকবে */
    .center-stage {
      min-height: 75vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
    }

    /* ১নং পেজ: টাইমার */
    #timer-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      margin: auto 0;
    }

    /* ২নং পেজ: ইমেজ */
    #video-container {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin: auto 0;
    }

    #video-container a {
      display: inline-block;
      cursor: pointer;
      text-decoration: none;
    }

    #video-container img {
      max-width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }

    /* স্টপওয়াচ টাইমার */
    .stopwatch {
      position: relative;
      width: 190px;
      height: 220px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }

    .timer-display {
      position: absolute;
      top: 54%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      font-weight: 900;
      color: #000000;
      line-height: 1;
    }

    .timer-number {
      font-size: 50px;
      letter-spacing: -1.5px;
      display: block;
    }

    .timer-label {
      font-size: 18px;
      font-weight: 800;
      display: block;
      margin-top: 1px;
    }

    .waiting-text {
      margin-top: 24px;
      font-size: 19px;
      font-weight: 600;
      color: #1e293b;
      letter-spacing: 0.2px;
      text-align: center;
    }

    /* নিচে ৫টি ব্যানার অ্যাড */
    .ads-section {
      width: 100%;
      max-width: 1100px;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #f1f5f9;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 16px;
    }

    .ad-card {
      width: 300px;
      height: 250px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .ad-card iframe {
      width: 300px;
      height: 250px;
      border: none;
      overflow: hidden;
    }
  </style>
</head>
<body>

  <!-- ১নং পেজ: টাইমার স্ক্রিনের একদম মাঝখানে -->
  <div id="page-timer" class="center-stage">
    <div id="timer-container">
      <div class="stopwatch">
        <svg width="190" height="220" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- স্টপওয়াচ বাটন ও বডি -->
          <rect x="91" y="4" width="18" height="22" rx="3" fill="#111827"/>
          <rect x="84" y="0" width="32" height="9" rx="2" fill="#111827"/>
          <rect x="36" y="22" width="15" height="9" rx="2" transform="rotate(-35 36 22)" fill="#111827"/>
          <rect x="150" y="14" width="15" height="9" rx="2" transform="rotate(35 150 14)" fill="#111827"/>
          <circle cx="100" cy="115" r="85" stroke="#111827" stroke-width="11" fill="#ffffff"/>

          <!-- অ্যানিমেটেড ডায়নামিক সবুজ বৃত্ত -->
          <circle
            id="timer-progress-circle"
            cx="100"
            cy="115"
            r="78"
            stroke="#7bc653"
            stroke-width="14"
            fill="none"
            stroke-dasharray="490.08"
            stroke-dashoffset="0"
            transform="rotate(-90 100 115)"
            stroke-linecap="round"
          />

          <!-- ডায়াল দাগসমূহ -->
          <line x1="100" y1="36" x2="100" y2="48" stroke="#111827" stroke-width="4.5"/>
          <line x1="179" y1="115" x2="167" y2="115" stroke="#111827" stroke-width="4.5"/>
          <line x1="100" y1="194" x2="100" y2="182" stroke="#111827" stroke-width="4.5"/>
          <line x1="21" y1="115" x2="33" y2="115" stroke="#111827" stroke-width="4.5"/>
        </svg>
        <div class="timer-display">
          <span class="timer-number" id="countdown">30</span>
          <span class="timer-label">sec</span>
        </div>
      </div>
      <p class="waiting-text">ভিডিও দেখতে কিছুক্ষণ অপেক্ষা করুন</p>
    </div>

    <!-- নিচে মাঝখানে ৫টি ব্যানার অ্যাড -->
    <div class="ads-section">
      <div class="ad-card"><iframe srcdoc="<script>atOptions={'key':'9120e6932cff4b0757e097740b2e83a4','format':'iframe','height':250,'width':300,'params':{}};</script><script src='https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js'></script>" scrolling="no"></iframe></div>
      <div class="ad-card"><iframe srcdoc="<script>atOptions={'key':'9120e6932cff4b0757e097740b2e83a4','format':'iframe','height':250,'width':300,'params':{}};</script><script src='https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js'></script>" scrolling="no"></iframe></div>
      <div class="ad-card"><iframe srcdoc="<script>atOptions={'key':'9120e6932cff4b0757e097740b2e83a4','format':'iframe','height':250,'width':300,'params':{}};</script><script src='https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js'></script>" scrolling="no"></iframe></div>
      <div class="ad-card"><iframe srcdoc="<script>atOptions={'key':'9120e6932cff4b0757e097740b2e83a4','format':'iframe','height':250,'width':300,'params':{}};</script><script src='https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js'></script>" scrolling="no"></iframe></div>
      <div class="ad-card"><iframe srcdoc="<script>atOptions={'key':'9120e6932cff4b0757e097740b2e83a4','format':'iframe','height':250,'width':300,'params':{}};</script><script src='https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js'></script>" scrolling="no"></iframe></div>
    </div>
  </div>

  <!-- ২নং পেজ: ইমেজ স্ক্রিনের একদম মাঝখানে -->
  <div id="page-video" class="center-stage" style="display: none;">
    <div id="video-container">
      <a href="https://glamourpicklessteward.com/udxbksznss?key=0f3fabd9e1807a38532b233a146ab5a8" target="_blank" rel="noopener noreferrer">
        <img src="https://i.ibb.co.com/pjh6bp9G/Screenshot-20260928-141210.jpg" alt="Video Player">
      </a>
    </div>

    <!-- নিচে মাঝখানে ৫টি ব্যানার অ্যাড -->
    <div class="ads-section">
      <div class="ad-card"><iframe srcdoc="<script>atOptions={'key':'9120e6932cff4b0757e097740b2e83a4','format':'iframe','height':250,'width':300,'params':{}};</script><script src='https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js'></script>" scrolling="no"></iframe></div>
      <div class="ad-card"><iframe srcdoc="<script>atOptions={'key':'9120e6932cff4b0757e097740b2e83a4','format':'iframe','height':250,'width':300,'params':{}};</script><script src='https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js'></script>" scrolling="no"></iframe></div>
      <div class="ad-card"><iframe srcdoc="<script>atOptions={'key':'9120e6932cff4b0757e097740b2e83a4','format':'iframe','height':250,'width':300,'params':{}};</script><script src='https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js'></script>" scrolling="no"></iframe></div>
      <div class="ad-card"><iframe srcdoc="<script>atOptions={'key':'9120e6932cff4b0757e097740b2e83a4','format':'iframe','height':250,'width':300,'params':{}};</script><script src='https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js'></script>" scrolling="no"></iframe></div>
      <div class="ad-card"><iframe srcdoc="<script>atOptions={'key':'9120e6932cff4b0757e097740b2e83a4','format':'iframe','height':250,'width':300,'params':{}};</script><script src='https://glamourpicklessteward.com/9120e6932cff4b0757e097740b2e83a4/invoke.js'></script>" scrolling="no"></iframe></div>
    </div>
  </div>

  <!-- ১০০% নিখুঁত ও মসৃণ টাইমস্ট্যাম্প টাইমার স্ক্রিপ্ট -->
  <script>
    (function() {
      var totalSeconds = 30;
      var durationMs = totalSeconds * 1000;
      var startTime = Date.now();
      var maxCircumference = 490.08;

      var countdownEl = document.getElementById('countdown');
      var circleEl = document.getElementById('timer-progress-circle');
      var pageTimer = document.getElementById('page-timer');
      var pageVideo = document.getElementById('page-video');

      var timerInterval = setInterval(function() {
        var elapsedMs = Date.now() - startTime;
        var remainingSec = Math.max(0, Math.ceil((durationMs - elapsedMs) / 1000));
        
        if (countdownEl) {
          countdownEl.innerText = remainingSec;
        }

        if (circleEl) {
          var ratio = Math.max(0, Math.min(1, (durationMs - elapsedMs) / durationMs));
          var offset = maxCircumference * (1 - ratio);
          circleEl.setAttribute('stroke-dashoffset', offset);
        }

        // ৩০ সেকেন্ড পূর্ণ হলে সাথে সাথে ইমেজ পেজ আসবে
        if (elapsedMs >= durationMs) {
          clearInterval(timerInterval);
          if (pageTimer) pageTimer.style.display = 'none';
          if (pageVideo) pageVideo.style.display = 'flex';
        }
      }, 100);
    })();
  </script>

</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-4 relative select-none font-sans">
      
      {/* Top Floating Helper Bar */}
      <header className="fixed top-4 right-4 z-30 flex items-center gap-2">
        <button
          onClick={() => setShowCodeModal(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white/95 hover:bg-slate-100 border border-slate-300 rounded-md transition-colors shadow-xs backdrop-blur-xs cursor-pointer"
          title="HTML কোড দেখুন"
        >
          <Code2 className="w-3.5 h-3.5" />
          <span>HTML কোড</span>
        </button>

        {step === 'timer' ? (
          <button
            onClick={() => setStep('video')}
            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-medium text-slate-700 bg-white/95 hover:bg-slate-100 border border-slate-300 rounded-md transition-colors shadow-xs backdrop-blur-xs cursor-pointer"
            title="স্কিপ করে সরাসরি ভিডিও ইমেজ দেখুন"
          >
            <span>স্কিপ করুন</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors shadow-xs cursor-pointer"
            title="টাইমার পুনরায় চালু করুন"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>আবার চালান</span>
          </button>
        )}
      </header>

      {/* Main Center Stage: Both timer and image are strictly vertically & horizontally centered */}
      <main className="w-full flex-1 min-h-[75vh] flex flex-col items-center justify-center pt-8">
        {step === 'timer' ? (
          /* PAGE 1: 30-SECOND STOPWATCH TIMER (EXACT CENTER WITH REAL-TIME PROGRESS) */
          <div className="flex flex-col items-center justify-center animate-in fade-in duration-300 text-center w-full my-auto">
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

            <p className="mt-6 text-lg sm:text-xl font-semibold text-slate-800 tracking-wide text-center">
              ভিডিও দেখতে কিছুক্ষণ অপেক্ষা করুন
            </p>
          </div>
        ) : (
          /* PAGE 2: PURE WHITE PAGE WITH CLICKABLE VIDEO PLAYER IMAGE (EXACT CENTER) */
          <div className="flex flex-col items-center justify-center animate-in fade-in duration-500 w-full my-auto text-center">
            <a
              href={TARGET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block cursor-pointer mx-auto"
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

      {/* 5 Banner Ads: Cleanly centered at bottom */}
      <FiveAdsContainer />

      {/* HTML Code Modal */}
      {showCodeModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden border border-slate-200">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h2 className="text-sm font-bold text-slate-800">
                  সম্পূর্ণ প্রজেক্টের চূড়ান্ত HTML কোড (টাইমার ফিক্সড)
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  টাইমার এখন মিলিসেকেন্ড ভিত্তিতে ১০০% সঠিক সময়ে সেকেন্ড কমবে
                </p>
              </div>
              <button
                onClick={() => setShowCodeModal(false)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold px-2 py-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="p-4 flex-1 overflow-auto bg-slate-950">
              <pre className="text-emerald-400 font-mono text-xs leading-relaxed overflow-x-auto p-2">
                {standaloneHtmlCode}
              </pre>
            </div>

            <div className="px-5 py-3 border-t border-slate-200 flex items-center justify-between bg-slate-50">
              <span className="text-xs text-slate-500">
                ৩০ সেকেন্ড কাউন্টডাউন মসৃণভাবে সম্পন্ন হবে
              </span>
              <div className="flex gap-2">
                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>কপি হয়েছে!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>কোড কপি করুন</span>
                    </>
                  )}
                </button>
                <button
                  onClick={() => setShowCodeModal(false)}
                  className="px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  বন্ধ করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
