import React from 'react';
import { createRoot } from 'react-dom/client';
import Pet from './Pet';

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Bean" animal="Cat" breed="Bombay" />
    <Pet name="CatKit" animal="Cat" breed="Tabby" />
    <Pet name="Lily" animal="Cat" breed="Domestic Mixed Breed Shorthair" />
  </div>;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
