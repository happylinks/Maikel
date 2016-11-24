import { View } from 'backbone.marionette';

import template from './templates/app.ejs';
import Map from './map';

const App = View.extend({
  el: '#app',
  template,
  onRender() {
    const map = new Map();
    this.$el.find('#map').html(map.render().el);
  }
});

export default App;
