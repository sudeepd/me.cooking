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
var config = {};

/*Local test db*/
config.postgres = {
    user: 'postgres',
    host: '127.0.0.1',
    database: 'dbmain',
    password: 'gudcook',
    port: 5432,
};

/*Default Time to live in seconds.*/
config.tokenttl = 604800;
config.noncetolerance = 1800;
module.exports = config;