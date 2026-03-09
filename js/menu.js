const menu = [
{
title:"ch3 基礎資料與制度設定",
items:[
{ name:"發電案場主檔", page:"ch3-master/plant.html"},
{ name:"客戶主檔", page:"ch3-master/customer.html"},
{ name:"電號主檔", page:"ch3-master/meter.html"},              
{ name:"CPPA 合約主檔", page:"ch3-master/contract.html"},
{ name:"合約電號關聯", page:"ch3-master/contract-meter.html"}, 
{ name:"電價制度主檔", page:"ch3-master/tariff-plan.html"},
{ name:"電價制度版本", page:"ch3-master/tariff-version.html"},
{ name:"電價時段明細", page:"ch3-master/tariff-period.html"}
]
},
{
title:"ch4 能源時序資料管理",
items:[
{ name:"發電 15 分鐘資料", page:"ch4-energy/generation.html"},
{ name:"用電 15 分鐘資料", page:"ch4-energy/consumption.html"}
]
},
{
title:"ch5 綠電匹配分析",
items:[
{ name:"匹配概覽", page:"ch5-matching/matching-overview.html" },
{ name:"匹配結果", page:"ch5-matching/matching-result.html" },
{ name:"匹配明細", page:"ch5-matching/matching-detail.html" }
]
},
{
title:"ch6 轉供策略與分配",
items:[
{ name:"轉供策略設定", page:"ch6-transfer/transfer-strategy.html" },
{ name:"轉供分配計算", page:"ch6-transfer/transfer-allocation.html" },
{ name:"轉供結果", page:"ch6-transfer/transfer-result.html" }
]
},
{
title:"ch7 風險保證與調度",
items:[
{ name:"履約風險分析", page:"ch7-risk/risk-analysis.html"},
{ name:"調度情境試算", page:"ch7-risk/dispatch-simulation.html"}
]
},
{
title:"ch8 結算與效益分析",
items:[
{ name:"合約結算", page:"ch8-settlement/contract-settlement.html"},
{ name:"效益分析", page:"ch8-settlement/benefit-analysis.html"}
]
},
{
title:"ch9 報表與系統治理",
items:[
{ name:"營運監控儀表板", page:"ch9-governance/dashboard.html"},
{ name:"報表中心", page:"ch9-governance/report-center.html"},
{ name:"使用者管理", page:"ch9-governance/user-management.html"},
{ name:"RBAC", page:"ch9-governance/rbac.html"},
{ name:"操作紀錄", page:"ch9-governance/audit-log.html"}
]
}
];

function renderSidebar(){
const sidebar = document.getElementById("sidebar")
let html=""

menu.forEach((m,i)=>{
html+=`
<div class="menu-group">
<div class="menu-title" onclick="toggleMenu(${i})">
${m.title}
</div>
<div id="submenu-${i}" class="submenu">
${m.items.map(item=>`
<div onclick="loadPage('${item.page}')">
${item.name}
</div>
`).join("")}
</div>
</div>
`
})

sidebar.innerHTML = html
}

function toggleMenu(i){
const el = document.getElementById("submenu-"+i)
el.classList.toggle("open")
}