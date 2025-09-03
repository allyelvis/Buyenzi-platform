# Buyenzi - AI-Powered Web3 Dashboard

Buyenzi is a sophisticated, feature-rich dashboard platform that seamlessly integrates fintech, e-commerce, and cutting-edge blockchain technologies. It provides a comprehensive suite of tools for users to manage digital assets, create and deploy dApps, mint NFTs using AI, and much more, all within a sleek, intuitive, and highly responsive user interface.

## ✨ Core Features

*   **Unified Dashboard:** A central hub providing a real-time overview of your portfolio with interactive TradingView charts, live market data, recent transactions, and quick actions.
*   **Advanced Wallet Management:**
    *   **Create & Import:** Securely create a new wallet with a guided recovery phrase setup or import an existing wallet via recovery phrase or JSON keystore file.
    *   **Asset Hub:** View and manage all your crypto assets, with balances, USD values, and a visual allocation chart.
    *   **AI Portfolio Insights:** Leverage the Gemini API to generate intelligent, personalized analysis and market sentiment for your holdings.
    *   **Secure Export & Lock:** Safely export your private key and recovery phrase, or lock the wallet to protect it when not in use.
*   **AI-Powered NFT Studio:**
    *   Generate stunning, unique digital art from text prompts using Google's `imagen-4.0-generate-001` model.
    *   Customize style and aspect ratio.
    *   Mint your creations as NFTs directly from the studio (simulated).
*   **AI dApp Builder:**
    *   Generate production-ready Solidity smart contracts (ERC20, ERC721, or custom) from simple presets or natural language descriptions using the Gemini API.
    *   Deploy and interact with your generated contracts on a simulated network.
*   **Live TV & Subscriptions:** A mock TV streaming service where users can subscribe to plans using crypto (simulated) and watch channels.
*   **Blockchain Explorer:** Search for blocks, transactions, or addresses on a simulated Ethereum network and view detailed results.
*   **Integrations Hub:** A central place to connect the platform to popular DeFi, E-commerce, and Social services like Uniswap and Shopify.
*   **Comprehensive User Profile:** Manage personal information, update security settings like passwords and 2FA, and change your profile picture.
*   **Full Transaction History:** A filterable and searchable view of all your platform transactions.
*   **Web3 Network Configuration:** Easily switch between default blockchain networks (Ethereum, Polygon) or add and manage custom RPC endpoints for development and testing.

## 🤖 AI Integration (Google Gemini)

This application leverages the Google Gemini API in several key areas to provide intelligent, next-generation features:

1.  **AI dApp Builder (`DAppBuilder.tsx`):** The `gemini-2.5-flash` model acts as an expert Solidity developer, translating user requirements into secure, well-commented, and deployable smart contracts.
2.  **NFT Studio (`NFTStudio.tsx`):** The `imagen-4.0-generate-001` model functions as the creative engine, turning text prompts into high-quality images ready for minting.
3.  **AI Portfolio Insight (`Wallet.tsx`):** The `gemini-2.5-flash` model provides concise, data-driven market analysis based on the user's current asset holdings, offering valuable insights with a single click.

## 🛠️ Tech Stack

*   **Frontend:** [React](https://reactjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (JIT via CDN)
*   **AI:** [@google/genai](https://www.npmjs.com/package/@google/genai) for Gemini API integration.
*   **Charting:** [Recharts](https://recharts.org/) & [TradingView Lightweight Charts](https://www.tradingview.com/lightweight-charts/)

## 📂 Project Structure

The project follows a component-based architecture, promoting modularity and reusability.

```
.
├── components/
│   ├── AddNetworkModal.tsx     # Modal for adding custom networks.
│   ├── Card.tsx                # Reusable themed card component.
│   ├── Chatbot.tsx             # Floating chatbot widget.
│   ├── CreateWalletModal.tsx   # Guided flow for new wallet creation.
│   ├── DAppBuilder.tsx         # AI-powered smart contract generator.
│   ├── Dashboard.tsx           # Main dashboard view.
│   ├── ExportWalletModal.tsx   # Securely displays wallet credentials.
│   ├── Explorer.tsx            # Blockchain explorer interface.
│   ├── Funding.tsx             # Deposit and withdraw assets.
│   ├── Header.tsx              # Top navigation header.
│   ├── ImportWalletModal.tsx   # Modal for importing existing wallets.
│   ├── IntegrationModal.tsx    # Handles the connection flow for integrations.
│   ├── Integrations.tsx        # Hub for third-party service integrations.
│   ├── Marketplace.tsx         # Placeholder for the e-commerce marketplace.
│   ├── MarketData.tsx          # Live cryptocurrency market feed card.
│   ├── NFTStudio.tsx           # AI image generation and NFT minting studio.
│   ├── Profile.tsx             # User profile and settings management page.
│   ├── Settings.tsx            # App-wide settings, primarily for network config.
│   ├── Sidebar.tsx             # Main sidebar navigation.
│   ├── SparklineChart.tsx      # Tiny chart for market data trends.
│   ├── TV.tsx                  # Live TV streaming interface.
│   ├── TradingViewChart.tsx    # Integrates the TradingView widget.
│   ├── TransactionModal.tsx    # Modal for viewing transaction details.
│   ├── TransactionRow.tsx      # Reusable component for a single transaction item.
│   ├── Transactions.tsx        # View for all transaction history.
│   ├── Wallet.tsx              # Core wallet component, managing locked/unlocked states.
│   └── WalletChart.tsx         # Pie chart for asset allocation.
├── App.tsx                     # Main application component, handles view routing and state.
├── constants.tsx               # Icons, mock data, default networks, and navigation items.
├── index.html                  # The entry point of the application.
├── index.tsx                   # Renders the React application into the DOM.
├── metadata.json               # Application metadata.
└── types.ts                    # TypeScript type definitions for the application.
```
