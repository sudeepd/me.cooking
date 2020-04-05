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
var   prepStatement = require('pg-prepared');

/**
 * Creates a user
 *
 * body UserCreateRequest Body of the request
 * returns CreateResponse
 **/
exports.createUser = function(body) {
    return new Promise(function(resolve, reject) {
        var item = prepStatement('INSERT INTO USERS VALUES(DEFAULT,${EMAIL},${PHONE})');
        getDb().query(item({EMAIL:body["email"], PHONE:body["phone"]}), function (err, result) {
            if (err) {
                resolve(err);
            } else {
                //TODO: Need to figure out how to get the generate ID in one shot.
                //      We might need to create a store procedure.
                getDb().query("SELECT MAX(id) from USERS", function(err, result) {
                    var data = {};
                    data["id"] = result.rows[0].max;
                    resolve(data);
                });
            }
        })
  });
}


/**
 * Deletes an user with given id
 *
 * id Integer Numeric ID of the user to delete
 * no response value expected for this operation
 **/
exports.deleteUser = function(id) {
  return new Promise(function(resolve, reject) {
      var item = prepStatement('DELETE FROM USERS WHERE id=${ID}');
      getDb().query(item({ID:id}), function (err, result) {
          if (err) {
              resolve();
          } else {
              var data = {};
              data["id"] = id;
              resolve(data);
          }
      });
  });
}


/**
 * Gets an user with given id
 *
 * id Integer Numeric ID of the user to get
 * returns UserGetResponse
 **/
exports.getUser = function(id) {
  return new Promise(function(resolve, reject) {
      var item = prepStatement('SELECT * FROM USERS WHERE id=${ID}');
      getDb().query(item({ID:id}), function (err, result) {
        if (err) {
            resolve();
        } else {
            if (result.rows.length > 0) {
                //Convert the DB Row to JSON and resolve
                var data = {};
                data["id"] = result.rows[0].id;
                data["email"] = result.rows[0].email;
                data["phone"] = result.rows[0].phone;
                resolve(data);
            }
        }
      })
    });
}


/**
 * Modifies attributes of an user
 *
 * body UserModifyRequest Body of the request
 * id Integer Numeric ID of the user to get
 * returns UserModifyResponse
 **/
exports.modifyUser = function(body,id) {
  return new Promise(function(resolve, reject) {
      var item = prepStatement('UPDATE USERS SET email=${EMAIL}, phone=${PHONE} WHERE id=${ID}');
      getDb().query(item({EMAIL:body["email"], PHONE:body["phone"], ID:id}), function (err, result) {
          if (err) {
              resolve(err);
          } else {
              var data = {};
              data["id"] = id;
              data["email"] = body["email"];
              data["phone"] = body["phone"];
              resolve(data);
          }
      })
  });
}

