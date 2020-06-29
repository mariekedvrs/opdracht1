let data1 = {
  type:'line', 
  data:{
    labels:['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
    datasets:[{
      label:'Temperatuur',
      data:[
        -60,
        -64,
        -73,
        -69,
        -66,
        -62,
        -58
      ],
      backgroundColor:[
        'rgba(125, 3, 94, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth:1,
      borderColor:'white',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Temperatuur Mars in Celsius',
      fontSize:22
    },
    legend:{
      display:false,
      position:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
   

    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
};


let data2 = {
  type:'doughnut',
  data:{
    labels:['Pasta', 'Rijst', 'Vlees', 'Vis', 'Groenten'],
    datasets:[{
      label:'Liters',
      data:[
        5450,
        2139,
        2212,
        2328,
        3252
      ],
      backgroundColor:[
        'rgba(222, 222, 222, 1)',
        'rgba(181, 181, 181, 1)',
        'rgba(120, 120, 120, 1)',
        'rgba(84, 84, 84, 1)',
        'rgba(41, 41, 41, 1)',
        'rgba(155, 99, 75, 1)',
        'rgba(255, 99, 132, 1)',
      ],
      borderWidth:1,
      borderColor:'black',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Voedselvoorraad in KG',
      position: 'top',
      fontSize:22
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'white'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
};


let data3 = {
  type:'bar',
  data:{
    labels:['Drinkwater','Douches', 'Toiletten', 'Vaatwassers',  'Wasmachines'],
    datasets:[{
      label:'Eten',
      data:[
        9300,
        6001,
        5400,
        900,
        3000,
        1200
      ],
      backgroundColor:[
        'rgba(255, 255, 255, 1)',
        'rgba(213, 226, 251, 1)',
        'rgba(157, 187, 246, 1)',
        'rgba(92, 141, 240, 1)',
        'rgba(19, 79, 201, 1)',
        'rgba(8, 33, 84, 1)',
        'rgba(4, 17, 42, 1)',
        'rgba(255, 30, 32, 1)',
        'rgba(255, 129, 122, 1)',
        'rgba(155, 199, 32, 1)',
        'rgba(55, 99, 132, 1)',
        'rgba(205, 99, 132, 1)',
        'rgba(205, 199, 132, 1)',
        'rgba(155, 99, 75, 1)',
        'rgba(255, 99, 132, 1)',

      ],
      borderWidth:1,
      borderColor:'black',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Watergebruik in Liters',
      fontSize:22
    },
    legend:{
      display:false,
      position:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
};