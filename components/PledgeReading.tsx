import React, { useState, useRef, useEffect, useCallback } from 'react';
import { UserData } from '../types';
import { ArrowRight, ShieldAlert, Play, BookOpen } from 'lucide-react';

interface PledgeReadingProps {
  userData: UserData;
  onBack: () => void;
  onConfirm: () => void;
}

// Sparrow conservation commitments for the user to acknowledge
const SPARROW_COMMITMENTS = [
  "I will put out water in a shallow vessel on my terrace or window sill for sparrows, especially in summer.",
  "I will leave out grains — rice, millet, or breadcrumbs — in a corner of my home or garden for sparrows to feed on.",
  "I will avoid using pesticides in my garden that harm the insects sparrows rely on for protein, especially for their chicks.",
  "I will try to install a nest box in my home, balcony, or school to give sparrows a safe place to breed.",
  "I will speak to at least five people around me about why house sparrows are disappearing and what we can do.",
  "I will spread awareness on social media or in my community about protecting urban birds and their habitats.",
  "I will plant native shrubs or grasses that support insects, which sparrows need to survive.",
  "I will discourage the use of reflective glass on buildings near my home or school that confuse and injure birds.",
  "I will report injured sparrows to a local wildlife rescue centre instead of leaving them unattended.",
  "I commit to being a guardian of the house sparrow — by action, not just by word."
];

export const PledgeReading: React.FC<PledgeReadingProps> = ({ userData, onBack, onConfirm }) => {
  // Store checked state for each point by index
  const [checkedPoints, setCheckedPoints] = useState<number[]>([]);

  const togglePoint = (index: number) => {
    if (checkedPoints.includes(index)) {
      setCheckedPoints(checkedPoints.filter(i => i !== index));
    } else {
      setCheckedPoints([...checkedPoints, index]);
    }
  };

  const handleSelectAll = () => {
    if (checkedPoints.length === SPARROW_COMMITMENTS.length) {
      setCheckedPoints([]);
    } else {
      setCheckedPoints(SPARROW_COMMITMENTS.map((_, i) => i));
    }
  };

  const allChecked = checkedPoints.length === SPARROW_COMMITMENTS.length;

  return (
    <div className="min-h-screen bg-canvas pt-20 pb-0 flex flex-col">
      {/* Top Bar */}
      <div className="px-4 mb-4 max-w-lg mx-auto w-full">
        <button onClick={onBack} className="text-stone-500 hover:text-stone-800 font-medium mb-4 block">
          ← Back to Preview
        </button>
        <h2 className="text-2xl font-display font-bold text-indiaNavy">Sparrow Guardian Commitments</h2>
        <p className="text-sm text-stone-500 mt-1">Acknowledge each commitment to continue.</p>
      </div>

      {/* Content Card */}
      <div className="flex-1 bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)] overflow-hidden relative max-w-lg mx-auto w-full border border-stone-100 flex flex-col">

        {/* Header decoration */}
        <div className="h-2 w-full bg-gradient-to-r from-saffron via-white to-indiaGreen" />

        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 pb-40">

          {/* The Pledge Points */}
          <section className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <BookOpen size={20} className="text-indiaNavy" />
                <h3 className="font-display font-bold text-lg text-indiaNavy">My Commitments</h3>
              </div>
              <button
                onClick={handleSelectAll}
                className="text-xs font-bold text-saffron hover:text-orange-700 uppercase tracking-wide"
              >
                {allChecked ? 'Unselect All' : 'Select All'}
              </button>
            </div>

            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 space-y-3">
              {SPARROW_COMMITMENTS.map((point, index) => {
                const isChecked = checkedPoints.includes(index);
                return (
                  <div
                    key={index}
                    onClick={() => togglePoint(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        togglePoint(index);
                      }
                    }}
                    tabIndex={0}
                    role="checkbox"
                    aria-checked={isChecked}
                    aria-label={`Commitment ${index + 1}: ${point}`}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-saffron/30 ${isChecked
                      ? 'bg-white border-saffron/20 shadow-sm'
                      : 'bg-transparent border-transparent hover:bg-stone-100'
                      }`}
                  >
                    <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-colors shrink-0 ${isChecked
                      ? 'bg-saffron border-saffron'
                      : 'bg-white border-stone-300'
                      }`}>
                      {isChecked && <CheckIcon />}
                    </div>
                    <p className={`text-sm leading-relaxed ${isChecked ? 'text-stone-900 font-medium' : 'text-stone-500'}`}>
                      {point}
                    </p>
                  </div>
                );
              })}
            </div>

          </section>
        </div>

        {/* Bottom Floating Action */}
        <div className="absolute bottom-0 left-0 w-full bg-white border-t border-stone-100 p-4 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] z-20">
          <button
            onClick={onConfirm}
            disabled={!allChecked}
            aria-label="Become a Sparrow Guardian (all commitments must be selected)"
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all focus:outline-none ${allChecked
              ? 'bg-gradient-to-r from-saffron to-[#f97316] text-white shadow-lg shadow-saffron/20 hover:-translate-y-1 focus:ring-2 focus:ring-saffron/30'
              : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
          >
            Become a Guardian 🐦
          </button>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
