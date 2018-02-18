# Contributing

The documentation is compiled from Markdown to HTML using [Hugo](https://gohugo.io).

## Running Locally

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

If you just want to build the docs and assets without serving them, you can use the make file:

```bash
$ make
```

The compiled documentations and assets will be outputted to the `/dist` directory.

## Deploying

To deploy your changes, open a PR on the master branch.

Once merged, Travis will build the documentation and push to the `gh-pages` branch. From there, your changes will be live on [](https://developers.designmynight.com)