class LoadingSpinner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-left-color: #7983ff;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      </style>
      <div class="spinner"></div>
    `;
  }
}

customElements.define("loading-spinner", LoadingSpinner);
