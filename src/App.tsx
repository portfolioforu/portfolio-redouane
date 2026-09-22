import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import Competences from './pages/Competences'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Parcours from './pages/Parcours'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './pages/Projects'
import Veille from './pages/Veille'

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-fg">
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/projets/:slug" element={<ProjectDetail />} />
          <Route path="/veille" element={<Veille />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
