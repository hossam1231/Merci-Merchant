import {
	Text,
	HStack,
	Box,
	FlatList,
	Icon,
	Center,
	Heading,
	VStack,
} from "native-base";
import React, { useState } from "react";
import { DOL_Tiles } from "../../constants/Home/DOL_Tiles";
import { SB_Tiles } from "../../constants/Home/SB_Tiles";

import { AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
	return (
		<HStack flex="1">
			<SideBar />
			<Display />
		</HStack>
	);
};

export const Display = () => {
	return (
		<Box flex="1">
			<TopBar />
			<HStack flex="1">
				<DateOverview />
				<OverView />
			</HStack>
		</Box>
	);
};

export const DateOverview = () => {
	return (
		<Box p="10" borderRightWidth="1" borderColor="#E7E8FC" w="309">
			<Text fontFamily="Manrope-Regular">Todays Stats</Text>
			<DateOverviewList />
		</Box>
	);
};

export const DateOverviewList = () => {
	const [data, setData] = useState(DOL_Tiles);

	return (
		<FlatList
			showVerticalScrollIndicator="false"
			data={data}
			renderItem={({ item }) => (
				<Box
					key={item.id}
					mt="5"
					borderRadius="10"
					bg="white"
					h="109"
					pl="4"
					pr="5"
					py="5"
					px="2"
				>
					<HStack space={3} justifyContent="space-between">
						<Box>
							<Text fontFamily="Manrope-Regular">Todays {item.title}</Text>
							<Text fontFamily="Manrope-ExtraBold" fontSize="xl" bold>
								{item.quantity}
							</Text>
						</Box>
						<Box>
							<Box>{/* mini graph */}</Box>
							<HStack>
								<Text color={item.unit == "positive" ? "#35DC94" : "#FE2762"}>
									{item.change}
								</Text>

								{item.unit == "positive" ? (
									<Icon
										as={AntDesign}
										name="arrowup"
										color="#35DC94"
										size="sm"
									/>
								) : (
									<Icon
										as={AntDesign}
										name="arrowdown"
										color="#FE2762"
										size="sm"
									/>
								)}
							</HStack>
						</Box>

						{/* <Spacer /> */}
					</HStack>
				</Box>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export const OverView = () => {
	return (
		<Box p="10" bg="white" flex="1">
			<VStack>
				<HStack>
					<OverViewStatus />
					<OverViewBalances />
				</HStack>
				<HStack borderTopWidth="1" borderColor="#E7E8FC">
					<OverViewActivity />
					<OverViewStatistics />
				</HStack>
			</VStack>
		</Box>
	);
};

export const OverViewStatus = () => {
	return (
		<Box>
			<Text>Status</Text>
			<OverViewStatusList />
		</Box>
	);
};

export const OverViewStatusList = () => {
	const [data, setData] = useState(SB_Tiles);

	return (
		<FlatList
			mt="20"
			data={data}
			renderItem={({ item }) => (
				<HStack p="10" h="35">
					{/* <Box w="4" bg="black" h="35"></Box> */}

					<Icon as={AntDesign} name={item.icon} size="lg" />
				</HStack>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export const OverViewBalances = () => {
	return (
		<Box>
			<Text>My Balances</Text>
			<OverViewBalancesList />
		</Box>
	);
};

export const OverViewBalancesList = () => {
	const [data, setData] = useState(SB_Tiles);

	return (
		<FlatList
			mt="20"
			data={data}
			renderItem={({ item }) => (
				<HStack p="10" h="35">
					{/* <Box w="4" bg="black" h="35"></Box> */}

					<Icon as={AntDesign} name={item.icon} size="lg" />
				</HStack>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export const OverViewActivity = () => {
	return (
		<Box h="389">
			<Text>Mailing Activity</Text>
			<OverViewActivityList />
		</Box>
	);
};

export const OverViewActivityList = () => {
	const [data, setData] = useState(SB_Tiles);

	return (
		<FlatList
			mt="20"
			data={data}
			renderItem={({ item }) => (
				<HStack p="10" h="35">
					{/* <Box w="4" bg="black" h="35"></Box> */}

					<Icon as={AntDesign} name={item.icon} size="lg" />
				</HStack>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export const OverViewStatistics = () => {
	return (
		<HStack flex="1">
			<Box>
				<Text>Statistics</Text>
				<OverViewStatisticsPicker />
				<OverViewStatisticsGraph />
			</Box>
		</HStack>
	);
};

export const OverViewStatisticsPicker = () => {
	return (
		<HStack flex="1">
			<Box>
				<Text>Day</Text>
			</Box>
			<Box>
				<Text>Week</Text>
			</Box>
			<Box>
				<Text>Months</Text>
			</Box>
		</HStack>
	);
};

export const OverViewStatisticsGraph = () => {
	return (
		<HStack flex="1">
			<Box>
				<Text>Statistics</Text>
			</Box>
		</HStack>
	);
};

export const OverViewUsage = () => {
	return <></>;
};

export const TopBar = () => {
	return (
		<HStack
			alignItems="center"
			borderBottomWidth="1"
			borderColor="#E7E8FC"
			justifyContent="space-between"
			h="60"
			bg="white"
		>
			<Box ml="10">
				<Text bold fontFamily="Manrope-Regular">
					Dashboard
				</Text>
			</Box>

			<HStack mr="10">
				<Box mr="1">
					<Icon as={AntDesign} name="heh" size="lg" />
				</Box>

				<Box mr="1">
					<Icon as={AntDesign} name="hehe" size="lg" />
				</Box>

				<Box mr="1">
					<Icon as={AntDesign} name="smileo" size="lg" />
				</Box>
			</HStack>
		</HStack>
	);
};

export const SideBar = () => {
	return (
		<VStack
			bg="white"
			borderRightWidth="1"
			borderColor="#E7E8FC"
			alignItems="center"
			w="101"
		>
			<Center h="60">
				<Heading position="relative" bottom="0">
					H
				</Heading>
			</Center>

			<SideBarList />
		</VStack>
	);
};

export const SideBarList = () => {
	const [data, setData] = useState(SB_Tiles);

	return (
		<FlatList
			mt="20"
			data={data}
			renderItem={({ item }) => (
				<HStack p="10" h="35">
					{/* <Box w="4" bg="black" h="35"></Box> */}

					<Icon as={AntDesign} name={item.icon} size="lg" />
				</HStack>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default HomeScreen;
