import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Sidebar Page</h1>
      <ul>
        <li className="mb-2">Item 1</li>
        <li className="mb-2">Item 2</li>
        <li className="mb-2">Item 3</li>
      </ul>
      <Link to="/navbar" className="mt-4 inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded">
        Back to Home
      </Link>
    </div>
  );
};

export default Sidebar;
