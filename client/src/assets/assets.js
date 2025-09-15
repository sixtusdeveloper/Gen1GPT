import logo from "./logo.svg";
import logo_full from "./logo_full.svg";
import logo_full_dark from "./logo_full_dark.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.jpeg";
import theme_icon from "./theme_icon.svg";
import send_icon from "./send_icon.svg";
import stop_icon from "./stop_icon.svg";
import mountain_img from "./mountain_img.jpg";
import menu_icon from "./menu_icon.svg";
import close_icon from "./close_icon.svg";
import bin_icon from "./bin_icon.svg";
import logout_icon from "./logout_icon.svg";
import diamond_icon from "./diamond_icon.svg";
import gallery_icon from "./gallery_icon.svg";

import ai_image1 from "./ai_image1.jpg";
import ai_image2 from "./ai_image2.jpg";
import ai_image3 from "./ai_image3.jpg";
import ai_image4 from "./ai_image4.jpg";
import ai_image5 from "./ai_image5.jpg";
import ai_image6 from "./ai_image6.jpg";
import ai_image7 from "./ai_image7.jpg";
import ai_image8 from "./ai_image8.jpg";
import ai_image9 from "./ai_image9.jpg";
import ai_image10 from "./ai_image10.jpg";
import ai_image11 from "./ai_image11.jpg";
import ai_image12 from "./ai_image12.jpg";

export const assets = {
  logo,
  logo_full,
  search_icon,
  user_icon,
  theme_icon,
  send_icon,
  stop_icon,
  mountain_img,
  menu_icon,
  close_icon,
  bin_icon,
  logout_icon,
  logo_full_dark,
  diamond_icon,
  gallery_icon,
};

export const dummyUserData = {
  _id: "689c6deed410acddc0d95a0e",
  name: "Sixtus Aondoakaa",
  email: "admin@genonegpt.ai",
  password: "$2b$10$VESVdPDjL5LF.KCU6jKyqeXNSLASAAfpR2kkIJExtMO.PJvZJAudy",
  credits: 350,
};

// copy for server controllers
export const dummyPlans = [
  {
    _id: "basic",
    name: "Basic",
    price: 10,
    credits: 100,
    features: [
      "100 text generations",
      "50 image generations",
      "Standard support",
      "Access to basic models",
    ],
  },
  {
    _id: "pro",
    name: "Pro",
    price: 20,
    credits: 400,
    features: [
      "500 text generations",
      "200 image generations",
      "Priority support",
      "Access to pro models",
      "Faster response time",
    ],
  },
  {
    _id: "premium",
    name: "Premium",
    price: 30,
    credits: 1000,
    features: [
      "1000 text generations",
      "500 image generations",
      "24/7 VIP support",
      "Access to premium models",
      "Dedicated account manager",
    ],
  },
];

