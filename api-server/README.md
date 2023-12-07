# API SERVER

The main application server for servicing requests from the User web-app

## HOW TO RUN

### BUILD DEV DOCKER IMAGE

From `api-server` folder run next command

```bash
docker build \
	-t rc-api-server-dev \
	.
```

### RUN DEV DOCKER IMAGE

```bash
docker run \
	-it \
	-e HOST="0.0.0.0" \
	-e PORT="8000" \
	-p 8000:8000 \
	rc-api-server-dev
```
