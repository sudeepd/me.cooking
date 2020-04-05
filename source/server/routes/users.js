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
var express = require('express');
var router = express.Router();
const userController = require("../controllers/Users");

//TODO : Ingredient Controller Implementation
// Move to another file  routes/ingredient.js
const ingredientController = require("../controllers/Ingredient");

//TODO : Dish Controller Implementation
// Move to another file  routes/ingredient.js
const dishController = require("../controllers/Dish");

/*******************************************************************************
 * GET users listing.
 *******************************************************************************/
router.get('/:userID', function(req, res, next) {
    userController.getUser(req, res, next, req.params["userID"]);
});


/*******************************************************************************
 * Add a User
 ******************************************************************************/
router.post('/', function(req, res, next) {
    userController.createUser(req, res, next, req.body);
});

/*******************************************************************************
 * Modify a User
 ******************************************************************************/
router.patch('/:userID', function(req, res, next) {
    userController.modifyUser(req, res, next, req.body, req.params["userID"]);
});

/*******************************************************************************
 * Delete a User
 ******************************************************************************/
router.delete('/:userID', function(req, res, next) {
    userController.deleteUser(req, res, next, req.params["userID"]);
});



/*******************************************************************************
 *  This is the routing table, we might decide to host monolith or microservice.
 *  The components to be moved for a Given Endpoint are
 *  (1) The Controller Object (controllers folder)
 *  (2) The Service Object    (service folder)
 *  (3) Common Utils for I/O  (Utils folder)
 ********************************************************************************/
module.exports = router;
