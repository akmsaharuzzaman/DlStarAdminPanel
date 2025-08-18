import { ActionTinyButton } from "@/components/buttons/action-tiny-buttons";


// Mock Lucide icon (Lock for unauthorized access)
const Lock = ({ className }:{className: string}) => (
  <span className={className} role="img" aria-label="Lock icon">
    🔒
  </span>
);

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-gray-100">
      <div className="unauthorized-card max-w-md w-full text-center">
        <Lock className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Unauthorized Access
        </h1>
        <p className="text-gray-600 mb-6">
          You don't have permission to access this page. Please log in with an
          authorized account or contact support for assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ActionTinyButton
            onClick={() => (window.location.href = "/login")}
            className="btn-gradient"
          >
            Log In
          </ActionTinyButton>
          <ActionTinyButton
            onClick={() => (window.location.href = "/")}
            className="bg-gray-500 text-white hover:bg-gray-600"
          >
            Back to Home
          </ActionTinyButton>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Need help?{" "}
          <a
            href="mailto:support@gameapp.com"
            className="text-blue-600 hover:underline"
          >
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default UnauthorizedPage;