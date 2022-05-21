import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function Navigation({ navigation }) {
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
