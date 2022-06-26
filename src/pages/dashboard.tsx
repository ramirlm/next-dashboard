import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
const Chart = dynamic(() => import("react-apexcharts"),
{
  ssr: false,
}) 

const chartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axistTicks: {
      color: theme.colors.gray[600]
    }, 
    categories: [
      '2022-06-26T00:00:00.000Z',
      '2022-06-27T00:00:00.000Z',
      '2022-06-28T00:00:00.000Z',
      '2022-06-29T00:00:00.000Z',
      '2022-06-30T00:00:00.000Z',
      '2022-06-31T00:00:00.000Z',
      '2022-07-01T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [
  { name: 'Series 1', data: [42, 66, 12, 40, 122, 77, 57]}
]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex
        w="100%"
        my="6"
        maxW={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />
        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth="320px"
          alignItems="flex-start"
        >
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Subscribed this week</Text>
            <Chart options={chartOptions} series={series} type="area" height={160} /> 
          </Box>
          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Opening rate</Text>
            <Chart options={chartOptions} series={series} type="area" height={160} /> 
          </Box>
        </SimpleGrid>

      </Flex>
    </Flex>
  );
}
