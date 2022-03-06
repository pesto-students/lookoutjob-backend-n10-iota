/**
 * ShortlistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  async create(req, res){
    try {
      const {name, email, jobId,userId} = req.allParams();
      if (!name) {
        return res.badRequest({err: 'candidate name is required'});
      }
      if (!email) {
        return res.badRequest({err: 'candidate email is required'});
      }
      if (!jobId) {
        return res.badRequest({err: 'jobId is required'});
      }
      if (!userId) {
        return res.badRequest({err: 'userId is required'});
      }
      // const candidate = await Candidate.create({
      //   name: name,
      //   email: email,
      //   id:userId
      // })
      //   .fetch();
      const app = await Shortlist.create({
        candidate: userId,
        job: jobId
      }).fetch();
      return res.ok(app);
    }
    catch (err) {
      return res.serverError(err);
    }
  },
  async find(req,res){
    try{
      const apps = await Shortlist.find()
        .populate('job')
        .populate('candidate');
      return res.ok(apps);
    }
    catch (err){

    }
  }

};

