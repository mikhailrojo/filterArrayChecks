"use strict";

var generator = require('./helpers/generator.js');
var check = require('./helpers/iterator.js');

var whileFor = require('./helpers/whileFor.js');
var whileWhile = require('./helpers/whileWhile.js');
var forFor = require('./helpers/forFor.js');
var forEach = require('./helpers/forEach.js');
var shiftFor = require('./helpers/shiftFor.js');
var filterFor = require('./helpers/filterFor.js');
var filterSome = require('./helpers/filterSome.js');
var forInLoop = require('./helpers/forInLoop.js');

/*
@description
This Function checks different itaration functions and console.log the speed of each.

@param {int} quantity of iterations to make
@param {int} quantity of random suppliers to generate
@param {int} quantity of random ids to generte
@param {fn} function to fullfill
*/

check(1000, 1000, 1000, whileFor);
check(1000, 1000, 1000, whileWhile);
check(1000, 1000, 1000, forFor);
check(1000, 1000, 1000, shiftFor);
check(1000, 1000, 1000, forEach);
check(1000, 1000, 1000, filterFor);
check(1000, 1000, 1000, filterSome);
check(1000, 1000, 1000, forInLoop);
