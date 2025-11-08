'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { ChatInterface } from './components/ChatInterface';
import { PersonalitySelector } from './components/PersonalitySelector';
import { Header } from './components/Header';
import { WelcomeScreen } from './components/WelcomeScreen';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [selectedPersonality, setSelectedPersonality] = useState<string | null>(null);

  useEffect(() => {
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  const handlePersonalitySelect = (personality: string) => {
    setSelectedPersonality(personality);
    setShowWelcome(false);
  };

  const handleStartChat = () => {
    setShowWelcome(false);
  };

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-fg text-lg">Loading AmieAI...</p>
        </div>
      </div>
    );
  }

  if (showWelcome) {
    return <WelcomeScreen onStart={handleStartChat} />;
  }

  if (!selectedPersonality) {
    return (
      <div className="min-h-screen bg-bg">
        <Header credits={100} />
        <PersonalitySelector onSelect={handlePersonalitySelect} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <Header credits={100} />
      <ChatInterface personality={selectedPersonality} />
    </div>
  );
}
