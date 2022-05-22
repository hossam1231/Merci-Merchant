// ES Modules, e.g. transpiling with Babel
import {
	CognitoUserPool,
	CognitoUserAttribute,
	CognitoUser,
} from "amazon-cognito-identity-js";

var AmazonCognitoIdentity = require("amazon-cognito-identity-js");

export const SignUp = ({ email, phoneNumber, password }) => {
	console.log("hi");
	var poolData = {
		UserPoolId: "us-east-1_EdEM6OA8K", // Your user pool id here
		ClientId: "68jfls6f8j10hqqqkpf1t33aj4", // Your client id here
	};
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	var attributeList = [];

	var dataEmail = {
		Name: "email",
		Value: "email@mydomain.com",
	};

	var dataPhoneNumber = {
		Name: "phone_number",
		Value: "+15555555555",
	};
	var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(
		dataEmail
	);
	var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(
		dataPhoneNumber
	);

	attributeList.push(attributeEmail);
	attributeList.push(attributePhoneNumber);

	userPool.signUp(
		"username",
		"password",
		attributeList,
		null,
		function (err, result) {
			if (err) {
				alert(err.message || JSON.stringify(err));
				return;
			}
			var cognitoUser = result.user;
			console.log("user name is " + cognitoUser.getUsername());
		}
	);
};
