/**
 * product controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController(
  'api::product.product',
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const query = {
        filters: { slug },
        ...ctx.query,
      };

      const product = await strapi.entityService.findMany(
        'api::product.product',
        query
      );

      const sanitizedEntity = await this.sanitizeOutput(product, ctx);

      return this.transformResponse(sanitizedEntity[0]);
    },
  })
);