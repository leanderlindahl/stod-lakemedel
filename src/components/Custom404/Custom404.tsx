import React from 'react';
import { useRouteError } from 'react-router-dom';

const Custom404: React.FC = () => {
  const error: unknown = useRouteError();
  return (
    <div id="error-page" className="flex flex-col items-center content-center w-full">
      <h1>Hoppsan!</h1>
      <p>Vi ber om ursäkt, ett oväntat fel har inträffat.</p>
      <p>
        <i>{(error as { statusText: string })?.statusText || (error as { message: string }).message}</i>
      </p>
    </div>
  );
};

export default Custom404;
