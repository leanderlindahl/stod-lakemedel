import React from 'react';

const Custom404: React.FC = (props) => {
  return (
    <>
      <div>Hej from Custom404 </div>
      <code>{JSON.stringify(props)}</code>
    </>
  );
};

export default Custom404;
