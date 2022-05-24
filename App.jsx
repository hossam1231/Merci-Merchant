import React from 'react'
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Box, NativeBaseProvider } from "native-base";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation/Navigation";
import LoadingScreen, { Loading } from "./screens/loading/LoadingScreen";

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
		return (
			<NativeBaseProvider>
				<SafeAreaProvider>
					<Navigation />
					<StatusBar />
				</SafeAreaProvider>
			</NativeBaseProvider>
		);
	}
}
