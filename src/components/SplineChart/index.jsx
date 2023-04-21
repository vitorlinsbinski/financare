import ApexCharts from "react-apexcharts";
import * as S from "./style";
import { useContext } from "react";
import FormContext from "../../Context/FormContext";
import { useEffect } from "react";

export function SplineChart() {
  const { finances } = useContext(FormContext);

  const dateFinances = finances?.map((finance) => {
    return finance.date;
  });

  const incomeFinances = finances
    ?.filter((finance) => {
      return !finance.isExpense;
    })
    .map((finance) => {
      return finance.value;
    });

  const expenseFinances = finances
    ?.filter((finance) => {
      return finance.isExpense;
    })
    .map((finance) => {
      return finance.value;
    });

  const options = {
    xaxis: {
      type: "datetime",
      categories: dateFinances,
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    chart: {
      height: 350,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    chart: {
      foreColor: "#797E9C",
    },

    colors: ["#1FCB4F", "#F9BA33"],
  };

  const series = [
    {
      name: "Income",
      data: incomeFinances,
    },
    {
      name: "Expenses",
      data: expenseFinances,
    },
  ];

  return (
    <S.Chart>
      <h2>Income vs Expenses</h2>
      <ApexCharts options={options} series={series} type="area"></ApexCharts>
    </S.Chart>
  );
}
