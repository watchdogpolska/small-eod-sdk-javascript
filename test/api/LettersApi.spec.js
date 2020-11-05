/**
 * Small_EOD
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * Contact: adam.dobrawy@siecobywatelska.pl
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 5.0.0-SNAPSHOT
 *
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
    instance = new SmallEodClient.LettersApi();
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

  describe('LettersApi', function() {
    describe('lettersCreate', function() {
      it('should call lettersCreate successfully', function(done) {
        //uncomment below and update the code to test lettersCreate
        //instance.lettersCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersDelete', function() {
      it('should call lettersDelete successfully', function(done) {
        //uncomment below and update the code to test lettersDelete
        //instance.lettersDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersFilesCreate', function() {
      it('should call lettersFilesCreate successfully', function(done) {
        //uncomment below and update the code to test lettersFilesCreate
        //instance.lettersFilesCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersFilesDelete', function() {
      it('should call lettersFilesDelete successfully', function(done) {
        //uncomment below and update the code to test lettersFilesDelete
        //instance.lettersFilesDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersFilesList', function() {
      it('should call lettersFilesList successfully', function(done) {
        //uncomment below and update the code to test lettersFilesList
        //instance.lettersFilesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersFilesPartialUpdate', function() {
      it('should call lettersFilesPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test lettersFilesPartialUpdate
        //instance.lettersFilesPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersFilesRead', function() {
      it('should call lettersFilesRead successfully', function(done) {
        //uncomment below and update the code to test lettersFilesRead
        //instance.lettersFilesRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersFilesSignCreate', function() {
      it('should call lettersFilesSignCreate successfully', function(done) {
        //uncomment below and update the code to test lettersFilesSignCreate
        //instance.lettersFilesSignCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersFilesUpdate', function() {
      it('should call lettersFilesUpdate successfully', function(done) {
        //uncomment below and update the code to test lettersFilesUpdate
        //instance.lettersFilesUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersList', function() {
      it('should call lettersList successfully', function(done) {
        //uncomment below and update the code to test lettersList
        //instance.lettersList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersPartialUpdate', function() {
      it('should call lettersPartialUpdate successfully', function(done) {
        //uncomment below and update the code to test lettersPartialUpdate
        //instance.lettersPartialUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersRead', function() {
      it('should call lettersRead successfully', function(done) {
        //uncomment below and update the code to test lettersRead
        //instance.lettersRead(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lettersUpdate', function() {
      it('should call lettersUpdate successfully', function(done) {
        //uncomment below and update the code to test lettersUpdate
        //instance.lettersUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
