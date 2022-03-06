/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const getFriends = require("../utils/getFriends");
const sqsSend = require("../utils/sqsSend");




module.exports = {

    // create
    async create(req,res){
        try {
            var param = req.allParams();
            var userID = param.id;
            if(!param.content){
                return res.badRequest({err: 'Content is required field'});
            }
            const postdetails = await PostDetails.create({
                content:param.content,
                imageURL:param.imageURL,
            }).fetch();
            

            const result = await Post.create({
                title:param.title,
                postDetail:postdetails.id,
                user:userID,
            }).fetch();
            
        
        const connections = await User.find({
            id:param.id,
        }).populate('connections');

        const friends = getFriends.getconnections(connections[0]['connections']);
       
    var message = {
        "postId": result.id,
        "content":  postdetails.content,
        "title": result.title,
        "imageURL": param.imageURL,
        "connections":friends,
    }
      sqsSend.sendSqs(message)


            return res.ok(result);


        } catch (error) {
            return res.serverError(error);
        }

    },


    async getPost(req,res){
        try {
            var param = req.allParams();
            const post = await Post.findOne({
                id:param.pid,
            });
            const postDetails = await PostDetails.findOne({
                id:post.id
            });
            return res.ok(postDetails);
    
        } catch (error) {
            return res.serverError(error);
        }
    },
    async getAllPost(req,res){
        try {
            var param = req.allParams();
            const post = await User.find({
                id:param.id,
            }).populate('post');
            
            return res.ok(post);
    
        } catch (error) {
            return res.serverError(error);
        }
    },

    // add a comment
    async addComments(req,res){
        try {
            var param = req.allParams();
            if(!param.comment){
                return res.badRequest({err: 'comment is required field'});
            }
            const comment = await PostComments.create({
                post:param.pid,
                comment:param.comment,
            }).fetch();

            return res.ok(comment);
        } catch (error) {
            res.serverError(error);
        }
    },

    async getAllComments(req,res){
        try {
            var param = req.allParams();

            const comments = await Post.find(
                {
                    id:param.pid,
                }
            ).populate('postcomments');

            return res.ok(comments);

        } catch (error) {
            res.serverError(error);

        }
    },


};

