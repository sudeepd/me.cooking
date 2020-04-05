/******************************************************************************
 * Copyright 2020 GudCook Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *****************************************************************************/
'use strict';

const {getDb} = require("../db");

/**
 * Defines an ingredient used in a dish
 *
 * body IngredientCreateRequest Body of the request
 * returns CreateResponse
 **/
exports.creatIngredient = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 0.8008281904610115
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes a dish with given id
 *
 * id Integer Numeric ID of the dish to delete
 * no response value expected for this operation
 **/
exports.deleteIngredient = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets an ingredient with the given id
 *
 * id Integer Numeric ID of the ingredient to get
 * returns IngredientGetResponse
 **/
exports.getIngredient = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "description" : "description"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

