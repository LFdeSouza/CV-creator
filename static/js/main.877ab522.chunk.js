(this["webpackJsonpcv-application"]=this["webpackJsonpcv-application"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n.n(c),a=n(8),i=n.n(a),o=(n(16),n(6)),s=n(3),u=n(1),d=n(10),l=n(0),j=function(e){var t=e.id,n=e.getInfo,c=e.onDelete;return Object(l.jsxs)("div",{id:t,className:"forms",children:[Object(l.jsx)("input",{type:"text",placeholder:"University name",name:"universityName",onChange:function(e){return n("education",e.target.parentElement.id,e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"City",name:"universityCity",onChange:function(e){return n("education",e.target.parentElement.id,e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Degree",name:"degree",onChange:function(e){return n("education",e.target.parentElement.id,e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Subject",name:"subject",onChange:function(e){return n("education",e.target.parentElement.id,e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"From",name:"studyFrom",onChange:function(e){return n("education",e.target.parentElement.id,e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"To",name:"studyTo",onChange:function(e){return n("education",e.target.parentElement.id,e.target.name,e.target.value)}}),Object(l.jsx)("button",{className:"btn",onClick:function(e){return c("education",e.target.parentElement.id)},children:"Delete"})]})},p=function(e){var t=e.educationData,n=e.getInfo,c=e.onDelete,r=e.onAdd,a=e.onPrint;return Object(l.jsxs)("section",{className:"form-sections education",children:[Object(l.jsx)("h2",{children:"Education"}),t.map((function(e){return Object(l.jsx)(j,{id:e.id,onDelete:c,getInfo:n},e.id)})),Object(l.jsx)("button",{className:"btn",onClick:r,children:"Add"}),Object(l.jsx)("button",{className:"btn",onClick:a,children:"Print CV"})]})},m=function(e){var t=e.getInfo;return Object(l.jsxs)("section",{className:"form-sections",children:[Object(l.jsx)("h2",{children:"Personal Information"}),Object(l.jsxs)("div",{className:"forms",children:[Object(l.jsx)("input",{type:"text",placeholder:"Full name",name:"name",onChange:function(e){return t(e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Title",name:"title",onChange:function(e){return t(e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Address",name:"address",onChange:function(e){return t(e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Phone number",name:"phone",onChange:function(e){return t(e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Email",name:"email",onChange:function(e){return t(e.target.name,e.target.value)}}),Object(l.jsx)("textarea",{type:"text",className:"description",placeholder:"Description",name:"description",onChange:function(e){return t(e.target.name,e.target.value)}})]})]})},b=function(e){var t=e.id,n=e.onDelete,c=e.getInfo;return Object(l.jsxs)("div",{id:t,className:"forms",children:[Object(l.jsx)("input",{type:"text",placeholder:"Position",name:"position",onChange:function(e){return c("experience",e.target.parentElement.id,e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"Company",name:"company",onChange:function(e){return c("experience",e.target.parentElement.id,e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"City",name:"workCity",onChange:function(e){return c("experience",e.target.parentElement.id,e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"From",name:"workFrom",onChange:function(e){return c("experience",e.target.parentElement.id,e.target.name,e.target.value)}}),Object(l.jsx)("input",{type:"text",placeholder:"To",name:"workTo",onChange:function(e){return c("experience",e.target.parentElement.id,e.target.name,e.target.value)}}),Object(l.jsx)("button",{className:"btn",onClick:function(e){return n("experience",e.target.parentElement.id)},children:"Delete"})]})},x=function(e){var t=e.experienceField,n=e.onAdd,c=e.onDelete,r=e.getInfo;return Object(l.jsxs)("section",{className:"experience",children:[Object(l.jsx)("h2",{children:"Work experience"}),t.map((function(e){return Object(l.jsx)(b,{id:e.id,onDelete:c,getInfo:r},e.id)})),Object(l.jsx)("button",{className:"btn",onClick:n,children:"Add"})]})},O=function(){return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:"CV Creator"})})},h=function(e){var t=e.personalData;return Object(l.jsxs)("header",{className:"cv-header",children:[Object(l.jsxs)("div",{className:"cv-name-cotainer",children:[Object(l.jsx)("h2",{children:t.name}),Object(l.jsx)("p",{className:"title",children:t.title})]}),Object(l.jsxs)("div",{className:"other-info",children:[Object(l.jsx)("p",{children:"address: ".concat(t.address)}),Object(l.jsx)("p",{children:"phone: ".concat(t.phone)}),Object(l.jsx)("p",{children:"email: ".concat(t.email)})]})]})},g=function(e){var t=e.description;return Object(l.jsx)("p",{className:"cv-description",children:t})},y=g;g.defaultProps={description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."};var f=function(e){var t=e.position,n=e.company,c=void 0===n?"Company":n,r=e.workCity,a=void 0===r?"City":r,i=e.workFrom,o=void 0===i?"From":i,s=e.workTo,u=void 0===s?"to":s;return Object(l.jsxs)("div",{className:"cv-experience-item",children:[Object(l.jsx)("div",{className:"work-experience",children:Object(l.jsx)("p",{children:Object(l.jsx)("strong",{children:"".concat(o," - ").concat(u)})})}),Object(l.jsxs)("div",{className:"position-company",children:[Object(l.jsx)("p",{children:t}),Object(l.jsx)("p",{children:"".concat(c,", ").concat(a)})]})]})},v=function(e){var t=e.workExperienceData;return Object(l.jsxs)("section",{className:"cv-experience-container",children:[Object(l.jsx)("h2",{children:"Work Experience"}),t.map((function(e){return Object(l.jsx)(f,{position:e.position,company:e.company,workCity:e.workCity,workFrom:e.workFrom,workTo:e.workTo},e.id)}))]})},C=function(e){var t=e.studyFrom,n=e.studyTo,c=e.universityName,r=e.universityCity,a=e.degree,i=e.subject;return Object(l.jsxs)("div",{className:"education-item",children:[Object(l.jsx)("div",{className:"work-experience",children:Object(l.jsx)("p",{children:Object(l.jsx)("strong",{children:"".concat(t," - ").concat(n)})})}),Object(l.jsxs)("div",{className:"position-company",children:[Object(l.jsx)("p",{children:"".concat(c,", ").concat(r)}),Object(l.jsx)("p",{children:"".concat(a,": ").concat(i)})]})]})},N=function(e){var t=e.educationData;return Object(l.jsxs)("section",{className:"cv-education-container",children:[Object(l.jsx)("h2",{children:"Education"}),t.map((function(e){return Object(l.jsx)(C,{data:e,studyFrom:e.studyFrom,studyTo:e.studyTo,universityName:e.universityName,universityCity:e.universityCity,degree:e.degree,subject:e.subject},e.id)}))]})},k=n(19),w={personal:{name:"Full Name",title:"title",address:"address",phone:"phone",email:"email"},experience:[{id:Object(k.a)(),position:"Position",company:"Company",workCity:"City",workFrom:"From",workTo:"To"}],education:[{id:Object(k.a)(),universityName:"University",universityCity:"City",degree:"Degree",subject:"Subject",studyFrom:"From",studyTo:"to"}]},F=n(9);var D=function(){var e=Object(c.useState)(w),t=Object(d.a)(e,2),n=t[0],r=t[1],a=function(e,t,c,a){r((function(r){return Object(u.a)(Object(u.a)({},r),{},Object(s.a)({},e,function(e,t,c,r){return n[e].map((function(e){return e.id===t?Object(u.a)(Object(u.a)({},e),{},Object(s.a)({},c,r)):Object(u.a)({},e)}))}(e,t,c,a)))}))},i=function(e,t){r((function(n){return Object(u.a)(Object(u.a)({},n),{},Object(s.a)({},e,Object(o.a)(n[e].filter((function(e){return e.id!==t})))))}))},j=Object(c.useRef)(),b=Object(F.useReactToPrint)({content:function(){return j.current}});return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(O,{}),Object(l.jsxs)("section",{className:"form-section",children:[Object(l.jsx)(m,{getInfo:function(e,t){r((function(n){return Object(u.a)(Object(u.a)({},n),{},{personal:Object(u.a)(Object(u.a)({},n.personal),{},Object(s.a)({},e,t))})}))}}),Object(l.jsx)(x,{experienceField:n.experience,onAdd:function(){return r((function(e){return Object(u.a)(Object(u.a)({},e),{},{experience:[].concat(Object(o.a)(e.experience),[{id:Object(k.a)(),position:"Position",company:"Company",workCity:"City",workFrom:"From",workTo:"To"}])})}))},onDelete:i,getInfo:a}),Object(l.jsx)(p,{educationData:n.education,onAdd:function(){return r((function(e){return Object(u.a)(Object(u.a)({},e),{},{education:[].concat(Object(o.a)(e.education),[{id:Object(k.a)(),universityName:"University",universityCity:"City",degree:"Degree",subject:"Subject",studyFrom:"From",studyTo:"to"}])})}))},onDelete:i,getInfo:a,onPrint:b})]}),Object(l.jsxs)("section",{ref:j,className:"cv-page",children:[Object(l.jsx)(h,{personalData:n.personal}),Object(l.jsx)(y,{description:n.personal.description}),Object(l.jsx)(v,{workExperienceData:n.experience}),Object(l.jsx)(N,{educationData:n.education})]})]})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.877ab522.chunk.js.map