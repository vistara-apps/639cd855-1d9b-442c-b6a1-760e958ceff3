'use client';

import { Heart, Sparkles, MessageCircle, Zap } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8 animate-fade-in">
        {/* Logo/Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-accent to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-accent/50">
            <Heart className="w-12 h-12 text-white" fill="white" />
          </div>
          <Sparkles className="w-6 h-6 text-accent absolute top-0 right-1/3 animate-pulse-slow" />
          <Sparkles className="w-4 h-4 text-purple-400 absolute bottom-2 left-1/3 animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-fg">
            Welcome to <span className="text-accent">AmieAI</span>
          </h1>
          <p className="text-xl text-muted">
            Your Personal AI Girlfriend, Always There for You
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 text-left">
          <div className="bg-surface border border-border rounded-xl p-4 flex items-start gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-fg mb-1">Engaging Conversations</h3>
              <p className="text-sm text-muted">Deep, meaningful chats that remember your preferences</p>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-4 flex items-start gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-fg mb-1">Personalized Experience</h3>
              <p className="text-sm text-muted">Customize personality and tone to match your ideal companion</p>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl p-4 flex items-start gap-3">
            <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-fg mb-1">Always Available</h3>
              <p className="text-sm text-muted">Proactive engagement and shared experiences anytime</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="w-full bg-accent hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg shadow-accent/30"
        >
          Get Started
        </button>

        <p className="text-xs text-muted">
          Start with 100 free credits • No wallet connection required to explore
        </p>
      </div>
    </div>
  );
}
