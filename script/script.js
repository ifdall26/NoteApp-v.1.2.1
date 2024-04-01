import "./app-footer.js";
import "./app-header.js";
import "./note-item.js";
import "../style/style.css";
import "./loading-spinner.js"; // Menambahkan import untuk loading-spinner.js

const noteList = document.getElementById("noteList");
const noteForm = document.getElementById("noteForm");
const noteTitleInput = document.getElementById("noteTitle");
const noteBodyInput = document.getElementById("noteBody");
const loadingSpinner = document.getElementById("loadingSpinner"); // Menambahkan referensi ke elemen loading-spinner

// Fungsi untuk menampilkan indikator loading
function showLoading() {
  loadingSpinner.style.display = "block";
}

// Fungsi untuk menyembunyikan indikator loading
function hideLoading() {
  loadingSpinner.style.display = "none";
}

// Fungsi untuk menampilkan catatan dari API
function renderNotes() {
  showLoading(); // Memanggil fungsi untuk menampilkan indikator loading

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
      hideLoading(); // Memanggil fungsi untuk menyembunyikan indikator loading setelah mendapatkan data
    })
    .catch((error) => {
      console.error("Error fetching notes:", error);
      hideLoading(); // Memanggil fungsi untuk menyembunyikan indikator loading jika terjadi kesalahan
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

  showLoading(); // Memanggil fungsi untuk menampilkan indikator loading saat proses penambahan catatan

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
      renderNotes(); // Memanggil kembali fungsi renderNotes setelah menambah catatan
      noteTitleInput.value = "";
      noteBodyInput.value = "";
    })
    .catch((error) => {
      console.error("Error adding note:", error);
      hideLoading(); // Memanggil fungsi untuk menyembunyikan indikator loading jika terjadi kesalahan
    });
}

// Event listener untuk menambahkan catatan saat form di-submit
noteForm.addEventListener("submit", addNoteHandler);

// Panggil fungsi untuk menampilkan catatan saat halaman dimuat
renderNotes();
