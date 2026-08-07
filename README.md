# mark2.0 - AI Conversational Assistant

[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)](https://typescriptlang.org/)
[![Genkit](https://img.shields.io/badge/Genkit-1.14.1-orange?logo=google&logoColor=white)](https://genkit.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**mark2.0** is a sophisticated conversational AI assistant built with Next.js, Genkit, and Google's Gemini AI. It features voice interaction, code generation, and web development capabilities.

## 🚀 Features

### 💬 Conversational AI
- Real-time chat with AI assistant
- Conversation history with context
- Loading indicators and smooth animations
- Dark/light theme support

### 🎤 Voice Interaction
- **Speech-to-Text**: Talk to the AI using your microphone
- **Text-to-Speech**: AI responses can be read aloud
- Voice mode toggle with persistence
- Animated robot face during voice interaction
- Automatic silence detection

### 💻 Code Generation & Web Development
- **mark coder** mode for web development
- Generate complete websites (HTML, CSS, JavaScript)
- Live preview in iframe
- Resizable split-pane layout
- Copy code to clipboard
- Full preview in new tab

### 🌐 SEO & Search Engine Ready
- Sitemap generation
- Proper metadata for search engines
- Semantic HTML structure
- Open Graph tags for social sharing

## 📸 Screenshots

| Main Chat Interface | Code Editor Mode |
|---------------------|------------------|
| ![Main Chat](https://via.placeholder.com/600x400/121212/7DF9FF?text=mark2.0+Chat) | ![Code Editor](https://via.placeholder.com/600x400/121212/7DF9FF?text=mark+coder) |

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 15.3.3](https://nextjs.org/)
- **Language**: [React 18.3.1](https://react.dev/) + [TypeScript 5.0](https://typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4.1](https://tailwindcss.com/) with custom theme
- **UI Components**: [Radix UI](https://radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: [Zustand 4.5.4](https://github.com/pmndrs/zustand)

### AI & Backend
- **AI Framework**: [Genkit 1.14.1](https://genkit.dev/)
- **AI Model**: [Google AI - Gemini 2.5 Flash](https://ai.google.dev/)
- **TTS Model**: Gemini 2.5 Flash Preview TTS
- **Hosting**: [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)

## 📦 Installation

### Prerequisites
- Node.js 20.x or later
- npm or yarn
- Google AI API Key (for production)

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nttare0/mark2.0.git
   cd mark2.0
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory:
   ```env
   # Google AI API Key (get from https://aistudio.google.com/)
   GOOGLE_AI_API_KEY=your_api_key_here
   
   # Optional: OpenWeatherMap API Key for weather features
   OPENWEATHERMAP_API_KEY=your_weather_api_key
   
   # Next.js configuration
   NEXT_PUBLIC_APP_URL=https://yourdomain.com
   ```

4. **Update the Genkit configuration:**
   Edit `src/ai/genkit.ts` and replace the hardcoded API key with your environment variable:
   ```typescript
   export const ai = genkit({
     plugins: [
       googleAI({
         apiKey: process.env.GOOGLE_AI_API_KEY || '',
       }),
     ],
     model: 'googleai/gemini-2.5-flash',
   });
   ```

5. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open in browser:**
   Navigate to [http://localhost:9002](http://localhost:9002)

## 🏗️ Project Structure

```
mark2.0/
├── src/
│   ├── ai/                      # AI configuration and flows
│   │   ├── genkit.ts            # Genkit setup
│   │   ├── dev.ts               # Development server
│   │   └── flows/               # AI workflow definitions
│   │
│   ├── app/                     # Next.js app directory
│   │   ├── actions.ts           # Server actions
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Main chat page
│   │   ├── robots.ts            # SEO robots configuration
│   │   ├── sitemap.ts           # Sitemap generation
│   │   └── code-editor/         # Code editor pages
│   │
│   ├── components/              # React components
│   │   ├── app/                 # Application components
│   │   └── ui/                  # UI components (Radix-based)
│   │
│   └── hooks/                   # Custom React hooks
│
├── public/                      # Static assets
│   ├── sitemap.xml              # XML sitemap
│   └── robots.txt               # Robots configuration
│
├── docs/                        # Documentation
│   └── blueprint.md             # Design specifications
│
├── .idx/                        # Firebase Studio config
├── apphosting.yaml              # Firebase hosting config
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS theme
├── tsconfig.json                # TypeScript configuration
└── package.json
```

## 🔧 Configuration

### Next.js Config (`next.config.ts`)
Configured for:
- TypeScript support
- Image optimization
- Remote image domains (placeholder services)

### Tailwind CSS Config (`tailwind.config.ts`)
Custom theme with:
- Dark mode support (`class` strategy)
- CSS variables for theming
- Custom color palette
- Animation utilities

### Genkit Config (`src/ai/genkit.ts`)
AI model configuration:
- Primary model: `googleai/gemini-2.5-flash`
- TTS model: `gemini-2.5-flash-preview-tts`
- Voice: Algenib (prebuilt)

## 📡 API Endpoints

### Server Actions
- `askAI(question: string)` - Get AI response
- `speakAI(text: string)` - Convert text to speech
- `transcribeAudio(audioDataUri: string)` - Convert audio to text

## 🎨 Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Background | #121212 | Dark charcoal background |
| Primary | #7DF9FF | Electric blue (interactive elements) |
| Accent | #A9A9A9 | Light grey (secondary text) |

### Typography
- **Font Family**: Inter (sans-serif)
- **Code Font**: Monospace

### Layout
- Single-column layout for chat
- Resizable split-pane for code editor
- Responsive design (mobile-first)

## 📱 Usage

### Main Chat (mark2.0)
1. Type your question in the input field
2. Press Enter or click Send
3. View AI response in the chat
4. Click the volume icon to hear the response
5. Click the microphone to use voice input

### Code Editor (mark coder)
1. Click "mark coder" button in the header
2. Ask the AI to create a website
3. View the generated code in HTML, CSS, JS tabs
4. See live preview in the Preview tab
5. Copy the code or edit it directly
6. Click "Full Preview" to open in new tab

### Voice Mode
1. Toggle voice mode in the header
2. Click the microphone button
3. Speak your question
4. AI will transcribe and respond
5. Response will be read aloud automatically

## 🔍 SEO & Search Engine Optimization

mark2.0 is optimized for search engines with:

### Metadata
- Proper `<title>` and `<meta description>` tags
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs

### Sitemap
- Auto-generated sitemap at `/sitemap.xml`
- Includes all public pages
- Updated on build

### Robots.txt
- Configured to allow indexing
- Sitemap reference included

### Structured Data
- JSON-LD markup for better search results
- Organization and WebApplication schema

## 📜 Terms and Conditions

By using mark2.0, you agree to our [Terms and Conditions](/terms-and-conditions).

## 🔒 Privacy Policy

We respect your privacy. Please review our [Privacy Policy](#) for details on how we handle your data.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📝 Code of Conduct

Please adhere to the [Contributor Covenant](https://www.contributor-covenant.org/) code of conduct.

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Genkit](https://genkit.dev/) - AI development framework
- [Google AI](https://ai.google.dev/) - Gemini models
- [Radix UI](https://radix-ui.com/) - Unstyled UI primitives
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Zustand](https://github.com/pmndrs/zustand) - State management

## 📞 Contact

For questions or support, please contact:
- **Creator**: Ntare Shema Prince
- **Email**: [Add your email]
- **Website**: [https://mark210.netlify.app/mark210](https://mark210.netlify.app/mark210)

---

**mark2.0** - Your Conversational AI Assistant

*Built with ❤️ and AI*

[![Deploy with Firebase](https://img.shields.io/badge/Deploy-Firebase-orange?logo=firebase&logoColor=white)](https://firebase.google.com/)
[![Deploy with Vercel](https://img.shields.io/badge/Deploy-Vercel-black?logo=vercel&logoColor=white)](https://vercel.com/)
