import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { DEFAULT_LOCALE, translationMessages } from '../i18n';
import { asyncComponent } from '../shared/utils/asyncComponent';
import { AppComponent as App } from './app.component';
import { ROUTES } from './app.constants';
//<-- IMPORT ROUTE -->

// @ts-ignore
const Explore = asyncComponent(() => import('./explore'), 'Explore');

export default () => {
  return (
    <Switch>
      <App>
        <Switch>
          {/* <Route exact path={ROUTES.home}>
            <Home />
          </Route> */}

          <Route exact path={ROUTES.home}>
            <Explore />
          </Route>
          {/* <-- INJECT ROUTE --> */}

          {/* <Route>
            <NotFound />
          </Route> */}
        </Switch>
      </App>

      <IntlProvider locale={DEFAULT_LOCALE} messages={translationMessages[DEFAULT_LOCALE]}>
        <Route>{/* <NotFound /> */}</Route>
      </IntlProvider>
    </Switch>
  );
};
