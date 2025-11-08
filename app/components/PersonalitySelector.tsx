'use client';

import { Heart, Sparkles, Coffee, Book, Music, Gamepad2 } from 'lucide-react';

interface PersonalitySelectorProps {
  onSelect: (personality: string) => void;
}

const personalities = [
  {
    id: 'caring',
    name: 'Caring & Supportive',
    description: 'Warm, empathetic, and always ready to listen',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 'playful',
    name: 'Playful & Fun',
    description: 'Energetic, witty, and loves to make you smile',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'intellectual',
    name: 'Intellectual & Curious',
    description: 'Thoughtful, loves deep conversations and learning',
    icon: Book,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'creative',
    name: 'Creative & Artistic',
    description: 'Imaginative, appreciates art, music, and beauty',
    icon: Music,
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'adventurous',
    name: 'Adventurous & Bold',
    description: 'Spontaneous, loves trying new things and excitement',
    icon: Gamepad2,
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'calm',
    name: 'Calm & Peaceful',
    description: 'Serene, mindful, and brings tranquility',
    icon: Coffee,
    color: 'from-teal-500 to-green-500',
  },
];

export function PersonalitySelector({ onSelect }: PersonalitySelectorProps) {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="text-center mb-8 animate-fade-in">
        <h2 className="text-3xl font-bold text-fg mb-2">Choose Your Companion</h2>
        <p className="text-muted">Select a personality that resonates with you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {personalities.map((personality, index) => {
          const Icon = personality.icon;
          return (
            <button
              key={personality.id}
              onClick={() => onSelect(personality.id)}
              className="bg-surface border border-border rounded-xl p-6 text-left hover:border-accent transition-all duration-200 transform hover:scale-105 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${personality.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-fg mb-1 group-hover:text-accent transition-colors duration-200">
                    {personality.name}
                  </h3>
                  <p className="text-sm text-muted">{personality.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted">
          Don't worry, you can always adjust the personality later in settings
        </p>
      </div>
    </div>
  );
}
