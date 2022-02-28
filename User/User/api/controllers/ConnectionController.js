/**
 * ConnectionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  async createRequest(req,res){
    try {
      var param = req.allParams();
      var requesterId = param.userID;
      var ToUserId = param.id

      
      //check user exists or not
      const connectReq = await ConnectRequest.create({
        user:ToUserId,
        friendUserID:requesterId,
      }).fetch();
      return res.ok(connectReq);
      
    } catch (error) {
      return res.serverError(error);

    }
  },

  async getAllRequest(req,res){
    try {
      var param = req.allParams();  
      const userId = param.id;
      if(!userId){
        return res.badRequest({err:"User ID is required"});
      }
      const request = await User.find({
        id:param.id,
    }).populate('connectionsRequest');

    return res.ok(request);

    } catch (error) {
      return res.serverError(error);

    }
},


async accept(req,res){
  try {
    var param = req.allParams(); 
    var requesterId = param.userID;
    var ToUserId = param.id
    // if(!userId){
    //   return res.badRequest({err:"User ID is required"});
    // }
    
    const delReq = await ConnectRequest.destroy({
      user:ToUserId,
      friendUserID:requesterId,
    }).fetch();
    const connect = await Connections.create({
      user:ToUserId,
      friendUserID:requesterId,
    }).fetch();
    const connect_other = await Connections.create({
      user:requesterId,
      friendUserID:ToUserId,
    }).fetch();
    return res.ok(connect);

  } catch (error) {
    return res.serverError(error);

  }
},


async reject(req,res){
  try {
    var param = req.allParams(); 
    var requesterId = param.userID;
    var ToUserId = param.id
    // if(!userId){
    //   return res.badRequest({err:"User ID is required"});
    // }
    const connectReq = await ConnectRequest.destroy({
      user:ToUserId,
      friendUserID:requesterId,
    }).fetch();
    return res.ok(connectReq);

  } catch (error) {
    return res.serverError(error);

  }
},

async getAllConnections(req,res){
  try {
    var param = req.allParams();  
    const userId = param.id;
    if(!userId){
      return res.badRequest({err:"User ID is required"});
    }
    
  const request = await Connections.find({
    where: {user:param.id,},  
    select: ['friendUserID',]
})

var results = [];

for (let index = 0; index < request.length; index++) {
  const element = request[index];
  console.log(element.friendUserID)
  const details = await UserDetails.findOne({
    id:element.friendUserID,
  });
  results.push(details)
}

  return res.ok(results);
  

  } 
  catch (error) {
    return res.serverError(error);

  }
},



async getAllRequestOnLoggedUser(req,res){
  try {
    var param = req.allParams();  
    const userId = param.id;
    if(!userId){
      return res.badRequest({err:"User ID is required"});
    }
    const request = await ConnectRequest.find({
      friendUserID:param.id,
  });
    
  return res.ok(request);

  } catch (error) {
    return res.serverError(error);

  }
},


};

