# Dockerfile

FROM python:3.11.7-slim-bullseye

# patch it with the most recent security updates and bug fixes
RUN apt-get update && \
    apt-get upgrade --yes

# install poetry with pip as root
# ENV POETRY_HOME=/opt/poetry
# ENV POETRY_VERSION=1.7.1
# RUN python3 -m venv $POETRY_HOME \
#     && $POETRY_HOME/bin/pip install poetry==$POETRY_VERSION

# Extend the PATH variable to include the Poetry installation
# ENV PATH="$POETRY_HOME/bin:$PATH"

# switch to a regular user without administrative privileges
RUN useradd --create-home app
USER app
WORKDIR /home/app

# upgrade pip before trying to install your project dependencies
RUN python -m pip install --upgrade pip setuptools

# Install poetry for the app user
ENV POETRY_HOME=/home/app/.poetry
ENV POETRY_VERSION=1.7.1
RUN python3 -m venv $POETRY_HOME \
    && $POETRY_HOME/bin/pip install poetry==$POETRY_VERSION

# Ensure the app user's shell environment includes Poetry
ENV PATH="$POETRY_HOME/bin:$PATH"

ENV POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_IN_PROJECT=1 \
    POETRY_VIRTUALENVS_CREATE=1 \
    POETRY_CACHE_DIR=/home/app/.cache/pypoetry

# setting up a dedicated virtual environment for project
# ENV VIRTUALENV=/home/app/venv
# RUN python3 -m venv $VIRTUALENV
# ENV PATH="$VIRTUALENV/bin:$PATH"

# copy project metadata
COPY --chown=app pyproject.toml poetry.lock ./

# install project dependencies without caching
RUN poetry install --no-cache --no-root && rm -rf $POETRY_CACHE_DIR

# copy source code
COPY --chown=app src/ src/

CMD ["poetry", "run", "uvicorn", "api.app:app"]