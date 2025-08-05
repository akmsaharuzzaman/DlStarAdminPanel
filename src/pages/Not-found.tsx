export const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-primary-foreground text-center px-4">
      <h1 className="text-7xl font-bold text-pink-500 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-pink-400 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-6 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded transition-colors"
      >
        Go to Dashboard
      </a>
    </div>
  );
};
