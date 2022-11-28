import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/NewNote";
import Navbar from './components/Navbar';
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useMemo } from "react";
import { v4 as uuidV4 } from "uuid";

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

  const notesWithTags = useMemo(() => {
    return notes.map(note => {
      return { ...note, tags: tags.filter(tag => note.tagIds.includes(tag.id))}
    })
  }, [notes, tags])

 const createNote = ({ tags, ...data}: NoteData) => {
    setNotes(prevNotes => {
      return [...prevNotes, 
        { ...data, id: uuidV4(), tagIds: tags.map(tag => tag.id)}
      ]
    })
 }

  return (
    <div className="px-10 py-8" >
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote onSubmit={createNote} />} />
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
