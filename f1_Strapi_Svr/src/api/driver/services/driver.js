'use strict';

/**
 * driver service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::driver.driver');
