JesuScout
![npm](https://img.shields.io/npm/v/npm.svg)
![mongoDB](https://img.shields.io/badge/mongoDB-v3.6-red.svg)
![CDNJS](https://img.shields.io/cdnjs/v/jquery.svg)
=========

## Contents

- [Installation](#installation)
- [Usage](#usage)
    - [A Brief Summary](#brief-summary)
    - [Running](#running-jesuscout-is-extremely-simple)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

JesuScout is a web-app built with node.js, express, mongoDB, and more. Thankfully though, npm provides an easy way to install all of the required dependencies in one command.

### Step one: Clone the repo
- Click on the green icon, then press 'copy to clipboard'.
```sh
git clone https://github.com/Jesubots/JesuScout.git
```
- Insert this command into whatever directory is most conenient to you.

### Step two: Install npm and all required dependencies
- cd into the /server folder
```sh
npm install
```

### Step three: Install mongoDB
1. To install mongo on your local system, click [here](https://docs.mongodb.com/manual/installation/).

2. Additionally, I highly recommend using Homebrew. It's easy to use and an extremely valuable tool for essentially any project, including this one. You can easily install Homebrew to your preferred terminal [here](https://brew.sh/).

## Usage

#### A Brief Summary
Since the application needs to run locally, due to FIRST compliance rules regarding the strict prohibition of ad-hoc wifi networks, much of the setup can be configured for each teams own use.

With room for future improvements and modification, the intention of JesuScout is to compile the most in depth local database which can be downloaded and reinstalled in the pit for in depth data-analysis with Tableau.
> As of 2014, Tableau Software licenses are included in each FRC Teams' Kit of Parts

#### Running JesuScout is *extremely* simple. 

1. Open up two terminal windows
    - cd one to JesuScout/server (part two)
    - the other will be monitoring your database (part three)
2. To run the actual web app
```sh
sudo node server
```
3. To monitor your DB...
    - From the root directory of your terminal enter:
```sh
cd /bin
brew services start mongodb
mongo
```
> **Note**: The brew command can only be used if you have Homebrew installed

4. With this, you're ready to roll
> **Success!** JesuScout is now running and ready for use at http://localhost:3000

- The computer running the server should remain powered on throughout the entire day of matches
    - The scouter computers, however, may be switched out throughout the day without issues.
- The ideal setup is obviously to have six scouters for six robots on the field, but whatever is most convenient to your team can be used.
- For an entire breakdown of the system and the concept, a fully polished whitepage is on the way. If you need a more immediate response, however, feel free to [contact us](#contact).

## Contributing

We are welcoming contributions on a variety of fronts. In the future the project wiki will have more detailed information on what we are looking to improve, but for now if your team would like to contribute and be recognized, please [contact us](#contact).

## LICENSE

[ISC](https://github.com/Jesubots/JesuScout/blob/master/LICENSE)

JesuScout was not just built for team 5809, it was built for all FRC Teams. Feel free to use and modify any of our code, and we would love to hear about what you do with it!

## Contact

For bugs, questions, or concerns please feel free to contact us via email at maxgoeke@amdg.rockhursths.edu

**- Built by Max Goeke**
