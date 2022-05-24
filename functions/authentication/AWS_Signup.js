// ES Modules, e.g. transpiling with Babel
import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
} from "amazon-cognito-identity-js";

var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

export const AWS_SignUp = ({
	email,
	phoneNumber,
	password,
	preferredUsername,
}) => {
	console.log("hi");
	var poolData = {
		UserPoolId: "us-east-1_EdEM6OA8K", // Your user pool id here
		ClientId: "68jfls6f8j10hqqqkpf1t33aj4", // Your client id here
	};
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	var attributeList = [];

	var dataEmail = {
		Name: "email",
		Value: email,
	};

	var dataPreferredUsername = {
		Name: "preferred_username",
		Value: preferredUsername,
	};

	var dataPhoneNumber = {
		Name: "phone_number",
		Value: phoneNumber,
	};
	var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
		dataEmail
	);
	var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
		dataPhoneNumber
	);
	var attributePreferredUsername =
		new AmazonCognitoIdentity.CognitoUserAttribute(dataPreferredUsername);

	attributeList.push(attributeEmail);
	attributeList.push(attributePhoneNumber);
	attributeList.push(attributePreferredUsername);

	userPool.signUp(email, password, attributeList, null, function (err, result) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}
		var cognitoUser = result.user;
		console.log("user name is " + cognitoUser.getUsername());
	});
};

export default AWS_SignUp;
