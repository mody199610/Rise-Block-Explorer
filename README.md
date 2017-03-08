# Rise Blockchain Explorer

Rise Explorer version 1.1.0 works in conjunction with the Rise Core API. It uses Redis for caching data and Freegeoip to parse IP geo-location data.

## Prerequisites

These programs and resources are required to install and run Lisk Explorer

- Nodejs v6.9.2 or higher (<https://nodejs.org/>) -- Nodejs serves as the underlying engine for code execution.

  ```
  curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

- Redis (<http://redis.io>) -- Redis is used for caching parsed exchange data.

  `sudo apt-get install -y redis-server`

- Freegeoip (<https://github.com/fiorix/freegeoip>) -- Freegeoip is used by the Network Monitor for IP address geo-location.

  ```
  wget https://github.com/fiorix/freegeoip/releases/download/v3.1.5/freegeoip-3.1.5-linux-amd64.tar.gz
  tar -zxf freegeoip-3.1.5-linux-amd64.tar.gz
  ln -s freegeoip-3.1.5-linux-amd64 freegeoip
  nohup ./freegeoip/freegeoip > ./freegeoip/freegeoip.log 2>&1 &
  ```

- Bower (<http://bower.io/>) -- Bower helps to install required JavaScript dependencies.

  `sudo npm install -g bower`

- Grunt.js (<http://gruntjs.com/>) -- Grunt is used to compile the frontend code and serves other functions.

  `sudo npm install -g grunt`

- Forever (<https://github.com/foreverjs/forever>) -- Forever manages the node processes for Lisk Explorer

  `sudo npm install -g forever`

- Git (<https://github.com/git/git>) -- Used for cloning and updating Lisk Explorer

  `sudo apt-get install -y git`

- Tool chain components -- Used for compiling dependencies

  `sudo apt-get install -y python build-essential automake autoconf libtool`

## Installation Steps

Clone the Rise Explorer Repository:

```
git clone https://github.com/mody199610/Rise-Block-Explorer.git
cd Rise-Block-Explorer
npm install
bower install
```

## Build Steps

#### Frontend
 The frontend must be built with Grunt before starting Rise Explorer. Run the following command to compile the frontend components:

`grunt compile`

#### Market Watcher
 Candlestick data needs to be initialized prior to starting Rise Explorer. During runtime candlestick data is updated automatically.

To build candlestick data for each exchange run:

`grunt candles:build`

To update candlestick data manually run after initialization:

`grunt candles:update`

## Configuration

The default `config.js` file contains all of the configuration settings for Rise Explorer. These options can be modified according to comments included in configuration file.

#### Top Accounts

To enable Top Accounts functionality, edit your Lisk Client config.json _(not the explorer)_:

```
{
    "port": 8000,
    "address": "0.0.0.0",
    "version": "0.5.0",
    "minVersion": "~0.5.0",
    "fileLogLevel": "info",
    "logFileName": "logs/lisk.log",
    "consoleLogLevel": "info",
    "trustProxy": false,
    "topAccounts": false, <--- This line needs to be changed to read true
```

## Managing Rise Explorer

To test that Rise Explorer is configured correctly, run the following command:

`node app.js`

Open: <http://localhost:6040>, or if its running on a remote system, switch `localhost` for the external IP Address of the machine.

Once the process is verified as running correctly, `CTRL+C` and start the process with `forever`. This will fork the process into the background and automatically recover the process if it fails.

`forever start app.js`

After the process is started its runtime status and log location can be found by issuing this statement:

`forever list`

To stop Explorer after it has been started with `forever`, issue the following command:

`forever stop app.js`

## Enabling Top Accounts on Old Nodes
To Enable Top Accounts on Older Nodes of Rise , You need to start it with this command on your nodes:

`forever start app.js TOP=true`

To Disable Top Accounts on Older Nodes of Rise, You need to stop it with this command on your nodes:

`forever start app.js`

## License

The MIT License (MIT)

Copyright (c) 2016-2017 Rise<br>
Copyright (c) 2016-2017 Lisk<br>
Copyright (c) 2015 Crypti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
