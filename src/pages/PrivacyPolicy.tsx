import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
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
        
        <h1 className="text-3xl font-bold mb-6 text-brand-blue">Privacy Policy</h1>
        <p className="text-gray-500 mb-6"><strong>Effective Date:</strong> May 7, 2025</p>
        
        <div className="space-y-6 text-gray-700">
          <p>
            CreatorStage ("we", "our", or "us") respects your privacy and is committed 
            to protecting the information you provide through the CreatorStage desktop 
            application and website. This Privacy Policy outlines how we collect, use, 
            store, and protect your information in compliance with TikTok’s API policies.
          </p>
          
          <div>
            <h2 className="text-xl font-medium mb-2">1. Information We Collect</h2>
            <p>We may collect the following information:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Your TikTok account information (via OAuth login, including access tokens and refresh tokens)</li>
              <li>Your name and email address (if provided)</li>
              <li>Local video metadata (file name, duration, folder name)</li>
              <li>Scheduling preferences and custom caption templates</li>
              <li>Application usage statistics (local only – no analytics trackers)</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Display your TikTok profile in the app</li>
              <li>Schedule and publish videos on your behalf via TikTok’s API</li>
              <li>Apply your selected caption templates</li>
              <li>Improve app functionality and user experience</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">3. Information Sharing</h2>
            <p>
              We do not sell, rent, or share your personal data with third parties. 
              We only interact with the TikTok API to perform authorized actions like 
              uploading and publishing videos using your access token, in accordance with 
              TikTok's API policies.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">4. Data Storage and Security</h2>
            <p>
              All data related to your TikTok account, including access and refresh tokens, 
              is stored securely. We store your data locally on your machine and do not 
              store any personal or video data on external servers. Your TikTok token is 
              securely stored for scheduled actions and is refreshed automatically using 
              the refresh token.
            </p>
            <p>
              We implement strong security measures to protect your tokens, including 
              encryption and secure storage practices in line with TikTok’s API security requirements.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>View or edit your stored data</li>
              <li>Revoke TikTok access at any time by disconnecting your account</li>
              <li>Delete all saved preferences and schedules locally</li>
              <li>Request deletion of your data in compliance with applicable data protection laws</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">6. Children's Privacy</h2>
            <p>
              This app is not intended for use by individuals under the age of 13. 
              We do not knowingly collect or store data from children. If we become aware 
              that we have collected personal information from a child, we will take steps 
              to delete such information.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl font-medium mb-2">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted 
              on this page, and continued use of the app after changes are made will constitute 
              your acceptance of the revised policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium mb-2">8. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:<br />
              <strong>Email:</strong> support@creatorstage.app
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
