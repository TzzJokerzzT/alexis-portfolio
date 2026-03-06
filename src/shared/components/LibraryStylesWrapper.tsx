import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

/**
 * Wrapper component that dynamically loads the library styles
 * only when mounted, preventing them from affecting other pages
 */
export function LibraryStylesWrapper({ children }: Props) {
  const [stylesLoaded, setStylesLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load the library styles
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://unpkg.com/@lzzjokerzzl/react-ui-components@1.4.9/dist/react-ui-components.css";
    link.id = "library-styles";

    link.onload = () => setStylesLoaded(true);

    // Only add if not already present
    if (!document.getElementById("library-styles")) {
      document.head.appendChild(link);
    } else {
      setStylesLoaded(true);
    }

    // Cleanup: remove styles when component unmounts
    return () => {
      const existingLink = document.getElementById("library-styles");
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []);

  if (!stylesLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading styles...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
