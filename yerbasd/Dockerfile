FROM --platform=linux/amd64 ubuntu:20.04

RUN apt-get update && apt-get install -y --no-install-recommends \
  wget ca-certificates \
  && apt-get clean

RUN mkdir /ghjk && cd /ghjk \
  && wget https://github.com/The-Yerbas-Endeavor/yerbas/releases/download/v2.1.1.4/yerbas_v2.1.1.4_ubuntu20_64.tar.gz \
  && tar -xvof yerbas_1.2.15.3_ubuntu20_64.tar.gz \
  && mv yerbasd /usr/local/bin \
  && mv yerbas-cli /usr/local/bin \
  && rm -rf /ghjk

WORKDIR /app

COPY app .
ENTRYPOINT [ "/app/entrypoint.sh" ]
