import React from 'react';

const TextLineBreaker = ({ text }: { text: string }) => (
  <>
    {text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ))}
  </>
);

export default TextLineBreaker;
