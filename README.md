# ANGEL BEATS

## Inspiration

Since, our speakers have too low  volume for everyone to listen. Here is when **Angel Beats** will come into play. No matter what device you have, as long as you have a browser and are connected to the internet, you have the speakers in your bags.

## What It Does

It syncs music playing on different devices which are connected to the same server.

## How it works

A server is created in **Node.js** along with **Express.js** , **Socket.io**  and **Socket.io.stream**. Whenever a new client connects , Server takes the music file from the file system which is then passed to the client where it gets synchronised with the other clients.

## How to use
- Install **Node.js**.
- Clone this repository and move to this folder.
- Run **npm install**.
- Get the local IP of the host machine:
  * Run `ifconfig` on *Linux / Mac OS X*.
  * Run `ipconfig` on *Microsoft Windows*.
- Run **npm start**
- Open `localhost:8000` on your machine and `{your ip addess}:8000` on other clients.

## Contributors
- [Anuj Raj](https://github.com/ajraj27)
- [Ashray Sinha](https://github.com/ashraysinha6069)
- [Anmol Chugh](https://github.com/techac)
