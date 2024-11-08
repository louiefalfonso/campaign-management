import { Route, Routes, Navigate } from "react-router-dom";
import CampaignPage from "./pages/CampaignPage";

function App() {
  return (
    <>
      <main className="w-full min-h-screen bg-[#f3f4f6] ">
        <Routes>
          <Route path="/" element={<CampaignPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
