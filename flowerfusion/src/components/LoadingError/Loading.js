import React from 'react';

export const Loading = () => {
  return (
    <div className="d-flex justify-center">
      <div className="spinner-border text-teal-500 w-10 h-10" role="status">
        <span className="sr-only"> Loading...</span>
      </div>
    </div>
  );
};
export default Loading;
