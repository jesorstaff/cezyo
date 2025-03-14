import { Routes, Route } from "react-router"
import CategoryPage from "./pages/CategoryPage"

const App = () => {
  return (
    <Routes>
      <Route index element={<CategoryPage />} />
    </Routes>
  )
}

export default App
