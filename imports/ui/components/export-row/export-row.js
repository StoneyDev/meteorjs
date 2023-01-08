import './export-row.html';

Template.Export_row.helpers({
  complete(value) {
    return value === 100;
  },
});
