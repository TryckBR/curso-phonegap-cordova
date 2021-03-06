/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    listContacts: function(){

        function onSuccess(contacts) {
            alert("Found " + contacts.length + " contacts.");
        }

        function onError(contactError) {
            alert("onError!");
        }

        var options = new ContactFindOptions();
        options.multiple = true;
        options.desiredFields = [navigator.contacts.fieldType.id];
        var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];

        navigator.contacts.find(fields, onSuccess, onError, options);
    },

    createContact: function(){

        function onSuccess(contact) {
            alert("Save Success");
        }

        function onError(contactError) {
            alert("Error = " + contactError.code);
        }

        // create a new contact object
        var contact = navigator.contacts.create();
        contact.displayName = "AAAA";
        contact.nickname = "Plumber";     // Specify both to suport

        // Populate some fields
        var name = new ContactName();
        nome.giveName = "Jane";
        name.familyName = "Doe";
        contact.name = name;

        // Save to device
        contact.save(onSuccess, onError);
    },

    pickContact: function(){

        navigator.contacts.pickContact(funtion(contact){
            alert('The following contact has ben selected:'
                + JSON.stringify(contact));
        },function(err){
            alert('Error: ' + err);
        });
    }
};
