import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header with Logo */}
      <header className="pt-8 pb-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <img 
            src="/lovable-uploads/62d8561c-671d-40a1-a749-bf7ca75d7d79.png" 
            alt="CreatorStage Logo" 
            className="h-16 sm:h-20 mx-auto"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-brand-blue hover:text-brand-blue/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-6 text-brand-blue">Terms of Use</h1>
        <p className="text-gray-500 mb-6"><strong>Effective Date:</strong> May 7, 2025</p>
        
        <div className="space-y-6 text-gray-700">
          <p>
            Welcome to CreatorStage. By using our desktop application or website, 
            you agree to comply with the following terms and conditions.
          </p>
          
          <div>
            <h2 className="text-xl font-medium mb-2">1. Acceptance of Terms</h2>
            <p>By accessing or using CreatorStage, you agree to be bound by these Terms of Use.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">2. Description of Service</h2>
            <p>
              CreatorStage allows users to schedule, manage, and auto-publish videos 
              to TikTok using their authenticated TikTok account.
            </p>
          </div>

          {/* User Consent and Data Handling */}
          <div>
            <h2 className="text-xl font-medium mb-2">3. User Consent and Data Usage</h2>
            <p>
              By using CreatorStage, you consent to the collection, storage, and use of 
              your TikTok access tokens and refresh tokens for the purpose of scheduling 
              and publishing videos to TikTok. We collect this data through TikTok’s 
              OAuth authentication process and store it securely on our servers.
            </p>
            <p>
              You can revoke access to your TikTok account at any time by logging out 
              from the app. Upon revocation, we will delete all stored tokens related 
              to your account.
            </p>
            <p>
              We take appropriate measures to ensure the security of your tokens, including 
              encryption and secure storage practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">4. User Responsibilities</h2>
            <p>Users agree not to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Use the app for illegal or unauthorized purposes</li>
              <li>Reverse-engineer or tamper with the application</li>
              <li>Share their TikTok token or access with unauthorized parties</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">5. Intellectual Property</h2>
            <p>
              All content, designs, and source code are the intellectual property of 
              CreatorStage. You are granted a limited license to use the software for 
              personal and professional use.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">6. Limitation of Liability</h2>
            <p>
              CreatorStage is provided "as is." We are not liable for any losses or 
              damages related to scheduled posts, failed uploads, or TikTok API limitations.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate your use of the app for violations 
              of these terms.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">8. Governing Law</h2>
            <p>These terms are governed by the laws of the United States.</p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">9. Changes to Terms</h2>
            <p>
              We may update these terms at any time. Changes will be reflected on this page, 
              and continued use of the app indicates acceptance of the changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">10. Compliance with TikTok’s API Policies</h2>
            <p>
              Our app integrates with TikTok’s API to provide functionality for scheduling 
              and publishing videos. By using the app, you agree to comply with TikTok's API 
              usage guidelines, including the proper handling of access tokens, security of 
              user data, and adhering to TikTok's terms of service. You agree not to misuse 
              or abuse the TikTok API.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">11. Contact</h2>
            <p>
              For questions or feedback, contact us at:<br />
              <strong>Email:</strong> support@creatorstage.app
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfUse;
