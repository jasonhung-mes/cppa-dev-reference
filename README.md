一、專案定位
本靜態站是給 Developer 參考
-----------------------------------------------------------
二、Sidebar Drawer 命名
ch3 基礎資料與制度設定
ch4 能源時序資料管理
ch5 綠電匹配分析
ch6 轉供策略與分配
ch7 風險保證與調度
ch8 結算與效益分析
ch9 報表與系統治理
-----------------------------------------------------------
三、完整 Sidebar 架構
CPPA Hub
────────────────

▾ ch3 基礎資料與制度設定
    發電案場主檔
    客戶主檔
    CPPA 合約主檔
    電價制度主檔
    電價制度版本
    電價時段明細

▾ ch4 能源時序資料管理
    發電 15 分鐘資料
    用電 15 分鐘資料

▾ ch5 綠電匹配分析
    匹配計算
    匹配結果

▾ ch6 轉供策略與分配
    轉供策略設定
    轉供方案
    轉供分配結果

▾ ch7 風險保證與調度
    履約風險分析
    調度情境試算

▾ ch8 結算與效益分析
    合約結算
    效益分析

▾ ch9 報表與系統治理
    營運監控儀表板
    報表中心
    使用者管理
    RBAC
    操作紀錄
-----------------------------------------------------------
四、Developer 專用 UI Layout
┌────────────────────────────────────┐
│ Header                             │
│ Page Title                         │
│ Breadcrumb                         │
├──────────────┬─────────────────────┤
│              │                     │
│ Sidebar      │ Content             │
│ Drawer       │                     │
│              │                     │
│              │                     │
│              │                     │
└──────────────┴─────────────────────┘

Header 顯示：
ch3 基礎資料與制度設定模組
發電案場主檔
-----------------------------------------------------------
五、專案結構
cppa-dev-reference

index.html

css
layout.css
sidebar.css
components.css
table.css

js
app.js
router.js
menu.js

modules

ch3-master
plant.html
customer.html
contract.html
tariff-plan.html
tariff-version.html
tariff-period.html

ch4-energy
generation.html
consumption.html

ch5-matching
matching.html
matching-result.html

ch6-transfer
transfer-strategy.html
transfer-plan.html
transfer-result.html

ch7-risk
risk-analysis.html
dispatch-simulation.html

ch8-settlement
contract-settlement.html
benefit-analysis.html

ch9-governance
dashboard.html
report-center.html
user-management.html
rbac.html
audit-log.html