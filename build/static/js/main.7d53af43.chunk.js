(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),o=t.n(u),c=t(4),l=t(2),i=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,"Filter by name:",r.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.onSubmit,t=e.onChangeName,a=e.onChangeNum,u=e.valueName,o=e.valueNumber;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"Name:",r.a.createElement("input",{value:u,onChange:t})),r.a.createElement("div",null,"Number:",r.a.createElement("input",{value:o,onChange:a})),r.a.createElement("button",{type:"submit"},"add"))},s=function(e){var n=e.persons,t=e.filterIn,a=e.deleteUser;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,n){return r.a.createElement("li",{key:e.name}," ",e.name," - ",e.number,r.a.createElement("button",{onClick:function(){return a(e)}},"Delete"))}))},f=t(3),d=t.n(f),b="/api/persons",h=function(){return d.a.get(b).then((function(e){return e.data}))},v=function(e){return d.a.post(b,e).then((function(e){return e.data}))},E=function(e,n){return d.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return d.a.delete("".concat(b,"/").concat(e),e).then((function(e){return e.data}))},g=function(e){var n=e.message,t=e.errorMessage;return null===n&&null===t?null:null!==n?r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:20}},r.a.createElement("h2",null,n)):null!==t?r.a.createElement("div",{style:{color:"red",fontStyle:"italic",fontSize:20}},r.a.createElement("h2",null,t)):void 0},O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),f=Object(l.a)(o,2),d=f[0],b=f[1],O=Object(a.useState)(""),j=Object(l.a)(O,2),C=j[0],w=j[1],S=Object(a.useState)(""),N=Object(l.a)(S,2),y=N[0],k=N[1],T=Object(a.useState)(""),D=Object(l.a)(T,2),L=D[0],I=D[1],R=Object(a.useState)(""),z=Object(l.a)(R,2),A=z[0],J=z[1];Object(a.useEffect)((function(){h().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(i,{value:y,onChange:function(e){k(e.target.value)}}),r.a.createElement("h2",null,"Add a new contact: "),r.a.createElement(m,{onSubmit:function(e){e.preventDefault();var n={name:d,number:C},a=t.some((function(e){return e.name.toLowerCase()===d.toLowerCase()}));t.some((function(e){return e.number===C}));if(a){var r=t.find((function(e){return e.name===d})),o=Object(c.a)(Object(c.a)({},r),{},{number:C}),l=r.id;window.confirm("Overwrite number for:  ".concat(d,"?"))&&E(l,o).then((function(){u(t.map((function(e){return e.id!==l?e:o}))),I("Overwrote: ".concat(d)),setTimeout((function(){I(null)}),3e3)})).catch((function(e){J("Error updating: ".concat(d)),setTimeout((function(){J(null)}),3e3)}))}else v(n).then((function(e){u(t.concat(e)),I("Added: ".concat(d)),setTimeout((function(){I(null)}),3e3)})).catch((function(e){J(e.response.data.error.message),setTimeout((function(){J(null)}),3e3),console.log("ERROR: ".concat(e.response.data.error.message))})),b(""),w("")},onChangeName:function(e){b(e.target.value)},onChangeNum:function(e){w(e.target.value)},valueName:d,valueNumber:C}),r.a.createElement(g,{message:L,errorMessage:A}),r.a.createElement("h2",null,"Names - numbers"),r.a.createElement("ol",null,r.a.createElement(s,{persons:t,filterIn:y,deleteUser:function(e){window.confirm("Delete user ".concat(e.name,"?"))&&p(e.id).then((function(){var n=t.filter((function(n){return n.id!==e.id}));u(n),I("Deleted: ".concat(e.name)),setTimeout((function(){I(null)}),3e3)})).catch((function(e){J("Error updating: ".concat(d)),setTimeout((function(){J(null)}),3e3)}))}})))};o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.7d53af43.chunk.js.map