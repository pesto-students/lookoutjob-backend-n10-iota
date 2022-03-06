/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    
	  acctype:{
		  type:'string',
	  },

    email: {
      type: 'string',
      required: true,
      isEmail:true,
      unique: true
    },
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    
    
    candidateEducation:{
      model: 'candidateEducation',
      columnName: 'cdId',
      required: true
    },
    candidateSkills:{
      model: 'candidateSkills',
      columnName: 'candidateSkillsId',
      required: true
    },
    userDetails:{
      model: 'userDetails',
      columnName: 'userDetailsId',
      required: true
    },
    
    
    post:{
      collection:'Post',
      via:'user',
    },

    connections:{
      collection:'Connections',
      via:'user',
    },

    connectionsRequest:{
      collection:'ConnectRequest',
      via:'user',
    },

     
    timeline:{
      collection:'timeline',
      via:'user',
    },
   




  },

};

