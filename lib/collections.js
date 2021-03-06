UsersCollection = new Meteor.Collection('user_profile');
UsersCollection.attachSchema( new SimpleSchema({
    name: {
        type: String,
        label: "Name",
	max: 100
    },
    address: {
        type: String,
        label: "Address",
        max: 1000
    },
    contactDetails: {
        type: String,
        label: "Contact Details",
        max: 10
    },
    email: {
	type: String,
	regEx: SimpleSchema.RegEx.Email,
	label: "E-Mail ID"
    },
    age: {
        type: Number,
        label: "Age"
    },
    gender: {
        type: String,
        label: "Gender",
	allowedValues: ['M', 'F', 'Other']
    },
    qualification: {
        type: String,
        label: "Education Background"
    },
    nationality: {
        type: String,
        label: "Nationality"
    },
   dob:{
	type:Date,
	label:"Date of Birth"
},
mode: {
    type: String,
    label: "Prefered Mode of Contact",
allowedValues: ['Email', 'Phone', 'None']
}
}));
UsersCollection.allow({
	insert: function(userId,doc){
		return true;
	},
	update: function(userId,doc){
		return true;
	}
});
