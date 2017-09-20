#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const core = require('tzel-core');

let settings = null;
if (fs.existsSync('./install/configs/configs.json')) {
  settings = require('./install/configs/configs.json');
} else {
  settings = require('./tzel.json');
}

settings.require = require.bind();
settings.root = __dirname;

core.boot(settings);
