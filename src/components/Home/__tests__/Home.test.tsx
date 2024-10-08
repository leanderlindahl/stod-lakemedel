import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { screen, render, fireEvent } from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter, useNavigate } from 'react-router-dom';

const mockedNavigator = vi.fn();
vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useNavigate: () => mockedNavigator,
  };
});

describe('Home page component test', () => {
  const server = setupServer(
    http.get('/api/menu', () => {
      return HttpResponse.json({
        menuItems: [
          { label: 'Krossning', link: 'krossning' },
          { label: 'Spädning', link: 'spadning' },
          { label: 'Byta ut läkemedel', link: 'byta-ut' },
          { label: 'Ögondropp', link: 'ogondropp' },
          { label: 'Nedsatt njurfunktion', link: 'nedsatt-njurfunktion' },
        ],
      });
    }),
  );

  beforeEach(() => {
    vi.resetAllMocks();
  });
  afterEach(() => {});

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
    vi.resetAllMocks();
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

  it('should navigate when button is clicked', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(await screen.findByText(/krossning/i)).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: /krossning/i }));
    expect(mockedNavigator).toHaveBeenCalledTimes(1);
    expect(mockedNavigator).toHaveBeenCalledWith('/item-list/krossning');
  });
});
