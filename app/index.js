import 'jvectormap-next/jquery-jvectormap.css';
import './styles/app.css';

import App from './app';
import Agenda from './models/agenda';

$(function() {
  const app = new App();
  app.render();

  const model = new Agenda();
  model.fetch();
});
