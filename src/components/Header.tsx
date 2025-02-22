
import { Book, ChartBar, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <GraduationCap className="h-8 w-8 text-gray-700" />
            <h1 className="text-xl font-semibold text-gray-800">PhD Progress</h1>
          </div>
          <nav className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 flex items-center space-x-2 transition-colors"
            >
              <ChartBar className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/publications"
              className="text-gray-600 hover:text-gray-900 flex items-center space-x-2 transition-colors"
            >
              <Book className="h-5 w-5" />
              <span>Publications</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
