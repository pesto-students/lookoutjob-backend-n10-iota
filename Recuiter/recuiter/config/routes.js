/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    
    //company Routes
    'POST /companies' : 'CompanyController.create',
    'GET /companies' : 'CompanyController.find',
    'GET /companies/:id' : 'CompanyController.findOne',
    'PATCH /companies/:id' : 'CompanyController.update',
    'DELETE /companies/:id' : 'CompanyController.delete',
    //Jobs
   'POST /jobs' : 'JobController.create',
   'GET /jobs' : 'JobController.find',

  //Applications improve the get 
  'POST /applications' :'ApplicationController.create',
  'GET /applications' :'ApplicationController.find',


 //shortlist
  'POST /shortlist' :'ShortlistController.create',
  'GET /shortlist' :'ShortlistController.find',



};
