import { http, HttpResponse } from 'msw';

// https://medium.com/@leuzga/setting-up-a-react-project-with-vite-and-msw-for-api-mocking-2674469cdbb1
const handlers = [
  // Intercept the request "GET /api/data".
  http.get('/api/data', (req, res, ctx) => {
    return HttpResponse.json({
      data: ['Item 1', 'Item 2', 'Item 3'],
    });
  }),
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
];

export default handlers;
