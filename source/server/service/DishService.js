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
 * Creates a dish
 *
 * body DishCreateRequest Body of the request
 * returns CreateResponse
 **/
exports.createDish = function(body) {
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
exports.deleteDish = function(id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Gets a dish with the given id
 *
 * id Integer Numeric ID of the dish to get
 * returns DishGetResponse
 **/
exports.getDish = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "cookTime" : 6.027456183070403,
  "description" : "description",
  "ingredients" : [ {
    "name" : 5.962133916683182,
    "id" : 1.4658129805029452
  }, {
    "name" : 5.962133916683182,
    "id" : 1.4658129805029452
  } ],
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
 * Modifies the ingredients/description/name of a dish
 *
 * body DishModifyRequest Body of the request
 * id Integer Numeric ID of the dish to modify
 * returns DishModifyResponse
 **/
exports.modifyDish = function(body,id) {
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

