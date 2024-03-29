/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SmallEodClient);
  }
}(this, function(expect, SmallEodClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SmallEodClient.Channel();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Channel', function() {
    it('should create an instance of Channel', function() {
      // uncomment below and update the code to test Channel
      //var instance = new SmallEodClient.Channel();
      //expect(instance).to.be.a(SmallEodClient.Channel);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SmallEodClient.Channel();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SmallEodClient.Channel();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new SmallEodClient.Channel();
      //expect(instance).to.be();
    });

    it('should have the property voivodeship (base name: "voivodeship")', function() {
      // uncomment below and update the code to test the property voivodeship
      //var instance = new SmallEodClient.Channel();
      //expect(instance).to.be();
    });

    it('should have the property flatNo (base name: "flatNo")', function() {
      // uncomment below and update the code to test the property flatNo
      //var instance = new SmallEodClient.Channel();
      //expect(instance).to.be();
    });

    it('should have the property street (base name: "street")', function() {
      // uncomment below and update the code to test the property street
      //var instance = new SmallEodClient.Channel();
      //expect(instance).to.be();
    });

    it('should have the property postalCode (base name: "postalCode")', function() {
      // uncomment below and update the code to test the property postalCode
      //var instance = new SmallEodClient.Channel();
      //expect(instance).to.be();
    });

    it('should have the property houseNo (base name: "houseNo")', function() {
      // uncomment below and update the code to test the property houseNo
      //var instance = new SmallEodClient.Channel();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new SmallEodClient.Channel();
      //expect(instance).to.be();
    });

    it('should have the property epuap (base name: "epuap")', function() {
      // uncomment below and update the code to test the property epuap
      //var instance = new SmallEodClient.Channel();
      //expect(instance).to.be();
    });

  });

}));
