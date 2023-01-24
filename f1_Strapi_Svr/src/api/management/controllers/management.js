'use strict';

/**
 * management controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::management.management');
