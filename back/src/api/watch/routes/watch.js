'use strict';

/**
 * watch router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::watch.watch');
