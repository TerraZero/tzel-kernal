#!/usr/bin/env node
'use strict';

const core = require('tzel-core');
const settings = require('./tzel.json');

settings.require = require.bind();
settings.root = __dirname;

core.boot(settings);

const t = use.serve('test.hhh');
t.hallo();
