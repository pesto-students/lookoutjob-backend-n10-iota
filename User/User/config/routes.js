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

    'POST /user' : 'UserController.create',
    'GET /user' : 'UserController.find',
    'GET /user/:id' : 'UserController.findOne',
    'GET /user/:id/education' : 'UserController.findOneEducation',
    'GET /user/:id/skills' : 'UserController.findOneSkills',
    'GET /user/:id/details' : 'UserController.findOneDetails',

    'POST /user/:id/education' : 'SkillsEducationDetailsController.updateEducation',
    'POST /user/:id/skills' : 'SkillsEducationDetailsController.updateSkills',
    'POST /user/:id/details' : 'SkillsEducationDetailsController.updateDetails',

    'POST /user/:id/post' : 'PostController.create',
    'GET /user/:id/post' : 'PostController.getAllPost',
    'POST /user/:id/post/:pid' : 'PostController.getPost',
    
    'POST /post/:pid/comment' : 'PostController.addComments',
    'GET /post/:pid/comment' : 'PostController.getAllComments',

    //connections endpoints
    'POST /user/:id/connect' : 'ConnectionController.createRequest',
    'GET /user/:id/connect' : 'ConnectionController.getAllRequest',

    
    'POST /user/:id/accept' : 'ConnectionController.accept',
    'POST /user/:id/reject' : 'ConnectionController.reject',

    'GET /user/:id/connections' : 'ConnectionController.getAllConnections',

// sockets


'POST /comment/create' : 'CommentController.createComment',
 'GET /comment/subscribe' : 'CommentController.subscribe'

   
    

    

    

};
