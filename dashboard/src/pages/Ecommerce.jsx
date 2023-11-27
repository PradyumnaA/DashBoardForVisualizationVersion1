import React from 'react';
import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

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
    backGroundSize: 'cover',
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
      <div>
        Revenue here
      </div>
    </div>
  );
};

export default Ecommerce;
