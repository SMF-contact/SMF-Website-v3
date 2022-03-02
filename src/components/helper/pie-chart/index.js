import { Pie } from '@ant-design/plots';
import "./style.css";
  

function PieChat({data,labelText,ValueNumber}) { 
  const config = {
    appendPadding: 50,
    data, 
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6, 
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
        fill:"#fff",
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    state: {
      active: {
        style: {
          lineWidth: 0,
          fillOpacity: 0.65,
        },
      },
    },
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis', 
        },
        content: labelText+"\n\n+"+ValueNumber,
      },
    },
  };
  return <Pie {...config} />;
}
export default PieChat;