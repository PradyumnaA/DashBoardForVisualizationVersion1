import React from 'react'
import {SparklineComponent,Inject,SparklineTooltip, Sparkline} from '@syncfusion/ej2-react-charts'
const SparkingLine = ({
id,height,width,color,data,type,currentColor

}) => {
  return (
        <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{color:currentColor,width:2}}
        dataSource={data}
        xName='x'
        yName='y'
        type={type}
        
        >
                <Inject services={[SparklineTooltip]}/>
            
        </SparklineComponent>
  )
}

export default SparkingLine