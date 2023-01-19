import React, { useContext, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { ProductContext } from '../HomePage/HomePage';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryPieChart = () => {


    const [allProducts] = useContext(ProductContext)


 const categoryNames = []
 
 
 allProducts?.map(product => {
if(categoryNames.indexOf(product.category) === -1){
    categoryNames.push(product.category)
}


})

console.log(categoryNames);




    const data = {
        labels : categoryNames?.map(category => category),
        datasets: [
          {
            label: 'No of products',
            data: allProducts?.map(product => product?.category.length),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
          
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
         
            ],
            borderWidth: 1,
          },
        ],
      };



    return (
        <div className='container h-80'>
            <Pie data={data} />

    
        </div>
    );
};

export default CategoryPieChart;