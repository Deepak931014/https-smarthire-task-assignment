import React from 'react';

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <li className="p-4 border border-gray-300 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold">{note.title}</h3>
      <p className="mt-1 text-gray-700">{note.content.substring(0, 50)}...</p>
      <small className="block mt-2 text-gray-500">{note.timestamp}</small>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={onEdit}
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default NoteItem;
