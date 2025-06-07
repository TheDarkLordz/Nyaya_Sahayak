---

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)


*AI-powered legal information for Indian law, built with Next.js and Google Genkit.*

---

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Project Index](#project-index)
- [Roadmap](#roadmap)
- [Contribution](#contribution)
- [License](#license)
- [Acknowledgements](#acknowledgements)

---

## Features

- **AI Law Suggestion Tool**: Enter legal questions in natural language and receive relevant Indian law sections.
- **Instructions Page**: Clear guidance on usage and disclaimers.
- **Responsive UI**: Built with Tailwind CSS for seamless experience on all devices.
- **Serverless & Fast**: Powered by Next.js serverless functions and Genkit flows.
- **Educational Resource**: Designed for informational purposes, not as a legal substitute.

## Project Structure

```
src/
├── app/
│   ├── ask/page.tsx           # AI-powered legal question page
│   ├── instructions/page.tsx  # Instructions and disclaimer
│   └── globals.css            # Global styles and Tailwind customizations
├── components/                # Reusable UI components
├── ai/flows/                  # Genkit AI flows (e.g., suggest-relevant-laws.ts)
tailwind.config.ts             # Tailwind CSS configuration
.env.local                     # Environment variables (not committed)
```

## Project Index

| Section            | Path/Description                           |
|--------------------|--------------------------------------------|
| Home               | `/` (Landing page)                         |
| Ask                | `/ask` (AI law suggestion tool)            |
| Instructions       | `/instructions` (How to use, disclaimer)   |
| Components         | `src/components/` (UI components)          |
| AI Flows           | `src/ai/flows/` (Genkit AI logic)          |
| Styles             | `src/app/globals.css`                      |
| Tailwind Config    | `tailwind.config.ts`                       |

## Roadmap

- [ ] **Multilingual Support**: Add regional language support.
- [ ] **Expanded Legal Database**: Cover more Indian laws and case studies.
- [ ] **User Feedback**: Collect feedback to improve AI accuracy.
- [ ] **Mobile App**: Develop a mobile version.
- [ ] **Community Forum**: Enable user discussions and Q&A.

## Contribution

We welcome contributions!  
To contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

Please follow code style conventions and add documentation where necessary.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **Next.js** for the robust React framework.
- **Firebase Genkit & Google AI** for powering the AI backend.
- **Shields.io** for badge generation.
- All contributors and the open-source community.
