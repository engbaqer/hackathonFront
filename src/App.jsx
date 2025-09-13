import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NavigationPage from "./page/navigationPage"
import RegisterNewFingerprint from "./page/registerNewFingerprint"
import MatchingPage from "./page/matchFingerprint"
import Head from "./components/custom/header"

export default function App() {
  return (
    <Router>
      <div className="mx-auto space-y-6 flex flex-col items-center sm:gap-10">
        {/* ✅ Header shown on all pages */}
        <Head />

        {/* ✅ Page Content */}
        <Routes>
          <Route path="/" element={<NavigationPage />} />
          <Route path="/register" element={<RegisterNewFingerprint />} />
          <Route path="/match" element={<MatchingPage />} />
        </Routes>
      </div>
    </Router>
  )
}
