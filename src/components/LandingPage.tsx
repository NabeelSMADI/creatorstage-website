
import { useState } from "react";
import ContactForm from "./ContactForm";
import FeatureList from "./FeatureList";
import Footer from "./Footer";

const LandingPage = () => {
  const [showContactForm, setShowContactForm] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);
  
  const handleFormSubmit = () => {
    setShowContactForm(false);
    setShowThankYou(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setShowContactForm(true);
      setShowThankYou(false);
    }, 5000);
  };

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
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-blue mb-4">
            CreatorStage is Coming Soon
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto text-gray-700">
            A powerful desktop application for content creators, influencers, and coaches
            to schedule and automatically publish TikTok videos with an intuitive calendar interface.
          </p>
        </div>
        
        {/* Features */}
        <div className="mb-16">
          <FeatureList />
        </div>
        
        {/* App Screenshots */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center text-brand-dark">App Preview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-gray rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/31bea071-093a-4396-a013-167a667756f7.png" 
                alt="CreatorStage Calendar View" 
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-lg">Intuitive Calendar Interface</h3>
                <p className="text-gray-600">Schedule videos with a simple experience</p>
              </div>
            </div>
            
            <div className="bg-brand-gray rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/e031c1ca-5289-4427-b728-2395f8003b76.png" 
                alt="CreatorStage Video Manager" 
                className="w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-lg">Powerful Content Management</h3>
                <p className="text-gray-600">Organize, caption, and preview your TikTok videos</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center text-brand-dark">
            Get In Touch
          </h2>
          
          {showContactForm ? (
            <ContactForm onFormSubmit={handleFormSubmit} />
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center animate-fade-in">
              <h3 className="text-xl font-medium text-green-800 mb-2">Thank you!</h3>
              <p className="text-green-700">We'll be in touch soon.</p>
            </div>
          )}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
