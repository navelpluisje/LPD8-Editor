# LPD8 Editor

[![Buy Me A Coffee](docs/buy-me-a-coffee.png)](https://www.buymeacoffee.com/navelpluisje)

![Screenhot of the editor](docs/screenshot.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/d111775c-f254-4a27-9a6a-1c6d55cfdef1/deploy-status)](https://app.netlify.com/sites/lpd8-editor/deploys)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v1.4%20adopted-ff69b4.svg)](code-of-conduct.md)
[![GitHub license](https://img.shields.io/github/license/Navelpluisje/LPD8-Editor.svg)](https://github.com/Navelpluisje/LPD8-Editor/blob/master/LICENSE)
[![made-with-love](https://img.shields.io/badge/Made%20with-♥-ff0000.svg)](https://www.navelpluisje.nl/)


## What is this?

This is a simple editor for the Akai LPD8 MIDI-controller.

## Why is it created?

Akai thinks money is more important then helping customers. Due to the lack of effort from their side to update their LPD8 Editor, I decided to build my own, web based. This way it will work in every browser on every OS, as long as web-MIDI is supported.

## What does it do?

* It can get data from the LPD8
* It can store the created config to the LPD8

## How does it work?

* Select an input device
* Select an output device, the active bank will get selected
* Click `Load Config` to get the bank data from the LPD8
* Make some changes
* Click `Send Config` to store the data to the LPD8

## What does not work (yet)?

* Store a config to a file
* Load a config from a file

## What helped me?

* https://github.com/charlesfleche/lpd8editor/blob/d3c312e226f55ab0082b66e4732f5b860dc7b5fb/doc/SYSEX.md
* https://github.com/mungewell/mpd-utils/blob/master/sysex/sysex_lpd8.md