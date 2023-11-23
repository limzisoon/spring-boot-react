(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,t,n){},26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),c=n(19),a=n.n(c),h=(n(26),n(17),n(35)),l=n(36),r=n(11),d=n(2);class o extends s.Component{constructor(e){super(e),this.state={isOpen:!1},this.toggle=this.toggle.bind(this)}toggle(){this.setState({isOpen:!this.state.isOpen})}render(){return Object(d.jsx)(h.a,{color:"dark",dark:!0,expand:"md",children:Object(d.jsx)(l.a,{tag:r.b,to:"/",children:"Home"})})}}var j=n(37),m=n(38);class b extends s.Component{render(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(o,{}),Object(d.jsx)(j.a,{fluid:!0,children:Object(d.jsx)(m.a,{color:"link",children:Object(d.jsx)(r.b,{to:"/clients",children:"Clients"})})})]})}}var p=b,x=n(6),O=n(39),u=n(40);class g extends s.Component{constructor(e){super(e),this.state={clients:[]},this.remove=this.remove.bind(this)}componentDidMount(){fetch("/clients").then((e=>e.json())).then((e=>this.setState({clients:e})))}async remove(e){await fetch("/clients/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((()=>{let t=[...this.state.clients].filter((t=>t.id!==e));this.setState({clients:t})}))}render(){const{clients:e}=this.state,t=e.map((e=>Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{style:{whiteSpace:"nowrap"},children:e.name}),Object(d.jsx)("td",{children:e.email}),Object(d.jsx)("td",{children:Object(d.jsxs)(O.a,{children:[Object(d.jsx)(m.a,{size:"sm",color:"primary",tag:r.b,to:"/clients/"+e.id,children:"Edit"}),Object(d.jsx)(m.a,{size:"sm",color:"danger",onClick:()=>this.remove(e.id),children:"Delete"})]})})]},e.id)));return Object(d.jsxs)("div",{children:[Object(d.jsx)(o,{}),Object(d.jsxs)(j.a,{fluid:!0,children:[Object(d.jsx)("div",{className:"float-right",children:Object(d.jsx)(m.a,{color:"success",tag:r.b,to:"/clients/new",children:"Add Client"})}),Object(d.jsx)("h3",{children:"Clients"}),Object(d.jsxs)(u.a,{className:"mt-4",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{width:"30%",children:"Name"}),Object(d.jsx)("th",{width:"30%",children:"Email"}),Object(d.jsx)("th",{width:"40%",children:"Actions"})]})}),Object(d.jsx)("tbody",{children:t})]})]})]})}}var C=g,f=n(41),v=n(42),y=n(43),S=n(44);class w extends s.Component{constructor(e){super(e),this.emptyItem={name:"",email:""},this.state={item:this.emptyItem},this.handleChange=this.handleChange.bind(this),this.handleSubmit=this.handleSubmit.bind(this)}async componentDidMount(){if("new"!==this.props.match.params.id){const e=await(await fetch("/clients/".concat(this.props.match.params.id))).json();this.setState({item:e})}}handleChange(e){const t=e.target,n=t.value,s=t.name;let i={...this.state.item};i[s]=n,this.setState({item:i})}async handleSubmit(e){e.preventDefault();const{item:t}=this.state;await fetch("/clients"+(t.id?"/"+t.id:""),{method:t.id?"PUT":"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}),this.props.history.push("/clients")}render(){const{item:e}=this.state,t=Object(d.jsx)("h2",{children:e.id?"Edit Client":"Add Client"});return Object(d.jsxs)("div",{children:[Object(d.jsx)(o,{}),Object(d.jsxs)(j.a,{children:[t,Object(d.jsxs)(f.a,{onSubmit:this.handleSubmit,children:[Object(d.jsxs)(v.a,{children:[Object(d.jsx)(y.a,{for:"name",children:"Name"}),Object(d.jsx)(S.a,{type:"text",name:"name",id:"name",value:e.name||"",onChange:this.handleChange,autoComplete:"name"})]}),Object(d.jsxs)(v.a,{children:[Object(d.jsx)(y.a,{for:"email",children:"Email"}),Object(d.jsx)(S.a,{type:"text",name:"email",id:"email",value:e.email||"",onChange:this.handleChange,autoComplete:"email"})]}),Object(d.jsxs)(v.a,{children:[Object(d.jsx)(m.a,{color:"primary",type:"submit",children:"Save"})," ",Object(d.jsx)(m.a,{color:"secondary",tag:r.b,to:"/clients",children:"Cancel"})]})]})]})]})}}var E=Object(x.f)(w);class T extends s.Component{render(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)(x.c,{children:[Object(d.jsx)(x.a,{path:"/",exact:!0,component:p}),Object(d.jsx)(x.a,{path:"/clients",exact:!0,component:C}),Object(d.jsx)(x.a,{path:"/clients/:id",component:E})]})})}}var k=T;var D=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((t=>{let{getCLS:n,getFID:s,getFCP:i,getLCP:c,getTTFB:a}=t;n(e),s(e),i(e),c(e),a(e)}))};n(33);a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),D()}},[[34,1,2]]]);
//# sourceMappingURL=main.e032c1f7.chunk.js.map