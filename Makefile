spec_url = http://localhost:8000/api/docs/?format=openapi
SPEC_PATH ?=$$(pwd)/swagger.json

.PHONY: build test

config-help:
	docker run openapitools/openapi-generator-cli config-help -g javascript

startbackend:
	[ -d "small_eod" ] || git clone https://github.com/watchdogpolska/small_eod.git
	cd small_eod; make start;
	cd small_eod; docker-compose exec -T backend bash -c 'wait-for-it localhost:8000'
	sudo chown $$(id -u):$$(id -g) . -R

logsbackend:
	cd small_eod; docker-compose logs

clean:
	rm -r docs src test

download:
	curl -s $(spec_url) > swagger.json

generate:
	docker run --user $$(id -u):$$(id -g) --network host --rm \
	-v $(SPEC_PATH):/openapi.json -v $$(pwd):/out \
	-e JS_POST_PROCESS_FILE="/usr/local/bin/js-beautify -r -f" \
	openapitools/openapi-generator-cli \
	generate \
	--git-user-id "watchdogpolska" \
	--git-repo-id "small-eod-sdk-javascript" \
	--release-note "Github integration demo" \
	-g javascript \
	-i /openapi.json \
	-c /out/config.yml \
	-o /out

undownload:
	rm swagger.json

test:
	docker build -t sdk-javascript .
	docker run sdk-javascript
