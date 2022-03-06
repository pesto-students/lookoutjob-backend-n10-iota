/**
 * CommentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    subscribe: function (req, res) {

        if (!req.isSocket) {
    
          return res.badRequest({ status: 'NOT_SOCKET_REQUEST' });
        }
        PostComments.find({post:req.body.pid,}).exec(function (err, users) {
    
          if (err) {
    
            return res.serverError({ status: 'SERVER_ERROR' });
          }
          /**
           * subscribe the User model to connected client sockets
           */
           PostComments.subscribe(req, _.pluck(users, 'id'));
          
           PostComments.watch(req);
          return res.ok({ status: 'SUBSCRIBED' });
        });
      },



      createComment: function (req, res) {
        var comment = req.body.comment;
        var pid = req.body.post;
        // const comment = await PostComments.create({
        //     post:param.pid,
        //     comment:param.comment,
        // })
        PostComments.find({ post: pid }).exec(function (err, comments) {
          if (err) {
            return res.serverError({ status: 'SERVER_ERROR' });
          }
    
          PostComments.create({ post:param.pid, comment:param.comment,}).exec(function (err, newComment) {
    
              if (err) {
    
                return res.serverError({ status: 'SERVER_ERROR' });
              }
    
              if (newUser) {
                
                PostComments.publishCreate(newComment);
                return res.send({ status: 'SUCCESS', data: newComment });
              }
            });
          
        });

    },

};

