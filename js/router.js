
// Router with full ECharts support (Dashboard charts unchanged)

function loadPage(page){

fetch("modules/" + page)
.then(res => res.text())
.then(html => {

document.getElementById("content").innerHTML = html

setBreadcrumb(page)

setTimeout(() => {
initPage(page)
},50)

})

}

function setBreadcrumb(page){

const parts = page.split("/")
const module = parts[0] || ""
const file = (parts[1] || parts[0] || "").replace(".html","")

document.getElementById("breadcrumb").innerText =
module + " / " + file

}

/* -------------------------
PAGE INITIALIZER
------------------------- */

function initPage(page){

if(page.includes("dashboard")){
initDashboardCharts()
}

/* ch4 */
if(page.includes("generation")){
initGenerationChart()
}

if(page.includes("consumption")){
initConsumptionChart()
}

/* ch5 */
if(page.includes("matching-overview")){
initMatchingOverviewChart()
}

if(page.includes("matching-result")){
initMatchingResultChart()
}

/* ch6 */
if(page.includes("transfer-strategy")){
initTransferStrategyChart()
}

if(page.includes("transfer-allocation")){
initTransferAllocationChart()
}

if(page.includes("transfer-result")){
initDispatchCharts()
}

/* ch7 */
if(page.includes("risk-analysis")){
initRiskCharts()
}

if(page.includes("dispatch-simulation")){
initDispatchSimulationChart()
}

/* ch8 */
if(page.includes("contract-settlement")){
initSettlementChart()
}

if(page.includes("benefit-analysis")){
initBenefitChart()
}

}

/* -------------------------
DASHBOARD (UNCHANGED)
------------------------- */

function initDashboardCharts(){
initTrendChart()
initPlantChart()
initGaugeChart()
}

/* Dashboard trend */

function initTrendChart(){

const el = document.getElementById("trendChart")
if(!el) return

const chart = echarts.init(el)

chart.setOption({

tooltip:{trigger:"axis"},

legend:{data:["Generation","Consumption"]},

xAxis:{
type:"category",
data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]
},

yAxis:{type:"value",name:"MWh"},

series:[
{
name:"Generation",
type:"line",
smooth:true,
areaStyle:{},
lineStyle:{color:"#2E7D32",width:3}, areaStyle:{opacity:0.35},
data:[80,100,120,140,160,150,170]
},
{
name:"Consumption",
type:"line",
smooth:true,
areaStyle:{},
lineStyle:{color:"#1E88E5",width:3}, areaStyle:{opacity:0.35},
data:[90,110,130,150,155,165,180]
}
]

})

}

function initPlantChart(){

const el = document.getElementById("plantChart")
if(!el) return

const chart = echarts.init(el)

chart.setOption({

xAxis:{type:"category",data:["Solar A","Solar B","Wind C","Solar D"]},
yAxis:{type:"value",name:"MWh"},

series:[{
type:"bar",
itemStyle:{color:"#66BB6A"},
data:[4.5,3.9,3.1,2.7]
}]

})

}

function initGaugeChart(){

const el = document.getElementById("matchGauge")
if(!el) return

const chart = echarts.init(el)

chart.setOption({

series:[{
type:"gauge",
progress:{show:true,width:14},
axisLine:{
lineStyle:{
width:14,
color:[
[0.6,"#E53935"],
[0.85,"#FFB300"],
[1,"#2E7D32"]
]
}
},
detail:{formatter:"{value}%"},
data:[{value:92,name:"Matching"}]
}]

})

}

/* -------------------------
CH4 generation
------------------------- */

function initGenerationChart(){

const curve = document.getElementById("generationChart")
if(curve){

const chart = echarts.init(curve)

chart.setOption({

tooltip:{trigger:"axis"},

xAxis:{
type:"category",
data:["00","03","06","09","12","15","18","21"]
},

yAxis:{type:"value",name:"MW"},

series:[{
name:"Generation",
type:"line",
smooth:true,
areaStyle:{},
data:[1.2,1.8,2.1,1.9,1.7,1.5,1.3,1.0]
}]

})
}

const rank = document.getElementById("plantGenerationRank")

if(rank){

const chart = echarts.init(rank)

chart.setOption({

xAxis:{type:"category",data:["Solar A","Solar B","Wind C"]},
yAxis:{type:"value",name:"MWh"},

series:[{
type:"bar",
data:[4.5,3.8,3.1]
}]

})
}

}

/* -------------------------
CH4 consumption
------------------------- */

function initConsumptionChart(){

const load = document.getElementById("consumptionChart")

if(load){

const chart = echarts.init(load)

chart.setOption({

tooltip:{trigger:"axis"},

xAxis:{
type:"category",
data:["00","03","06","09","12","15","18","21"]
},

yAxis:{type:"value"},

series:[{
type:"line",
smooth:true,
areaStyle:{},
data:[1.1,1.3,1.7,2.0,2.4,2.1,1.8,1.4]
}]

})
}

const pie = document.getElementById("demandStructureChart")

if(pie){

const chart = echarts.init(pie)

chart.setOption({

series:[{
type:"pie",
radius:"65%",
data:[
{value:45,name:"Customer A"},
{value:35,name:"Customer B"},
{value:20,name:"Customer C"}
]
}]

})
}

}

/* -------------------------
CH5 matching overview
------------------------- */

function initMatchingOverviewChart(){

const el = document.getElementById("matchingOverviewChart")
if(!el) return

const chart = echarts.init(el)

chart.setOption({

xAxis:{type:"category",data:["Solar A","Solar B","Wind C"]},
yAxis:{type:"value",name:"Matching %"},

series:[{
type:"bar",
data:[92,88,84]
}]

})

}

