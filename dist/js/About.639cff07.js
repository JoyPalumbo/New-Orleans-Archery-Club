(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["About"],{"166a":function(t,e,i){},3408:function(t,e,i){},"3ad0":function(t,e,i){},"45c2":function(t,e,i){t.exports=i.p+"img/ShawnCastrilloProfilePic.6f29f149.jpg"},"61d2":function(t,e,i){},"899c":function(t,e,i){},"9d26":function(t,e,i){"use strict";var s=i("132d");e["a"]=s["a"]},a434:function(t,e,i){"use strict";var s=i("23e7"),n=i("23cb"),a=i("a691"),l=i("50c4"),r=i("7b0b"),o=i("65f0"),c=i("8418"),u=i("1dde"),h=i("ae40"),d=u("splice"),v=h("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,p=Math.min,f=9007199254740991,b="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!d||!v},{splice:function(t,e){var i,s,u,h,d,v,g=r(this),I=l(g.length),y=n(t,I),C=arguments.length;if(0===C?i=s=0:1===C?(i=0,s=I-y):(i=C-2,s=p(m(a(e),0),I-y)),I+i-s>f)throw TypeError(b);for(u=o(g,s),h=0;h<s;h++)d=y+h,d in g&&c(u,h,g[d]);if(u.length=s,i<s){for(h=y;h<I-s;h++)d=h+s,v=h+i,d in g?g[v]=g[d]:delete g[v];for(h=I;h>I-s+i;h--)delete g[h-1]}else if(i>s)for(h=I-s;h>y;h--)d=h+s-1,v=h+i-1,d in g?g[v]=g[d]:delete g[v];for(h=0;h<i;h++)g[h+y]=arguments[h+2];return g.length=I-s+i,u}})},c740:function(t,e,i){"use strict";var s=i("23e7"),n=i("b727").findIndex,a=i("44d2"),l=i("ae40"),r="findIndex",o=!0,c=l(r);r in[]&&Array(1)[r]((function(){o=!1})),s({target:"Array",proto:!0,forced:o||!c},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),a(r)},db42:function(t,e,i){},f820:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",[s("h1",{staticClass:"text-center"},[t._v("Meet our coaches and instructors!")]),s("spacer",{staticClass:"ma-3"}),s("v-row",[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[s("v-list-item",{attrs:{"three-line":""}},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" George Alamilla ")]),s("v-list-item-subtitle",[t._v("Coach")]),s("v-list-item-subtitle",[t._v("A little bit about Name etc")]),s("v-list-item-subtitle",[t._v("Email: ")]),s("v-list-item-subtitle",[t._v("Phone: ")])],1),s("v-list-item-avatar",{attrs:{size:"120",color:"grey"}})],1)],1),s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[s("v-list-item",{attrs:{"three-line":""}},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" Billy ")]),s("v-list-item-subtitle",[t._v("Coach")]),s("v-list-item-subtitle",[t._v("A little bit about Name")])],1),s("v-list-item-avatar",{attrs:{size:"120",color:"grey"}})],1)],1)],1),s("spacer",{staticClass:"ma-2"}),s("v-row",[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[s("v-list-item",{attrs:{"three-line":""}},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" Shawn Castrillo ")]),s("v-list-item-subtitle",[t._v("USA Archery Level 1 Instructor")]),s("v-list-item-subtitle",[t._v("Shawn first picked up a bow in 2017. Native New Orleanian. Elementary School Teacher.")])],1),s("v-list-item-avatar",{attrs:{size:"120",color:"grey"}},[s("v-img",{attrs:{src:i("45c2")}})],1)],1)],1),s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344",outlined:""}},[s("v-list-item",{attrs:{"three-line":""}},[s("v-list-item-content",[s("v-list-item-title",{staticClass:"headline mb-1"},[t._v(" Phil ")]),s("v-list-item-subtitle",[t._v("Instructor")]),s("v-list-item-subtitle",[t._v("coming soon")])],1),s("v-list-item-avatar",{attrs:{size:"120",color:"grey"}})],1)],1)],1)],1)},n=[],a=i("2877"),l=i("6544"),r=i.n(l),o=i("b0af"),c=i("a523"),u=i("adda"),h=i("5530"),d=(i("61d2"),i("a9ad")),v=i("1c87"),m=i("4e82"),p=i("7560"),f=i("f2e7"),b=i("5607"),g=i("80d2"),I=i("d9bd"),y=i("58df"),C=Object(y["a"])(d["a"],v["a"],p["a"],Object(m["a"])("listItemGroup"),Object(f["b"])("inputValue")),x=C.extend().extend({name:"v-list-item",directives:{Ripple:b["a"]},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default:function(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:function(){return{proxyClass:"v-list-item--active"}},computed:{classes:function(){return Object(h["a"])(Object(h["a"])({"v-list-item":!0},v["a"].options.computed.classes.call(this)),{},{"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine},this.themeClasses)},isClickable:function(){return Boolean(v["a"].options.computed.isClickable.call(this)||this.listItemGroup)}},created:function(){this.$attrs.hasOwnProperty("avatar")&&Object(I["e"])("avatar",this)},methods:{click:function(t){t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()},genAttrs:function(){var t=Object(h["a"])({"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1},this.$attrs);return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(t.role="listitem",t["aria-selected"]=String(this.isActive)):this.isInMenu?(t.role=this.isClickable?"menuitem":void 0,t.id=t.id||"list-item-".concat(this._uid)):this.isInList&&(t.role="listitem")),t}},render:function(t){var e=this,i=this.generateRouteLink(),s=i.tag,n=i.data;n.attrs=Object(h["a"])(Object(h["a"])({},n.attrs),this.genAttrs()),n[this.to?"nativeOn":"on"]=Object(h["a"])(Object(h["a"])({},n[this.to?"nativeOn":"on"]),{},{keydown:function(t){t.keyCode===g["j"].enter&&e.click(t),e.$emit("keydown",t)}}),this.inactive&&(s="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);var a=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return t(s,this.setTextColor(this.color,n),a)}}),O=(i("a9e3"),i("3408"),i("24b2")),_=i("a236"),j=Object(y["a"])(d["a"],O["a"],_["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(h["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(h["a"])({height:Object(g["d"])(this.size),minWidth:Object(g["d"])(this.size),width:Object(g["d"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}}),A=j,V=A.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes:function(){return Object(h["a"])(Object(h["a"])({"v-list-item__avatar--horizontal":this.horizontal},A.options.computed.classes.call(this)),{},{"v-avatar--tile":this.tile||this.horizontal})}},render:function(t){var e=A.options.render.call(this,t);return e.data=e.data||{},e.data.staticClass+=" v-list-item__avatar",e}}),$=(i("c740"),i("0481"),i("a434"),i("4069"),i("b85c")),w=(i("3ad0"),i("8dd9")),B=(w["a"].extend().extend({name:"v-list",provide:function(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:function(){return{groups:[]}},computed:{classes:function(){return Object(h["a"])(Object(h["a"])({},w["a"].options.computed.classes.call(this)),{},{"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine})}},methods:{register:function(t){this.groups.push(t)},unregister:function(t){var e=this.groups.findIndex((function(e){return e._uid===t._uid}));e>-1&&this.groups.splice(e,1)},listClick:function(t){if(!this.expand){var e,i=Object($["a"])(this.groups);try{for(i.s();!(e=i.n()).done;){var s=e.value;s.toggle(t)}}catch(n){i.e(n)}finally{i.f()}}}},render:function(t){var e={staticClass:"v-list",class:this.classes,style:this.styles,attrs:Object(h["a"])({role:this.isInNav||this.isInMenu?void 0:"list"},this.attrs$)};return t(this.tag,this.setBackgroundColor(this.color,e),[this.$slots.default])}}),i("ac1f"),i("466d"),i("ade3")),k=(i("db42"),i("9d26")),S=(i("498a"),i("2b0e")),L=S["a"].extend({name:"v-list-item-icon",functional:!0,render:function(t,e){var i=e.data,s=e.children;return i.staticClass="v-list-item__icon ".concat(i.staticClass||"").trim(),t("div",i,s)}}),z=i("7e2b"),M=S["a"].extend().extend({name:"bootable",props:{eager:Boolean},data:function(){return{isBooted:!1}},computed:{hasContent:function(){return this.isBooted||this.eager||this.isActive}},watch:{isActive:function(){this.isBooted=!0}},created:function(){"lazy"in this.$attrs&&Object(I["e"])("lazy",this)},methods:{showLazyContent:function(t){return this.hasContent&&t?t():[this.$createElement()]}}}),G=i("3206"),E=i("0789"),N=Object(y["a"])(z["a"],M,d["a"],Object(G["a"])("list"),f["a"]),R=(N.extend().extend({name:"v-list-group",directives:{ripple:b["a"]},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:String,noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes:function(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive:function(t){!this.subGroup&&t&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created:function(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy:function(){this.list&&this.list.unregister(this)},methods:{click:function(t){var e=this;this.disabled||(this.isBooted=!0,this.$emit("click",t),this.$nextTick((function(){return e.isActive=!e.isActive})))},genIcon:function(t){return this.$createElement(k["a"],t)},genAppendIcon:function(){var t=!this.subGroup&&this.appendIcon;return t||this.$slots.appendIcon?this.$createElement(L,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(t)]):null},genHeader:function(){return this.$createElement(x,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:Object(B["a"])({},this.activeClass,this.isActive),props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(h["a"])(Object(h["a"])({},this.listeners$),{},{click:this.click})},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems:function(){var t=this;return this.showLazyContent((function(){return[t.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:t.isActive}]},Object(g["i"])(t))]}))},genPrependIcon:function(){var t=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return t||this.$slots.prependIcon?this.$createElement(L,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(t)]):null},onRouteChange:function(t){if(this.group){var e=this.matchRoute(t.path);e&&this.isActive!==e&&this.list&&this.list.listClick(this._uid),this.isActive=e}},toggle:function(t){var e=this,i=this._uid===t;i&&(this.isBooted=!0),this.$nextTick((function(){return e.isActive=i}))},matchRoute:function(t){return null!==t.match(this.group)}},render:function(t){return t("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),t(E["a"],this.genItems())])}}),i("899c"),i("4de4"),i("7db0"),i("4160"),i("caad"),i("c975"),i("fb6a"),i("2532"),i("159b"),i("166a"),i("a452")),T=Object(y["a"])(R["a"],p["a"]).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean},data:function(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes:function(){return Object(h["a"])({"v-item-group":!0},this.themeClasses)},selectedIndex:function(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem:function(){if(!this.multiple)return this.selectedItems[0]},selectedItems:function(){var t=this;return this.items.filter((function(e,i){return t.toggleMethod(t.getValue(e,i))}))},selectedValues:function(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod:function(){var t=this;if(!this.multiple)return function(e){return t.internalValue===e};var e=this.internalValue;return Array.isArray(e)?function(t){return e.includes(t)}:function(){return!1}}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created:function(){this.multiple&&!Array.isArray(this.internalValue)&&Object(I["c"])("Model must be bound to an array if the multiple property is true.",this)},methods:{genData:function(){return{class:this.classes}},getValue:function(t,e){return null==t.value||""===t.value?e:t.value},onClick:function(t){this.updateInternalValue(this.getValue(t,this.items.indexOf(t)))},register:function(t){var e=this,i=this.items.push(t)-1;t.$on("change",(function(){return e.onClick(t)})),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(t,i)},unregister:function(t){if(!this._isDestroyed){var e=this.items.indexOf(t),i=this.getValue(t,e);this.items.splice(e,1);var s=this.selectedValues.indexOf(i);if(!(s<0)){if(!this.mandatory)return this.updateInternalValue(i);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((function(t){return t!==i})):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}}},updateItem:function(t,e){var i=this.getValue(t,e);t.isActive=this.toggleMethod(i)},updateItemsState:function(){var t=this;this.$nextTick((function(){if(t.mandatory&&!t.selectedItems.length)return t.updateMandatory();t.items.forEach(t.updateItem)}))},updateInternalValue:function(t){this.multiple?this.updateMultiple(t):this.updateSingle(t)},updateMandatory:function(t){if(this.items.length){var e=this.items.slice();t&&e.reverse();var i=e.find((function(t){return!t.disabled}));if(i){var s=this.items.indexOf(i);this.updateInternalValue(this.getValue(i,s))}}},updateMultiple:function(t){var e=Array.isArray(this.internalValue)?this.internalValue:[],i=e.slice(),s=i.findIndex((function(e){return e===t}));this.mandatory&&s>-1&&i.length-1<1||null!=this.max&&s<0&&i.length+1>this.max||(s>-1?i.splice(s,1):i.push(t),this.internalValue=i)},updateSingle:function(t){var e=t===this.internalValue;this.mandatory&&e||(this.internalValue=e?void 0:t)}},render:function(t){return t("div",this.genData(),this.$slots.default)}}),P=(T.extend({name:"v-item-group",provide:function(){return{itemGroup:this}}}),Object(y["a"])(T,d["a"]).extend({name:"v-list-item-group",provide:function(){return{isInGroup:!0,listItemGroup:this}},computed:{classes:function(){return Object(h["a"])(Object(h["a"])({},T.options.computed.classes.call(this)),{},{"v-list-item-group":!0})}},methods:{genData:function(){return this.setTextColor(this.color,Object(h["a"])(Object(h["a"])({},T.options.methods.genData.call(this)),{},{attrs:{role:"listbox"}}))}}}),S["a"].extend({name:"v-list-item-action",functional:!0,render:function(t,e){var i=e.data,s=e.children,n=void 0===s?[]:s;i.staticClass=i.staticClass?"v-list-item__action ".concat(i.staticClass):"v-list-item__action";var a=n.filter((function(t){return!1===t.isComment&&" "!==t.text}));return a.length>1&&(i.staticClass+=" v-list-item__action--stack"),t("div",i,n)}}),Object(g["e"])("v-list-item__action-text","span"),Object(g["e"])("v-list-item__content","div")),D=Object(g["e"])("v-list-item__title","div"),H=Object(g["e"])("v-list-item__subtitle","div"),J=i("0fd9"),U={},W=Object(a["a"])(U,s,n,!1,null,null,null);e["default"]=W.exports;r()(W,{VCard:o["a"],VContainer:c["a"],VImg:u["a"],VListItem:x,VListItemAvatar:V,VListItemContent:P,VListItemSubtitle:H,VListItemTitle:D,VRow:J["a"]})}}]);
//# sourceMappingURL=About.639cff07.js.map