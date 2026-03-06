import { lazy, Suspense } from "react";
import { Layout } from "@/layout";
import { HomePageView } from "@/view/HomePageView";
import { Route, Routes } from "react-router-dom";

// Lazy load DocumentationPage to isolate its styles (including library CSS)
const DocumentationPageView = lazy(
  () => import("@/view/DocumentationPageView"),
);

function DocumentationLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-gray-600">Loading documentation...</p>
      </div>
    </div>
  );
}

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Main portfolio routes with Layout */}
      <Route
        path="/"
        element={
          <Layout>
            <HomePageView />
          </Layout>
        }
      />
      {/* Documentation page - lazy loaded to isolate library styles */}
      <Route
        path="/docs"
        element={
          <Suspense fallback={<DocumentationLoader />}>
            <DocumentationPageView />
          </Suspense>
        }
      />
    </Routes>
  );
};