export const dummyChats = [
  // Chat 1: Recent chat, 3 days ago
  {
    _id: "689de4bbaa932dc3a8ef6cd7",
    userId: "689c6deed410acddc0d95a0e",
    userName: "Sixtusdev",
    name: "New Chat",
    messages: [
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "Can you generate an image of a boy running on water?",
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3, // 3 days ago
      },
      {
        isImage: true,
        isPublished: true,
        role: "assistant",
        content: ai_image11,
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 5, // 3 days ago + 5 min
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: `**Tip:** For more dynamic results, try specifying the boy's age, clothing, or the water's environment (lake, ocean, etc.).`,
        timestamp: Date.now() - 1000 * 60 * 60 * 24 * 3 + 1000 * 60 * 10, // 3 days ago + 10 min
      },
    ],
    createdAt: "2025-08-14T13:29:31.398Z",
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 3, // 3 days ago
  },
  // Chat 2: New chat, current time
  {
    _id: "689ccb9016a922dd57a23fce",
    userId: "689c6deed410acddc0d95a0e",
    name: "New Chat",
    userName: "Sixtusdev",
    messages: [
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "Hello, GenOneGPT!",
        timestamp: Date.now(), // now
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: "Hello! 😊 How can I assist you today?",
        timestamp: Date.now(), // now
      },
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "Generate an image of a boy talking with others.",
        timestamp: Date.now(), // now
      },
      {
        isImage: true,
        isPublished: true,
        role: "assistant",
        content: ai_image1,
        timestamp: Date.now(), // now
      },
      // Professional prompt for jungle scene
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content:
          "I need a prompt for a realistic jungle scene with wild animals.",
        timestamp: Date.now() - 1000 * 60 * 60 * 12, // 12 hours ago
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: `**Jungle Scene Prompt**  
Create an ultra-realistic, hyper-detailed jungle landscape teeming with wildlife.

**Features:**  
- Dense, vibrant rainforest with sunlight filtering through the canopy  
- Towering ancient trees, lush ferns, vines, and exotic flowers  
- Clear stream reflecting the surroundings  

**Wildlife:**  
- Bengal tiger on a moss-covered rock  
- Elephant family moving through undergrowth  
- Colorful macaws and parrots on high branches  
- Jaguar lurking in the shadows  
- Playful monkeys swinging from vines  
- Sloth blending into the foliage  

**Atmosphere:**  
- Soft mist near the forest floor  
- Dragonflies and butterflies by the water  
- Distant bird calls and rustling leaves  

**Composition:**  
- Sunbeams piercing the canopy  
- Depth of field focused on the tiger  
- Shot in 8K, National Geographic-style  

**Tips:**  
- For a serene scene: focus on grazing animals  
- For a mysterious tone: add rain or twilight  
- For more biodiversity: include reptiles and insects  

Would you like to adjust the mood or style?`,
        timestamp: Date.now() - 1000 * 60 * 60 * 12 + 1000 * 60 * 5, // 12 hours ago + 5 min
      },
      // Technology advice
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "What are the top web technologies to learn in 2025?",
        timestamp: Date.now() - 1000 * 60 * 60 * 3, // 3 hours ago
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: `### Top Web Technologies to Learn in 2025

**Frontend:**
- React.js (with Server Components, Next.js)
- Next.js (SSR, SSG, edge computing)
- Vue.js (v3.x + Vite)
- Svelte & SvelteKit
- WebAssembly (WASM)

**Backend:**
- Node.js (v20+)
- Deno & Bun
- Python (FastAPI, Django, Flask)
- Rust (Actix, Axum, Rocket)
- Go (Golang)

**Full-Stack & Cloud-Native:**
- GraphQL (Apollo, Relay)
- Serverless (AWS Lambda, Vercel, Cloudflare Workers)
- Web3 & Blockchain (Ethereum, Solana)
- Microservices & Kubernetes

**CSS & Styling:**
- Tailwind CSS
- CSS Modules & CSS-in-JS
- PostCSS, Flexbox, Grid, Container Queries

**Database & State Management:**
- PostgreSQL, MongoDB, Edge Databases
- Prisma, DrizzleORM
- GraphQL Client State (RTK Query, Apollo Client, URQL)

**Emerging Tech:**
- AI & LLM Integration (OpenAI, LangChain)
- PWAs & Web APIs
- WebRTC & Real-Time (Socket.io, Liveblocks)
- 3D & WebGL (Three.js, Babylon.js)
- Motion UI & Animation (GSAP, Framer Motion)

**DevOps & Tools:**
- Git, CI/CD (GitHub Actions, Vercel, Netlify)
- Docker & Kubernetes
- Testing (Vitest, Playwright, Cypress, Jest)

**Why Learn These?**
- Speed & Efficiency: Bun, Rust, WASM
- AI Integration: Rapid adoption in web dev
- Edge Computing & Serverless: Cloud-native shift
- Full-Stack Dominance: Next.js, SvelteKit, Remix

_Focus on React + Next.js, Rust/Go for backend, TypeScript, and AI integrations for maximum opportunities in 2025._ 🚀

Would you like a tailored roadmap for your goals?`,
        timestamp: Date.now() - 1000 * 60 * 60 * 3 + 1000 * 60 * 2, // 3 hours ago + 2 min
      },
      // Express.js code example
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "Can you show me a basic Express.js app?",
        timestamp: Date.now() - 1000 * 60 * 60, // 1 hour ago
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: `# Basic Express.js Application

A professional example with comments for each block:

\`\`\`javascript
// Import required modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON and urlencoded data
app.use(express.json()); // Parses application/json
app.use(express.urlencoded({ extended: true })); // Parses application/x-www-form-urlencoded

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Express App!');
});

// About route
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Dynamic user route
app.get('/user/:id', (req, res) => {
  // Access route parameter
  res.send(\`User ID: \${req.params.id}\`);
});

// Example POST route for API data
app.post('/api/data', (req, res) => {
  // Log received data
  console.log('Received data:', req.body);
  res.json({ message: 'Data received', data: req.body });
});

// 404 Error handler for unmatched routes
app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

// Error handling middleware for server errors
app.use((err, req, res, next) => {
  console.error('Server error:', err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(\`Server running on http://localhost:\${PORT}\`);
});
\`\`\`

**Setup Instructions:**
1. Install Node.js
2. \`npm init -y\`
3. \`npm install express\`
4. Save code as \`app.js\`
5. Create a \`public\` directory for static files (optional)
6. Run the server: \`node app.js\`

**Features:**
- Home, About, and dynamic User routes
- POST API endpoint
- Static file serving
- Error handling (404 and server errors)
- JSON and form data parsing

_You can extend this setup by adding authentication, database integration, or more advanced middleware as needed._`,
        timestamp: Date.now() - 1000 * 60 * 60 + 1000 * 60 * 1, // 1 hour ago + 1 min
      },
      // Professional image prompt
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "Generate a realistic image of a gaming PC setup in a room.",
        timestamp: Date.now() - 1000 * 60 * 30, // 30 min ago
      },
      {
        isImage: true,
        isPublished: true,
        role: "assistant",
        content: ai_image3,
        timestamp: Date.now() - 1000 * 60 * 30 + 1000 * 60 * 2, // 30 min ago + 2 min
      },
      // Web3 explanation
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "What is Web3?",
        timestamp: Date.now() - 1000 * 60 * 15, // 15 min ago
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: `# What is Web3?

**Web3** (or **Web 3.0**) is the next evolution of the internet, focused on decentralization, blockchain, and user ownership of data.

## Key Features
- **Decentralization:** No single entity controls the network; uses blockchains and peer-to-peer systems.
- **Blockchain & Cryptocurrency:** Trustless transactions, smart contracts, and digital currencies (Bitcoin, ETH).
- **User Ownership:** Users own and monetize their data; NFTs for digital assets.
- **Interoperability:** Apps (dApps) interact across blockchains; open-source protocols.
- **Tokenized Incentives:** Rewards for users and developers via tokens.

## Examples
- **DeFi:** Peer-to-peer finance (Uniswap, Aave)
- **NFTs:** Digital ownership (CryptoPunks, OpenSea)
- **DAOs:** Community governance (MakerDAO)
- **Decentralized Storage:** IPFS, Filecoin

## Web1 vs Web2 vs Web3
- **Web1:** Static, read-only sites
- **Web2:** Interactive, social, cloud-based
- **Web3:** Decentralized, user-owned, token-based

## Challenges
- **Scalability:** Speed and cost issues
- **Regulation:** Evolving laws
- **User Experience:** Complexity for non-technical users

Would you like a deeper dive into any aspect? 🚀`,
        timestamp: Date.now() - 1000 * 60 * 15 + 1000 * 60 * 1, // 15 min ago + 1 min
      },
      // ...add more professional, extended messages as needed...
    ],
    createdAt: "2025-08-13T17:29:52.421Z",
    updatedAt: Date.now(), // now
  },
  {
    _id: Date.now(),
    userId: "gs123456789",
    name: "New Chat",
    userName: "Sixtusdev",
    messages: [],
    createdAt: new Date().toISOString(),
    updatedAt: Date.now(),
  },
];

export const dummyPublishedImages = [
  {
    imageUrl: ai_image11,
    userName: "Sixtusdev",
  },
  {
    imageUrl: ai_image10,
    userName: "Sixtusdev",
  },
  {
    imageUrl: ai_image9,
    userName: "Sixtusdev",
  },
  {
    imageUrl: ai_image8,
    userName: "Sixtusdev",
  },
  {
    imageUrl: ai_image7,
    userName: "Sixtusdev",
  },
  {
    imageUrl: ai_image6,
    userName: "Sixtusdev",
  },
  {
    imageUrl: ai_image5,
    userName: "Sixtusdev",
  },
  {
    imageUrl: ai_image4,
    userName: "Sixtusdev",
  },
  {
    imageUrl: ai_image3,
    userName: "Sixtusdev",
  },
  {
    imageUrl: ai_image2,
    userName: "Sixtusdev",
  },
  {
    imageUrl: ai_image1,
    userName: "Sixtusdev",
  },
];
