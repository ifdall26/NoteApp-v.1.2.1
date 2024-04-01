/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script/app-footer.js":
/*!******************************!*\
  !*** ./script/app-footer.js ***!
  \******************************/
/***/ (() => {

eval("class AppFooter extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n    this.shadowRoot.innerHTML = `\n        <style>\n          footer {\n            background-color: #171717;\n            color: #fff;\n            padding: 10px 20px;\n            text-align: center;\n            position : fixed;\n            width : 100%;\n            height : 50px;\n            bottom : 0;\n            box-shadow : 0px -5px 10px 5px rgba(255, 255, 255, .3);\n            z-index: 1000;\n          }\n          \n          p {\n            margin: 0;\n            line-height : 50px;\n          }\n        </style>\n        <footer>\n          <p>&copy; 2024,  Ifdal lisyukri</p>\n        </footer>\n      `;\n  }\n}\n\ncustomElements.define(\"app-footer\", AppFooter);\n\n\n//# sourceURL=webpack://noteapp_v.1.2.1/./script/app-footer.js?");

/***/ }),

/***/ "./script/app-header.js":
/*!******************************!*\
  !*** ./script/app-header.js ***!
  \******************************/
/***/ (() => {

eval("class AppHeader extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n    this.shadowRoot.innerHTML = `\n        <style>\n          header {\n            background-color: #171717;\n            color: #fff;\n            padding: 10px 20px;\n            text-align: center;\n            position : fixed;\n            width : 100%;\n            height : 50px;\n            top : 0;\n            box-shadow : 0px 5px 10px 5px rgba(255, 255, 255, .3);\n            z-index: 1000;\n          }\n          \n          h1 {\n            margin: 0;\n            line-height : 50px;\n          }\n        </style>\n        <header>\n          <h1><slot></slot></h1>\n        </header>\n      `;\n  }\n}\n\ncustomElements.define(\"app-header\", AppHeader);\n\n\n//# sourceURL=webpack://noteapp_v.1.2.1/./script/app-header.js?");

/***/ }),

/***/ "./script/note-item.js":
/*!*****************************!*\
  !*** ./script/note-item.js ***!
  \*****************************/
