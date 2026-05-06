import { useState } from 'react'

function App() {
  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full relative">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur opacity-25"></div>

        <div className="relative bg-slate-900 ring-1 ring-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-orange-400 bg-clip-text text-transparent mb-2">
              L'Etoile
            </h1>
            <p className="text-slate-400 text-sm">Fine Dining & Reserve</p>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Guests
              </label>
              <div className="flex items-center justify-between bg-slate-800/50 rounded-lg p-2 ring-1 ring-slate-700/50">
                <button
                  type="button"
                  onClick={() => setPartySize(Math.max(1, partySize - 1))}
                  className="w-10 h-10 rounded-md bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                >
                  -
                </button>
                <span className="text-lg font-semibold w-12 text-center">{partySize}</span>
                <button
                  type="button"
                  onClick={() => setPartySize(partySize + 1)}
                  className="w-10 h-10 rounded-md bg-slate-700/50 text-slate-300 hover:bg-slate-600 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                >
                  +
                </button>
                <h1>aloo</h1>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-slate-800/50 rounded-lg p-3 ring-1 ring-slate-700/50 text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow [color-scheme:dark]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Time
                </label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-slate-800/50 rounded-lg p-3 ring-1 ring-slate-700/50 text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-shadow [color-scheme:dark]"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold py-3 px-4 rounded-lg shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98] cursor-pointer"
            >
              Book Table
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
