import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [component, setComponent] = useState('book');

  const renderComponent = () => {
    switch (component) {
      case 'book': return <BookDetails />;
      case 'blog': return <BlogDetails />;
      case 'course': return <CourseDetails />;
      default: return <div>Select a component</div>;
    }
  };

  return (
    <div>
      <h1>Blogger App</h1>
      <button onClick={() => setComponent('book')}>Book</button>
      <button onClick={() => setComponent('blog')}>Blog</button>
      <button onClick={() => setComponent('course')}>Course</button>
      {renderComponent()}
    </div>
  );
}

export default App;