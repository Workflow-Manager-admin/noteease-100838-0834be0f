import React, { useState, useEffect } from 'react';
import './NoteEaseMainContainer.css';

// PUBLIC_INTERFACE
function NoteEaseMainContainer() {
  /**
   * NoteEase Main Container with glassy UI, light/dark theme support,
   * and accessible floating action button.
   */

  // Theme management (light/dark)
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="noteease-glass-container">
      <header className="noteease-header">
        <h1 className="noteease-title">NoteEase</h1>
        <button
          className="noteease-theme-toggle"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <span aria-hidden="true" role="img" title="switch to dark">🌙</span>
          ) : (
            <span aria-hidden="true" role="img" title="switch to light">☀️</span>
          )}
        </button>
      </header>

      <section className="noteease-content">
        <div className="noteease-search" role="search" aria-label="Search notes">
          <input
            type="search"
            placeholder="Search notes..."
            className="noteease-search-input"
            aria-label="Search notes"
          />
        </div>
        {/* Placeholder for categories/tags */}
        <div className="noteease-categories">
          {/* Example: */}
          <span className="noteease-chip">All</span>
          <span className="noteease-chip">Work</span>
          <span className="noteease-chip">Personal</span>
        </div>
        {/* Placeholder for notes list */}
        <div className="noteease-notes-list" aria-label="Notes list">
          <div className="noteease-note-card" tabIndex={0}>
            <h2 className="noteease-note-title">Welcome to NoteEase</h2>
            <p className="noteease-note-snippet">
              This is your simple, beautiful notes app. Click the <strong>+</strong> button to add a note.
            </p>
          </div>
        </div>
      </section>

      <button
        className="noteease-fab"
        aria-label="Add new note"
        tabIndex={0}
      >
        <span aria-hidden="true" style={{fontSize: '2rem'}}>+</span>
      </button>
    </div>
  );
}

export default NoteEaseMainContainer;
