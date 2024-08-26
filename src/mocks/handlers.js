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
        { label: 'Spädning', link: '/spadning' },
        { label: 'Byta ut läkemedel', link: '/byta-ut' },
        { label: 'Ögondropp', link: '/ogondropp' },
        { label: 'Nedsatt njurfunktion', link: '/nedsatt-njurfunktion' },
      ],
    });
  }),
];

export default handlers;

/* 
{ label: 'Home', link: '/' },
{ label: 'Krossning', link: '/about' },
 { label: 'Settings', link: '/settings' },
*/
