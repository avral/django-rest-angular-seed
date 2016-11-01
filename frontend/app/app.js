'use strict';

var app = angular.module("app", [
    "ui.router",
    "ngResource",
]);

app.config(function ($provide, $httpProvider, $resourceProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    $resourceProvider.defaults.stripTrailingSlashes = false;
});
