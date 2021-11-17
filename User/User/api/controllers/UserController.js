/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    async create(req,res){
        try{
            var param = req.allParams();
            if(!param.email){
                return res.badRequest({err: 'Email is required field'});
            }
            
            const education = await CandidateEducation.create({
                college:"Please edit your college",
                degree:"Please edit your degree",
                stYear:0000,
                endYear:0000,
            }).fetch();
            
            
            const skills = await CandidateSkills.create({
                skills:"Please enter your skils here",
            }).fetch();
            const userDetails = await UserDetails.create({
                name:"Edit name",
                currentCompany:"Enter your current company here",
                role:"enter your role",
                // imageURL:""
            }).fetch();
            
            
            const result = await User.create({
                email:param.email,
                userDetails:userDetails.id,
                candidateSkills:skills.id,
                candidateEducation:education.id,
            }).fetch();
            return res.ok(result);
        }
        catch(err){
            return res.serverError(err);
        }
    },



    async find(req, res){
        try {
          const users = await User.find();
          return res.ok(users);
        }
        catch (err) {
          return res.serverError(err);
        }
    },

    async findOne(req, res){
        try {
          var  param =  req.allParams();
          const user = await User.findOne({
                id:param.id,
          });
          return res.ok(user);
        }
        catch (err) {
          return res.serverError(err);
        }
    },
    
    async findOneEducation(req, res){
        try {
          var  param =  req.allParams();
          const user = await User.findOne({
                id:param.id,
          });
          const education = await CandidateEducation.findOne({
            id:user.candidateEducation,
          });
          return res.ok(education);
        }
        catch (err) {
          return res.serverError(err);
        }
    },

    async findOneSkills(req, res){
        try {
          var  param =  req.allParams();
          const user = await User.findOne({
                id:param.id,
          });
          const skills = await CandidateSkills.findOne({
            id:user.candidateSkills,
          });
          return res.ok(skills);
        }
        catch (err) {
          return res.serverError(err);
        }
    },
    async findOneDetails(req, res){
        try {
          var  param =  req.allParams();
          const user = await User.findOne({
                id:param.id,
          });
          const details = await UserDetails.findOne({
            id:user.userDetails,
          });
          return res.ok(details);
        }
        catch (err) {
          return res.serverError(err);
        }
    },

    



};

