#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const core = require('tzel-core');

let settings = require('./tzel.json');
if (fs.existsSync(__dirname + '/' + settings.path.configs + '/configs.json')) {
  settings = require(__dirname + '/' + settings.path.configs + '/configs.json');
}

settings.require = require.bind();
settings.root = __dirname;

core.boot(settings);
