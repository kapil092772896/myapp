app.factory('users', function() {
   var userData = [{
   		firstName: "aadi",
   		lastName: "Kumar",
   		email : "aadi@gmail.com",	
   		address: "1234, ABC House, My Home, New Jersy, USA"
   },
   {
   		firstName: "Kapil",
   		lastName: "Kumar",
   		email: "kapil@gmail.com",
		address: "4534, ZZI House, New Home, New Delhi, India"

   },
   {
   		firstName: "Anshul",
   		lastName: "Sharma",
   		email: "Sanket@gmail.com",
		address: "455, XYZ House,  Home, New York, India"

   }];
   return {
   		saveUser: function(saveData) {
   			if(saveData.userid!=undefined && saveData.userid!="") {
   				userData[saveData.userid]=saveData;
   			} else {
   				userData.push(saveData);	
   			}
   		},
   		listUser: function() {
   			return userData;
   		},
   		getUser: function(userid) {
   			return userData[userid]!=undefined?userData[userid]:{};
   		},

         deleteUser: function(userid) {
            userData.splice(userid, 1);
         }
   }
 });
