/**
 * TimelineController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
async getTimeline(req,res){
    try {
        var param = req.allParams();
        const timeline = await User.find({
            id:param.id,
        }).populate('timeline');
        return res.ok(timeline);

    } catch (error) {
        return res.serverError(error);
    }
}
};

