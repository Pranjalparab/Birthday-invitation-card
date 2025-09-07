import React, { useState } from 'react';
import { Search, MapPin, Clock, Calendar, CheckCircle, Eye, Fingerprint, Star, Sparkles, Crown } from 'lucide-react';

function App() {
  const [solvedClues, setSolvedClues] = useState<number[]>([]);
  const [wrongAttempts, setWrongAttempts] = useState<{[key: number]: number[]}>({});
  const [showFinalReveal, setShowFinalReveal] = useState(false);

  const clues = [
    {
      id: 1,
      question: "What's the perfect day to celebrate another year of life?",
      options: ["29th September", "30th September", "1st October"],
      correct: 1,
      hint: "It's the last day of September...",
      reveal: "📅 September 30th, 2025"
    },
    {
      id: 2,
      question: "At what time does the celebration begin?",
      options: ["1:30 PM", "2:30 PM", "3:30 PM"],
      correct: 1,
      hint: "Half past the hour, in the afternoon...",
      reveal: "🕐 2:30 PM"
    },
    {
      id: 3,
      question: "Where can you find the most joyful pizza experience?",
      options: ["Happy Pizza House", "Joy Pizzateria", "Smile Pizza Corner"],
      correct: 1,
      hint: "The name suggests happiness and Italian cuisine...",
      reveal: "🍕 Joy Pizzateria"
    },
    {
      id: 4,
      question: "Which BTS member is known for his deep voice and artistic soul?",
      options: ["Jimin", "Taehyung (V)", "Jungkook"],
      correct: 1,
      hint: "He's known as 'V' and has a voice as smooth as winter bear...",
      reveal: "💜 Kim Taehyung (V) - The birthday person's bias!"
    },
    {
      id: 5,
      question: "What does 'Borahae' mean in the BTS ARMY language?",
      options: ["I love you", "I purple you", "I miss you"],
      correct: 1,
      hint: "It's about a color that represents love and trust...",
      reveal: "💜 I Purple You - BTS and ARMY forever!"
    },
    {
      id: 6,
      question: "Which BTS song encourages us to 'Love Myself'?",
      options: ["Answer: Love Myself", "Love Yourself: Answer", "Self Love Answer"],
      correct: 0,
      hint: "It's part of their Love Yourself series and promotes self-acceptance...",
      reveal: "🎵 Answer: Love Myself - A beautiful message for birthdays!"
    },
    {
      id: 7,
      question: "Which anime features the peaceful town of Makochi and its wind-powered adventures?",
      options: ["Wind Runner", "Wind Breaker", "Wind Master"],
      correct: 1,
      hint: "It's about breaking through challenges like the wind...",
      reveal: "🌪️ Wind Breaker - An amazing anime about friendship and growth!"
    },
    {
      id: 8,
      question: "Who is the calm and mysterious character known for his eye patch and gentle demeanor?",
      options: ["Hayato Suo", "Haruka Sakura", "Akihiko Nirei"],
      correct: 0,
      hint: "He's known for his traditional fighting style and wise personality...",
      reveal: "👁️ Hayato Suo - The birthday person's favorite anime character!"
    }
  ];

  const handleAnswer = (clueId: number, answerIndex: number) => {
    const clue = clues.find(c => c.id === clueId);
    if (clue && answerIndex === clue.correct) {
      if (!solvedClues.includes(clueId)) {
        setSolvedClues([...solvedClues, clueId]);
      }
    } else {
      // Track wrong attempts for visual feedback
      setWrongAttempts(prev => ({
        ...prev,
        [clueId]: [...(prev[clueId] || []), answerIndex]
      }));
    }
  };

  const allSolved = solvedClues.length === clues.length;

  const handleFinalReveal = () => {
    setShowFinalReveal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>
      
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 p-8 shadow-2xl relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-6 relative z-10">
          <div className="relative">
            <Fingerprint className="w-10 h-10 text-slate-900 animate-pulse" />
            <Sparkles className="w-4 h-4 text-slate-900 absolute -top-1 -right-1 animate-bounce" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 text-center tracking-wider">
            CLASSIFIED CASE FILE #2025
          </h1>
          <div className="relative">
            <Eye className="w-10 h-10 text-slate-900 animate-pulse" />
            <Star className="w-4 h-4 text-slate-900 absolute -top-1 -right-1 animate-spin" />
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8 space-y-10 relative z-10">
        {/* Case Brief */}
        <div className="bg-gradient-to-r from-slate-800/90 to-slate-700/90 backdrop-blur-sm border-l-4 border-amber-500 p-8 rounded-r-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-500/20 to-transparent rounded-bl-full"></div>
          <h2 className="text-3xl font-bold text-amber-400 mb-6 flex items-center gap-3 relative z-10">
            <Search className="w-8 h-8 animate-pulse" />
            MISSION BRIEFING
            <Crown className="w-6 h-6 text-amber-300 animate-bounce" />
          </h2>
          <p className="text-xl text-slate-200 leading-relaxed font-light relative z-10">
            Agent, we need your help! A secret birthday celebration is being planned, but the details 
            have been encrypted. Solve the clues below to uncover the when, where, and what of this 
            mysterious gathering. Your detective skills are crucial to the success of this <span className="text-amber-300 font-semibold">exclusive mission</span>.
          </p>
        </div>

        {/* Clues Section */}
        <div className="space-y-8">
          {clues.map((clue, index) => (
            <div key={clue.id} className="bg-gradient-to-br from-slate-800/95 to-slate-700/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-600/50 relative overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold shadow-lg transform transition-all duration-300 ${
                  solvedClues.includes(clue.id) 
                    ? 'bg-gradient-to-br from-green-500 to-green-600 text-white animate-pulse' 
                    : 'bg-gradient-to-br from-slate-600 to-slate-700 text-slate-300 hover:from-amber-500 hover:to-amber-600 hover:text-white'
                }`}>
                  {solvedClues.includes(clue.id) ? <CheckCircle className="w-6 h-6" /> : index + 1}
                </div>
                <h3 className="text-2xl font-bold text-amber-400 tracking-wide">
                  CLUE #{index + 1}
                </h3>
                <Sparkles className="w-5 h-5 text-amber-300 animate-pulse ml-auto" />
              </div>
              
              <p className="text-xl text-slate-200 mb-6 font-light leading-relaxed relative z-10">{clue.question}</p>
              
              <div className="grid gap-4 mb-6 relative z-10">
                {clue.options.map((option, optionIndex) => (
                  <button
                    key={optionIndex}
                    onClick={() => handleAnswer(clue.id, optionIndex)}
                    disabled={solvedClues.includes(clue.id)}
                    className={`p-4 rounded-xl text-left transition-all duration-300 font-medium shadow-lg transform hover:scale-[1.02] ${
                      solvedClues.includes(clue.id) && optionIndex === clue.correct
                        ? 'bg-gradient-to-r from-green-600 to-green-700 text-white border-2 border-green-400 shadow-green-500/50'
                       : wrongAttempts[clue.id]?.includes(optionIndex)
                       ? 'bg-gradient-to-r from-red-900/60 to-red-800/60 text-red-200 border-2 border-red-500 hover:from-red-800/70 hover:to-red-700/70 cursor-pointer shadow-red-500/30'
                        : solvedClues.includes(clue.id)
                        ? 'bg-gradient-to-r from-slate-700 to-slate-600 text-slate-400 cursor-not-allowed opacity-60'
                        : 'bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 text-slate-200 border-2 border-transparent hover:border-amber-400 cursor-pointer hover:shadow-amber-500/30'
                    }`}
                  >
                    {option}
                    {wrongAttempts[clue.id]?.includes(optionIndex) && (
                      <span className="ml-3 text-red-400 text-lg">❌</span>
                    )}
                  </button>
                ))}
              </div>

              {solvedClues.includes(clue.id) && (
                <div className="bg-gradient-to-r from-green-900/60 to-green-800/60 backdrop-blur-sm border border-green-500/70 rounded-xl p-6 mt-6 shadow-lg relative z-10">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-500"></div>
                  <p className="text-green-300 font-bold text-lg flex items-center gap-2">
                    ✅ SOLVED! 
                    <Star className="w-5 h-5 animate-spin" />
                  </p>
                  <p className="text-green-100 text-xl mt-2 font-light">{clue.reveal}</p>
                </div>
              )}

              {!solvedClues.includes(clue.id) && (
                <div className="bg-gradient-to-r from-amber-900/40 to-amber-800/40 backdrop-blur-sm border border-amber-600/70 rounded-xl p-5 mt-6 shadow-lg relative z-10">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500"></div>
                  <p className="text-amber-300 text-lg font-light flex items-center gap-2">
                    💡 <strong className="font-semibold">Hint:</strong> {clue.hint}
                    <Sparkles className="w-4 h-4 animate-pulse ml-auto" />
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mission Complete */}
        {allSolved && !showFinalReveal && (
          <div className="bg-gradient-to-r from-green-800 to-green-700 p-8 rounded-2xl shadow-2xl text-center relative overflow-hidden transform animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-green-500/20"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400"></div>
            <h3 className="text-3xl font-bold text-green-200 mb-6 relative z-10 flex items-center justify-center gap-3">
              🎯 ALL CLUES SOLVED!
              <Crown className="w-8 h-8 text-yellow-300 animate-bounce" />
            </h3>
            <p className="text-green-100 mb-6 text-xl font-light relative z-10">
              Excellent detective work! You've cracked the case with <span className="text-yellow-300 font-semibold">exceptional skill</span>. Ready for the final revelation?
            </p>
            <button
              onClick={handleFinalReveal}
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-green-500/50 relative z-10 flex items-center gap-3 mx-auto"
            >
              <Sparkles className="w-6 h-6 animate-spin" />
              REVEAL THE MISSION
              <Star className="w-6 h-6 animate-pulse" />
            </button>
          </div>
        )}

        {/* Final Reveal */}
        {showFinalReveal && (
          <div className="bg-gradient-to-br from-purple-800 via-pink-700 to-purple-800 p-10 rounded-3xl shadow-2xl text-center space-y-8 border-4 border-yellow-400 relative overflow-hidden transform animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-400"></div>
            
            <div className="text-8xl mb-6 relative z-10 animate-bounce">🎉</div>
            <h2 className="text-5xl font-bold text-yellow-300 mb-8 relative z-10 tracking-wide flex items-center justify-center gap-4">
              <Crown className="w-12 h-12 animate-spin" />
              MISSION REVEALED!
              <Star className="w-12 h-12 animate-pulse" />
            </h2>
            
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 space-y-6 relative z-10 shadow-2xl">
              <h3 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                🎂 BIRTHDAY CELEBRATION! 🎂
                <Sparkles className="w-8 h-8 animate-spin" />
              </h3>
              
              <div className="text-center mb-6">
                <p className="text-3xl text-purple-300 font-bold animate-pulse">💜 Borahae! 💜</p>
                <p className="text-xl text-white/90 font-light">A K-pop loving ARMY and anime fan's special day!</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-left">
                <div className="flex items-center gap-4 bg-white/15 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Calendar className="w-10 h-10 text-yellow-300 animate-pulse" />
                  <div>
                    <p className="text-yellow-300 font-bold text-lg">DATE</p>
                    <p className="text-white text-xl font-light">September 30th, 2025</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/15 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Clock className="w-10 h-10 text-yellow-300 animate-pulse" />
                  <div>
                    <p className="text-yellow-300 font-bold text-lg">TIME</p>
                    <p className="text-white text-xl font-light">2:30 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/15 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  <MapPin className="w-10 h-10 text-yellow-300 animate-pulse" />
                  <div>
                    <p className="text-yellow-300 font-bold text-lg">LOCATION</p>
                    <p className="text-white text-xl font-light">Joy Pizzateria</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="https://www.google.com/maps/place/The+Joy+Pizzateria/@19.1261952,72.8327735,4a,68y/data=!3m8!1e2!3m6!1sAF1QipPAgzdxHQ_XuoPW7v7fDcdhxO2RudGE-Bf3OfEl!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipPAgzdxHQ_XuoPW7v7fDcdhxO2RudGE-Bf3OfEl%3Dw195-h162-k-no!7i2400!8i1996!4m7!3m6!1s0x3be7c93ad64a25fb:0x39701a7ace64f5d7!8m2!3d19.1261597!4d72.8327649!10e9!16s%2Fg%2F11vjhl3l9h?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-blue-500/50"
                >
                  <MapPin className="w-6 h-6 animate-pulse" />
                  Get Directions
                  <Star className="w-5 h-5 animate-spin" />
                </a>
              </div>
            </div>

            <div className="text-2xl text-yellow-200 font-light relative z-10 animate-pulse">
              Your presence is the greatest present! 🎁
            </div>
            
            <div className="text-lg text-white/90 mt-6 p-6 bg-white/15 backdrop-blur-sm rounded-xl relative z-10 shadow-lg">
              <div className="grid md:grid-cols-2 gap-4 text-left">
                <div><strong className="text-yellow-300">Case Status:</strong> SOLVED ✅</div>
                <div><strong className="text-yellow-300">Agent Status:</strong> INVITED 🎉</div>
                <div><strong className="text-yellow-300">Mission Type:</strong> CELEBRATION 🥳</div>
                <div><strong className="text-yellow-300">Special Interests:</strong> K-pop, BTS, Anime 🎌</div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-slate-400 text-lg mt-16 p-8 border-t border-slate-600/50 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl shadow-lg relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-purple-500 to-amber-500"></div>
          <p className="flex items-center justify-center gap-2 font-light">
            🕵️ This invitation is classified. Agent discretion advised. 🕵️
            <Sparkles className="w-4 h-4 animate-pulse" />
          </p>
          <p className="mt-4 text-purple-400 text-xl font-light animate-pulse">💜 "Love myself, love yourself, peace" - BTS 💜</p>
          <p className="mt-2 text-blue-400 text-xl font-light animate-pulse">🌪️ "The wind always blows toward tomorrow" - Wind Breaker 🌪️</p>
        </div>
      </div>
    </div>
  );
}

export default App;