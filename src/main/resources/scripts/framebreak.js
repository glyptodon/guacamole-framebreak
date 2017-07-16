/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

(function breakFrames() {

    /**
     * Allows Guacamole to be displayed. This function should only be invoked
     * if no frames are in use, or the frame which are in use have been
     * validated as allowed.
     */
    var allow = function allow() {
        document.documentElement.style.display = 'block';
    };

    /**
     * Denies nesting Guacamole within a frame, replacing the contents of the
     * top-level frame.
     */
    var deny = function deny() {
        top.location = self.location;
    };

    // Display content if no frames are in use
    if (self === top)
        allow();

    // Otherwise, break out of frame
    else
        deny();

})();