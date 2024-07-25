import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSubmit, currentNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const note = {
      id: currentNote ? currentNote.id : Date.now(),
      title,
      content,
      timestamp: new Date().toLocaleString()
    };
    onSubmit(note);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border border-gray-300 rounded-lg shadow-sm">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded-md w-full mb-2"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="border border-gray-300 p-2 rounded-md w-full mb-2"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        {currentNote ? 'Update Note' : 'Add Note'}
      </button>
    </form>
  );
};

export default NoteForm;
