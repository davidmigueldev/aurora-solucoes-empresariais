import { Navigate, Route, Routes } from 'react-router'

import { SiteDataProvider } from './context/SiteDataContext'
import Home from './pages/home/home'

function App() {
  return (
    <SiteDataProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Navigate to="/#servicos" replace />} />
        <Route path="/contato" element={<Navigate to="/#formulario-contato" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteDataProvider>
  )
}

export default App
