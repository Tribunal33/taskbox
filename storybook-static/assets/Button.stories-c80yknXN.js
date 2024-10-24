import{f as C}from"./index-DLz49pOH.js";import{r as x,c as l,a as v,z as w,n as K,A as I,o as q}from"./vue.esm-bundler-BDMoQPGI.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";const S={name:"my-button",props:{label:{type:String,required:!0},primary:{type:Boolean,default:!1},size:{type:String,validator:function(e){return["small","medium","large"].indexOf(e)!==-1}},backgroundColor:{type:String}},emits:["click"],setup(e,{emit:r}){return e=x(e),{classes:l(()=>({"storybook-button":!0,"storybook-button--primary":e.primary,"storybook-button--secondary":!e.primary,[`storybook-button--${e.size||"medium"}`]:!0})),style:l(()=>({backgroundColor:e.backgroundColor})),onClick(){r("click")}}}};function N(e,r,z,a,P,A){return q(),v("button",{type:"button",class:K(a.classes),onClick:r[0]||(r[0]=(..._)=>a.onClick&&a.onClick(..._)),style:I(a.style)},w(z.label),7)}const O=J(S,[["render",N]]);S.__docgenInfo={displayName:"my-button",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string"},required:!0},{name:"primary",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",type:{name:"string"},values:["small","medium","large"]},{name:"backgroundColor",type:{name:"string"}}],events:[{name:"click"}],sourceFiles:["C:/xampp/htdocs/storybook_tutorial/taskbox/src/components/Button.vue"]};const T={title:"Example/Button",component:O,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},backgroundColor:{control:"color"}},args:{onClick:C()}},t={args:{primary:!0,label:"Button"}},o={args:{label:"Button"}},s={args:{size:"large",label:"Button"},parameters:{design:{type:"figma",url:"https://www.figma.com/design/Wf7sDlUg2372jaKKTJ0Mgz/OJS-3.4-3.5?node-id=6351-5268&t=IQyRANnZmoe4PqIK-4"}}},n={args:{size:"small",label:"Button"}};var m,c,i;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var u,d,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,y,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/design/Wf7sDlUg2372jaKKTJ0Mgz/OJS-3.4-3.5?node-id=6351-5268&t=IQyRANnZmoe4PqIK-4"
    }
  }
}`,...(b=(y=s.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,k,B;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...(B=(k=n.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};const h=["Primary","Secondary","Large","Small"];export{s as Large,t as Primary,o as Secondary,n as Small,h as __namedExportsOrder,T as default};
