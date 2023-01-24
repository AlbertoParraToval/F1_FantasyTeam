'use strict';

/**
 * driver router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::driver.driver');
