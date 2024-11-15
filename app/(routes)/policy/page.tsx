import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PolicyPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-[75px]">
      <div className="w-full mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 text-white flex items-center justify-between">
          <h1 className="text-5xl font-extrabold">Policy Page</h1>
          <FaCheckCircle className="text-3xl" />
        </div>
        <div className="p-10 space-y-8">
          <section className="border-b pb-6">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              1. Introduction
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              Welcome to <span className="font-semibold">[Your LMS Name]</span>.
              We are committed to maintaining the trust and confidence of our
              users. This Policy Page outlines the terms and conditions, privacy
              practices, and user responsibilities associated with our platform.
            </p>
          </section>

          <section className="border-b pb-6">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              2. Terms of Use
            </h2>
            <ul className="space-y-3 pl-5 text-gray-800 text-lg leading-relaxed">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>
                  <span className="font-semibold">User Eligibility</span>: Users
                  must be at least 13 years old or meet the age requirement of
                  their local jurisdiction.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>
                  <span className="font-semibold">Account Security</span>: Users
                  are responsible for safeguarding their login credentials and
                  any activities conducted under their accounts.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>
                  <span className="font-semibold">Appropriate Use</span>: Users
                  must use the platform responsibly, avoiding content that is
                  harmful, unlawful, or violates intellectual property rights.
                </span>
              </li>
            </ul>
          </section>

          <section className="border-b pb-6">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              3. Privacy Policy
            </h2>
            <ul className="space-y-3 pl-5 text-gray-800 text-lg leading-relaxed">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>
                  <span className="font-semibold">Data Collection</span>: We
                  collect minimal personal information necessary for creating
                  and managing user accounts, course progress, and engagement.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>
                  <span className="font-semibold">Data Usage</span>: Information
                  is used solely to enhance the user experience, improve the
                  platform, and facilitate communication.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>
                  <span className="font-semibold">Third-Party Sharing</span>: We
                  do not share personal data with third parties, except as
                  required by law or with user consent.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>
                  <span className="font-semibold">Cookies</span>: Our website
                  may use cookies to personalize content and analyze traffic.
                </span>
              </li>
            </ul>
          </section>

          <section className="border-b pb-6">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              4. User Responsibilities
            </h2>
            <ul className="space-y-3 pl-5 text-gray-800 text-lg leading-relaxed">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>
                  <span className="font-semibold">Content Creation</span>: Users
                  creating content on the platform must ensure it is original
                  and does not violate copyright laws.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span>
                  <span className="font-semibold">Behavior</span>: Users must
                  maintain a respectful and inclusive environment, avoiding
                  offensive or discriminatory language.
                </span>
              </li>
            </ul>
          </section>

          <section className="border-b pb-6">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              5. Intellectual Property
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              All content on{" "}
              <span className="font-semibold">[Your LMS Name]</span> is
              protected by intellectual property laws. Users must respect the
              rights of the platform and other users.
            </p>
          </section>

          <section className="border-b pb-6">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              6. Modifications
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              <span className="font-semibold">[Your LMS Name]</span> reserves
              the right to modify these policies at any time. Users will be
              notified of significant changes via email or platform
              announcements.
            </p>
          </section>

          <section className="pb-6">
            <h2 className="text-3xl font-bold mb-4 text-indigo-600">
              7. Contact Us
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed">
              For any questions or concerns about our policies, please reach out
              to our support team at{" "}
              <span className="text-indigo-600 underline">
                [support email/contact page link]
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
