import { useEffect, useState } from "react";
import * as S from "./Styled";
import "chartjs-adapter-moment";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getViews } from "../../api/views";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const PageViews = () => {
  const [period, setPeriod] = useState("month");
  const [views, setViews] = useState([]);

  const [chartOptions, setChartOptions] = useState({
    responsive: true,
    plugins: {
      legend: false,
      title: {
        display: false,
        text: "Chart.js Bar Chart",
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
      },
    },
  });
  const [chartData, setChartData] = useState({
    labels: views?.map((data) => data.created),
    datasets: [
      {
        label: "",
        data: views?.map((data) => data.count),
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(238,174,202,1)");
          gradient.addColorStop(1, "rgba(238,174,202,0)");
          return gradient;
        },
        fill: false,
        borderColor: "#1865bb",
        tension: 0.3,
        pointColor: "#1865bb",
        pointStrokeColor: "#fff",
      },
    ],
  });

  useEffect(() => {
    getViews(period).then((response) => {
      for (let i = 0; i <= response.data?.length; i++) {
        if (response.data[i]?.created) {
          console.log(response.data[i]);
          response.data[i].created = response.data[i].created.slice(0, 10);
        }
      }

      response.data = response.data.sort((a, b) => {
        return moment(a.created).diff(b.created);
      });
      setViews(response.data);
      console.log(response.data);

      setChartData({
        labels: response.data?.map((data) => data.created),
        datasets: [
          {
            label: "",
            data: response.data?.map((data) => data.count),
            backgroundColor: (context) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 200);
              gradient.addColorStop(0, "rgba(238,174,202,1)");
              gradient.addColorStop(1, "rgba(238,174,202,0)");
              return gradient;
            },
            fill: false,
            borderColor: "#1865bb",
            tension: 0.3,
          },
        ],
      });
    });
  }, [period]);

  return (
    <S.PageViews>
      <S.Top>
        <S.Title>Посещение</S.Title>
        <S.RightMenu>
          <S.MenuItem
            active={period === "all" && true}
            onClick={() => setPeriod("all")}
          >
            За все время
          </S.MenuItem>
          <S.MenuItem
            active={period === "year" && true}
            onClick={() => setPeriod("year")}
          >
            Год
          </S.MenuItem>
          <S.MenuItem
            active={period === "month" && true}
            onClick={() => setPeriod("month")}
          >
            Месяц
          </S.MenuItem>
        </S.RightMenu>
      </S.Top>
      <S.GraphBlock>
        {views?.length > 0 && <Line options={chartOptions} data={chartData} />}
      </S.GraphBlock>
    </S.PageViews>
  );
};

export default PageViews;
