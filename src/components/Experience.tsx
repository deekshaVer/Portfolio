export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <h2 className="text-3xl font-bold text-center">Experience</h2>

      <div className="mt-16 space-y-12 max-w-4xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-primary">
            Application Developer
          </h3>
          <p className="text-sm text-textSub font-bold mt-1">
            Fujitsu Consulting India Pvt. Ltd • Pune • Aug 2023 – Present
          </p>

          <ul className="mt-5 space-y-3 text-textSub">
            <li>
              • Developed and optimized scalable React.js applications using
              Vite and ES6+, improving performance by{" "}
              <span className="font-semibold text-textMain">44%</span> through
              lazy loading, code splitting, and memoization.
            </li>
            <li>
              • Designed scalable state management using Redux Toolkit, reducing
              code complexity by{" "}
              <span className="font-semibold text-textMain">25%</span>.
            </li>
            <li>
              • Ensured WCAG 2.1 accessibility standards, achieving{" "}
              <span className="font-semibold text-textMain">95%</span>{" "}
              accessibility score.
            </li>
            <li>
              • Implemented WebSockets for real-time features, improving
              responsiveness by{" "}
              <span className="font-semibold text-textMain">40%</span>.
            </li>
            <li>
              • Integrated REST APIs and AI-powered APIs (Azure OpenAI & Gemini)
              into frontend systems.
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-primary">
            Senior Member of Technical Staff
          </h3>
          <p className="text-sm text-textSub font-bold mt-1">
            Centre for Computational Technologies Pvt. Ltd • Pune • Feb 2021 –
            Aug 2023
          </p>

          <ul className="mt-5 space-y-3 text-textSub">
            <li>
              • Built scalable React applications with modular architecture
              supporting{" "}
              <span className="font-semibold text-textMain">
                30+ reusable components
              </span>
              .
            </li>
            <li>
              • Increased test coverage by{" "}
              <span className="font-semibold text-textMain">60%</span> using
              Jest and React Testing Library, reducing production bugs by{" "}
              <span className="font-semibold text-textMain">40%</span>.
            </li>
            <li>
              • Optimized build performance using Babel, Webpack, and NPM,
              reducing build time by{" "}
              <span className="font-semibold text-textMain">30%</span>.
            </li>
            <li>
              • Implemented JWT-based authentication with Passport.js and
              MongoDB for secure data handling.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
