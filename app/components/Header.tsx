'use client';

import { Coins, Settings2, Heart } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  credits: number;
}

export function Header({ credits }: HeaderProps) {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <header className="bg-surface border-b border-border px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center">
          <Heart className="w-5 h-5 text-white" fill="white" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-fg">AmieAI</h1>
          <p className="text-xs text-muted">Always here for you</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="bg-bg border border-border rounded-lg px-3 py-1.5 flex items-center gap-2">
          <Coins className="w-4 h-4 text-accent" />
          <span className="text-sm font-semibold text-fg">{credits}</span>
        </div>
        <button
          onClick={() => setShowSettings(!showSettings)}
          className="w-9 h-9 bg-bg border border-border rounded-lg flex items-center justify-center hover:bg-surface transition-colors duration-200"
        >
          <Settings2 className="w-4 h-4 text-fg" />
        </button>
      </div>
    </header>
  );
}
