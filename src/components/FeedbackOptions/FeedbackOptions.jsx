import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
          style={{
            padding: '10px 20px',
            margin: '5px',
            cursor: 'pointer',
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
