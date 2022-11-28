import NoteForm from './NoteForm';
import { NoteData } from '../App';

type NewNoteProps = {
  onSubmit: (data: NoteData) => void
}

const NewNote = ({ onSubmit }: NewNoteProps) => {
  return (
    <>
      <div className="mb-5 text-3xl font-bold">New Note</div>
      <NoteForm onSubmit={onSubmit} />
    </>
  )
}

export default NewNote