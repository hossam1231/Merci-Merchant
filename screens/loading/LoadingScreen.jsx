// react
import React, { useState, useEffect, useCallback } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Platform } from "react-native";
import "react-native-gesture-handler";

// nativebase
import { Spinner, Center, Heading, HStack } from "native-base";

// import root navigator
import Navigation from "../../navigation/Navigation";

// importing services
import useCachedResources from "../../hooks/useCachedResources";

export const LoadingScreen = () => {
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) {
		if (Platform.OS === "web") {
			return <Loading />;
		}
		return <Loading />;
	}

	return <Navigation />;
};

export const Loading = () => {
	return (
		<Center flex="1">
			{/* napna logo */}
			<HStack space={2} justifyContent="center">
				<Spinner accessibilityLabel="Loading posts" />
				<Heading color="black" fontSize="md">
					Loading
				</Heading>
			</HStack>
		</Center>
	);
};

export default LoadingScreen;
