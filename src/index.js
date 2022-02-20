import React from "react";
import ReactDOM from "react-dom";
import "./firebase";
import "./i18n";
import App from "./App";

import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import createStore from "./redux/createStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import i18n from './i18n';

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const history = createBrowserHistory({ basename: baseUrl });

const { store, persistor } = createStore(history);

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  </I18nextProvider>,
  document.getElementById("root")
);
