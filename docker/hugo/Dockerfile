FROM alpine:3.4

# Download and install hugo
# ENV HUGO_VERSION 0.36.1
ENV HUGO_VERSION 0.22.1
ENV HUGO_BINARY hugo_${HUGO_VERSION}_Linux-64bit
ENV HUGO_BASE_URL http://localhost:1313

RUN mkdir /usr/local/hugo
ADD https://github.com/spf13/hugo/releases/download/v${HUGO_VERSION}/${HUGO_BINARY}.tar.gz /usr/local/hugo/
RUN tar xzf /usr/local/hugo/${HUGO_BINARY}.tar.gz -C /usr/local/hugo/ \
	&& ln -s /usr/local/hugo/hugo /usr/local/bin/hugo \
	&& rm /usr/local/hugo/${HUGO_BINARY}.tar.gz

# Create working directory
RUN mkdir /usr/share/blog
RUN mkdir /usr/share/blog-dist
WORKDIR /usr/share/blog

# Empty out any existing built files
ONBUILD RUN rm /usr/share/blog-dist/*

# Expose default hugo port
EXPOSE 1313

# Automatically build site
ONBUILD ADD site/ /usr/share/blog
ONBUILD RUN hugo -b ${HUGO_BASE_URL} -d /usr/share/blog-dist --cleanDestinationDir

# By default, serve site
CMD hugo server -b ${HUGO_BASE_URL} --bind=0.0.0.0 -d /usr/share/blog-dist