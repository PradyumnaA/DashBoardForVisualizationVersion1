import React from 'react';
import { Stacked, Pie, Button,SparkingLine} from '../components';

import { earningData,SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import {GoDotFill} from 'react-icons/go'

const Ecommerce = () => {
  const divStyle = {
    color: '#4a5568',
    borderColor: '#2d3748',
    height: '20rem',
    borderRadius: '1.5rem',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    padding: '2rem',
    paddingTop: '2.25rem',
    backgroundColor: '#dbe5db',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginLeft: '5em',
    marginBottom: '1em', // Add some space at the bottom
  };

  const backgroundImage = `url("https://www.shutterstock.com/image-vector/arguing-coworkers-flat-color-vector-600nw-1899090493.jpg")`;

  return (
    <div className='mt-12'>
      <div className='flex flex-wrap justify-center lg:flex-nowrap'>
        <div style={{ ...divStyle, backgroundImage }} className='w-full lg:w-1/2 xl:w-1/3'>
          <div className='flex flex-col lg:flex-row items-start'>
            <div className='flex flex-col items-start'>
              <p className='font-bold text-gray-400'>Earnings</p>
              <p className='text-2xl'>$4500</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
            color="white"
            bgColor="blue"
            text="Download"
            borderRadius="10px"
            />
          </div>
        </div>

        <div
        className='flex m-3 flex-wrap justify-center
        gap-1 items-center'
        >
            {earningData.map((item)=>(
              <div
              key={item.title}
              className='bg-white
              dark:text-gray-200
              dark:bg-seondary-dark-bg
              md:w-56
              p-4 pt-9 rounded-2xl'
              >
                <button type="button"
                style={{
                  color:item.iconColor,
                  backgroundColor:item.iconBg
                }}
                className='text-2xl opacity-0.9
                rounded-full p-4
                hover:drop-shadow-xl'
                >
                  {item.icon}
                </button>
                <p className='mt-3'>
                    <span className='text-lg font-semibold'>
                    {item.amount}
                    </span>
                    <span
                    className={`text-sm text-${item.pcColor}
                    ml-2`}
                    >
                      {item.percentage}
                    </span>
                </p>
                <p
                className='text-sm text-gray-400 mt-1'
                >{item.title}</p>

                </div>
            ))}

        </div>
      </div>
      <div className='flex gap-10 
      flex-wrap justify-center'>
        <div className='bg-white dark:text-gray-200
        dark:bg-secondary-dark-bg
        m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold
            text-xl'>Revenue Updates</p>
            <div className='flex 
            items-center gap-4'>

              <p className='flex 
              items-center 
              gap-2 
              text-gray-600 
              hover:drop-shadow-xl'>
                <div className='ml-5'>
                <span>
                  <GoDotFill/>
                </span>
                <span>Expense</span>
                </div>
               
              </p>
              <p className='flex
               items-center 
               gap-2 
               text-green-400 
               hover:drop-shadow-xl'>
                <div className='ml-5'>
                <span>
                  <GoDotFill/>
                </span>
                <span>Budget</span>
                </div>
               
              </p>
                  
            </div>
          </div>
              <div className='mt-10 flex gap flex-wrap justify-center'>
                  <div className='border-r-1
                  border-color 
                  m-4 pr-10'>
                    <div>
                      <p>
                        <span className='text-3xl
                        font-semibold'>$93000</span>
                        <span className='p-1.5
                        hover:drop-shadow-xl
                        cursor-pointer
                        rounded-full
                        text-white
                        bg-green-400
                        ml-3
                        text-xs'>45%</span>
                      </p>
                      <p className='text-gray-500
                      mt-1'>
                        Budget
                      </p>
                    </div>
                    <div>
                      <p>
                        <span className='text-3xl
                        font-semibold'>$50000</span>
                        
                      </p>
                      <p className='text-gray-500
                      mt-1'>
                        Expense
                      </p>
                    </div>

                    <div className='mt-5'>
                      <SparkingLine
                      color="blue"
                      id="line-sparkline"
                      type="Line"
                      height="80px"
                      width="250px"
                      data={SparklineAreaData}
                      
                      />
                    </div>

                  </div>
              </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
