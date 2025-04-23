import React from 'react';

export default function Section() {
  return (
    <div className="section-container">
      <div className="section-content">
       <h2>Learn with Effective ClassRoom Based Traning For Real World Success</h2>
      </div>

      {/* Right Slider */}
      <div className="section-slider">
        <div className="card">React Basics</div>
        <div className="card">Advanced JavaScript</div>
        <div className="card">UI/UX Design</div>
        <div className="card">Data Structures</div>
        <div className="card">Python for Beginners</div>
      </div>
    </div>
  );
}
