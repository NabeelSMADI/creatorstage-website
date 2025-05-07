
import { Link } from "react-router-dom";

const Footer = () => {  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-6 mb-4">
            <Link 
              to="/privacy-policy" 
              className="text-gray-600 hover:text-brand-blue transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms-of-use"
              className="text-gray-600 hover:text-brand-blue transition-colors"
            >
              Terms of Use
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            &copy; {currentYear} CreatorStage. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
