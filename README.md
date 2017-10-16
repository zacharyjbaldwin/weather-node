# weather-node

A command line tool used to fetch temperature data from any given location. This tool uses the Google Maps API and the DarkSky Weather API, meaning it requires an internet connection to function properly.

## Installation & Usage

```bash
$ git clone https://www.github.com/zacharyjbaldwin/weather-node.git
$ cd weather-node
$ npm install
$ npm install -g
```

Once you download and install the application, you can now go to the terminal and type ```weather -a "[your address]"```.

```bash
$ weather --address "Central Intelligence Agency"
> The current temperature is 62.36 but it feels like 62.36
```

## For Developers

To add your own functions and/or features, follow the same steps aforementioned in the "Installation & Usage" header, modify the code, and then use ```node app.js [arguments]``` to test the application.

## License
MIT License
