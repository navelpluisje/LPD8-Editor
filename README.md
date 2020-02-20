# LPD8 Editor

<style>.bmc-button img{height: 34px !important;width: 35px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{padding: 7px 10px 7px 10px !important;line-height: 35px !important;height:51px !important;min-width:217px !important;text-decoration: none !important;display:inline-flex !important;color:#FFFFFF !important;background-color:#FF813F !important;border-radius: 5px !important;border: 1px solid transparent !important;padding: 7px 10px 7px 10px !important;font-size: 28px !important;letter-spacing:0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#FFFFFF !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/navelpluisje"><img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a beer"><span style="margin-left:15px;font-size:28px !important;">Buy me a beer</span></a>

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