(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6953ea94"],{"13b3":function(t,e,s){},"1e6c":function(t,e,s){"use strict";var a=s("9d65"),i=s("4e82"),o=s("c3f0"),n=s("80d2"),r=s("58df");const l=Object(r["a"])(a["a"],Object(i["a"])("windowGroup","v-window-item","v-window"));e["a"]=l.extend().extend().extend({name:"v-window-item",directives:{Touch:o["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data(){return{isActive:!1,inTransition:!1}},computed:{classes(){return this.groupClasses},computedTransition(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot(){return this.$slots.default},genWindowItem(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(n["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled(){this.onAfterTransition()},onEnter(t){this.inTransition&&this.$nextTick(()=>{this.computedTransition&&this.inTransition&&(this.windowGroup.transitionHeight=Object(n["g"])(t.clientHeight))})}},render(t){return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent(()=>[this.genWindowItem()]))}})},"3e35":function(t,e,s){"use strict";var a=s("1e6c"),i=s("adda"),o=s("58df"),n=s("80d2"),r=s("1c87");const l=Object(o["a"])(a["a"],r["a"]);e["a"]=l.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot(){return[this.$createElement(i["a"],{staticClass:"v-carousel__item",props:{...this.$attrs,height:this.windowGroup.internalHeight},on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(n["m"])(this))]},genWindowItem(){const{tag:t,data:e}=this.generateRouteLink();return e.staticClass="v-window-item",e.directives.push({name:"show",value:this.isActive}),this.$createElement(t,e,this.genDefaultSlot())}}})},4642:function(t,e,s){"use strict";s.r(e);var a=s("8336"),i=s("b0af"),o=s("99d9"),n=s("5e66"),r=s("3e35"),l=s("62ad"),c=s("a523"),d=s("0789"),u=s("132d"),h=s("adda"),v=s("4e82"),m=s("58df"),p=s("d9bd"),g=s("2b0e");const f=g["a"].extend({props:{activeClass:String,value:{required:!1}},data:()=>({isActive:!1}),methods:{toggle(){this.isActive=!this.isActive}},render(){if(!this.$scopedSlots.default)return Object(p["c"])("v-item is missing a default scopedSlot",this),null;let t;return this.$scopedSlots.default&&(t=this.$scopedSlots.default({active:this.isActive,toggle:this.toggle})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(t.data=this._b(t.data||{},t.tag,{class:{[this.activeClass]:this.isActive}}),t):(Object(p["c"])("v-item should only contain a single element",this),t)}});var C=Object(m["a"])(f,Object(v["a"])("itemGroup","v-item","v-item-group")).extend({name:"v-item"}),y=s("604c"),x=s("0fd9"),b=s("f665"),w=s("1e6c"),_=function(){var t=this,e=t._self._c;return e(c["a"],{staticClass:"rh-pag",attrs:{fluid:""}},[e(h["a"],{attrs:{alt:"fondo",src:"https://d1z76heyx58zfh.cloudfront.net/assets/gestion/junta.png"}},[e(x["a"],{attrs:{"no-gutters":""}},[e(l["a"],{staticClass:"contenedor",attrs:{md:"6",sm:"12"}},[e(i["a"],{staticClass:"glass",attrs:{elevation:"1"}},[e(o["d"],{staticClass:"pt-8 texto-titulo",staticStyle:{"word-break":"break-word"}},[e("h2",[t._v("Gestión de Recursos Humanos")])]),e(o["c"],{staticClass:"pt-8 texto-land"},[t._v(" Conocemos la importancia de la gestión del personal para tu empresa, por lo que brindamos soluciones de gestión total o parcial de sus procesos de Recursos Humanos. "),e("br"),e("br"),t._v(" Te ayudamos a mejorar y gestionar tu plantilla laboral con la atracción y "),e("strong",[t._v(" selección, evaluación, entrenamiento, capacitación y desarrollo de talento humano ")]),t._v(" dentro de tu organización para que puedas concentrarte en las tareas más importantes para el crecimiento de tu empresa. "),e("br")]),e("div",{staticClass:"pt-5 text-left"},[e(a["a"],{staticClass:"pa-7",attrs:{color:"#12b0f4",rounded:"",dark:""},on:{click:function(e){return t.$vuetify.goTo("#serviciosd")}}},[t._v(" Conoce más ")])],1)],1)],1)],1)],1),e(c["a"],{staticClass:"soluciones",attrs:{fluid:""}},[e("section",{attrs:{id:"serviciosd"}},[e("h1",{staticClass:"txt-white mt-5"},[t._v("Gestión de recursos humanos")]),e(x["a"],{staticClass:"pa-15 contenedor"},[e(l["a"],{attrs:{cols:"auto",md:"3",sm:"12"}},[e(i["a"],{staticClass:"tarjeta-serv",attrs:{elevation:"10",color:"white"}},[e(h["a"],{attrs:{src:"https://d1z76heyx58zfh.cloudfront.net/assets/gestion/juntas.png"}}),e(i["a"],{staticClass:"texto-card",attrs:{elevation:"0"}},[e(o["c"],[e("p",{staticClass:"titulos text--primary"},[t._v(" Atracción y selección de talento humano. ")]),e("div",{staticClass:"texto-body cuerpo",staticStyle:{"text-align":"center !important"}},[t._v(" Contrata al personal adecuado para el crecimiento de tu organización. "),e("br"),e("br")])]),e(o["a"],[e(a["a"],{staticClass:"ma-5",staticStyle:{"text-transform":"none"},attrs:{outlined:"",color:"#12b0f4"},on:{click:function(e){t.reveal=!0}}},[t._v(" Conoce más ")])],1),e(d["a"],[t.reveal?e(i["a"],{staticClass:"transition-fast-in-fast-out v-card--reveal",staticStyle:{height:"100%"},attrs:{elevation:"0"}},[e(o["c"],{staticClass:"pb-0 my-5"},[e("p",{staticClass:"texto-body"},[t._v("Contamos con servicios de:")]),e("ul",{staticClass:"texto-body text-left"},[e("li",[t._v("Reclutamiento y selección de personal")]),e("li",[t._v("Head hunter")]),e("li",[t._v("Estudios socioeconómicos y laborales")]),e("p",{staticClass:"texto-body text-left mt-1"},[t._v("Y más..")])])]),e(o["a"],{staticClass:"pt-0"},[e(a["a"],{staticClass:"ml-5",staticStyle:{"text-transform":"none"},attrs:{outlined:"",color:"#12b0f4"},on:{click:function(e){t.reveal=!1}}},[t._v(" Cerrar ")])],1)],1):t._e()],1)],1)],1)],1),e(l["a"],{attrs:{cols:"auto",md:"3",sm:"12"}},[e(i["a"],{staticClass:"tarjeta-serv",attrs:{elevation:"10",color:"white"}},[e(h["a"],{attrs:{src:"https://d1z76heyx58zfh.cloudfront.net/assets/gestion/proyecto.png"}}),e(i["a"],{staticClass:"texto-card",attrs:{elevation:"0"}},[e(o["c"],[e("p",{staticClass:"titulos text--primary"},[t._v(" Evaluación de talento humano y organizacional. ")]),e("div",{staticClass:"texto-body cuerpo",staticStyle:{"text-align":"center !important"}},[t._v(" Fortalece los procesos internos de tu organización con nuestras evaluaciones y diagnóstico. ")])]),e(o["a"],[e(a["a"],{staticClass:"ma-5",staticStyle:{"text-transform":"none"},attrs:{outlined:"",color:"#12b0f4"},on:{click:function(e){t.reveal2=!0}}},[t._v(" Conoce más ")])],1),e(d["a"],[t.reveal2?e(i["a"],{staticClass:"transition-fast-in-fast-out v-card--reveal",staticStyle:{height:"100%"},attrs:{elevation:"0"}},[e(o["c"],{staticClass:"pb-0"},[e("p",{staticClass:"texto-body"},[t._v(" Nuestras evaluaciones y diagnósticos: ")]),e("ul",{staticClass:"texto-body text-left"},[e("li",[t._v("Assessment Center")]),e("li",[t._v(" Evaluación de Competencias Psicometría y Proyectiva ")]),e("li",[t._v("Evaluación del Desempeño")]),e("li",[t._v("Diagnóstico de Clima Laboral y Organizacional")])])]),e(o["a"],{staticClass:"pt-0"},[e(a["a"],{staticClass:"ma-5",staticStyle:{"text-transform":"none"},attrs:{outlined:"",color:"#12b0f4"},on:{click:function(e){t.reveal2=!1}}},[t._v(" Cerrar ")])],1)],1):t._e()],1)],1)],1)],1),e(l["a"],{attrs:{cols:"auto",md:"3",sm:"12"}},[e(i["a"],{staticClass:"tarjeta-serv",attrs:{elevation:"10",color:"white"}},[e(h["a"],{attrs:{src:"https://d1z76heyx58zfh.cloudfront.net/assets/gestion/entrenamiento2.png"}}),e(i["a"],{staticClass:"texto-card",attrs:{elevation:"0"}},[e(o["c"],[e("p",{staticClass:"titulos text--primary"},[t._v(" Entrenamiento, capacitación y desarrollo. ")]),e("p",[t._v("Virtual y Presencial")]),e("div",{staticClass:"texto-body cuerpo mt-n2 mb-n5",staticStyle:{"text-align":"center !important"}},[t._v(" La capacitación y desarrollo del personal de tu empresa es básico para el crecimiento de esta. ")])]),e(o["a"],[e(a["a"],{staticClass:"ma-5",staticStyle:{"text-transform":"none"},attrs:{outlined:"",color:"#12b0f4"},on:{click:function(e){t.reveal3=!0}}},[t._v(" Conoce más ")])],1),e(d["a"],[t.reveal3?e(i["a"],{staticClass:"transition-fast-in-fast-out v-card--reveal",staticStyle:{height:"100%"},attrs:{elevation:"0"}},[e(o["c"],{staticClass:"pb-0"},[e("p",{staticClass:"texto-body"},[t._v(" En Addition, contamos con diferentes metodologías de capacitación y desarrollo para el crecimiento de tu organización. ")]),e("ul",{staticClass:"texto-body text-left"},[e("li",[t._v("Team Building")]),e("li",[t._v("Capacitación tradicional")]),e("li",[t._v("Diseño de Programas de Coaching")])])]),e(o["a"],{staticClass:"pt-0"},[e(a["a"],{staticClass:"ma-5",staticStyle:{"text-transform":"none"},attrs:{outlined:"",color:"#12b0f4"},on:{click:function(e){t.reveal3=!1}}},[t._v(" Cerrar ")])],1)],1):t._e()],1)],1)],1)],1),e(l["a"],{attrs:{cols:"auto",md:"3",sm:"12"}},[e(i["a"],{staticClass:"tarjeta-serv",attrs:{elevation:"10",color:"white"}},[e(i["a"],{staticClass:"texto-card",attrs:{elevation:"0"}},[e(h["a"],{attrs:{src:"https://d1z76heyx58zfh.cloudfront.net/assets/gestion/especializados.png"}}),e(o["c"],[e("p",{staticClass:"titulos text--primary pb-5"},[t._v(" Servicios especializados. ")]),e("div",{staticClass:"texto-body cuerpo pt-5",staticStyle:{"text-align":"center !important"}},[t._v(" ¡En Addition evolucionamos a un modelo de servicios especializados! "),e("br"),e("br")])]),e(o["a"],{staticClass:"ma-5"},[e("div",[e(a["a"],{staticStyle:{"text-transform":"none"},attrs:{outlined:"",color:"#12b0f4"},on:{click:function(e){t.reveal4=!0}}},[t._v(" Conoce más ")])],1)]),e(d["a"],[t.reveal4?e(i["a"],{staticClass:"transition-fast-in-fast-out v-card--reveal d-flex flex-column",staticStyle:{height:"100%"},attrs:{elevation:"0"}},[e(o["c"],{staticClass:"pb-0"},[e("p",{staticClass:"text-left",staticStyle:{"line-height":"1.3rem"}},[t._v(" Estamos autorizados y cumplimos con todos los requisitos para ofrecer "),e("strong",[t._v(" Servicios Especializados")]),t._v(" enfocados en enriquecer al personal de tu empresa para que logres alcanzar objetivos administrativos, comerciales y de innovación. ")]),e(x["a"],{attrs:{"align-items":"center"}},[e(y["b"],{staticClass:"shrink mr-6",attrs:{mandatory:"",tag:"v-flex"},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},t._l(t.length,(function(s){return e(C,{key:s,scopedSlots:t._u([{key:"default",fn:function({active:s,toggle:i}){return[e("div",[e(a["a"],{attrs:{"input-value":s,icon:""},on:{click:i}},[e(u["a"],[t._v("mdi-record")])],1)],1)]}}],null,!0)})})),1),e(l["a"],[e(b["a"],{staticClass:"elevation-1",attrs:{vertical:""},model:{value:t.window,callback:function(e){t.window=e},expression:"window"}},[e(w["a"],[e(i["a"],{attrs:{flat:""}},[e(o["c"],[e(x["a"],{staticClass:"mb-4",attrs:{"align-items":"center"}},[e("strong",{staticClass:"text-h6"},[t._v("Addition back office administrativo")])]),e("p",{staticClass:"text-left"},[t._v(" Ofrecemos "),e("strong",[t._v(" soluciones profesionales")]),t._v(" que optimizan los procesos contables, legales, comerciales y administrativos de tu empresa para mejorar la productividad y cumplimiento de los objetivos de esta. ")])],1)],1)],1),e(w["a"],[e(i["a"],{attrs:{flat:""}},[e(o["c"],[e(x["a"],{staticClass:"mb-4",attrs:{"align-items":"center"}},[e("strong",{staticClass:"text-h6"},[t._v("Addition IT technology")])]),e("p",{staticClass:"text-left"},[t._v(" Contamos con un "),e("strong",[t._v(" soporte profesional especializado")]),t._v(" en programación, implementación, diseño, asesoría y servicios de internet. ")])],1)],1)],1),e(w["a"],[e(i["a"],{attrs:{flat:""}},[e(o["c"],[e(x["a"],{staticClass:"mb-4",attrs:{"align-items":"center"}},[e("strong",{staticClass:"text-h6"},[t._v("Addition personal de Marketing")])]),e("p",{staticClass:"text-left"},[t._v(" Brindamos "),e("strong",[t._v(" soluciones especializadas")]),t._v(" en el área de mercadotecnia, publicidad y actividades relacionadas, ayudando a nuestros clientes a impulsar sus ventas y hacer crecer tu negocio. ")])],1)],1)],1),e(w["a"],[e(i["a"],{attrs:{flat:""}},[e(o["c"],[e(x["a"],{staticClass:"mb-4",attrs:{"align-items":"center"}},[e("strong",{},[t._v("Servicios Especializados")])]),e("p",{staticClass:"text-left mb-n3 mt-n2"},[t._v(" En Addition pensamos en ti y en las necesidades específicas de tu empresa, por eso, evolucionamos y te ofrecemos un modelo de "),e("strong",[t._v(" soporte profesional especializado ")]),t._v(" que ayude a tu organización a gestionar áreas y procesos de suma importancia en tu empresa para que tú puedas enfocarte en el crecimiento y desarrollo de esta. ")])],1)],1)],1)],1)],1)],1)],1),e(o["a"],{staticClass:"pt-0"},[e(a["a"],{staticClass:"ma-5",staticStyle:{"text-transform":"none"},attrs:{outlined:"",color:"#12b0f4"},on:{click:function(e){t.reveal4=!1}}},[t._v(" Cerrar ")])],1)],1):t._e()],1)],1)],1)],1)],1)],1)]),e(c["a"],{staticClass:"pa-0",attrs:{fluid:""}},[e(x["a"],{attrs:{"no-gutters":""}},[e(l["a"],{staticClass:"solo-desk",attrs:{cols:"6"}},[e(h["a"],{attrs:{height:"100%",src:"https://d1z76heyx58zfh.cloudfront.net/assets/servicios/servicios-section.png"}})],1),e(l["a"],{attrs:{cols:"auto",md:"6",sm:"12"}},[e(i["a"],{staticClass:"mx-12 my-12",attrs:{elevation:"0"}},[e("h2",{staticClass:"text-left mb-n1 blue-color"},[t._v(" Gestión de Recursos Humanos ")]),e(o["c"],{staticClass:"text-justify texto-body"},[t._v("En "),e("strong",[t._v(" Addition Human Resources")]),t._v(" sabemos que el recurso más valioso de tu empresa es su gente. "),e("br"),e("br"),t._v(" En Addition estamos comprometidos a ayudarte con la "),e("strong",[t._v(" motivación, retención y desarrollo de talento de tu equipo de trabajo,")]),t._v(" por lo que proporcionamos soluciones funcionales y prácticas con una comunicación estrecha y personalizada a nivel organizacional, individual y/o grupal para cumplir con los objetivos de tu organización. "),e("br")]),e("div",{staticClass:"text-left"},[e(a["a"],{staticClass:"pa-6",staticStyle:{"text-transform":"none"},attrs:{color:"#12b0f4",dark:"",rounded:"",to:"contactanos"}},[t._v(" ¡Contáctanos!")])],1)],1)],1)],1)],1),e(x["a"],{staticClass:"contadores",attrs:{"no-gutters":""}},[e(l["a"],{staticClass:"pt-10",staticStyle:{"border-right":"2px #fff solid"},attrs:{cols:"4"}},[e("span",{staticClass:"numero"},[e("strong",[t._v("+20")])]),e("br"),e("span",{staticClass:"texto"},[t._v("años de experiencia")])]),e(l["a"],{staticClass:"px-5 py-10",staticStyle:{"border-right":"2px #fff solid"},attrs:{cols:"4"}},[e("span",{staticClass:"numero"},[e("strong",[t._v("+40.000")])]),e("br"),e("span",{staticClass:"texto"},[t._v("personas por año impactadas")])]),e(l["a"],{staticClass:"pt-10",attrs:{cols:"4"}},[e("span",{staticClass:"numero"},[e("strong",[t._v("+2000")])]),e("br"),e("span",{staticClass:"texto"},[t._v("empresas satisfechas")])])],1),e(c["a"],{staticClass:"pa-0",attrs:{fluid:""}},[e(x["a"],{staticStyle:{"background-color":"#12b0f4"},attrs:{"no-gutters":""}},[e(l["a"],{staticClass:"solo-desk contenedor",staticStyle:{color:"#fff"},attrs:{cols:"auto",md:"6"}},[e("div",{staticClass:"pl-16 ml-16",staticStyle:{"text-align":"left !important"}},[e("span",{staticClass:"texto-big"},[t._v("¿Por qué pensar en"),e("br"),e("strong",[t._v(" gestión de RH?")])])])]),e(l["a"],{attrs:{cols:"auto",md:"6",sm:"12"}},[e("div",{staticClass:"solo-mob pa-10",staticStyle:{color:"#fff"}},[e("span",{staticClass:"text-h4"},[t._v("¿Por qué pensar en "),e("br"),e("strong",[t._v("gestión de RH?")])])]),e("div",[e(n["a"],{staticStyle:{"background-color":"#fff"},attrs:{cycle:"","show-arrows":!1,"hide-delimiter-background":"",light:""}},[e(r["a"],[e(i["a"],{staticClass:"mx-auto text-justify",attrs:{"max-width":"750","min-height":"350",elevation:"0"}},[e(h["a"],{attrs:{"max-height":"300",src:"https://d1z76heyx58zfh.cloudfront.net/assets/home/bolsa-de-trabajo.jpg"}}),e("div",{staticClass:"texto-ex ma-5"},[e(o["c"],{staticClass:"text-h5"},[t._v(" Una correcta gestión de "),e("strong",[t._v(" Recursos Humanos")]),t._v(" ayuda a las empresas a lograr objetivos financieros y de crecimiento profesional. ")])],1)],1)],1),e(r["a"],[e(i["a"],{staticClass:"mx-auto text-justify",attrs:{"max-width":"750","min-height":"350",elevation:"0"}},[e(h["a"],{attrs:{"max-height":"300",src:"https://d1z76heyx58zfh.cloudfront.net/assets/home/alianzas-casos-de-exito.jpg"}}),e("div",{staticClass:"texto-ex ma-5"},[e(o["c"],{staticClass:"text-h5"},[t._v(" El desarrollo del "),e("strong",[t._v(" talento humano")]),t._v(" de una empresa ahorra costos de rotación de personal y salud organizacional. ")])],1)],1)],1),e(r["a"],[e(i["a"],{staticClass:"mx-auto text-justify",attrs:{"max-width":"750","min-height":"350",elevation:"0"}},[e(h["a"],{attrs:{"max-height":"300",src:"https://d1z76heyx58zfh.cloudfront.net/assets/home/servicios-especializados.jpg"}}),e("div",{staticClass:"texto-ex ma-5"},[e(o["c"],{staticClass:"text-h5"},[t._v(" Mejora la productividad, el "),e("strong",[t._v(" clima laboral")]),t._v(" y la comunicación interna de la empresa. ")])],1)],1)],1),e(r["a"],[e(i["a"],{staticClass:"mx-auto text-justify",attrs:{"max-width":"750","min-height":"350",elevation:"0"}},[e(h["a"],{attrs:{"max-height":"300",src:"https://d1z76heyx58zfh.cloudfront.net/assets/home/diversidad-inclusion.jpg"}}),e("div",{staticClass:"texto-ex ma-5"},[e(o["c"],{staticClass:"text-h5"},[t._v(" Fortalece la "),e("strong",[t._v(" pertenencia, lealtad y compromiso")]),t._v(" con su empresa por parte del personal. ")])],1)],1)],1)],1)],1)])],1)],1)],1)},S=[],T={data:()=>({reveal:!1,reveal2:!1,reveal3:!1,reveal4:!1,length:4,window:0})},z=T,$=(s("4e61"),s("2877")),j=Object($["a"])(z,_,S,!1,null,null,null);e["default"]=j.exports},"4e61":function(t,e,s){"use strict";s("e997")},"5e66":function(t,e,s){"use strict";s("63b7");var a=s("f665"),i=s("afdd"),o=s("9d26"),n=s("37c6"),r=s("604c"),l=r["a"].extend({name:"button-group",provide(){return{btnToggle:this}},computed:{classes(){return r["a"].options.computed.classes.call(this)}},methods:{genData:r["a"].options.methods.genData}}),c=s("80d2"),d=s("d9bd");e["a"]=a["a"].extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:t=>t>0},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide(){return{parentTheme:this.theme}},data(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes(){return{...a["a"].options.computed.classes.call(this),"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical}},isDark(){return this.dark||!this.light},isVertical(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height(t,e){t!==e&&t&&(this.internalHeight=t)},cycle(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created(){this.$attrs.hasOwnProperty("hide-controls")&&Object(d["a"])("hide-controls",':show-arrows="false"',this)},mounted(){this.startTimeout()},methods:{genControlIcons(){return this.isVertical?null:a["a"].options.methods.genControlIcons.call(this)},genDelimiters(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems(){const t=this.items.length,e=[];for(let s=0;s<t;s++){const a=this.$createElement(i["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",s+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[s],s)}},[this.$createElement(o["a"],{props:{size:18}},this.delimiterIcon)]);e.push(a)}return this.$createElement(l,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:t=>{this.internalValue=t}}},e)},genProgress(){return this.$createElement(n["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render(t){const e=a["a"].options.render.call(this,t);return e.data.style=`height: ${Object(c["g"])(this.height)};`,this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}})},"63b7":function(t,e,s){},afdd:function(t,e,s){"use strict";var a=s("8336");e["a"]=a["a"]},e997:function(t,e,s){},f665:function(t,e,s){"use strict";s("13b3");var a=s("c3f0"),i=s("afdd"),o=s("9d26"),n=s("604c");e["a"]=n["a"].extend({name:"v-window",directives:{Touch:a["a"]},provide(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive(){return this.transitionCount>0},classes(){return{...n["a"].options.computed.classes.call(this),"v-window--show-arrows-on-hover":this.showArrowsOnHover}},computedTransition(){if(!this.isBooted)return"";const t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,s=e?"-reverse":"";return`v-window-${t}${s}-transition`},hasActiveItems(){return Boolean(this.items.find(t=>!t.disabled))},hasNext(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev(){return this.continuous||this.internalIndex>0},internalIndex(){return this.items.findIndex((t,e)=>this.internalValue===this.getValue(t,e))},internalReverse(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex(t,e){this.isReverse=this.updateReverse(t,e)}},mounted(){window.requestAnimationFrame(()=>this.isBooted=!0)},methods:{genDefaultSlot(){return this.$slots.default},genContainer(){const t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon(t,e,s){var a,n,r;const l={click:t=>{t.stopPropagation(),this.changedByDelimiters=!0,s()}},c={"aria-label":this.$vuetify.lang.t("$vuetify.carousel."+t)},d=null!=(a=null==(n=(r=this.$scopedSlots)[t])?void 0:n.call(r,{on:l,attrs:c}))?a:[this.$createElement(i["a"],{props:{icon:!0},attrs:c,on:l},[this.$createElement(o["a"],{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__"+t},d)},genControlIcons(){const t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){const s=this.genIcon("prev",e,this.prev);s&&t.push(s)}const s=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&s&&"string"===typeof s){const e=this.genIcon("next",s,this.next);e&&t.push(e)}return t},getNextIndex(t){const e=(t+1)%this.items.length,s=this.items[e];return s.disabled?this.getNextIndex(e):e},getPrevIndex(t){const e=(t+this.items.length-1)%this.items.length,s=this.items[e];return s.disabled?this.getPrevIndex(e):e},next(){if(!this.hasActiveItems||!this.hasNext)return;const t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},prev(){if(!this.hasActiveItems||!this.hasPrev)return;const t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)},updateReverse(t,e){const s=this.items.length,a=s-1;return s<=2?t<e:t===a&&0===e||(0!==t||e!==a)&&t<e}},render(t){const e={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){const t=this.touch||{left:()=>{this.$vuetify.rtl?this.prev():this.next()},right:()=>{this.$vuetify.rtl?this.next():this.prev()},end:t=>{t.stopPropagation()},start:t=>{t.stopPropagation()}};e.directives.push({name:"touch",value:t})}return t("div",e,[this.genContainer()])}})}}]);
//# sourceMappingURL=chunk-6953ea94.9af96450.js.map