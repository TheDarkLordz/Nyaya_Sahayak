---

# Nyaya Sahayak - 🇮🇳 Indian Law Advice Website

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) ![Firebase](https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34) ![Google Gemini](https://img.shields.io/badge/google%20gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white) ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)

---

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Getting Started with Development](#getting-started-with-development)
- [Features](#features)
- [Project Structure](#project-structure)
- [Project Index](#project-index)
- [Roadmap](#roadmap)
- [Contribution](#contribution)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Project Overview

Nyaya Sahayak is an innovative web application designed to democratize access to legal information in India. By harnessing the power of artificial intelligence, this platform allows users to ask legal questions in natural language and receive suggestions for relevant Indian laws and legal sections. The goal is to provide an educational tool that empowers individuals with foundational legal knowledge, bridging the gap between complex legal texts and everyday understanding.

**Disclaimer**: Nyaya Sahayak is intended for informational and educational purposes only. It is not a substitute for professional legal advice from a qualified lawyer. Always consult a legal expert for personalized guidance on legal matters.

---

## Technology Stack

Nyaya Sahayak is built using a modern, robust tech stack to ensure performance, scalability, and a seamless user experience:

- **Frontend**: [Next.js](https://nextjs.org/), a React-based framework that enables server-side rendering and static site generation for fast, optimized web applications.
- **Backend/API**: Serverless Functions within Next.js, leveraging Server Actions and Genkit flows for efficient and scalable backend operations.
- **AI Integration**: 
  - **Firebase Genkit** paired with **Google Gemini** models to power intelligent legal suggestions.
  - **ChatGPT** (via OpenAI) for additional natural language processing capabilities, enhancing the AI's ability to interpret user queries.
- **Database & Storage**: [Supabase](https://supabase.com/), an open-source Firebase alternative, used for managing data, authentication, and real-time updates.
- **Deployment**: [Vercel](https://vercel.com/), a platform for effortless deployment and hosting of Next.js applications, ensuring global scalability and performance.
- **Styling**: Tailwind CSS for responsive, utility-first design, allowing for rapid UI development and consistent theming across devices.

This combination of technologies ensures that Nyaya Sahayak is not only powerful and intelligent but also user-friendly and accessible to a wide audience.

---

## Getting Started with Development

To set up and run Nyaya Sahayak locally for development or testing purposes, follow these detailed steps:

1. **Clone the Repository**: If you haven’t already, clone the project repository from GitHub to your local machine.
   ```bash
   git clone 
   cd nyaya-sahayak
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required npm packages.
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**: Create a `.env.local` file in the root directory to store sensitive configurations such as API keys for Firebase, Google Gemini, OpenAI, Supabase, and other services.
   ```bash
   echo "NEXT_PUBLIC_SUPABASE_URL=your_supabase_url" >> .env.local
   echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key" >> .env.local
   echo "GOOGLE_GEMINI_API_KEY=your_gemini_api_key" >> .env.local
   echo "OPENAI_API_KEY=your_openai_api_key" >> .env.local
   ```

4. **Run the Development Server**: Start the Next.js application locally. By default, it will be accessible at `http://localhost:9002`.
   ```bash
   npm run dev
   ```

5. **Run Genkit for AI Flow Development**: If you’re working on or testing AI flows with Genkit, use the following commands:
   - For a one-time run:
     ```bash
     npm run genkit:dev
     ```
   - For continuous watching of changes:
     ```bash
     npm run genkit:watch
     ```

Once the server is running, open your browser and navigate to `http://localhost:9002` to explore the application.

---

## Features

Nyaya Sahayak is packed with features to make legal information accessible, intuitive, and user-friendly:

- **AI Law Suggestion Tool**: Users can input legal questions in natural language, and the AI (powered by Google Gemini and ChatGPT) processes these queries to suggest relevant Indian laws or legal sections.
- **Instructions Page**: A dedicated page offering clear guidance on how to use the application, along with important disclaimers about its educational purpose.
- **Responsive UI**: Designed with Tailwind CSS, ensuring a seamless and visually appealing experience across all devices, from mobile phones to desktops.
- **Serverless & Fast**: Built on Next.js with serverless functions and deployed via Vercel, providing lightning-fast performance and scalability.
- **Educational Resource**: Focused on providing foundational legal knowledge for informational purposes, not as a replacement for professional legal advice.
- **Real-Time Data Handling**: Utilizes Supabase for efficient data management, user authentication, and real-time updates where applicable.

---

## Project Structure

The codebase for Nyaya Sahayak is organized for clarity, maintainability, and scalability. Below is an overview of the key directories and files:

```
src/
├── app/
│   ├── ask/page.tsx           # AI-powered legal question page
│   ├── instructions/page.tsx  # Instructions and disclaimer page
│   └── globals.css            # Global styles and Tailwind CSS customizations
├── components/                # Reusable UI components (e.g., buttons, forms)
├── ai/flows/                  # Genkit AI flows (e.g., suggest-relevant-laws.ts)
tailwind.config.ts             # Tailwind CSS configuration for styling
.env.local                     # Environment variables for API keys (not committed)
```

This structure adheres to Next.js conventions using the App Router, ensuring that developers can easily navigate and extend the project.

---

## Project Index

For quick reference and navigation through the repository, here’s a structured index of the project’s key components:

| Section            | Path/Description                           |
|--------------------|--------------------------------------------|
| Home               | `/` (Landing page)                         |
| Ask                | `/ask` (AI law suggestion tool)            |
| Instructions       | `/instructions` (How to use, disclaimer)   |
| Components         | `src/components/` (Reusable UI elements)   |
| AI Flows           | `src/ai/flows/` (Genkit AI logic)          |
| Styles             | `src/app/globals.css` (Global styling)     |
| Tailwind Config    | `tailwind.config.ts` (Styling settings)    |

---

## Roadmap

Nyaya Sahayak is a growing project with exciting plans for the future. Here are some of the features and enhancements we aim to implement:

- [ ] **Multilingual Support**: Introduce support for regional Indian languages to make the tool accessible to a broader, diverse audience.
- [ ] **Expanded Legal Database**: Incorporate a wider range of Indian laws, statutes, and case studies to provide more comprehensive and accurate suggestions.
- [ ] **User Feedback System**: Implement a mechanism for users to provide feedback on AI suggestions, helping to refine and improve accuracy over time.
- [ ] **Mobile App Development**: Create a dedicated mobile application for iOS and Android to enhance accessibility on the go.
- [ ] **Community Forum**: Build a platform for users to discuss legal queries, share insights, and engage with a community of learners and experts.

We are open to suggestions and ideas from the community to shape the future of Nyaya Sahayak.

---

## Contribution

We warmly welcome contributions from developers, legal enthusiasts, and anyone passionate about making legal information accessible. To contribute, follow these steps:

1. **Fork the Repository**: Create your own fork of the project on GitHub.
2. **Create a Feature Branch**: Make a new branch for your changes (`git checkout -b feature/your-feature`).
3. **Commit Your Changes**: Save your work with descriptive commit messages (`git commit -am 'Add new feature'`).
4. **Push to Your Branch**: Upload your changes to your forked repository (`git push origin feature/your-feature`).
5. **Open a Pull Request**: Submit a pull request to the main repository for review by the maintainers.

Please ensure your code adheres to the project’s structure, follows any defined coding standards (e.g., ESLint rules if applicable), and includes relevant documentation. For major changes or feature ideas, open an issue first to discuss with the team.

---

## License

This project is licensed under the MIT License, which allows for free use, modification, and distribution of the software. For full details, refer to the [LICENSE](LICENSE) file in the repository.

---

## Acknowledgements

We extend our heartfelt thanks to the following for their contributions to Nyaya Sahayak’s development:

- **Next.js Team**: For providing a powerful React framework that forms the backbone of our application.
- **Firebase Genkit & Google AI**: For enabling cutting-edge AI capabilities through Google Gemini.
- **OpenAI**: For ChatGPT’s natural language processing, enhancing our query interpretation.
- **Supabase Team**: For an intuitive, open-source database and authentication solution.
- **Vercel**: For seamless deployment and hosting, ensuring global accessibility.
- **Shields.io**: For the badge generation tool that adds a professional touch to our documentation.
- **Open Source Community & Contributors**: To everyone who has provided code, feedback, or inspiration to improve Nyaya Sahayak.

Thank you for exploring Nyaya Sahayak. We hope this tool becomes a valuable resource in making Indian legal information more accessible to all. If you have questions, suggestions, or wish to contribute, feel free to open an issue or reach out on GitHub!
