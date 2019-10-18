# README

- Ruby version
  2.6.5

- System dependencies
  Install a ruby version manager: https://github.com/rbenv/rbenv or `asdf`
  Use it to install Ruby 2.6.5 `rbenv install 2.6.5`

  You will need node 10 or above, probably. You may want to use a node version manager like `nvm` or `asdf`
  Install node using `nvm` `asdf`, or any other package manager

  Install postgres, the quickest way on a Mac is: `brew install postgres`

- Configuration

* `gem install bundler`
* `bundle install`

- Database creation

  `rake db:create`

- Running the app
  `rails s`

  visit http://localhost:3000

- Linting
  `rubocop`
  `yarn lint`

- How to run the test suite
  `rspec`
  `yarn test`

- Deployment instructions
