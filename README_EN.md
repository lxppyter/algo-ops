# AlgoOps - Algorithms and System Design Learning Platform

AlgoOps is a modern, interactive learning platform designed to demystify complex data structures, algorithms, and system design concepts for everyone.

The primary goal of this project is to present topics with both **academic/professional** depth and a **simplified (ELI5)** language for developers preparing for technical interviews or anyone wanting to learn computer science fundamentals.

## 🌟 Features

- **🔄 Dual Domains**: 
  - **DSA (Data Structures & Algorithms)**: Core algorithms and data structures.
  - **System Design & DB**: Database architectures and system design principles.
  
- **👶 ELI5 (Explain Like I'm 5) Mode**: 
  - Transform complex technical explanations into simple metaphors understandable by a 5-year-old with a single click.
  
- **🌍 Multi-Language Support**: 
  - Full content support in both Turkish and English. Learn in your preferred language.

- **🎨 Modern and Sleek Interface**: 
  - Eye-friendly dark mode compatible design.
  - Smooth transitions and micro-animations.

- **💻 Code Examples & Visualization**: 
  - Syntax-highlighted code blocks supporting the topic explanations.

## 🛠️ Tech Stack

This project is built using the latest web technologies:

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/) & [Radix UI](https://www.radix-ui.com/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Code View**: Shiki / React Syntax Highlighter

## 🚀 Installation & Running

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jxpyter/algo-ops.git
   cd algo-ops
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layout files.
  - `algorithms/`: Algorithm topic pages.
  - `data-structures/`: Data structure topic pages.
  - `patterns/`: Design patterns.
  - `topics/`: General topic listings.
- `components/`: Reusable UI components (Button, Card, Input, etc.).
- `context/`: Global state management (Language selection, Explanation mode).
- `lib/`: Helper functions and static content data (`content.ts`).
- `public/`: Static images and files.

## 🤝 Contributing

Contributions are welcome! If you find a bug or want to add a new feature, please open an "issue" or submit a "pull request".

1. Fork this project.
2. Create a new feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -m 'Added new feature'`).
4. Push your branch (`git push origin feature/new-feature`).
5. Create a Pull Request.

---

This project is licensed under the [MIT License](LICENSE).
