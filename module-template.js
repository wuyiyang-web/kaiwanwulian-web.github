const modules={
 shipper:{name:'货主运输协同中心',tag:'SHIPPER COLLABORATION',intro:'围绕货主运输需求建立线上协同入口，让需求、履约、单据和费用状态清晰可查。',features:[['运输需求发布','录入货物、装卸港、计划时间和运量等基础信息。'],['运力匹配进度','查看需求受理、船舶匹配及调度确认状态。'],['运输过程跟踪','按订单查看关联航次、船舶位置与关键节点。'],['电子单据与对账','集中管理运单、交接记录和结算核对信息。']]},
 shipowner:{name:'船东船户承运中心',tag:'CARRIER OPERATIONS',intro:'面向船东与船户提供货源获取、承运确认、状态上报和航次履约协同。',features:[['货源与任务查看','查看适配货源和待确认的运输任务。'],['报价及接单','提交承运意向并确认船舶与计划安排。'],['船舶状态上报','维护可用运力、当前位置和作业状态。'],['航次履约结算','完成装货、在途、到港、卸货和结算环节。']]},
 dispatch:{name:'运输组织调度中心',tag:'INTELLIGENT DISPATCH',intro:'汇总货源与运力信息，辅助完成船货匹配、航次编排、在途监控和异常处置。',features:[['船货智能匹配','结合船型、载重、位置、航线和时间辅助筛选运力。'],['调度计划编排','形成船舶任务、航次计划和关键节点安排。'],['在途动态监控','融合AIS与物联数据掌握船舶位置和航行状态。'],['到港预测与预警','根据航程和动态信息辅助预测到港时间并提示异常。']]},
 decision:{name:'经营决策数据中心',tag:'OPERATION INTELLIGENCE',intro:'沉淀各业务中心的过程数据，形成船队运营、运输履约和经营分析视图。',features:[['运营数据驾驶舱','集中展示船队、订单、航次和履约概况。'],['运力与货源分析','分析运力分布、货源结构和供需变化。'],['航线与效率分析','观察航线任务、周转效率和节点耗时。'],['风险预警与报告','汇总异常指标，为企业管理和主管部门提供数据支持。']]}
};
const id=document.body.dataset.module,m=modules[id];
document.title=m.name+'｜凯万物联';
document.querySelector('[data-title]').textContent=m.name;document.querySelector('[data-tag]').textContent=m.tag;document.querySelector('[data-intro]').textContent=m.intro;
document.querySelector('[data-features]').innerHTML=m.features.map(([a,b])=>`<div class="feature"><h3>${a}</h3><p>${b}</p></div>`).join('');
