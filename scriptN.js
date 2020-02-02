
am4core.ready(function() {
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    chart.data = [{
		name: "Северная Америка",
		fixed: true,
		x: am4core.percent(50),
		y: am4core.percent(50),
            children: [
			{
                name: "Географическое\n положение",
                children: [
					{ name: "Находится в Западном полушарии", value: 50},
                    { name: "S=24 709 000 км²² ", value: 50 }
                ]
            },
            {
                name: "Рельеф",
                children: [
					{ name: "Преобладают равнины", value: 135 },
					{ name: "Горы занимают 1/3",value: 300}
				],						
			    children: [
					{ name: "Низменные равнины",
					  children: [
						{ name: "Центральная", value: 130 },
						{ name: "Миссисипская низменность", value: 250 }, 
						{ name: "Великие равнины", value: 160 }									       						
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
					    { name: "горы Апплачи", value: 130 },
					    { name: "г.Митчелл", value: 250 }, 
						{ name: "хреет Кордильеры", value: 130 },
						{ name: "г.Мак-Кинли", value: 250 }, 
						{ name: "хребет-Скалистые горы", value: 250 }
					  ]
					}
			    ]
		    },
            {      
			    name: "Полезные\n ископаемые",
				children: [
					{ name: "Золото", value: 130 },
					{ name: "Золото", value: 130 },
					{ name: "Железные руды", value: 130 },			
                    { name: "Руды металлов", value: 130 },   
					{ name: "Каменный уголь", value: 130 },			
					{ name: "Нефть",value: 130	},
					{ name: "Природный газ",value: 130	}
                ]          
			},			 															
            {
                name: "Климат",
                children: [
					{  name: "Климатические\n пояса", 
					   children: [
						   {name: "Умеренный",value: 53},  
						   {name: "Субтропический",value: 30},
						   {name: "Тропический",value: 30},
						   {name: "Арктческий",value: 30},
						   {name: "Субарктический",value: 30},
						   {name: "Субэкваториальный",value: 30}
					   ]         
					}
                ]     
            },             
            {
				name: "Воды",
				children: [
					{ name: "Реки",
					  children: [
						   {name: "Миссисипи с притоком Миссури",value: 53},
						   {name: "Макензи с истоком Атабаска",value: 53},  
						   {name: "р.Св.Лаврентия",value: 30},
						   {name: "Колумбия",value: 30},
						   {name: "Колорадо",value: 30},
						   {name: "Большой каньон",value: 30},
						   {name: "Юкон",value: 30},
						   {name: "Ниагара",value: 30}
					  ]     
					},
					{ name: "Озера",
					  children: [
						   {name: "Великие озера",value: 53},  
						   {name: "Онтарио",value: 53}, 
						   {name: "Виннипег",value: 53}, 
						   {name: "Большое соленое озеро",value: 30},
						   {name: "Эри",value: 30}
					  ]     
					}
				]
			},
            {
                name: "Природные\n зоны",
                children: [
                  { name: "Арктические пустыни", value: 53 },     
			      { name: "Тундра",value: 53},
				  { name: "Смешанные леса",value: 53},
				  { name: "Широколиственные леса",value: 53},
				  { name: "Степи", value: 53}
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