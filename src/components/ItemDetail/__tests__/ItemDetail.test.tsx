import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { Params } from 'react-router-dom';

vi.mock('react-router-dom', async () => {
  const mod = await vi.importActual('react-router-dom');
  return {
    ...mod,
    useParams: (): Readonly<Params<string>> => ({ itemId: '123' }),
  };
});

describe('ItemDetail', () => {
  it('should render the item detail from param', async () => {
    render(
      <BrowserRouter>
        <ItemDetail />
      </BrowserRouter>,
    );
    screen.logTestingPlaygroundURL();

    expect(await screen.findByText('ItemDetail 123')).toBeVisible();
  });
});
