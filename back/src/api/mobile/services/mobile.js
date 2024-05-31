'use strict';

/**
 * mobile service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mobile.mobile');
