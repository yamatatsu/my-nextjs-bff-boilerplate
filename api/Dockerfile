FROM ruby:2.4
ENV LANG C.UTF-8

RUN apt-get update -qq && apt-get install -y build-essential mysql-client nodejs
RUN gem install bundler

ENV APP_HOME /myapp
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME
ADD . $APP_HOME

RUN bundle install
