import{T as p}from"./Task-B0zBud2q.js";import{r as f,c as l,a as i,F as c,b as k,d as s,e as T,o as n,f as u,g as v}from"./vue.esm-bundler-BDMoQPGI.js";import{_}from"./_plugin-vue_export-helper-DlAUqK2U.js";const d={name:"PureTaskList",components:{Task:p},props:{tasks:{type:Array,required:!0,default:()=>[]},loading:{type:Boolean,default:!1}},emits:["archive-task","pin-task"],setup(t,{emit:a}){return t=f(t),{isEmpty:l(()=>t.tasks.length===0),tasksInOrder:l(()=>[...t.tasks.filter(e=>e.state==="TASK_PINNED"),...t.tasks.filter(e=>e.state!=="TASK_PINNED")]),onArchiveTask(e){a("archive-task",e)},onPinTask(e){a("pin-task",e)}}}},g={class:"list-items"},y={key:1,class:"list-items"};function h(t,a,e,o,P,x){const m=T("Task");return n(),i("div",g,[e.loading?(n(),i(c,{key:0},k(6,r=>s("div",{key:r,class:"loading-item"},a[0]||(a[0]=[s("span",{class:"glow-checkbox"},null,-1),s("span",{class:"glow-text"},[s("span",null,"Loading"),u(),s("span",null,"cool"),u(),s("span",null,"state")],-1)]))),64)):o.isEmpty?(n(),i("div",y,a[1]||(a[1]=[s("div",{class:"wrapper-message"},[s("span",{class:"icon-check"}),s("p",{class:"title-message"},"You have no tasks"),s("p",{class:"subtitle-message"},"Sit back and relax")],-1)]))):(n(!0),i(c,{key:2},k(o.tasksInOrder,r=>(n(),v(m,{key:r.id,task:r,onArchiveTask:o.onArchiveTask,onPinTask:o.onPinTask},null,8,["task","onArchiveTask","onPinTask"]))),128))])}const L=_(d,[["render",h]]);d.__docgenInfo={displayName:"PureTaskList",exportName:"default",description:"",tags:{},props:[{name:"tasks",type:{name:"array"},required:!0,defaultValue:{func:!1,value:"[]"}},{name:"loading",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"archive-task"},{name:"pin-task"}],sourceFiles:["C:/xampp/htdocs/storybook_tutorial/taskbox/src/components/PureTaskList.vue"]};export{L as P};