# Contributing

The documentation is compiled from Markdown to HTML using [Hugo]().

To build and use the documentation locally, you will need the following:

* Git
* Docker (>= v1.10.0)

First clone the repository

```bash
$ git clone https://github.com/designmynight/designmynight-developers
```

Now, launch the Docker container.

```bash
$ docker-compose up
```

Go to http://localhost:1313 to see the documentation. Live reloading is enabled, so any changes will appear as soon as you save a file.

If you just want to build the docs without serving them, you can run this command:

```bash
$ docker-compose run hugo hugo
```

The compiled documentations will be outputted to the `/dist` directory.