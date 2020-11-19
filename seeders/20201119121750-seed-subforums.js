'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const data = [
      {
        name:"worldnews",
        description:"A place for major news from around the world"
      },
      {
        name:"gaming",
        description:"A subforum for (almost) anything related to games - video games, board games, card games, etc. (but not sports)."
      },
      {
        name:"memes",
        description:"A way of describing cultural information being shared. An element of a culture or system of behavior that may be considered to be passed from one individual to another by nongenetic means, especially imitation."
      },
      {
        name:"football",
        description:"The football subforum. News, results and discussion about the beautiful game."
      }
    ]

    data.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
    })

    return queryInterface.bulkInsert('Subforums', data, {})
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subforums', null, {})
  }
};
