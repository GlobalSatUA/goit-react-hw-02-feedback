import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
    <ul style={{ listStyle: 'none', padding: 0 }}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total Feedback: {total}</li>
        <li>Positive Feedback Percentage: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Statistics;

