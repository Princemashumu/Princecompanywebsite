import { Routes, Route } from "react-router-dom"
import { lazy, Suspense, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import SplashScreen from "./components/SplashScreen"

const BlogPost = lazy(() => import("./pages/BlogPost"))

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="w-8 h-8 border-4 border-cyan-200 border-t-cyan-600 rounded-full animate-spin" />
    </div>
  )
}

export default function App() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      <SplashScreen onDone={() => setSplashDone(true)} />
      <div className={`min-h-screen bg-white dark:bg-slate-900 font-sans antialiased transition-opacity duration-500 ${splashDone ? 'opacity-100' : 'opacity-0'}`}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <BlogPost />
              </Suspense>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}