/***/ (() => {

eval("// note-item.js\n\nclass NoteItem extends HTMLElement {\n  constructor() {\n    super();\n    this.attachShadow({ mode: \"open\" });\n    this.shadowRoot.innerHTML = `\n      <style>\n        .note {\n          background-color: #EDEDED;\n          border: 1px solid #ddd;\n          border-radius: 5px;\n          padding: 10px;\n          margin-bottom: 20px;\n          overflow-wrap: break-word;\n          position: relative;\n          z-index : 1;\n        }\n\n        .note:hover {\n          box-shadow: 0px -2px 3px 1px rgba(234, 234, 234, 0.5),\n            0px -4px 6px 3px rgba(234, 234, 234, 0.5),\n            0px -6px 9px 5px rgba(234, 234, 234, 0.5);\n        }\n\n        .note h2 {\n          margin-top: 0;\n          color: #da0037;\n        }\n\n        .note p {\n          margin-bottom: 0;\n        }\n\n        .delete-button {\n          position: absolute;\n          top: 5px;\n          right: 5px;\n          background-color: transparent;\n          border: none;\n          color: #da0037;\n          cursor: pointer;\n          font-size: 18px;\n        }\n      </style>\n      <div class=\"note\">\n        <button class=\"delete-button\">&times;</button>\n        <h2><slot name=\"title\"></slot></h2>\n        <p><slot name=\"body\"></slot></p>\n      </div>\n    `;\n\n    this.deleteButton = this.shadowRoot.querySelector(\".delete-button\");\n    this.deleteButton.addEventListener(\"click\", () => {\n      const noteId = this.getAttribute(\"note-id\");\n      this.dispatchEvent(\n        new CustomEvent(\"delete\", { bubbles: true, detail: { noteId } })\n      );\n    });\n  }\n}\n\ncustomElements.define(\"note-item\", NoteItem);\n\n\n//# sourceURL=webpack://noteapp_v.1.2.1/./script/note-item.js?");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-footer.js */ \"./script/app-footer.js\");\n/* harmony import */ var _app_footer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_footer_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-header.js */ \"./script/app-header.js\");\n/* harmony import */ var _app_header_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_header_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _note_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./note-item.js */ \"./script/note-item.js\");\n/* harmony import */ var _note_item_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_note_item_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst noteList = document.getElementById(\"noteList\");\nconst noteForm = document.getElementById(\"noteForm\");\nconst noteTitleInput = document.getElementById(\"noteTitle\");\nconst noteBodyInput = document.getElementById(\"noteBody\");\n\n// Fungsi untuk menampilkan catatan dari API\nfunction renderNotes() {\n  // Membersihkan terlebih dahulu elemen noteList\n  noteList.innerHTML = \"\";\n\n  fetch(\"https://notes-api.dicoding.dev/v2/notes\")\n    .then((response) => response.json())\n    .then((data) => {\n      data.data.forEach((note) => {\n        const noteItem = document.createElement(\"note-item\");\n        noteItem.setAttribute(\"note-id\", note.id);\n        noteItem.innerHTML = `\n          <h2 slot=\"title\">${note.title}</h2>\n          <p slot=\"body\">${note.body}</p>\n        `;\n        noteList.appendChild(noteItem);\n      });\n    })\n    .catch((error) => {\n      console.error(\"Error fetching notes:\", error);\n    });\n}\n\n// Fungsi untuk menambahkan catatan\nfunction addNoteHandler(event) {\n  event.preventDefault();\n  const title = noteTitleInput.value;\n  const body = noteBodyInput.value;\n\n  if (!title || !body) {\n    alert(\"Please fill in both title and body fields.\");\n    return;\n  }\n\n  const newNote = {\n    title,\n    body,\n  };\n\n  fetch(\"https://notes-api.dicoding.dev/v2/notes\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n    },\n    body: JSON.stringify(newNote),\n  })\n    .then((response) => response.json())\n    .then((data) => {\n      console.log(data);\n      renderNotes(); // Memanggil kembali fungsi renderNotes setelah menambah catatan\n      noteTitleInput.value = \"\";\n      noteBodyInput.value = \"\";\n    })\n    .catch((error) => {\n      console.error(\"Error adding note:\", error);\n    });\n}\n\n// Fungsi untuk menghapus catatan\nfunction deleteNoteHandler(noteId) {\n  fetch(`https://notes-api.dicoding.dev/v2/notes/${noteId}`, {\n    method: \"DELETE\",\n  })\n    .then((response) => {\n      if (!response.ok) {\n        throw new Error(\"Failed to delete note\");\n      }\n      return response.json();\n    })\n    .then((data) => {\n      console.log(data); // Menambahkan log untuk memeriksa respon dari server\n      renderNotes(); // Memanggil kembali fungsi renderNotes setelah menghapus catatan\n    })\n    .catch((error) => {\n      console.error(\"Error deleting note:\", error);\n    });\n}\n\n// Event listener untuk menambahkan catatan saat form di-submit\nnoteForm.addEventListener(\"submit\", addNoteHandler);\n\n// Event listener untuk menangani penghapusan catatan\nnoteList.addEventListener(\"delete\", (event) => {\n  const noteId = event.detail.noteId;\n  console.log(\"Deleting note with ID:\", noteId); // Menambahkan log untuk memeriksa nilai noteId\n  deleteNoteHandler(noteId);\n});\n\n// Panggil fungsi untuk menampilkan catatan saat halaman dimuat\nrenderNotes();\n\n\n//# sourceURL=webpack://noteapp_v.1.2.1/./script/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script/script.js");
/******/ 	
/******/ })()
;