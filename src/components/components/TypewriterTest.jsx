import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterTest = () => {
  return (
    <div className="p-4">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello, World!")
            .pauseFor(1000)
            .deleteAll()
            .typeString("Testing Typewriter Effect!")
            .start();
        }}
      />
    </div>
  );
};

export default TypewriterTest;
