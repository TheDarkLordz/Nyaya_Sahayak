# Nyaya Sahayak - 🇮🇳 Indian Law Advice Website

Welcome to the official documentation for **Nyaya Sahayak**, a Next.js application designed to provide AI-driven legal information based on Indian laws. This platform allows users to ask legal questions in natural language, and the AI suggests potentially relevant legal sections to assist with their queries.

## Project Overview

Nyaya Sahayak is built with the mission of making Indian legal information more accessible to the general public. By leveraging artificial intelligence, the application interprets user queries and directs them to relevant laws and legal sections. This tool serves as an educational resource to help users better understand legal frameworks in India.

**Disclaimer**: The information provided by Nyaya Sahayak is for educational purposes only and should not be considered a substitute for professional legal advice from a qualified lawyer.

## Technology Stack

- **Frontend**: Next.js (a React-based framework for building modern web applications)
- **Backend/API**: Serverless Functions integrated within Next.js, utilizing Server Actions and Genkit flows for seamless API operations
- **AI Integration**: Firebase Genkit paired with Google AI models to power intelligent legal suggestions

## Getting Started with Development

Follow these steps to set up and run the Nyaya Sahayak project locally for development purposes:

- **Install Dependencies**: Open your terminal, navigate to the project directory, and run the following command to install the required packages:
  ```bash
  npm install
  ```

- **Set Up Environment Variables**: Create a `.env.local` file in the root directory of the project to store API keys or other configurations necessary for Genkit or Google AI integration.

- **Run the Development Server**: Start the Next.js application with the following command. By default, it will run on `http://localhost:9002`:
  ```bash
  npm run dev
  ```

- **Run Genkit for AI Flow Development**: If you are working on or testing Genkit flows locally, use one of these commands:
  - For a one-time run:
    ```bash
    npm run genkit:dev
    ```
  - For continuous watching of changes:
    ```bash
    npm run genkit:watch
    ```

## Core Features

- **AI Law Suggestion Tool**: A user-friendly interface where individuals can input legal questions in natural language. The AI processes these queries and suggests relevant Indian laws or legal sections.
- **Instructions Page**: An informational section that explains how the application works and includes a disclaimer about the educational nature of the tool.

## Project Structure

The codebase for Nyaya Sahayak is organized as follows to ensure clarity and maintainability:

- `src/app/`: Contains the main pages and layouts using Next.js App Router.
  - `src/app/ask/page.tsx`: The primary page for the AI-powered legal question tool.
  - `src/app/instructions/page.tsx`: The page providing instructions and disclaimers.
- `src/components/`: Houses reusable UI components used across the application.
- `src/ai/flows/`: Includes Genkit AI flows, such as `suggest-relevant-laws.ts`, which powers the legal suggestion functionality.
- `src/app/globals.css`: Defines global styles and customizations for the Tailwind CSS theme.
- `tailwind.config.ts`: Configuration file for Tailwind CSS, used for styling the application.

## Exploring the Application

Once the development server is running, navigate to the home page (typically `http://localhost:9002`) in your browser to interact with Nyaya Sahayak. From there, you can access the AI suggestion tool or read through the instructions for more information on how to use the platform.

## Contributing

We welcome contributions to improve Nyaya Sahayak. If you’re interested in contributing, please fork the repository, make your changes, and submit a pull request. Ensure that your code adheres to the project’s structure and coding standards.

## License

This project is licensed under the MIT License. See the LICENSE file in the repository for more details.

Thank you for exploring Nyaya Sahayak. We hope this tool serves as a valuable resource in making Indian legal information more accessible to everyone.
