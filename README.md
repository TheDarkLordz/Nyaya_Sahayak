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

## Features

Nyaya Sahayak offers a range of features designed to make legal information accessible and user-friendly:

- **AI Law Suggestion Tool**: A core feature where users can input legal questions in natural language, and the AI processes these queries to suggest relevant Indian laws or legal sections.
- **Instructions Page**: An informational section that explains how the application works and includes a disclaimer about the educational nature of the tool.
- **Responsive Design**: Built with Tailwind CSS, the application ensures a seamless experience across devices, from mobile phones to desktops.
- **Fast and Scalable**: Leveraging Next.js, the app provides optimized performance with server-side rendering and static site generation capabilities.

## Project Structure

The codebase for Nyaya Sahayak is organized to ensure clarity and maintainability. Below is an overview of the key directories and files:

- `src/app/`: Contains the main pages and layouts using Next.js App Router.
  - `src/app/ask/page.tsx`: The primary page for the AI-powered legal question tool.
  - `src/app/instructions/page.tsx`: The page providing instructions and disclaimers.
- `src/components/`: Houses reusable UI components used across the application.
- `src/ai/flows/`: Includes Genkit AI flows, such as `suggest-relevant-laws.ts`, which powers the legal suggestion functionality.
- `src/app/globals.css`: Defines global styles and customizations for the Tailwind CSS theme.
- `tailwind.config.ts`: Configuration file for Tailwind CSS, used for styling the application.

## Project Index

For quick navigation through the repository, here’s a structured index of the project’s key components:

- **Home**: Entry point of the application (`src/app/page.tsx`)
- **Ask Page**: AI-driven legal query tool (`src/app/ask/page.tsx`)
- **Instructions**: Informational page with disclaimers (`src/app/instructions/page.tsx`)
- **Components**: Reusable UI elements (`src/components/`)
- **AI Flows**: Logic for legal suggestions (`src/ai/flows/`)
- **Styles**: Global styling and themes (`src/app/globals.css`)
- **Configuration**: Tailwind and other settings (`tailwind.config.ts`, `.env.local`)

## Roadmap

We are committed to continuously improving Nyaya Sahayak. Here’s a glimpse of our planned features and enhancements:

- **Multilingual Support**: Adding support for regional Indian languages to make the tool accessible to a broader audience.
- **Expanded Legal Database**: Incorporating a wider range of Indian laws and case studies for more comprehensive suggestions.
- **User Feedback System**: Implementing a feature for users to provide feedback on AI suggestions to improve accuracy.
- **Mobile App**: Developing a dedicated mobile application for easier access on the go.
- **Community Forum**: Creating a space for users to discuss legal queries and share insights.

## Contribution

We welcome contributions from the community to enhance Nyaya Sahayak. If you’re interested in contributing, please follow these steps:

1. **Fork the Repository**: Create your own fork of the project on GitHub.
2. **Make Changes**: Implement your features or bug fixes in your forked repository.
3. **Submit a Pull Request**: Once your changes are ready, submit a pull request to the main repository for review.
4. **Code Standards**: Ensure your code adheres to the project’s structure, follows ESLint rules (if applicable), and includes relevant documentation.

For major changes or feature suggestions, please open an issue first to discuss your ideas with the maintainers.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file in the repository for more details. You are free to use, modify, and distribute this software as per the terms of the license.

## Acknowledgements

We would like to express our gratitude to the following:

- **Next.js Team**: For providing an excellent framework that powers the frontend and backend of Nyaya Sahayak.
- **Firebase Genkit & Google AI**: For enabling the AI capabilities that drive our legal suggestion tool.
- **Open Source Community**: For the inspiration, tools, and libraries that have made this project possible.
- **Contributors**: To everyone who has contributed code, ideas, or feedback to improve Nyaya Sahayak.

Thank you for exploring Nyaya Sahayak. We hope this tool serves as a valuable resource in making Indian legal information more accessible to everyone. If you have any questions or suggestions, feel free to reach out or open an issue on GitHub!
