/**
*   @version 1.0 beta
*   @module Plugin_log
*   @desc Plugin [vuejs-logger]. Log plugin for vuejs - [info]{@link https://www.npmjs.com/package/vuejs-logger}
*   @see ~/plugins/log.js
*
*   @author Pavel Uhrynovych (front-end developer of VC)
*   @copyright 2018©victoriyaclub.com
*/

import Vue from 'vue'
import VueLogger from 'vuejs-logger'

/**
* Use in hooks or methods:
* @example
* this.$log.debug('test', this.a, 123)
* this.$log.info('test', this.b)
* this.$log.warn('test')
* this.$log.error('test')
* this.$log.fatal('test')
*/

const options = {
    /**
    * @typedef {Object} Options
    *   @property {boolean} isEnabled - optional : defaults to true if not specified
    *   @property {string} logLevel ['debug', 'info', 'warn', 'error', 'fatal'] - required
    *   @property {boolean} stringifyArguments - optional : defaults to false if not specified
    *   @property {boolean} showLogLevel - optional : defaults to false if not specified
    *   @property {boolean} showMethodName - optional : defaults to false if not specified
    *   @property {string} separator - optional : defaults to '|' if not specified
    *   @property {boolean} optional : defaults to false if not specified
    */
    isEnabled: true,
    logLevel : 'debug',
    stringifyArguments : true,
    showLogLevel : false,
    showMethodName : true,
    separator: '>',
    showConsoleColors: true
}

Vue.use(VueLogger, options)