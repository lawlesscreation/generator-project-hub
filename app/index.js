'use strict';
//var util = require('util');
//var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ProjectHubGenerator = yeoman.generators.Base.extend({

  askFor: function() {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // short and sweet description of your generator
    this.log(chalk.magenta('Generate a project hub, to be used for consolidating all key project deliverables in reverse chronological order.'));

    // Format date
    var formatDate = new Date(),
        date = formatDate.getDate(),
        month = 'January,February,March,April,May,June,July,August,September,October,November,December'.split(',')[formatDate.getMonth()];

    function nth(d) {
      if (d > 3 && d < 21) {
        return 'th';
      }
      switch (d % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    }

    this.prompt([
      {
        name: 'clientName',
        message: 'What\'s the client name for this project hub?',
        default: 'Magic Beans'
      }, {
        name: 'firstDeliverable',
        message: 'Finally, what is/was the first deliverable?',
        default: 'Proposal'
      }
    ], function(props) {
      this.clientName = props.clientName;
      this.firstDeliverable = props.firstDeliverable;
      this.firstDeliverableLowerCase = props.firstDeliverable.toLowerCase();
      this.todaysDate = month + ' ' + date + nth(date) + ', ' + formatDate.getFullYear();

      done();
    }.bind(this));
  },
  projectfiles: function() {
    // copy filed and rename where necessary
    this.copy('csslintrc', '.csslintrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');

    this.directory('css', 'css', true);

    this.mkdir('deliverables/01-' + this.firstDeliverableLowerCase.replace(/ /g,'-').replace(/[^\w-]+/g,''));

    this.template('index.html', 'index.html');
  }
});

module.exports = ProjectHubGenerator;