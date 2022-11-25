import { Routes, Route, Navigate } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/new" element={<h1>New note</h1>} />
      <Route path="/:id" >
        <Route index element={<h1>Show note</h1>} />
        <Route path="/edit" element={<h1>Edit note</h1>} />
      </Route>
      <Route />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default App
