(this["webpackJsonpmy-trello-app"]=this["webpackJsonpmy-trello-app"]||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(18),o=n.n(c),i=n(2),l=n(50),s=n(8),u=n(5),d=n(3),m={"content-type":"application/json","x-apikey":"5ac5e120f0a7555103ceaa15","cache-control":"no-cache"},f="https://fishstore-beeb.restdb.io/rest",b=n(21),p=n.n(b),v="SHOW_ERROR_MSG",g="HIDE_ERROR_MSG";function E(e){var t={id:p()(),message:e.message};return{type:v,error:t}}var O="POST_NEW_BOARD_OK",h="GET_BOARDS_OK",y="LOADING",j="SAVING",A="TOOGLE_ADD_FORM";function w(e){return{type:y,loading:e}}function N(e){return{type:A,showAddBoard:e}}function D(){return function(e){return e(w(!0)),fetch("".concat(f,"/boards"),{method:"GET",headers:m,mode:"cors"}).then((function(e){return e.json()})).then((function(t){e({type:h,boards:t,loading:!1})})).catch((function(t){e(E(t)),e(w(!1))}))}}function x(e){return function(t){return t({type:j,saving:!0}),fetch("".concat(f,"/boards"),{method:"POST",headers:m,mode:"cors",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){t(function(e){return{type:O,board:e,saving:!1}}(e)),t(N(!1))})).catch((function(e){t(E(e)),t(w(!1))}))}}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B={data:[],loading:!1,saving:!1,showAddBoard:!1};var S="EDIT_BOARD_OK",k="DELETE_BOARD_OK",R="GET_BOARD_OK",I="BOARD_LOADING",L="BOARD_SAVING";function K(e){return{type:I,loading:e}}function U(e){return{type:L,saving:e}}function z(e){return function(t){return t(K(!0)),fetch("".concat(f,"/boards/").concat(e),{method:"GET",headers:m,mode:"cors"}).then((function(e){return e.json()})).then((function(e){t({type:R,board:e,loading:!1})})).catch((function(e){console.dir(e),t(E(e)),t(K(!1))}))}}function M(e,t){t.source;var n=t.destination,a=t.draggableId;return function(t){var r=Object(u.a)(e.cards),c=r.splice(e.cards.findIndex((function(e){return e.id===a})),1)[0];c.in_list=n.droppableId;var o=n.index,i=0,l=r.findIndex((function(e){if(e.in_list===n.droppableId){if(i===o)return!0;i++}return!1}));r.splice(l,0,c),e.cards=r,t(function(e){return{type:S,board:e}}(e)),t(J(e,!0))}}function J(e,t){return function(n){return n(U(!0)),fetch("".concat(f,"/boards/").concat(e._id),{method:"PUT",headers:m,mode:"cors",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){n(t?U(!1):function(e){return{type:S,board:e,saving:!1}}(e))})).catch((function(a){t&&n(z(e._id)),n(E(a)),n(U(!1))}))}}function F(e){return function(t){return t(U(!0)),fetch("".concat(f,"/boards/").concat(e),{method:"DELETE",headers:m,mode:"cors"}).then((function(e){return e.json()})).then((function(e){t(function(e){return{type:k,boardId:e}}(e.result[0]))})).catch((function(e){t(E(e)),t(U(!1))}))}}function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Q={data:{},loading:!1,saving:!1};var V="SET_THEME_OK";function W(e){return{type:V,theme:e}}function Y(e){return function(t){localStorage.setItem("themeName",e),t(W(e))}}function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var _={theme:"light"};function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X={data:[]};var $=Object(s.c)({boards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return C({},e,{data:t.boards,loading:t.loading});case O:return C({},e,{data:[].concat(Object(u.a)(e.data),[t.board]),saving:t.saving});case y:return C({},e,{loading:t.loading});case j:return C({},e,{saving:t.saving});case A:return C({},e,{showAddBoard:t.showAddBoard});default:return e}},board:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return G({},e,{data:t.board,loading:t.loading});case k:return G({},e,{data:{deleted:!0},saving:t.saving});case S:return G({},e,{data:t.board,saving:t.saving});case I:return G({},e,{loading:t.loading});case L:return G({},e,{saving:t.saving});default:return e}},settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){Object(d.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{theme:t.theme});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return q({},e,{data:[].concat(Object(u.a)(e.data),[t.error])});case g:return q({},e,{data:e.data.filter((function(e){return e.id!==t.id}))});default:return e}}}),ee=(n(68),n(15)),te=n(14);var ne=r.a.memo((function(){var e=Object(i.d)((function(e){return e.errors.data}));console.dir(e);var t=Object(i.c)(),n=function(e){var n;t((n=e.target.dataset.id,{type:g,id:n}))};return e.length?r.a.createElement("div",{id:"message-container"},e.map((function(e){return r.a.createElement("div",{className:"message",key:e.id},r.a.createElement("button",{onClick:n,"data-id":e.id},"\xd7"),r.a.createElement("p",null,e.message?e.message:"Opps, something went wrong.."))}))):null})),ae=n(51),re=n.n(ae);function ce(e){var t=e.to,n=e.activeOnlyWhenExact,a=e.children,c=Object(te.h)({path:t,exact:n});return r.a.createElement("li",{className:c?"active":""},r.a.createElement(ee.b,{to:t},a))}var oe=r.a.memo((function(){return r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"logo",alt:"Trello"},r.a.createElement("img",{src:re.a,alt:"My trello"})),r.a.createElement("ul",null,r.a.createElement(ce,{to:"/",activeOnlyWhenExact:!0},"Dashboard"),r.a.createElement(ce,{to:"/settings"},"Settings")))}));var ie=r.a.memo((function(e){var t=e.size,n=t?"loading ".concat(t):"loading medium";return r.a.createElement("span",{className:n},r.a.createElement("svg",{className:"loading",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},r.a.createElement("circle",{cx:"50",cy:"50",r:"45"})))})),le=r.a.memo((function(e){var t=e.board,n=t._id,a=t.name,c=t.color,o=c?"board-card ".concat(c):"board-card";return r.a.createElement(ee.b,{className:o,to:"board/".concat(n)},r.a.createElement("h2",null,a))}));var se=r.a.memo((function(e){var t=e.onShow;return r.a.createElement("div",{onClick:function(){t&&t()},className:"board-card add-board-button"},r.a.createElement("span",{className:"plus"},"+"))})),ue=n(29);var de=function(e){var t=Object(ue.a)(),n=t.register,a=t.handleSubmit,c=t.errors,o=t.reset;return r.a.createElement("div",{className:"board-card add-board-button"},r.a.createElement("form",{onSubmit:a((function(t){e.onAdd&&e.onAdd(t),o()}))},r.a.createElement("input",{className:c.name?"error":"",name:"name",defaultValue:"",placeholder:"Give me a name",ref:n({required:!0})}),c.name&&r.a.createElement("span",null,"This field is required"),r.a.createElement("div",{className:"colors"},r.a.createElement("label",{className:"white"},r.a.createElement("input",{defaultChecked:!0,type:"radio",name:"color",value:"white",ref:n})," ",r.a.createElement("span",null,"white")),r.a.createElement("label",{className:"red"},r.a.createElement("input",{type:"radio",name:"color",value:"red",ref:n})," ",r.a.createElement("span",null,"red")),r.a.createElement("label",{className:"green"},r.a.createElement("input",{type:"radio",name:"color",value:"green",ref:n})," ",r.a.createElement("span",null,"green")),r.a.createElement("label",{className:"blue"},r.a.createElement("input",{type:"radio",name:"color",value:"blue",ref:n})," ",r.a.createElement("span",null,"blue"))),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{className:"btn",disabled:e.saving,onClick:function(){o(),e.onCancel&&e.onCancel()},type:"button"},"Cancel"),r.a.createElement("button",{className:"btn",disabled:e.saving,type:"submit"},"Save ",e.saving&&r.a.createElement(ie,{size:"small"})))))};var me=function(){var e=Object(i.d)((function(e){return e.boards.data})),t=Object(i.d)((function(e){return e.boards.loading})),n=Object(i.d)((function(e){return e.boards.saving})),c=Object(i.d)((function(e){return e.boards.showAddBoard})),o=Object(i.c)(),l=Object(a.useCallback)((function(e){return o(x(e))}),[o]),s=Object(a.useCallback)((function(){return o(N(!0))}),[o]),u=Object(a.useCallback)((function(){return o(N(!1))}),[o]);return Object(a.useEffect)((function(){o(D())}),[o]),r.a.createElement(a.Fragment,null,r.a.createElement(oe,null),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Dashboard ",t&&r.a.createElement(ie,{size:"small"})),!t&&r.a.createElement("div",{className:"boards"},e.map((function(e){return r.a.createElement(le,{key:e._id,board:e})})),!c&&r.a.createElement(se,{onShow:s,saving:n,type:"board"}),c&&r.a.createElement(de,{onAdd:l,onCancel:u,saving:n,type:"board"})),r.a.createElement("div",null,JSON.stringify(e)))))},fe=n(19);var be=r.a.memo((function(e){var t=e.onRemove,n=e.id,a=e.saving,c=e.text;return r.a.createElement("button",{disabled:a,onClick:function(){t&&t(n)},type:"button",className:"btn btn-remove"},c||r.a.createElement("span",null,"\xd7"))}));var pe=function(e){var t=e.card,n=e.index,a=e.onRemove,c=e.saving,o=t.isDone?"card card-done":"card";return r.a.createElement(fe.b,{draggableId:t.id,index:n},(function(e){return r.a.createElement("div",Object.assign({className:"draggable"},e.draggableProps,e.dragHandleProps,{ref:e.innerRef}),r.a.createElement("p",{className:o},t.name),r.a.createElement(be,{id:t.id,onRemove:a,saving:c}))}))};var ve=function(e){var t=e.onAdd,n=e.saving,a=e.listId,c=e.placeholder,o=Object(ue.a)(),i=o.register,l=o.handleSubmit,s=o.errors,u=o.reset;return r.a.createElement("div",{className:"add-item"},r.a.createElement("form",{onSubmit:l((function(e){a&&(e.in_list=a),t&&t(e),u()}))},r.a.createElement("input",{disabled:n,className:s.name?"error":"",name:"name",defaultValue:"",placeholder:c,ref:i({required:!0})}),r.a.createElement("button",{className:"btn btn-primary",disabled:n||s.name,type:"submit"},n?r.a.createElement(ie,{size:"small"}):r.a.createElement("span",{className:"text"},"+"))))};var ge=function(e){var t=e.list,n=e.cards,a=e.onAdd,c=e.saving,o=e.onListRemove,i=e.onCardRemove,l=t.id;return r.a.createElement("div",{className:"list"},r.a.createElement(be,{id:l,onRemove:o,saving:c}),r.a.createElement("h2",null,t.name&&t.name),r.a.createElement(fe.c,{droppableId:l},(function(e){return r.a.createElement("div",Object.assign({className:"droppable",ref:e.innerRef},e.droppableProps),n&&n.filter((function(e){return e.in_list===l})).map((function(e,t){return r.a.createElement(pe,{key:e.id,card:e,index:t,onRemove:i})})),e.placeholder)})),r.a.createElement(ve,{listId:l,onAdd:a,saving:c,placeholder:"Add new card"}))};var Ee=function(){var e=Object(te.g)().boardId,t=Object(i.d)((function(e){return e.board.data})),n=Object(i.d)((function(e){return e.board.data.cards})),c=Object(i.d)((function(e){return e.board.loading})),o=Object(i.d)((function(e){return e.board.saving})),l=Object(i.c)();Object(a.useEffect)((function(){l(z(e))}),[]);var s=Object(a.useCallback)((function(e){return l(function(e,t){return function(n){e.id=p()(),t.cards=[].concat(Object(u.a)(t.cards),[e]),n(J(t))}}(e,t))}),[l,t]),d=Object(a.useCallback)((function(e){return l(function(e,t){return function(n){e.id=p()(),t.lists=[].concat(Object(u.a)(t.lists),[e]),n(J(t))}}(e,t))}),[l,t]),m=Object(a.useCallback)((function(e){return l(F(e))}),[l]),f=Object(a.useCallback)((function(e){return l(function(e,t){return function(n){t.cards=Object(u.a)(t.cards.filter((function(t){return t.id!==e}))),n(J(t))}}(e,t))}),[l,t]),b=Object(a.useCallback)((function(e){return l(function(e,t){return function(n){t.lists=Object(u.a)(t.lists.filter((function(t){return t.id!==e}))),t.cards=Object(u.a)(t.cards.filter((function(t){return t.in_list!==e}))),n(J(t))}}(e,t))}),[l,t]),v=function(e){e.destination&&(e.source.index===e.destination.index&&e.source.droppableId===e.destination.droppableId||l(M(t,e)))};return r.a.createElement(a.Fragment,null,t&&t.deleted?r.a.createElement(te.a,{to:"/"}):null,r.a.createElement(oe,null),r.a.createElement("main",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"board-header"},r.a.createElement("h2",null," ",t.name," ",r.a.createElement("i",null,"board")," "),r.a.createElement(be,{text:"Delete Board",saving:o,onRemove:m,id:e})),!c&&!t._id&&r.a.createElement("p",null,"Board not found"),c&&r.a.createElement("p",null,"Loading..."),!c&&t._id&&r.a.createElement(fe.a,{onDragEnd:v},r.a.createElement("div",{className:"columns"},t.lists&&t.lists.map((function(e){return r.a.createElement(ge,{key:e.id,list:e,cards:n,onAdd:s,saving:o,onListRemove:b,onCardRemove:f})})),r.a.createElement("div",{className:"list"},r.a.createElement(ve,{onAdd:d,saving:o,placeholder:"Add new list"})))),r.a.createElement("div",null,r.a.createElement("pre",null,JSON.stringify(t,null,2))))))},Oe=n(56),he=n.n(Oe);var ye=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e.settings.theme}));return r.a.createElement(a.Fragment,null,r.a.createElement(oe,null),r.a.createElement("main",{className:"settings-page"},r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,"Settings"),r.a.createElement("h3",null,"Which side are you on?"),r.a.createElement("div",{className:"image-holder"},r.a.createElement("img",{src:he.a,alt:""}),r.a.createElement("span",null),r.a.createElement("button",{className:"light"===t?"light-side active":"light-side",onClick:function(){e(Y("light"))}},"Light"),r.a.createElement("button",{className:"dark"===t?"dark-side active":"dark-side",onClick:function(){e(Y("dark"))}},"Dark")))))};n(105);var je=function(){var e=Object(i.d)((function(e){return e.settings.theme})),t=Object(i.c)(),n="app ".concat(e);return Object(a.useEffect)((function(){t((function(e){var t=localStorage.getItem("themeName");e(W(t||"light"))}))}),[]),r.a.createElement("div",{className:n},r.a.createElement(ne,null),r.a.createElement(ee.a,null,r.a.createElement(te.d,null,r.a.createElement(te.b,{exact:!0,path:"/"},r.a.createElement(me,null)),r.a.createElement(te.b,{exact:!0,path:"/board/:boardId"},r.a.createElement(Ee,null)),r.a.createElement(te.b,{exact:!0,path:"/settings"},r.a.createElement(ye,null)),r.a.createElement(te.a,{to:"/"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ae=[],we=[l.a];if("undefined"!==typeof window){var Ne=window.devToolsExtension;"function"===typeof Ne&&Ae.push(Ne())}var De=Object(s.e)($,s.d.apply(void 0,[s.a.apply(void 0,we)].concat(Ae)));o.a.render(r.a.createElement(i.a,{store:De},r.a.createElement(je,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},51:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAAA8CAMAAADsZf5UAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAALdQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Ix8g////////////////////////////////////Ix8gHg6RWwAAAD10Uk5TAJD/4DAQwFCgYPAgsIBwQNATBQ0CAcGj1Bl55z2bB/7YDnLrEtEEUfhvQePp4f1SgpwB3C7K8fP74h/8AjBEEqMAAAUfSURBVHic7VnZluQ0DM3iOKuTMDDsMMCwDDs0O8z/fxexJdmy41Scqj59evpELxUn18uVZEl2Zdkpp5xyyilPQfJikVKY50rqhqxuAz641IWRxjRyaLQ3AR9eSlhNp597eC6Gm4APLoKvRmFjvAXIukyX5P44NAXzClR10d8CJEF325ZhczdNtVJykVykUJhwvFk3SLv5LcBkCrS1jPRqWhhV0zSqYWYQmcBCIlZDqw6ey5h+koEk+xSKwoLFNmY3bLQIVLpB3hLz1GTgdRxUCiguFfq1Uai3aa8F+hyU3S+9irUt+ILjNdllIfpGoegtXcxBkoE+B7bl+1h7NT7KPKh2iVztMlN3KWzocdCvzdbEFFbUtwADDsntqimYdPZ9vZpEjEqp2hFrmINQuDQO8tYzv+Mm8L44ZCaZUOZUm4NOFLOoyiG/Ng4ycgd5O6taNYp3nu8BMwDeB4fMBo5ykwLbNhLeSOYgFC7Bds+Uab4r9oAZAGXEaa/ggBbejKaew5kpJ+4gynOQ9xD3/gc7QBp1Xu/v4xwmpuFKzZ0MNsPIKXjhxTzjpkUHcXw/TAWudXecw8DmUU7XOnvrJE4pKnewlisUFwMlHAt0H6UC1z58mEPPzICT6s3dN0ZtzcfwuavRXFqLJVOo150qIyOffJoIlEoNUg5KbK1xl4NiZsCxJW24RV7Aj8D1SKfdkWvXzI/eMoP3ffY5Ar/YAVrJN9a4ywHWNmfMDlLM/uCLz7b04Pfo+ezQa0mP5vfllwD86usdoJX5Sg61W5tVVtf5Yy9fUXOlM8PEO/C48w1u5VffQvu7LWDtSloj9lBwlAOOja1w8aS8anYLd05ltavY85BR4fl9KlAvoGldojjIoWJjB7V4p3Dls3Xm3BmuZxqAyDJYTcOgr1KBRR1U4rE1b9Z81jEQwWvAvKLoIYiCUSmYH8pazLzGERHc2scfUoEyCyTGwUUtoYLvgzeK28qz7lKijZCCyagTJ62YdqUbiZf0CcBVnRbjEIr7WjmdZO7aZNGeW25HxS2U49DAegFIjqyv9ornP+qnn/aB+HpV9x3jgK6EAcGG65bZSBEFwUiDA9dI0qnUaPdnNtVFIL4OKRzk4GnVulLLbUT3W6CtX+Bdxkg2rC+vplKB6xPjMQ6w1fC6ilyp9WzkWQE9feR4Zh+zZF5HpADX1wOHOHgblFyJ9MKDFFDo0VBYegKeF0C5U3QyMHJsOcQh90ax2QCEucRsWArKgMByemkaYLVfraZ5DZQCjBxbDnGYueK5xX0OUAS0NokLxx92ZCXtwD1P9QnA2BXHEQ5+ZA13mD2lhBV/x7/qeECVSOFbLwkYuzrW78O8vMWhZdoi07q++AKuLXu2NskJKrayIjj0JQDnLCIGHuTlLQ683kPTskAn2CQj95CcnyRrtrJinLyiMQEY5Le7O+KwJ9SDV6ANzeTERvKaJv8NebJbgrYKzxpHgGGZcZwDtOBYAr7i5Ux0NWl12/wOv3wxJX79g0+QClylt2s5gC4gevg3cIPXqwvOLH/+xRozuzL8OxW4Kliv4CAZB9j8vntWnIQpA1nk7ETtPuqSlrbeP/8mAiN/5gAH70IrLpY+5MzRec7qz5mJ9DljRUAB3txaCvpfCvoJ/e2/JhHYxa5GgUO1S4L9x6MvYOw/MlMzRvJNn8uibFgynbRxSqqptMdLV/Hwv/uSgUxevwYWb7KcHB6HnBweh5wcHoc8BQ53dyeHxyBvPoMnweF/0mRNHrfiPM0AAAAASUVORK5CYII="},56:function(e,t,n){e.exports=n.p+"static/media/revan.3f7ae562.png"},57:function(e,t,n){e.exports=n(106)},68:function(e,t,n){}},[[57,1,2]]]);
//# sourceMappingURL=main.fb1b795a.chunk.js.map