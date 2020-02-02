
am4core.ready(function() {
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    chart.data = [{
		name: "Южная Америка",
		fixed: true,
		x: am4core.percent(50),
		y: am4core.percent(50),
            children: [
			{
                name: "Географическое\n положение",
                children: [
                    { name: "Пересекается\n экватором\n в северной части", value: 50},
					{ name: "Находится в Западном полушарии", value: 50},
                    { name: "S=17 850 000 км² ", value: 50 }
                ]
            },
            {
                name: "Рельеф",
                children: [
					{ name: "Восточная часть - равнинная", value: 135 },
					{ name: "Западная чать - горная",value: 300}
				],						
			    children: [
					{ name: "Низменные равнины",
					  children: [
						{ name: "Амазонская", value: 130 },
						{ name: "Оринокская", value: 250 }, 
						{ name: "Ла-Платская", value: 160 }									       						
					  ]
				    }, 
					{ name: "Плоскогорья",
					  children: [
						{ name: "Бразильское", value: 130 },
						{ name: "Гвианское", value: 250 } 
					  ]
					},
					{ name: "Возвышенности",
					  children: [
					    { name: "горы Анды", value: 130 },
					    { name: "г.Аконкагуа", value: 250 }, 
						{ name: "в.Котопахи", value: 130 },
						{ name: "в.Чимборасо", value: 250 }
					  ]
					}
			    ]
		    },
            {      
			    name: "Полезные\n ископаемые",
				children: [
					{ name: "Уголь", value: 130 },
					{ name: "Уран", value: 130 },			
                    { name: "Марганцевые\n руды", value: 130 },   
					{ name: "Железные\n руды", value: 130 },			
					{ name: "Нефть",value: 130	},
					{ name: "Природный газ",value: 130	}
                ]          
			},			 															
            {
                name: "Климат",
                children: [
					{  name: "Температура",
					   children: [
						  {name: "Лето:\n до +15",  value: 130 },   
						  {name: "Зима:\n от до -30", value: 87 }
					   ]         
					},	                                 
					{  name: "Осадки",
					   children: [						    
						   {name: "2000-3000 мм в год",value: 30}
					   ]
					},
					{  name: "Климатические\n пояса", 
					   children: [
						   {name: "Умеренный",value: 53},  
						   {name: "Субтропический",value: 30},
						   {name: "Экваториально-тропический",value: 30}
					   ]         
					}
                ]     
            },             
            {
				name: "Воды",
				children: [
					{ name: "Реки",
					  children: [
						   {name: "Амазонка",value: 53},  
						   {name: "Парана",value: 30},
						   {name: "Ориноко",value: 30}
					  ]     
					},
					{ name: "Озера",
					  children: [
						   {name: "Маракайбо",value: 53},  
						   {name: "Титикака",value: 30}
					  ]     
					},
					{ name: "Водопады", 
					  children: [
						   {name: "Анхель",value: 53},  
						   {name: "Игуасу",value: 30}
					  ]
					}
				]
			},
            {
                name: "Природные\n зоны",
                children: [
                  { name: "Экваториальные\n леса", value: 53 },     
			      { name: "Степи",value: 53},
				  { name: "Саванны",value: 53},
				  { name: "Полупустыни",value: 53},
				  { name: "Пустыни", value: 53}
                ]
        }]
    }];

    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.children = "children";
    networkSeries.nodes.template.tooltipText = "{name}";
    networkSeries.nodes.template.fillOpacity = 1;
    networkSeries.manyBodyStrength = -30;
    networkSeries.links.template.strength = 0.8;
	networkSeries.minRadius = am4core.percent(4);
	networkSeries.dataFields.fixed = "fixed";
	networkSeries.dataFields.x = "x";
	networkSeries.dataFields.y = "y";
	networkSeries.maxLevels = 2;

    networkSeries.nodes.template.label.text = "{name}"
    networkSeries.fontSize = 14;     
    console.log(networkSeries);
}); 