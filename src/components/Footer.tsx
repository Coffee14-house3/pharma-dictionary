export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-300">
          PharmaChem Dictionary &copy; {new Date().getFullYear()} - Comprehensive Chemical Reference
        </p>
        <p className="text-gray-400 text-sm mt-2">
          Contains information on 500+ chemical compounds with structures and properties
        </p>
      </div>
    </footer>
  );
}