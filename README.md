# Weather-App

> This is a Weather App built with JavaScript &amp; Webpack. It features the use of Asynchronous Javascript & ES6 usage. I used the Open Weather API to consume the weather details. I also processed the data fetched from the API to render in both Celcius & Fahrenheit. The backdrop changes based on the atmospheric condition of the location provided.

> Lastly, I embedded Snowplow Micro Tracker to send some behavioral data to Snowplow Analytics (using AWS pgsql utility) that can be used to make decision now and in the future.

> I used three(3) auto-tracked events (page view, timer tracking, and link clicks). I also used a structured event (trackStructEvent) and all the events are emitted from my app.

Homepage
![Landing page](src/assets/images/screenshots/first.png)

Cloudy Weather Page
![cloud page](src/assets/images/screenshots/second.png)

Rainy Weather Page
![Rain page](src/assets/images/screenshots/third.png)

Clear Weather Page
![Clear page](src/assets/images/screenshots/forth.png)

## Built With

- HTML
- SASS
- JavaScript (ES6)
- Webpack
- Open Weather API
- Netlify
- Snowplow Micro Tracker

## Live Demo

<a href="https://wappjs.netlify.app/" target="_blank">Weather App</a>

[![Netlify Status](https://api.netlify.com/api/v1/badges/d9522c2e-5f11-412b-95a0-8f2d136c8cbc/deploy-status)](https://app.netlify.com/sites/wappjs/deploys)

## Getting Started

To get a local copy up and running follow these simple example steps.

- On the project GitHub page, navigate to the main page of the repository [this page](https://github.com/teekaytech/Weather-App.git).
- Under the repository name, locate and click on a green button named `Code`.
- Copy the project URL as displayed.
- If you're running Windows Operating System, open your command prompt. On Linux, Open your terminal.
- Change the current working directory to the location where you want the cloned directory to be made. Leave as it is if the current location is where you want the project to be.
- Type `git clone`, and then paste the URL you copied in Step 3.<br>
  `git clone https://github.com/teekaytech/Weather-App.git` <em>Press Enter key</em><br>
- Press Enter. Your local copy will be created.
- Checkout to the feature branch: <br>
  `git checkout tracker-feature`
- Install the app dependencies and packages with `npm install` command
- Open a live server that allows you to test the app from your browser with `npm start`.

Please Note that you must have [GitHub](https://gist.github.com/derhuerst/1b15ff4652a867391f03) and [NPM/Node](https://nodejs.org/en/download/) installed on your PC.

### Prerequisites

Web browser (Chrome/Firefox)

### Usage

Click on the live demo link and peruse the app.

### Making Changes

- `npm install` to install the dependencies and packages
- `npm start` to test the app after changes were made

## Author

👤 **Taofeek Olalere**

- Portfolio: [Olalere Taofeek](https://taofeekolalere.me/)
- Github: [@teekaytech](https://github.com/teekaytech)
- Twitter: [@ola_lere](https://twitter.com/ola_lere)
- Linkedin: [olaleretaofeek](https://linkedin.com/in/olaleretaofeek)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/teekaytech/Weather-App/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Microverse](https://.microverse.org/)
- [The Odin Project (Project Spec)](https://www.theodinproject.com/courses/javascript/lessons/weather-app)
- [Snowplow Analytics Micro docs](https://github.com/snowplow-incubator/snowplow-micro/)
- [Snowplow JavaScript Tracker Library](https://docs.snowplowanalytics.com/docs/collecting-data/collecting-from-own-applications/javascript-trackers/javascript-tracker/)
- [Open Weather API](https://openweathermap.org/api)

## 📝 License

This project is [MIT](https://github.com/teekaytech/Weather-App/blob/tracker-feature/LICENSE) licensed.
