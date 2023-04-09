FROM python:3.10-bullseye

RUN curl -sL https://deb.nodesource.com/setup_16.x |  bash - && \
    apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
    python3-dev nodejs bluez libffi-dev libssl-dev libjpeg-dev \ 
    zlib1g-dev autoconf build-essential libopenjp2-7 \
    libtiff5 libturbojpeg0-dev tzdata libpcap0.8


RUN useradd -rm homeassistant && \
    mkdir /srv/homeassistant && \
    chown homeassistant:homeassistant /srv/homeassistant && \
    cd /srv/homeassistant && \
    python3 -m pip install wheel && \
    pip3 install homeassistant==2023.4.2



