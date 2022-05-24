import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { NavigationContainer } from "@react-navigation/native";
import SignUp from "../screens/authentication/SignUp/Index";
import SignIn from "../screens/authentication/SignIn/Index";

const Stack = createNativeStackNavigator();
let user = false;

export default function Navigation({ navigation }) {
	if (!user) {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="SignIn"
						component={SignIn}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="SignUp"
						component={SignUp}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		);
	} else {
		return (
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{ headerShown: false }}
					/>

					{/* <Stack.Group
					screenOptions={{
						presentation: "modal",
					}}
				>
					<Stack.Screen
						name="SearchFilters"
						component={SearchFiltersScreen}
						options={{ headerShown: false }}
					/>
				</Stack.Group> */}
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
