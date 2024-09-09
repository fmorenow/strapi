'use strict';

/**
 * retosjugador controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::retosjugador.retosjugador',({strapi})=>({
    // async getJugadorReto
    async checkCompletion(ctx) {
        const { email, retoNombre } = ctx.request.body;
    
        const registro = await strapi.db.query('api::registro.registro').findOne({
          where: { email: email },
        });
    
        const reto = await strapi.db.query('api::reto.reto').findOne({
          where: { nombre: retoNombre },
        });
    
        if (!registro || !reto) {
          return ctx.badRequest('Jugador o reto no encontrado');
        }
    
        const completed = await strapi.db.query('api::retosjugador.retosjugador').findOne({
          where: {
            jugador: registro.id,
            retos: reto.id,
            completado: true,
          },
        });
    
        ctx.send({ completado: !!completed });
      },
}));
