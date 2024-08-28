import React from 'react';
import { Button, Banner } from 'flowbite-react';
import { useRouteError, useNavigate } from 'react-router-dom';
import PageLayout from '../PageLayout';

const Custom404: React.FC = () => {
  const navigate = useNavigate();
  const error: unknown = useRouteError();
  return (
    <PageLayout>
      <div id="error-page" className="flex flex-col items-center content-center w-full">
        <Banner>
          <h1>Hoppsan!</h1>
          <p>Vi ber om ursäkt, ett oväntat fel har inträffat.</p>
          <Button onClick={() => navigate(-1)} color="dark" size="lg">
            Tillbaka
          </Button>
          <p>
            <i>{(error as { statusText: string })?.statusText || (error as { message: string }).message}</i>
          </p>
        </Banner>
      </div>
    </PageLayout>
  );
};

export default Custom404;
