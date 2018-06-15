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
        // document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    
    alert: function(){

        function alertDismissed() {
            alert('Usuário clicou em OK!');
        }

        navigator.notification.alert(
            'Registro salvo com sucesso!', // Message
            alertDismissed,                // Callback
            'Sucesso',                     // Title
            'OK'                           // ButtonName
        );
    },

    confirm: function(){

        function onConfirm(buttonIndex) {
            alert('O usuário clicou no botão ' + buttonIndex);
        }

        navigator.notification.confirm(
            'Erro ao salvar registro. Deseja tentar novamente?', // Message
            onConfirm,             // Callback to invoke with index of button
            'Erro!',               // Title
            ['Sim','Não']          // ButtoLabels
        );
    },

    prompt: function(){

        function onPrompt(results) {
            var results = '';
            alert('Usuario clicou no botão ' + 
                results.buttonIndex +
                " e digitou " + results.input1);
        }

        navigator.notification.prompt(
            'Informe seu nome',  // Message
            onPrompt,            // Callback to invoke
            'Registro',          // Title
            ['Ok','Cancelar'],   // ButtonLabels
            'Seu nome'           // DefaultText
        );
    }
};