/* -------------------------
CH5 matching result
------------------------- */

function initMatchingResultChart(){

const el = document.getElementById("matchingResultChart")
if(!el) return

const chart = echarts.init(el)

chart.setOption({

series:[{
type:"pie",
radius:"60%",
data:[
{name:"Matched",value:75},
{name:"Unmatched",value:25}
]
}]

})

}

/* -------------------------
CH6 strategy
------------------------- */

function initTransferStrategyChart(){

const el = document.getElementById("transferStrategyChart")
if(!el) return

const chart = echarts.init(el)

chart.setOption({

series:[{
type:"pie",
data:[
{value:40,name:"比例分配(RATIO)"},
{value:30,name:"固定電量分配(VOLUME)"},
{value:30,name:"混合分配(HYBRID)"}
]
}]

})

}

/* -------------------------
CH6 allocation
------------------------- */

function initTransferAllocationChart(){

const el = document.getElementById("transferAllocationChart")
if(!el) return

const chart = echarts.init(el)

const data = [
{name:"Plant A", value:5},
{name:"Plant B", value:4},
{name:"Plant C", value:3}
]

chart.setOption({

xAxis:{
type:"category",
data:data.map(d => d.name)
},

yAxis:{
type:"value",
name:"電量 (MWh)"
},

series:[{
type:"bar",
data:data.map(d => d.value)
}]

})

}

/* -------------------------
CH6 result (Sankey)
------------------------- */

function initDispatchCharts(){

const el = document.getElementById("dispatchFlow")
if(!el) return

const chart = echarts.init(el)

chart.setOption({
series:[{
type:"sankey", emphasis:{focus:"adjacency"}, lineStyle:{color:"gradient",curveness:0.5},

data:[
{name:"Solar A"},
{name:"Solar B"},
{name:"Wind C"},
{name:"Customer A"},
{name:"Customer B"}
],

links:[
{source:"Solar A",target:"Customer A",value:5},
{source:"Solar B",target:"Customer B",value:4},
{source:"Wind C",target:"Customer A",value:3},
{source:"Solar B",target:"Customer A",value:1}
]

}]

})

}

/* -------------------------
CH7 risk
------------------------- */

function initRiskCharts(){

const el = document.getElementById("riskHeatmap")
if(!el) return

const chart = echarts.init(el)

chart.setOption({

tooltip:{
  position:"top"
},

xAxis:{
  type:"category",
  data:["Mon","Tue","Wed","Thu","Fri"]
},

yAxis:{
  type:"category",
  data:["Solar A","Solar B","Wind C"]
},

visualMap:{
  min:0,
  max:100,
  orient:"horizontal",
  left:"center",
  bottom:10,
  calculable:true,
  inRange:{
    color:["#1B5E20","#66BB6A","#FDD835","#FB8C00","#E53935"] // 綠→黃→紅
  }
},

series:[{
  type:"heatmap",

  data:[
    // Solar A
    [0,0,20],[1,0,35],[2,0,60],[3,0,80],[4,0,90],

    // Solar B
    [0,1,15],[1,1,30],[2,1,50],[3,1,70],[4,1,85],

    // Wind C
    [0,2,10],[1,2,25],[2,2,45],[3,2,60],[4,2,75]
  ],

  label:{
    show:true
  },

  itemStyle:{
    borderWidth:1,
    borderColor:"#ffffff"
  }

}]

})

}

/* -------------------------
CH7 dispatch simulation
------------------------- */

function initDispatchSimulationChart(){

const el = document.getElementById("dispatchSimulationChart")
if(!el) return

const chart = echarts.init(el)

chart.setOption({

tooltip:{trigger:"axis"},

xAxis:{
type:"category",
data:["Scenario A","Scenario B","Scenario C"]
},

yAxis:{type:"value"},

series:[{
type:"line",
data:[80,95,88]
}]

})

}

/* -------------------------
CH8 settlement
------------------------- */

function initSettlementChart(){

const el = document.getElementById("settlementChart")
if(!el) return

const chart = echarts.init(el)

chart.setOption({

xAxis:{
type:"category",
data:["10月","11月","12月"]
},

yAxis:{
type:"value",
name:"電量 (MWh)"
},

series:[{
type:"bar",
data:[14.2,13.6,14.8]
}]

})

}

/* -------------------------
CH8 benefit
------------------------- */

function initBenefitChart(){

const el = document.getElementById("benefitChart")
if(!el) return

const chart = echarts.init(el)

chart.setOption({

tooltip:{
trigger:"axis"
},

legend:{
data:["減碳量","成本節省"]
},

xAxis:{
type:"category",
data:["效益"]
},

yAxis:[
{
type:"value",
name:"減碳量 (tCO₂)",
axisLine:{
show:true,
lineStyle:{
color:"#2ecc71"
}
},
axisLabel:{
color:"#2ecc71"
}
},
{
type:"value",
name:"成本節省 ($)",
axisLine:{
show:true,
lineStyle:{
color:"#3498db"
}
},
axisLabel:{
color:"#3498db"
}
}
],

series:[
{
name:"減碳量",
type:"bar",
data:[21.3],
itemStyle:{
color:"#2ecc71"
}
},
{
name:"成本節省",
type:"bar",
yAxisIndex:1,
data:[6200],
itemStyle:{
color:"#3498db"
}
}
]

})

}
