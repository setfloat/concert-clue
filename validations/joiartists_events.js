'use strict';

const Joi = require('joi');

module.exports.get = {
  body: {
    artists: Joi.array()
      .items(
        Joi.string()
        .label('mbid')
        .required()
        .trim()
      )
  };
};