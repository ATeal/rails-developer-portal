FROM ruby:2.4.5

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get update -qq && apt-get install -y build-essential nodejs
RUN curl -o- -L https://yarnpkg.com/install.sh | bash

RUN mkdir /app
WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock
RUN bundle

COPY package.json /app/package.json
COPY yarn.lock /app/yarn.lock
# run yarn

ADD . /app
