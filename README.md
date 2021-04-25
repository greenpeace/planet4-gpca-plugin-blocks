# Cards

Cards with clickable title, description, image, and more…

## Description

Easily create nice cards, complete with:
- a clickable title
- a clickable image
- a short description
- date and optional location for event cards
- categories
- search
- map

![Screenshot](/screenshot.png)

## Installation

See Wordpress instructions for installing plugins.

### YMMV

Your mileage may vary.

Things may behave differently in your Wordpress installation due to conflicting scripts or styles, so best to take the time to test things a bit before deploying to production.

## Development environment

- Requires Wordpress >=  5.6.0 (tested up to 5.6.0)
- Requires PHP >= 7.0.0
1. Clone or fork this repo
2. install dependencies: `npm install && npm install -g @wordpress/env`
3. build (and automatically rebuild when files change): `npm start`
4. launch a Wordpress environment in this directory: `wp-env start` (should say `Wordpress development site started at http://localhost:8888/`)
5. Visit the dev site and log in with username `admin` and password `password`

## Troubleshooting

See https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/#troubleshooting-common-problems, especially `wp-env destroy` which has proved the only solution to a prolem with connecting to the database…

## Changelog

See [CHANGELOG.md](/CHANGELOG.md)
