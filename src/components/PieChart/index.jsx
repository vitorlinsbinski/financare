import ApexCharts from "react-apexcharts";
import * as S from "./style";
import { useContext } from "react";
import FormContext from "../../Context/FormContext";

export function PieChart() {
  const { finances } = useContext(FormContext);

  const houseCategory = finances
    ?.filter((finance) => {
      return finance.tag == "house";
    })
    .map((finance) => {
      return Number(finance.value);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const educationCategory = finances
    ?.filter((finance) => {
      return finance.tag == "education";
    })
    .map((finance) => {
      return Number(finance.value);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const foodCategory = finances
    ?.filter((finance) => {
      return finance.tag == "food";
    })
    .map((finance) => {
      return Number(finance.value);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const healthCategory = finances
    ?.filter((finance) => {
      return finance.tag == "health";
    })
    .map((finance) => {
      return Number(finance.value);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const servicesCategory = finances
    ?.filter((finance) => {
      return finance.tag == "services";
    })
    .map((finance) => {
      return Number(finance.value);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const transportCategory = finances
    ?.filter((finance) => {
      return finance.tag == "transport";
    })
    .map((finance) => {
      return Number(finance.value);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const tripsCategory = finances
    ?.filter((finance) => {
      return finance.tag == "trips";
    })
    .map((finance) => {
      return Number(finance.value);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const shoppingCategory = finances
    ?.filter((finance) => {
      return finance.tag == "shopping";
    })
    .map((finance) => {
      return Number(finance.value);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const electronicsCategory = finances
    ?.filter((finance) => {
      return finance.tag == "electronics";
    })
    .map((finance) => {
      return Number(finance.value);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const othersCategory = finances
    ?.filter((finance) => {
      return finance.tag == "others";
    })
    .map((finance) => {
      return Number(finance.value);
    })
    .reduce((acc, cur) => {
      return acc + cur;
    }, 0);

  const options = {
    chart: {
      width: 380,
      type: "pie",
    },
    chart: {
      foreColor: "#797E9C",
    },

    colors: [
      "#172b4d",
      "#fc4374",
      "#f6c103",
      "#ecf0f1",
      "#477fff",
      "#3dceed",
      "#d3d0cb",
      "#81a1c1",
      "#c6ddf0",
      "#4e69a2",
      "#3a5355",
    ],
    stroke: {
      show: false,
      curve: "smooth",
      lineCap: "butt",
      colors: undefined,
      width: 2,
      dashArray: 0,
    },
    labels: [
      "House",
      "Education",
      "Food",
      "Health",
      "Services",
      "Transport",
      "trips",
      "shopping",
      "electronics",
      "others",
    ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [
    houseCategory,
    educationCategory,
    foodCategory,
    healthCategory,
    servicesCategory,
    transportCategory,
    tripsCategory,
    shoppingCategory,
    electronicsCategory,
    othersCategory,
  ];

  return (
    <S.Chart>
      <h2>Transactions by tag</h2>
      <ApexCharts
        options={options}
        series={series}
        type="pie"
        className="pieChart"
      ></ApexCharts>
    </S.Chart>
  );
}
