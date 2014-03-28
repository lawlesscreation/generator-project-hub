# generator-project-hub

> [Yeoman](http://yeoman.io) generator for creating project hubs.


## What is a project hub and why would I use one?
A project hub is a tool for keeping track of the progress of a design and/or development project. The hub lives online (either publically available or password protected), so that everyone involved in the team has access to it.

The benefits of using a project hub:
 - Serves as a centralized place for the project's **key** design/development materials;
 - Easily and visually view project progress;
 - Keep clients and team members up to speed with design progress;
 - Lives at a URL that doesn't change;
 - Eliminates the *noise* that sites like Basecamp can generate.

Read more about [project hubs on 24 Ways.](http://24ways.org/2013/project-hubs/)


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-project-hub from npm, run:

```
$ npm install -g generator-project-hub
```

Finally, generate the project hub:

```
$ mkdir client-project-hub && cd $_
# => Create a folder for your new project hub and cd into it`

$ yo project-hub
# => Answer some questions and you're done!`
```