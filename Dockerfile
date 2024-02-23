FROM ubuntu:latest

RUN apt-get update -y \
    && apt-get upgrade -y \
    && apt-get autoremove -y \
    && apt-get install -y software-properties-common \
    && add-apt-repository ppa:git-core/ppa \
    && apt-get update -y

RUN apt-get install -y git \
    && apt install -y curl

RUN apt install -y nodejs npm\
    && npm install n -g \
    && n stable \
    && apt purge -y nodejs npm \
    && apt autoremove -y


ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . /workspace
WORKDIR /workspace

RUN pnpm install turbo @nestjs/cli --global

# FROM base AS prod-deps
# RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile