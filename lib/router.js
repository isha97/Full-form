

Router.route('/', function () {
    this.render('landingPageTemplate');
    }, {
        name: 'landingRoute',
      waitOn: function(){
        	return Meteor.subscribe("Insertuser");
	}
    });

   


















