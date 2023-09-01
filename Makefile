build:
	docker compose -f docker.yml up --build -d --remove-orphans

bring-up:
	docker compose -f docker.yml up -d

bring-dn:
	docker compose -f docker.yml down

bring-dv:
	docker compose -f docker.yml down -v

show-logs-genera:
	docker compose -f docker.yml logs

show-logs-client:
	docker compose -f docker.yml logs client

show-logs-server:
	docker compose -f docker.yml logs server

show-user:
	docker run --rm mongilobetainvoice whoami

show-volume:
	docker volume inspect mongilobetainvoice_mongodb-data