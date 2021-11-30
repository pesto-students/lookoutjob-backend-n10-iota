/**
 * SkillsEducationDetailsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { attributes } = require("../models/User");

module.exports = {
  
    async updateEducation(req,res){
        try {   
            var  param =  req.allParams();
            
	console.log(param);
	const user = await User.findOne({
                  id:param.id,
            });
            var attributes={};

            if(param.college){
                attributes.college=param.college;
            }
            if(param.degree){
                attributes.degree=param.degree;
            }

            if(param.stYear){
                attributes.stYear=param.stYear;
            }

            if(param.endYear){
                attributes.endYear = param.endYear;
            }

            const education = await CandidateEducation.update({
              id:user.candidateEducation,
            },
            attributes,
            ).fetch();
            return res.ok(education);
            
        } catch (error) {
            return res.serverError(error);
        }
    },
    
    async updateSkills(req,res){
        try {
            var  param =  req.allParams();
            const user = await User.findOne({
                  id:param.id,
            });
            var attributes={};

            if(param.skills){
                attributes.skills=param.skills;
            }
            const skills = await CandidateSkills.update({
                id:user.candidateSkills,
              },
              attributes,
              ).fetch();
              return res.ok(skills);
           
        } catch (error) {
            return res.serverError(error);

        }
    },
    
    
    async updateDetails(req,res){
        try {
            var  param =  req.allParams();
            const user = await User.findOne({
                  id:param.id,
            });
            var attributes={};

            if(param.name){
                attributes.name=param.name;
            }
            if(param.currentCompany){
                attributes.currentCompany=param.currentCompany;
            }

            if(param.role){
                attributes.role=param.role;
            }
            if(param.imageURL){
                attributes.imageURL=param.imageURL;
            }
 
            const details = await UserDetails.update({
              id:user.userDetails,
            },
            attributes,
            ).fetch();
            return res.ok(details);
        } 
        
        catch (error) {
            return res.serverError(error);

        }
    },

};

