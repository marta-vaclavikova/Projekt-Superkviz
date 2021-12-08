import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Intro from './components/Intro';
import Quiz from './components/Quiz';
import QuizList from './components/QuizList';
import Topscore from './components/Topscore';
import './style.css';

const App = () => (
  <BrowserRouter>
  <Header/>
  <main className="main">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/kvizy" element={<QuizList />} />
          <Route path="/kviz/:id" element={<Quiz />} />
          <Route path="/zebricek" element={<Topscore />} />
        </Routes>
      </main>
  <Footer />
  </BrowserRouter>
);

render(<App />, document.querySelector('#app'));
