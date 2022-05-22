var poolData = {
	UserPoolId: '...', // Your user pool id here
	ClientId: '...', // Your client id here
};

var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);
var userData = {
	Username: 'username',
	Pool: userPool,
};

var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
cognitoUser.confirmRegistration('123456', true, function(err, result) {
	if (err) {
		alert(err.message || JSON.stringify(err));
		return;
	}
	console.log('call result: ' + result);
});