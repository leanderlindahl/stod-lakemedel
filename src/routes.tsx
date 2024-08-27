import { Router, Switch, Route } from 'outer';

import Home from './components/Home';
import Settings from './components/Settings';
import Custom404 from './Pages/Custom404';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/account/settings" component={Settings} />
        {/* many more lines like this ... */}

        <Route path="/" component={Home} />

        <Route>
          <Custom404 />
        </Route>
      </Switch>
    </Router>
  );
}
