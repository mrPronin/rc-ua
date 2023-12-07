# API SERVER

The main application server for servicing requests from the User web-app

## HOW TO RUN DEV

### BUILD DOCKER IMAGE

From `api-server` folder run next command

```bash
docker build \
	-t rc-api-server-dev \
	.
```

### RUN DOCKER IMAGE

```bash
docker run \
	-it \
	-e PORT="8000" \
	-p 8000:8000 \
	rc-api-server-dev
```

### ACCESS API

```
http://localhost:8000/graphql
```
