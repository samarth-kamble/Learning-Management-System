import React from "react";

const PolicyPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <div className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-teal-400 p-6 text-white">
          <h1 className="text-4xl font-bold">Policy Page</h1>
        </div>
        <div className="p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="text-gray-700 mt-2">
              Welcome to <span className="font-bold">VIT</span>. We are
              committed to maintaining the trust and confidence of our users.
              This Policy Page outlines the terms and conditions, privacy
              practices, and user responsibilities associated with our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Terms of Use</h2>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li className="text-gray-700">
                <span className="font-bold">User Eligibility</span>: Users must
                be at least 13 years old or meet the age requirement of their
                local jurisdiction.
              </li>
              <li className="text-gray-700">
                <span className="font-bold">Account Security</span>: Users are
                responsible for safeguarding their login credentials and any
                activities conducted under their accounts.
              </li>
              <li className="text-gray-700">
                <span className="font-bold">Appropriate Use</span>: Users must
                use the platform responsibly, avoiding content that is harmful,
                unlawful, or violates intellectual property rights.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Privacy Policy</h2>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li className="text-gray-700">
                <span className="font-bold">Data Collection</span>: We collect
                minimal personal information necessary for creating and managing
                user accounts, course progress, and engagement.
              </li>
              <li className="text-gray-700">
                <span className="font-bold">Data Usage</span>: Information is
                used solely to enhance the user experience, improve the
                platform, and facilitate communication.
              </li>
              <li className="text-gray-700">
                <span className="font-bold">Third-Party Sharing</span>: We do
                not share personal data with third parties, except as required
                by law or with user consent.
              </li>
              <li className="text-gray-700">
                <span className="font-bold">Cookies</span>: Our website may use
                cookies to personalize content and analyze traffic.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li className="text-gray-700">
                <span className="font-bold">Content Creation</span>: Users
                creating content on the platform must ensure it is original and
                does not violate copyright laws.
              </li>
              <li className="text-gray-700">
                <span className="font-bold">Behavior</span>: Users must maintain
                a respectful and inclusive environment, avoiding offensive or
                discriminatory language.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
            <p className="text-gray-700 mt-2">
              All content on <span className="font-bold">VIT</span> is protected
              by intellectual property laws. Users must respect the rights of
              the platform and other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Modifications</h2>
            <p className="text-gray-700 mt-2">
              <span className="font-bold">VIT</span> reserves the right to
              modify these policies at any time. Users will be notified of
              significant changes via email or platform announcements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">7. Contact Us</h2>
            <p className="text-gray-700 mt-2">
              For any questions or concerns about our policies, please reach out
              to our support team at{" "}
              <span className="text-blue-500 underline">
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
