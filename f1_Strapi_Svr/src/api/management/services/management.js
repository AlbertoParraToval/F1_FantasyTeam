'use strict';

/**
 * management service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::management.management');
