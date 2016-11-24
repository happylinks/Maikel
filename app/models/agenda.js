import { Model } from 'backbone';

const Agenda = Model.extend({
  url: 'http://www.nemokennislink.nl/api/activiteiten.json?sleutel=n7eq00tcpu',
});
export default Agenda;
