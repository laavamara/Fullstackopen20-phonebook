(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(37)},37:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),r=t(14),o=t.n(r),c=t(4),l=t(2),i=function(e){var n=e.value,t=e.onChange;return u.a.createElement("div",null,"Filter by name:",u.a.createElement("input",{value:n,onChange:t}))},m=function(e){var n=e.onSubmit,t=e.onChangeName,a=e.onChangeNum,r=e.valueName,o=e.valueNumber;return u.a.createElement("form",{onSubmit:n},u.a.createElement("div",null,"Name:",u.a.createElement("input",{value:r,onChange:t})),u.a.createElement("div",null,"Number:",u.a.createElement("input",{value:o,onChange:a})),u.a.createElement("button",{type:"submit"},"add"))},s=function(e){var n=e.persons,t=e.filterIn,a=e.deleteUser;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e,n){return u.a.createElement("li",{key:e.name}," ",e.name," - ",e.number,u.a.createElement("button",{onClick:function(){return a(e)}},"Delete"))}))},f=t(3),d=t.n(f),b="/api/persons",h=function(){return d.a.get(b).then((function(e){return e.data}))},v=function(e){return d.a.post(b,e).then((function(e){return e.data}))},E=function(e,n){return d.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return d.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},g=function(e){var n=e.message,t=e.errorMessage;return null===n&&null===t?null:null!==n&&null===t?u.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:20}},u.a.createElement("h2",null,n)):null!==t&&null===n?u.a.createElement("div",{style:{color:"red",fontStyle:"italic",fontSize:20}},u.a.createElement("h2",null,t)):void 0},O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(""),f=Object(l.a)(o,2),d=f[0],b=f[1],O=Object(a.useState)(""),j=Object(l.a)(O,2),C=j[0],w=j[1],S=Object(a.useState)(""),N=Object(l.a)(S,2),y=N[0],k=N[1],T=Object(a.useState)(null),D=Object(l.a)(T,2),L=D[0],I=D[1],z=Object(a.useState)(null),A=Object(l.a)(z,2),J=A[0],M=A[1];Object(a.useEffect)((function(){h().then((function(e){r(e)}))}),[]);return u.a.createElement("div",null,u.a.createElement("h1",null,"Phonebook"),u.a.createElement(i,{value:y,onChange:function(e){k(e.target.value)}}),u.a.createElement("h2",null,"Add a new contact: "),u.a.createElement(m,{onSubmit:function(e){e.preventDefault();var n={name:d,number:C};if(t.some((function(e){return e.name.toLowerCase()===d.toLowerCase()}))){var a=t.find((function(e){return e.name===d})),u=Object(c.a)(Object(c.a)({},a),{},{number:C}),o=a.id;window.confirm("Overwrite number for:  ".concat(d,"?"))&&E(o,u).then((function(){r(t.map((function(e){return e.id!==o?e:u}))),I("Overwrote: ".concat(d)),setTimeout((function(){I(null)}),3e3)})).catch((function(e){M(e.response.data.error.message),setTimeout((function(){M(null)}),3e3)}))}else v(n).then((function(e){r(t.concat(e)),I("Added: ".concat(d)),setTimeout((function(){I(null)}),3e3)})).catch((function(e){M(e.response.data.error.message),setTimeout((function(){M(null)}),3e3)}));b(""),w("")},onChangeName:function(e){b(e.target.value)},onChangeNum:function(e){w(e.target.value)},valueName:d,valueNumber:C}),u.a.createElement(g,{message:L,errorMessage:J}),u.a.createElement("h2",null,"Names - numbers"),u.a.createElement("ol",null,u.a.createElement(s,{persons:t,filterIn:y,deleteUser:function(e){window.confirm("Delete user ".concat(e.name,"?"))&&p(e.id).then((function(){var n=t.filter((function(n){return n.id!==e.id}));r(n),I("Deleted: ".concat(e.name)),setTimeout((function(){I(null)}),3e3)})).catch((function(e){M("Error updating: ".concat(d)),setTimeout((function(){M(null)}),3e3)}))}})))};o.a.render(u.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f017a986.chunk.js.map