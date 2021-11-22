module.exports = {

     getconnections(connections){
        var friends = [];
        for (var i = 0; i < connections.length; i++) {
            const h = connections[i];
            friends.push(h['friendUserID']);

        }
        return friends;
    }

  };