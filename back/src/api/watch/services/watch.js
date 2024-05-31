'use strict';

/**
 * watch service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::watch.watch');
