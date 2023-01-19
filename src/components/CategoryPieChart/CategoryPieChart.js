import React, { useContext, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { ProductContext } from "../HomePage/HomePage";

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryPieChart = () => {
  const [allProducts] = useContext(ProductContext);

  let electronics = 0;
  let jewelery = 0;
  let mensClothing = 0;
  let womensClothing = 0;

  // counting the total number of product in a same category and  storing category names in an unique array to use them as a label
  const categoryNames = [];
  allProducts?.map((product) => {
    if (product?.category === "electronics") {
      electronics++;
      console.log(electronics);
    }
    if (product?.category === "jewelery") {
      jewelery++;
      console.log(electronics);
    }
    if (product?.category === "men's clothing") {
      mensClothing++;
      console.log(electronics);
    }
    if (product?.category === "women's clothing") {
      womensClothing++;
      console.log(electronics);
    }

    if (categoryNames.indexOf(product.category) === -1) {
      categoryNames.push(product.category);
    }
  });

  const data = {
    labels: categoryNames?.map((category) => category),
    datasets: [
      {
        label: "No of products",
        data: [mensClothing, jewelery, electronics, womensClothing],
        backgroundColor: ["red", "aqua", "blue", "gray"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container h-80">
      <Pie data={data} />
    </div>
  );
};

export default CategoryPieChart;
