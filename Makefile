default: build

build:
	docker-compose run hugo hugo
	docker-compose run assets npm run build