import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const BackRouteHeader: React.FC<{
  backRoute?: string;
}> = ({ backRoute = "/" }) => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <Button variant="link" className="">
          <Link
            to={backRoute}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-2"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
          </Link>
        </Button>
        {/* <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1> */}
      </div>
    </header>
  );
};

{
  /* <Link
            to={backRoute}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900 mb-2"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Dashboard
          </Link> */
}
