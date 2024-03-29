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
    instance = new SmallEodClient.Letter();
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

  describe('Letter', function() {
    it('should create an instance of Letter', function() {
      // uncomment below and update the code to test Letter
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be.a(SmallEodClient.Letter);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property direction (base name: "direction")', function() {
      // uncomment below and update the code to test the property direction
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property _final (base name: "final")', function() {
      // uncomment below and update the code to test the property _final
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property date (base name: "date")', function() {
      // uncomment below and update the code to test the property date
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property referenceNumber (base name: "referenceNumber")', function() {
      // uncomment below and update the code to test the property referenceNumber
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property institution (base name: "institution")', function() {
      // uncomment below and update the code to test the property institution
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property _case (base name: "case")', function() {
      // uncomment below and update the code to test the property _case
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property attachments (base name: "attachments")', function() {
      // uncomment below and update the code to test the property attachments
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property documentType (base name: "documentType")', function() {
      // uncomment below and update the code to test the property documentType
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "createdOn")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property createdBy (base name: "createdBy")', function() {
      // uncomment below and update the code to test the property createdBy
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property modifiedOn (base name: "modifiedOn")', function() {
      // uncomment below and update the code to test the property modifiedOn
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

    it('should have the property modifiedBy (base name: "modifiedBy")', function() {
      // uncomment below and update the code to test the property modifiedBy
      //var instance = new SmallEodClient.Letter();
      //expect(instance).to.be();
    });

  });

}));
