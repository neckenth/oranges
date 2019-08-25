# oranges
Node app to consume MBTA API and show active _new_ orange line trains

## requirements
* built with Node version 10.16.3
    * if you already have [Node Version Manager](https://github.com/nvm-sh/nvm) installed, run `nvm use` prior to beginning development
    * otherwise install nvm, then run: `nvm i`

## runtime instructions

### development
1. `npm install`
2. optional: request API key from the [MBTA v3 API](https://api-v3.mbta.com/docs/swagger/index.html) and add it as `API_KEY` in a _.env_ file at project root
    * alternatively, in _/server/index.js_ comment out `config` definition in _/api/oranges_ route and remove `config` arg from axios request
3. `npm run start-dev`
