import "./app-footer.js";
import "./app-header.js";
import "./note-item.js";

const noteList = document.getElementById("noteList");
const noteForm = document.getElementById("noteForm");
const noteTitleInput = document.getElementById("noteTitle");
const noteBodyInput = document.getElementById("noteBody");

// Fungsi untuk menampilkan catatan dari API
function renderNotes() {
  // Membersihkan terlebih dahulu elemen noteList
  noteList.innerHTML = "";

  fetch("https://notes-api.dicoding.dev/v2/notes")
    .then((response) => response.json())
    .then((data) => {
      data.data.forEach((note) => {
        const noteItem = document.createElement("note-item");
        noteItem.setAttribute("note-id", note.id);
        noteItem.innerHTML = `
          <h2 slot="title">${note.title}</h2>
          <p slot="body">${note.body}</p>
        `;
        noteList.appendChild(noteItem);
      });
    })
    .catch((error) => {
      console.error("Error fetching notes:", error);
    });
}

// Fungsi untuk menambahkan catatan
function addNoteHandler(event) {
  event.preventDefault();
  const title = noteTitleInput.value;
  const body = noteBodyInput.value;

  if (!title || !body) {
    alert("Please fill in both title and body fields.");
    return;
  }

  const newNote = {
    title,
    body,
  };

  fetch("https://notes-api.dicoding.dev/v2/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newNote),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderNotes();
      noteTitleInput.value = "";
      noteBodyInput.value = "";
    })
    .catch((error) => {
      console.error("Error adding note:", error);
    });
}

// Fungsi untuk menghapus catatan
function deleteNoteHandler(noteId) {
  fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to delete note");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderNotes();
    })
    .catch((error) => {
      console.error("Error deleting note:", error);
    });
}

// Event listener untuk menambahkan catatan saat form di-submit
noteForm.addEventListener("submit", addNoteHandler);

// Event listener untuk menangani penghapusan catatan
noteList.addEventListener("delete", (event) => {
  const noteId = event.detail.noteId;
  console.log("Deleting note with ID:", noteId);
  deleteNoteHandler(noteId);
});

renderNotes();
