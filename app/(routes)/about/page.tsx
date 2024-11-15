import React from "react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="feature">
    <div className="icon-container flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="text-gray-500">{description}</p>
  </div>
);

const LmsFeatures: React.FC = () => {
  const features = [
    {
      icon: (
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      title: "Course Management",
      description:
        "Easily create, organize, and manage courses to help students learn effectively.",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
        </svg>
      ),
      title: "Progress Tracking",
      description:
        "Monitor student progress with detailed analytics and reporting tools.",
    },
    {
      icon: (
        <svg
          className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
        </svg>
      ),
      title: "Certification",
      description:
        "Award certificates upon course completion to recognize achievements.",
    },
    // Add more features as needed
  ];

  return (
    <section className="bg-white ">
      <div className="relative block px-6 py-10 md:py-20 md:px-10 mt-10">
        <div className="relative mx-auto max-w-5xl text-center">
          <span className="text-gray-600 my-3 flex items-center justify-center font-medium uppercase tracking-wider">
            About US
          </span>
          <h2 className="block w-full bg-gradient-to-b from-gray-800 to-gray-600 bg-clip-text font-bold text-transparent text-3xl sm:text-4xl">
            Empowering learners, shaping the future.
          </h2>
          <p className="mx-auto my-4 w-full max-w-xl bg-transparent text-center font-medium leading-relaxed tracking-wide text-gray-600">
            Welcome to VIT, your dedicated partner in education and professional
            growth. We are a comprehensive Learning Management System designed
            to meet the evolving needs of educators, students, and professionals
            across the globe.
          </p>
        </div>
      </div>

      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Empower Learning with Comprehensive Features
          </h2>
          <p className="text-gray-500 sm:text-xl">
            Transform education with tools designed to simplify and enhance the
            learning experience.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LmsFeatures;
