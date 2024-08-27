import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { screen, render } from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter } from 'react-router-dom';

describe('Home page component test', () => {
  const server = setupServer(
    http.get('/api/menu', () => {
      return HttpResponse.json({
        menuItems: [
          { label: 'Krossning', link: 'krossning' },
          { label: 'Spädning', link: '/spadning' },
          { label: 'Byta ut läkemedel', link: '/byta-ut' },
          { label: 'Ögondropp', link: '/ogondropp' },
          { label: 'Nedsatt njurfunktion', link: '/nedsatt-njurfunktion' },
        ],
      });
    }),
  );

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it('should render the title', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(await screen.findByText('Stöd vid hantering av läkemedel')).toBeVisible();
    expect(() => screen.getByText('This text is not there')).toThrow();
  });

  it('should render the buttons', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(await screen.findByText('Krossning')).toBeVisible();
    expect(await screen.findByText('Spädning')).toBeVisible();
    expect(() => screen.getByText('This text is not there')).toThrow();
  });
});
