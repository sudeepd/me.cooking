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

const assert = require("assert");
const pg = require('pg');
const config = require("./config");
let _db;

module.exports = {
    getDb,
    initDb
};

function initDb(callback) {
    const client = new pg.Client(config.postgres);
    client.connect();
    console.log("DB initialized - connected to: " + config.postgres.database);
    _db = client;
    return callback(_db);
}

function getDb() {
    assert.ok(_db, "Database not initialized.");
    return _db;
}


