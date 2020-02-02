am4core.ready(function() {
    am4core.useTheme(am4themes_animated);

    var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
    var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

    chart.data = [{
		name: "Австралия",
		fixed: true,
		x: am4core.percent(50),
		y: am4core.percent(50),
            children: [
			{
                name: "Географическое\n положение",
                children: [
                    { name: "Большая часть находится в тропическом поясе", value: 50},
                    { name: "S=7 692 024 км² ", value: 50 }
                ]
            },
            {
                name: "Рельеф",
                children: [
					{ name: "Преобладают низменности", value: 135 },
					{ name: "Плоскогорье высотой 400-600м",value: 300}
				]	
					
			},		                    		
			{   name: "Возвышенности",	
				children: [
					{ name: "Большой Водораздельный Хребет", value: 130 },
					{ name: "Австралийские Альпы (Снежные горы)", value: 250 }, 
					{ name: "гора Косцюшко(2230м)", value: 160 },									       		
				]    				
			},							
            {      
			    name: "Полезные\n ископаемые",
				children: [
					{ name: "Свинец", value: 130 },
					{ name: "Золото", value: 130 },			
                    { name: "Железная руда", value: 130 },   
					{ name: "Урановая руда", value: 130 },			
					{ name: "Цветные металлы",value: 130	}		
                ]          
			},			 															
            {
                name: "Климат",
                children: [
					{  name: "Температура",
					   children: [
						  {name: "Лето:\n выше +40",  value: 130 },   
						  {name: "Зима:\n от +24 - 28", value: 87 }
					   ]         
					},	                                 
					{  name: "Осадки",
					   children: [
						   {name: "Менее 250 мм в год",value: 53},  
					   ]
					},
					{  name: "Климатические\n пояса", 
					   children: [
						   {name: "Субтропический",value: 53},  
						   {name: "Субэкваториальный",value: 30},
						   {name: "Тропические",value: 30}
					   ]         
					}
                ]     
            },             
            {
				name: "Воды",
				children: [
					{name: "Сист. временных пересыхающих рек",value: 53},  
				    {name: "р.Муррей с притоком Дарлинг",value: 30},
					{name: "о.Эйр",value: 30},
					{name: "Большинство озер засолены и не имеют стока",value: 400}	
				]
			},
            {
                name: "Природные\n зоны",
                children: [
                  { name: "Тропические пустыни", value: 53 },     
			      { name: "Тропические полупустыни",value: 53},
				  { name: "Экваториальные леса", value: 53},
				  { name: "Субэкваториальные леса", value: 53}
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