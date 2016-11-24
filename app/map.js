import $ from 'jquery';
import 'jvectormap-next';
import { View } from 'backbone.marionette';

import './maps/nl-merc';
import template from './templates/map.ejs';

const Map = View.extend({
  template,
  onRender() {

    this.$el.find('#map-widget').vectorMap({
      map: 'nl_merc',
    });
  }
});

export default Map;
