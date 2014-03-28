'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var ProjectHubGenerator = yeoman.generators.Base.extend({

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // short and sweet description of your generator
    this.log(chalk.magenta('Generate a project hub, to be used for consolidating all key project deliverables in reverse chronological order.'));

    this.prompt([{
      name: 'clientName',
      message: 'What\'s the client name for this project hub?'
    }, {
      name: 'copyrightAuthor',
      message: 'Who\'s the copyright author for this project hub?'
    }], function (props) {
      this.clientName = props.clientName;
      this.copyrightAuthor = props.copyrightAuthor;

      done();
    }.bind(this));
  },

  projectfiles: function () {
    // copy filed and rename where necessary
    this.copy('csslintrc', '.csslintrc');
    this.copy('editorconfig', '.editorconfig');
    this.copy('gitignore', '.gitignore');
    this.copy('jscsrc', '.jscsrc');
    this.copy('jshintrc', '.jshintrc');

    this.directory('css', 'css', true);
    this.directory('img', 'img', true);
    this.directory('js', 'js', true);

    this.mkdir('deliverables');

    this.template('index.html', 'index.html');
  }
});

module.exports = ProjectHubGenerator;