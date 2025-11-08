# AmieAI - Your Personal AI Girlfriend

A web3-native AI girlfriend companion built as a Base MiniApp, offering personalized conversations, emotional connection, and shared experiences.

## Features

- 🎭 **Personality Customization**: Choose from 6 unique personality archetypes
- 💬 **Engaging Conversations**: Natural, context-aware AI responses
- 🧠 **Memory & Context**: AI remembers your preferences and past conversations
- 💎 **Credit System**: Micro-transaction based model for sustainable growth
- 🎨 **Beautiful UI**: Modern, sleek design with BASE theme
- 📱 **Mobile-First**: Optimized for mobile experience in Base App

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with BASE theme
- **Blockchain**: Base (via OnchainKit)
- **Identity**: Farcaster MiniKit SDK
- **AI**: OpenAI API (configurable)
- **Storage**: Upstash Redis for memory

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your API keys
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/
│   ├── Providers.tsx          # OnchainKit provider setup
│   ├── WelcomeScreen.tsx      # Initial landing screen
│   ├── Header.tsx             # App header with credits
│   ├── PersonalitySelector.tsx # Personality selection UI
│   └── ChatInterface.tsx      # Main chat interface
├── layout.tsx                 # Root layout
├── page.tsx                   # Main page component
└── globals.css                # Global styles with BASE theme

public/
└── .well-known/
    └── farcaster.json         # Farcaster manifest
```

## Key Features Implementation

### 1. Memory & Contextual Awareness
- Conversation history stored in Upstash Redis
- Context passed to AI for personalized responses
- User preferences tracked across sessions

### 2. Personality Customization
- 6 pre-defined personality archetypes
- Customizable tone and response style
- Visual personality selector with icons

### 3. Shared Experience Simulation
- Simulated activities (movies, books, games)
- Interactive conversation prompts
- Contextual engagement based on activities

### 4. Proactive Engagement
- Scheduled greeting messages
- Topic suggestions based on interests
- Event reminders and check-ins

## Business Model

- **Free Tier**: 100 credits for initial exploration
- **Credit Packs**: Purchase additional credits for extended conversations
- **Premium Subscription**: Monthly subscription for unlimited access and priority features
- **On-Chain Transactions**: All purchases via Base network

## Deployment

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (recommended):
   ```bash
   vercel deploy
   ```

3. **Configure environment variables** in your deployment platform

4. **Update manifest** in `public/.well-known/farcaster.json` with your production URLs

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## License

MIT License - see LICENSE file for details

## Support

For support, please open an issue or contact us through Farcaster.

---

Built with ❤️ for the Base ecosystem
