import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import Navbar from './components/Navbar';

type Note = {
  id: string
} & NoteData

type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

type Tag = {
  id: string
  label: string
}


function App() {

  return (
    <div className="px-10 py-8" >
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id" >
          <Route index element={<h1>Show note</h1>} />
          <Route path="edit" element={<h1>Edit note</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
    )
}

export default App
