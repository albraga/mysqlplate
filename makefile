help:
	@echo -B --always-make
	@echo mkfirst
	@echo mkdocs

first: 
	rm -rfv .git
	git init
	git add --all
	git commit -m "make this the first and the only commit"
	git remote add origin https://github.com/albraga/mysqlplate.git
	git push -u --force origin master

start:
	docker run --name mdb -e MYSQL_ROOT_PASSWORD=example -p 3306:3306 -d mariadb:latest

docker-stop:
	docker stop $$(docker ps -a -q)

docker-rm:
	docker rm $$(docker ps -a -q)

docker-rmi:
	docker rmi hello-world