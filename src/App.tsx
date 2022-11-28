import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import Navbar from './components/Navbar';
import { useLocalStorage } from "react";

export type Note = {
  id: string
} & NoteData

type RawNote = {
  id: string
} & RawNoteData

export type RawNoteData = {
  title: string
  markdown: string
  tagIds: string[]
}

export type NoteData = {
  title: string
  markdown: string
  tags: Tag[]
}

export type Tag = {
  id: string
  label: string
}


function App() {

  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", [])

  const [tags, setTags] = useLocalStorage<RawNote[]>("TAGS", [])

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
