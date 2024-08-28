import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ItemList from '../ItemList';
import { Params } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useParams: (): Readonly<Params<string>> => ({ type: 'krossning' }),
  };
});

describe('ItemDetail', async () => {
  const server = setupServer(
    http.get('/api/krossning', () => {
      return HttpResponse.json({
        items: [
          { id: '1', label: 'Abakavir', description: 'Filmdragerad tablett - Ziagen', link: '' },
          { id: '2', label: 'Abakavir', description: 'Oral lösning - Ziagen', link: '' },
          { id: '3', label: 'Abirateronacetat', description: 'Filmdragerad tablett - ZYTIGA', link: '/spadning' },
          { id: '4', label: 'Abirateronacetat', description: 'Tablett - Diamox', link: '' },
          { id: '5', label: 'Aciklovir', description: 'Tablett - Zovirax', link: '' },
          { id: '6', label: 'Allupurinol ', description: 'Tablett - Zyloric', link: '' },
        ],
      });
    }),
  );

  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
    vi.resetAllMocks();
  });

  it('should render the item detail from param', async () => {
    render(
      <BrowserRouter>
        <ItemList />
      </BrowserRouter>,
    );
    await screen.findAllByText('Abakavir');
    expect(() => screen.getByText('This text is not there')).toThrow();
  });
});
