import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Box, NativeBaseProvider } from "native-base";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation/Navigation";
import LoadingScreen, { Loading } from "./screens/loading/LoadingScreen";
import AuthenticationModal from "./screens/authentication/AuthenticationModal";
import Intro from "./screens/authentication/Intro/Index";

export default function App() {
	const isLoadingComplete = useCachedResources();
	const colorScheme = useColorScheme();

	const user = false;

	if (!isLoadingComplete) {
		return (
			<NativeBaseProvider>
				<LoadingScreen />
			</NativeBaseProvider>
		);
	} else {
		if (user) {
			return (
				<NativeBaseProvider>
					<SafeAreaProvider>
						<Navigation />
						<StatusBar />
					</SafeAreaProvider>
				</NativeBaseProvider>
			);
		} else {
			return (
				<NativeBaseProvider>
					<Intro />
				</NativeBaseProvider>
			);
		}
	}
}
