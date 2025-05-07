
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Footer = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            <button 
              className="text-gray-600 hover:text-brand-blue transition-colors"
              onClick={() => setIsPrivacyOpen(true)}
            >
              Privacy Policy
            </button>
            <button 
              className="text-gray-600 hover:text-brand-blue transition-colors"
              onClick={() => setIsTermsOpen(true)}
            >
              Terms of Use
            </button>
          </div>
          <div className="text-sm text-gray-500">
            &copy; {currentYear} CreatorStage. All rights reserved.
          </div>
        </div>
      </div>
      
      {/* Privacy Policy Dialog */}
      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p className="text-gray-500 mb-4"><strong>Effective Date:</strong> May 7, 2025</p>
          
          <div className="space-y-4 text-gray-700">
            <p>
              CreatorStage ("we", "our", or "us") respects your privacy and is committed 
              to protecting the information you provide through the CreatorStage desktop 
              application and website.
            </p>
            
            <div>
              <h3 className="text-lg font-medium mb-2">1. Information We Collect</h3>
              <p>We may collect the following information:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Your TikTok account information (via OAuth login)</li>
                <li>Your name and email address (if provided)</li>
                <li>Local video metadata (file name, duration, folder name)</li>
                <li>Scheduling preferences and custom caption templates</li>
                <li>Application usage statistics (local only – no analytics trackers)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">2. How We Use Your Information</h3>
              <p>We use your information to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Display your TikTok profile in the app</li>
                <li>Schedule and publish videos on your behalf</li>
                <li>Apply your selected caption templates</li>
                <li>Improve app functionality and user experience</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">3. Information Sharing</h3>
              <p>
                We do not sell or share your data with third parties. We only interact 
                with the TikTok API to perform authorized actions like uploading and 
                publishing videos using your access token.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">4. Data Storage and Security</h3>
              <p>
                All data is stored locally on your machine. We do not store any personal 
                or video data on external servers. Your TikTok token is stored securely 
                for scheduled actions and refreshed automatically.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">5. Your Rights</h3>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>View or edit your stored data</li>
                <li>Revoke TikTok access at any time</li>
                <li>Delete all saved preferences and schedules locally</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">6. Children's Privacy</h3>
              <p>
                This app is not intended for use by individuals under the age of 13. 
                We do not knowingly collect or store data from children.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">7. Contact</h3>
              <p>
                If you have any questions about this Privacy Policy, contact us at:<br />
                <strong>Email:</strong> support@creatorstage.app
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Terms of Use Dialog */}
      <Dialog open={isTermsOpen} onOpenChange={setIsTermsOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <p className="text-gray-500 mb-4"><strong>Effective Date:</strong> May 7, 2025</p>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Welcome to CreatorStage. By using our desktop application or website, 
              you agree to comply with the following terms and conditions.
            </p>
            
            <div>
              <h3 className="text-lg font-medium mb-2">1. Acceptance of Terms</h3>
              <p>By accessing or using CreatorStage, you agree to be bound by these Terms of Use.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">2. Description of Service</h3>
              <p>
                CreatorStage allows users to schedule, manage, and auto-publish videos 
                to TikTok using their authenticated TikTok account.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">3. User Responsibilities</h3>
              <p>Users agree not to:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Use the app for illegal or unauthorized purposes</li>
                <li>Reverse-engineer or tamper with the application</li>
                <li>Share their TikTok token or access with unauthorized parties</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">4. Intellectual Property</h3>
              <p>
                All content, designs, and source code are the intellectual property of 
                CreatorStage. You are granted a limited license to use the software for 
                personal and professional use.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">5. Limitation of Liability</h3>
              <p>
                CreatorStage is provided "as is." We are not liable for any losses or 
                damages related to scheduled posts, failed uploads, or TikTok API limitations.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">6. Termination</h3>
              <p>
                We reserve the right to suspend or terminate your use of the app for violations 
                of these terms.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">7. Governing Law</h3>
              <p>These terms are governed by the laws of the United States.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">8. Changes to Terms</h3>
              <p>
                We may update these terms at any time. Changes will be reflected on this page, 
                and continued use of the app indicates acceptance of the changes.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">9. Contact</h3>
              <p>
                For questions or feedback, contact us at:<br />
                <strong>Email:</strong> support@creatorstage.app
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
