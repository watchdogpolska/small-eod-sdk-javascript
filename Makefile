SPEC_PATH ?=${PWD}/swagger.json

.PHONY: generate build test

config-help:
	docker run openapitools/openapi-generator-cli config-help -g javascript

startbackend:
	[ ! -d "small_eod" ] || git clone https://github.com/watchdogpolska/small_eod.git /tmp/small_eod_for_sdk
	make -C /tmp/small_eod_for_sdk wait_minio

logsbackend:
	cd /tmp/small_eod_for_sdk; docker-compose logs

clean:
	rm -r docs src test

download:
	cd /tmp/small_eod_for_sdk; docker-compose run -T --rm backend python manage.py generate_swagger --format json | jq '.' > $(SPEC_PATH)

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

build:
	npm install
	npm run build

undownload:
	rm swagger.json

test:
	npm run test
