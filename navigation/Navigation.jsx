import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import { NavigationContainer } from "@react-navigation/native";
import Camera from "../screens/camera/CameraScreen";
import AccountModal from "../screens/account/AccountModal";
import FavouritesModal from "../screens/favourites/FavouritesModal";
import SearchScreen from "../screens/search/SearchScreen";
import SearchFiltersScreen from "../screens/search/SearchFiltersScreen";
import AuthenticationModal from "../screens/authentication/AuthenticationModal";

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
