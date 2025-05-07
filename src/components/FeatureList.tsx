
import { CheckCircle } from "lucide-react";

const features = [
  "Custom caption templates",
  "Video previews",
  "Auto-scheduling to TikTok",
  "TikTok API integration",
  "Clean and user-friendly UI",
  "Offline-first desktop experience"
];

const FeatureList = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center text-brand-dark">Key Features</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 p-3 bg-brand-gray rounded-lg">
            <CheckCircle className="h-6 w-6 text-brand-blue flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;
