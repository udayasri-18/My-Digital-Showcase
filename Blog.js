import React from 'react';

const Blog = () => {
  return (
    <section>
      <h1>Blog</h1>

      <article>
        <h2>Getting Started with React: A Beginner's Guide</h2>
        <p>
          In this tutorial, we'll walk through the basics of setting up a React 
          application. We'll cover essential concepts like components, props, and 
          state management. By the end, you'll have a solid foundation to start 
          building your own applications.
        </p>
        <p>
          To begin, install Node.js and create a new React app using Create React App. 
          Run the command <code>npx create-react-app my-app</code> in your terminal. 
          This will set up the initial project structure for you.
        </p>
        <p>
          Next, familiarize yourself with the component structure. React components are 
          reusable pieces of code that return a React element. Start by creating a 
          simple component and rendering it in your app.
        </p>
      </article>

      <article>
        <h2>My Journey into Full-Stack Development</h2>
        <p>
          Transitioning into full-stack development has been an exciting journey. 
          Initially, I started with frontend technologies like HTML, CSS, and JavaScript. 
          As I gained confidence, I began exploring backend development with Node.js and 
          Express.js.
        </p>
        <p>
          One of the biggest challenges was learning to connect the frontend with the 
          backend effectively. Building projects that integrated both aspects allowed me 
          to understand the full development cycle better.
        </p>
      </article>
      
    </section>
  );
};

export default Blog;
