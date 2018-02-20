# DesignMyNight Developer Documentation

[![Build Status](https://travis-ci.org/designmynight/designmynight-developers.svg?branch=master)](https://travis-ci.org/designmynight/designmynight-developers)

## Contributing

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

`dist/` is .gitignore'd, so you won't be able to manually deploy by mistake.

### What is `make` doing?

**`docker-compose run hugo hugo`**

Runs the hugo container, and specifies that the hugo command should be run (instead of hugo server). This builds the docs and outputs them to /dist.

**`docker-compose run assets npm run build`**

Runs the assets container which will install javascript dependencies and run gulp build task. Assets will be outputted inside the /dist directory.

## Deployment

To deploy your changes, merge them into the master branch.

When changes are merged to master, Travis will run the deploy part of the .travis.yml config file. This will:

* Clone the repository and checkout the master branch
* Run `make`
* Remove the .gitignore from `/dist` (so that we can commit the contents)
* Creates a CNAME file using the FQDN specified in the Travis config
* Commits the contents of `/dist` into the gh-pages branch*

\* Using the gh-pages branch means that Travis will never commit to master, so we don't have to worry about conflicts or overwritten data.

Once built, your changes will be live at [http://developers.designmynight.com](http://developers.designmynight.com)
