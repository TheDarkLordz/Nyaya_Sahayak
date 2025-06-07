# Nyaya Sahayak - 🇮🇳 Indian Law Advice Website

This is a Next.js application designed to provide AI-driven legal information based on Indian laws. Users can ask questions in natural language, and the AI will suggest potentially relevant legal sections.

## Overview

Nyaya Sahayak aims to make Indian legal information more accessible. It leverages AI to understand user queries and point towards relevant laws.

**Note:** This application provides information for educational purposes only and is not a substitute for professional legal advice from a qualified lawyer.

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (React-based framework)
- **Backend/API**: Serverless Functions in Next.js (using Server Actions and Genkit flows)
- **AI Integration**: Firebase Genkit with Google AI models

## Getting Started

To get started with development:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set up environment variables:**
    Create a `.env.local` file if needed for API keys or other configurations (e.g., for Genkit/Google AI).

3.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Next.js application, typically on `http://localhost:9002`.

4.  **Run Genkit (if developing AI flows):**
    If you are modifying or testing Genkit flows locally, you might need to run:
    ```bash
    npm run genkit:dev
    ```
    Or for watching changes:
    ```bash
    npm run genkit:watch
    ```

## Core Features

-   **AI Law Suggestion Tool**: Users can input a legal question in natural language, and the AI suggests relevant Indian laws.
-   **Instructions Page**: Provides information on how the application works and a disclaimer.

## Project Structure Highlights

-   `src/app/`: Contains the pages and layouts for the App Router.
    -   `src/app/ask/page.tsx`: The AI-powered legal question page.
    -   `src/app/instructions/page.tsx`: Informational page.
-   `src/components/`: Reusable UI components.
-   `src/ai/flows/`: Contains Genkit AI flows, like `suggest-relevant-laws.ts`.
-   `src/app/globals.css`: Global styles and Tailwind CSS theme customizations.
-   `tailwind.config.ts`: Tailwind CSS configuration.

To explore the application, navigate to the home page after starting the development server.
