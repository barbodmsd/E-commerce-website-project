'use strict';

/**
 * watch controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::watch.watch');
