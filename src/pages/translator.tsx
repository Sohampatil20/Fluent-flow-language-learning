import { useEffect } from "react";

const TranslatorPage = () => {

  useEffect(() => {
    // Replace the current route with the external URL without adding a new history entry
    window.location.href = "https://translator-soham-2024.web.app";
  }, []);

  return (
    <div>
      <p>Redirecting to the Translator...</p>
    </div>
  );
};

export default TranslatorPage;
