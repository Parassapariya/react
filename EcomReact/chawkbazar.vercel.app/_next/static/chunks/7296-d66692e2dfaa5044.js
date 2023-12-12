"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7296],{92335:function(t,e,i){var n=i(85893),a=i(94184),l=i.n(a);e.Z=function(t){var e=t.title,i=t.description,a=t.className,s=t.action,r=t.hide;return(0,n.jsxs)("div",{className:l()("text-center p-5 bg-white text-sm flex-row justify-center items-center font-medium fixed bottom-0 w-full z-30 transition-all duration-300 ease-out shadow-cookies",{transform:!0,"translate-y-0 opacity-100":!r,"translate-y-full opacity-0":r},a),children:[(0,n.jsx)("span",{className:"inline-block mb:block mb-3.5 leading-6",children:e}),(0,n.jsx)("span",{className:"inline-block ltr:md:ml-3 rtl:md:mr-3",children:i}),s&&s]})}},79765:function(t,e,i){i.d(e,{Z:function(){return O}});var n=i(828),a=i(85893),l=i(67294),s=i(94184),r=i.n(s),o=i(26042),c=i(69396),d=i(24561),h=function(t){return(0,a.jsxs)(d.ZP,(0,c.Z)((0,o.Z)({speed:2,width:846,height:96,viewBox:"0 0 846 96",backgroundColor:"#f3f3f3",foregroundColor:"#eaeaea",className:"w-full h-auto"},t),{children:[(0,a.jsx)("rect",{x:"118",y:"31",rx:"3",ry:"3",width:"120",height:"8"}),(0,a.jsx)("rect",{x:"118",y:"59",rx:"3",ry:"3",width:"80",height:"8"}),(0,a.jsx)("rect",{x:"0",y:"0",rx:"6",ry:"6",width:"96",height:"96"})]}))},u=i(78126),m=i(99534),p=i(32453),x=i(30674),f=i(60155),g=l.forwardRef((function(t,e){var i=t.className,n=t.onSubmit,l=t.onClear,s=(0,m.Z)(t,["className","onSubmit","onClear"]),c=(0,x.$G)("forms").t;return(0,a.jsxs)("form",{className:r()("relative ltr:pr-12 ltr:md:pr-14 rtl:pl-12 rtl:md:pl-14 bg-white overflow-hidden rounded-md w-full",i),noValidate:!0,role:"search",onSubmit:n,children:[(0,a.jsxs)("label",{htmlFor:"search",className:"flex items-center py-0.5",children:[(0,a.jsx)("span",{className:"flex items-center justify-center flex-shrink-0 w-12 h-full cursor-pointer md:w-14 focus:outline-none",children:(0,a.jsx)(p.Z,{color:"text-heading",className:"w-4 h-4"})}),(0,a.jsx)("input",(0,o.Z)({id:"search",className:"w-full h-12 text-sm placeholder-gray-400 outline-none text-heading lg:h-14 lg:text-base",placeholder:c("placeholder-search"),"aria-label":"Search",autoComplete:"off",ref:e},s))]}),(0,a.jsx)("button",{type:"button",className:"absolute top-0 flex items-center justify-center w-12 h-full text-2xl text-gray-400 transition duration-200 ease-in-out outline-none md:text-3xl ltr:right-0 rtl:left-0 md:w-14 hover:text-heading focus:outline-none",onClick:l,children:(0,a.jsx)(f.IOM,{className:"w-6 h-6"})})]})})),w=i(47568),v=i(70655),j=i(75402),b=i(34758),y=i(88767),N=function(){var t=(0,w.Z)((function(t){var e,i;return(0,v.__generator)(this,(function(a){switch(a.label){case 0:return e=t.queryKey,i=(0,n.Z)(e,2),i[0],i[1],[4,j.Z.get(b.P.SEARCH)];case 1:return[2,a.sent().data]}}))}));return function(e){return t.apply(this,arguments)}}(),k=i(58509),_=i(84036),C=i(96872),R=i(25675),S=i.n(R),Z=i(9627),T=i(68139),E=function(t){var e,i,n=t.item,l=(0,Z.ZP)({amount:n.sale_price?n.sale_price:n.price,baseAmount:n.price,currencyCode:"USD"}),s=l.price,r=l.basePrice;return(0,a.jsxs)(C.Z,{href:"".concat(T.Z.PRODUCT,"/").concat(null===n||void 0===n?void 0:n.slug),className:"flex items-center justify-start w-full h-auto group",children:[(0,a.jsx)("div",{className:"relative flex flex-shrink-0 w-24 h-24 overflow-hidden bg-gray-200 rounded-md cursor-pointer ltr:mr-4 rtl:ml-4",children:(0,a.jsx)(S(),{src:null!==(i=null===n||void 0===n||null===(e=n.image)||void 0===e?void 0:e.original)&&void 0!==i?i:"/assets/placeholder/search-product.svg",width:96,height:96,loading:"eager",alt:n.name||"Product Image",className:"object-cover bg-gray-200"})}),(0,a.jsxs)("div",{className:"flex flex-col w-full overflow-hidden",children:[(0,a.jsx)("h3",{className:"mb-2 text-sm truncate text-heading",children:n.name}),(0,a.jsxs)("div",{className:"text-sm font-semibold text-heading",children:[s,(0,a.jsx)("del",{className:"font-normal text-gray-400 ltr:pr-2 rtl:pl-2",children:r})]})]})]})};function O(){var t,e=(0,u.l8)(),i=e.displaySearch,s=e.closeSearch,o=(0,n.Z)(l.useState(""),2),c=o[0],d=o[1],m=(t={text:c},(0,y.useQuery)([b.P.SEARCH,t],N)),p=m.data,x=m.isLoading,f=(0,l.useRef)(null);return(0,l.useEffect)((function(){return f.current&&(i?(0,k.Qp)(f.current):(0,k.tG)(f.current)),function(){(0,k.tP)()}}),[i]),(0,a.jsxs)("div",{ref:f,children:[(0,a.jsx)("div",{className:r()("overlay",{open:i}),role:"button",onClick:s}),(0,a.jsx)("div",{className:r()("drawer-search relative hidden top-0 z-30 opacity-0 invisible transition duration-300 ease-in-out left-1/2 px-4 w-full md:w-[730px] lg:w-[930px]",{open:i}),children:(0,a.jsx)("div",{className:"w-full flex flex-col justify-center",children:(0,a.jsxs)("div",{className:"flex-shrink-0 mt-3.5 lg:mt-4 w-full",children:[(0,a.jsx)("div",{className:"flex flex-col mx-auto mb-1.5 w-full ",children:(0,a.jsx)(g,{onSubmit:function(t){t.preventDefault()},onChange:function(t){d(t.currentTarget.value)},name:"search",value:c,onClear:function(){d("")},ref:function(t){return t&&t.focus()}})}),c&&(0,a.jsx)("div",{className:"bg-white flex flex-col rounded-md overflow-hidden h-full max-h-64vh lg:max-h-[550px]",children:(0,a.jsx)(_.Z,{className:"os-host-flexbox",children:(0,a.jsx)("div",{className:"h-full",children:x?(0,a.jsx)("div",{className:"p-5 border-b border-gray-300 border-opacity-30 last:border-b-0",children:Array.from({length:5}).map((function(t,e){return(0,a.jsx)(h,{uniqueKey:"top-search-".concat(e)},e)}))}):null===p||void 0===p?void 0:p.map((function(t,e){return(0,a.jsx)("div",{className:" p-5 border-b border-gray-150 relative last:border-b-0",onClick:s,children:(0,a.jsx)(E,{item:t},e)})}))})})})]})})})]})}},32453:function(t,e,i){var n=i(85893);e.Z=function(t){var e=t.color,i=void 0===e?"currentColor":e,a=t.width,l=void 0===a?"17px":a,s=t.height,r=void 0===s?"18px":s,o=t.className,c=void 0===o?"md:w-4 xl:w-5 md:h-4 xl:h-5":o;return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:l,height:r,viewBox:"0 0 18.942 20",className:c,children:(0,n.jsx)("path",{d:"M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z",transform:"translate(-367.297 -371.285)",fill:i,fillRule:"evenodd"})})}},25774:function(t,e,i){var n=i(85893),a=i(89146),l=i(38808),s=i(30674),r=i(8193),o=i(94184),c=i.n(o),d=i(96872),h=(new Date).getFullYear();e.Z=function(t){var e=t.payment,i=t.variant,o=(0,s.$G)("footer").t;return(0,n.jsx)("div",{className:"pt-5 pb-16 mb-2 border-t border-gray-300 sm:pb-20 md:pb-5 sm:mb-0",children:(0,n.jsxs)(a.Z,{className:c()("flex flex-col-reverse md:flex-row text-center md:justify-between",{"items-center":"contemporary"===i}),children:[(0,n.jsxs)("p",{className:c()("text-body text-xs lg:text-sm leading-6",{"p-0 m-0":"contemporary"===i}),children:[o("text-copyright")," \xa9 ",h,"\xa0",(0,n.jsx)("a",{className:"font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-body",href:l.U.author.websiteUrl,children:l.U.author.name}),"\xa0 ",o("text-all-rights-reserved")]}),e&&(0,n.jsx)("ul",{className:"flex-wrap items-center justify-center hidden mx-auto mb-1 md:flex gap-x-4 xs:gap-x-5 lg:gap-x-7 md:mb-0 md:mx-0",children:null===e||void 0===e?void 0:e.map((function(t){return(0,n.jsx)("li",{className:"mb-2 transition md:mb-0 hover:opacity-80",children:(0,n.jsx)("a",{href:t.path?t.path:"/#",target:"_blank",children:(0,n.jsx)("img",{src:t.image,alt:o("".concat(t.name)),height:t.height,width:t.width})})},"payment-list--key".concat(t.id))}))}),"contemporary"===i&&(0,n.jsxs)("p",{className:"text-sm font-semibold leading-[19px] text-[#212121] cursor-pointer",children:[(0,n.jsx)(d.Z,{href:"#siteHeader",children:"Scroll to top"}),(0,n.jsx)(r.y1n,{className:"inline ltr:ml-3 rtl:mr-3"})]})]})})}},51009:function(t,e,i){i.d(e,{M:function(){return l},Q:function(){return s}});var n=i(85893),a=i(60155),l={widgets:[{id:1,widgetTitle:"widget-title-social",lists:[{id:1,title:"link-instagram",path:"https://www.instagram.com/redqinc/",icon:(0,n.jsx)(a.oVe,{})},{id:2,title:"link-twitter",path:"https://twitter.com/redqinc",icon:(0,n.jsx)(a.JUd,{})},{id:3,title:"link-facebook",path:"https://www.facebook.com/redqinc/",icon:(0,n.jsx)(a.egd,{})},{id:4,title:"link-youtube",path:"https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw",icon:(0,n.jsx)(a.tPx,{})}]},{id:2,widgetTitle:"widget-title-contact",lists:[{id:1,title:"link-contact-us",path:"/contact-us"},{id:2,title:"link-email",path:"/"},{id:3,title:"link-email-two",path:"/"},{id:4,title:"link-phone",path:"/"}]},{id:3,widgetTitle:"widget-title-about",lists:[{id:1,title:"link-support-center",path:"/contact-us"},{id:2,title:"link-customer-support",path:"/"},{id:3,title:"link-about-us",path:"/contact-us"},{id:4,title:"link-copyright",path:"/"}]},{id:4,widgetTitle:"widget-title-customer-care",lists:[{id:1,title:"link-faq",path:"/faq"},{id:2,title:"link-shipping",path:"/"},{id:3,title:"link-exchanges",path:"/"}]},{id:5,widgetTitle:"widget-title-our-information",lists:[{id:1,title:"link-privacy",path:"/privacy"},{id:2,title:"link-terms",path:"/terms"},{id:3,title:"link-return-policy",path:"/privacy"},{id:4,title:"link-site-map",path:"/"}]},{id:6,widgetTitle:"widget-title-top-categories",lists:[{id:1,title:"link-men-wear",path:"/search"},{id:2,title:"link-men-wear",path:"/search"},{id:3,title:"link-kids-wear",path:"/search"},{id:4,title:"link-sports-wear",path:"/search"}]}],payment:[{id:1,path:"/",image:"/assets/images/payment/mastercard.svg",name:"payment-master-card",width:34,height:20},{id:2,path:"/",image:"/assets/images/payment/visa.svg",name:"payment-visa",width:50,height:20},{id:3,path:"/",image:"/assets/images/payment/paypal.svg",name:"payment-paypal",width:76,height:20},{id:4,path:"/",image:"/assets/images/payment/jcb.svg",name:"payment-jcb",width:26,height:20},{id:5,path:"/",image:"/assets/images/payment/skrill.svg",name:"payment-skrill",width:39,height:20}]},s={widgets:[{id:0,isCompanyIntroduction:!0,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",lists:[{id:1,title:"link-instagram",path:"https://www.instagram.com/redqinc/",icon:(0,n.jsx)(a.oVe,{})},{id:2,title:"link-twitter",path:"https://twitter.com/redqinc",icon:(0,n.jsx)(a.JUd,{})},{id:3,title:"link-facebook",path:"https://www.facebook.com/redqinc/",icon:(0,n.jsx)(a.egd,{})},{id:4,title:"link-youtube",path:"https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw",icon:(0,n.jsx)(a.tPx,{})}]},{id:1,widgetTitle:"widget-title-social",lists:[{id:1,title:"link-instagram",path:"https://www.instagram.com/redqinc/",icon:(0,n.jsx)(a.oVe,{})},{id:2,title:"link-twitter",path:"https://twitter.com/redqinc",icon:(0,n.jsx)(a.JUd,{})},{id:3,title:"link-facebook",path:"https://www.facebook.com/redqinc/",icon:(0,n.jsx)(a.egd,{})},{id:4,title:"link-youtube",path:"https://www.youtube.com/channel/UCjld1tyVHRNy_pe3ROLiLhw",icon:(0,n.jsx)(a.tPx,{})}]},{id:2,widgetTitle:"widget-title-contact",lists:[{id:1,title:"link-contact-us",path:"/contact-us"},{id:2,title:"link-email",path:"/"},{id:3,title:"link-email-two",path:"/"},{id:4,title:"link-phone",path:"/"}]},{id:3,widgetTitle:"widget-title-about",lists:[{id:1,title:"link-support-center",path:"/contact-us"},{id:2,title:"link-customer-support",path:"/"},{id:3,title:"link-about-us",path:"/contact-us"},{id:4,title:"link-copyright",path:"/"}]},{id:4,widgetTitle:"widget-title-customer-care",lists:[{id:1,title:"link-faq",path:"/faq"},{id:2,title:"link-shipping",path:"/"},{id:3,title:"link-exchanges",path:"/"}]},{id:5,widgetTitle:"widget-title-our-information",lists:[{id:1,title:"link-privacy",path:"/privacy"},{id:2,title:"link-terms",path:"/terms"},{id:3,title:"link-return-policy",path:"/privacy"},{id:4,title:"link-site-map",path:"/"}]}],payment:[{id:1,path:"/",image:"/assets/images/payment/mastercard.svg",name:"payment-master-card",width:34,height:20},{id:2,path:"/",image:"/assets/images/payment/visa.svg",name:"payment-visa",width:50,height:20},{id:3,path:"/",image:"/assets/images/payment/paypal.svg",name:"payment-paypal",width:76,height:20},{id:4,path:"/",image:"/assets/images/payment/jcb.svg",name:"payment-jcb",width:26,height:20},{id:5,path:"/",image:"/assets/images/payment/skrill.svg",name:"payment-skrill",width:39,height:20}]}},73306:function(t,e,i){i.d(e,{Z:function(){return u}});var n=i(85893),a=i(89146),l=i(41664),s=i.n(l),r=i(30674),o=i(57310),c=function(t){var e=t.className,i=t.data,a=i.widgetTitle,l=i.lists,c=(i.logo,i.description),d=(0,r.$G)("footer").t;return(0,n.jsx)("div",{className:"".concat(e," ").concat((null===i||void 0===i?void 0:i.isCompanyIntroduction)&&"col-span-2"),children:(null===i||void 0===i?void 0:i.isCompanyIntroduction)?(0,n.jsxs)("div",{className:"ltr:mr-4 rtl:ml-4 flex flex-col space-y-7 lg:space-y-7.5",children:[(0,n.jsx)(o.Z,{className:""}),(0,n.jsx)("p",{className:"text-sm font-normal text-[#1D1E1F] leading-6 max-w-[334px] ",children:c}),(0,n.jsx)("ul",{className:"text-xs lg:text-sm text-body flex items-center gap-x-3 lg:gap-x-3.5",children:l.map((function(t){return(0,n.jsx)("li",{className:"flex items-baseline",children:t.icon&&(0,n.jsx)("span",{className:"ltr:mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base",children:t.icon})},"widget-list--key".concat(t.id))}))})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h4",{className:"mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7",children:d("".concat(a))}),(0,n.jsx)("ul",{className:"text-xs lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5",children:l.map((function(t){return(0,n.jsxs)("li",{className:"flex items-baseline",children:[t.icon&&(0,n.jsx)("span",{className:"ltr:mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base",children:t.icon}),(0,n.jsx)(s(),{href:t.path?t.path:"#!",children:(0,n.jsx)("a",{className:"transition-colors duration-200 hover:text-black",children:d("".concat(t.title))})})]},"widget-list--key".concat(t.id))}))})]})})},d=i(94184),h=i.n(d),u=function(t){var e=t.widgets,i=t.variant;return(0,n.jsx)(a.Z,{children:(0,n.jsx)("div",{className:h()("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-9 xl:gap-5  pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24 lg:mb-0.5 2xl:mb-0 3xl:-mb-1",{"xl:grid-cols-6":"contemporary"!==i,"xl:grid-cols-7":"contemporary"===i}),children:null===e||void 0===e?void 0:e.map((function(t){return(0,n.jsx)(c,{data:t,className:"pb-3 md:pb-0",variant:"contemporary"},"footer-widget--key".concat(t.id))}))})})}},4760:function(t,e,i){i.d(e,{Z:function(){return y}});var n=i(26042),a=i(69396),l=i(85893),s=i(96872),r=i(32453),o=function(t){var e=t.color,i=void 0===e?"currentColor":e,n=t.width,a=void 0===n?"18px":n,s=t.height,r=void 0===s?"20px":s;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:r,viewBox:"0 0 16.577 18.6",children:(0,l.jsx)("path",{d:"M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z",transform:"translate(7723.3 -2914.703)",fill:i,stroke:i,strokeWidth:"0.6"})})},c=function(t){return(0,l.jsx)("svg",(0,a.Z)((0,n.Z)({xmlns:"http://www.w3.org/2000/svg",width:"22",height:"14",viewBox:"0 0 25.567 18"},t),{children:(0,l.jsxs)("g",{transform:"translate(-776 -462)",children:[(0,l.jsx)("rect",{id:"Rectangle_941","data-name":"Rectangle 941",width:"12.749",height:"2.499",rx:"1.25",transform:"translate(776 462)",fill:"currentColor"}),(0,l.jsx)("rect",{id:"Rectangle_942","data-name":"Rectangle 942",width:"25.567",height:"2.499",rx:"1.25",transform:"translate(776 469.75)",fill:"currentColor"}),(0,l.jsx)("rect",{id:"Rectangle_943","data-name":"Rectangle 943",width:"17.972",height:"2.499",rx:"1.25",transform:"translate(776 477.501)",fill:"currentColor"})]})}))},d=function(t){var e=t.color,i=void 0===e?"currentColor":e,n=t.width,a=void 0===n?"18px":n,s=t.height,r=void 0===s?"20px":s;return(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:a,height:r,viewBox:"0 0 17.996 20.442",children:(0,l.jsx)("path",{d:"M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z",transform:"translate(-30.619 0.236)",fill:i,stroke:i,strokeWidth:"0.4"})})},h=i(78126),u=i(11163),m=i(68139),p=i(5152),x=i.n(p),f=i(42839),g=i(62687),w=i(11614),v=x()((function(){return i.e(1754).then(i.bind(i,61754))}),{loadableGenerated:{webpack:function(){return[61754]}},ssr:!1}),j=x()((function(){return i.e(5395).then(i.bind(i,65395))}),{loadableGenerated:{webpack:function(){return[65395]}},ssr:!1}),b=x()((function(){return i.e(2963).then(i.bind(i,72963))}),{loadableGenerated:{webpack:function(){return[72963]}}}),y=function(){var t=(0,h.l8)(),e=t.openSidebar,i=t.closeSidebar,p=t.displaySidebar,x=t.openSearch,y=t.openModal,N=t.setModalView,k=t.isAuthorized,_=(0,u.useRouter)().locale,C=(0,g.M)(_),R="ltr"===C?{left:0}:{right:0};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"lg:hidden fixed z-10 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4 md:px-8",children:[(0,l.jsx)("button",{"aria-label":"Menu",className:"menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none",onClick:function(){return e()},children:(0,l.jsx)(c,{})}),(0,l.jsx)("button",{className:"flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none",onClick:x,"aria-label":"search-button",children:(0,l.jsx)(r.Z,{})}),(0,l.jsx)(s.Z,{href:"/",className:"flex-shrink-0",children:(0,l.jsx)(d,{})}),(0,l.jsx)(v,{}),(0,l.jsx)(j,{isAuthorized:k,href:m.Z.ACCOUNT,className:"flex-shrink-0",btnProps:{className:"flex-shrink-0 focus:outline-none",children:(0,l.jsx)(o,{}),onClick:function(){return N("LOGIN_VIEW"),y()}},children:(0,l.jsx)(o,{})})]}),(0,l.jsx)(f.d,(0,a.Z)((0,n.Z)({placement:"rtl"===C?"right":"left",open:p,onClose:i,contentWrapperStyle:R},w.ZP),{children:(0,l.jsx)(b,{})}))]})}},89146:function(t,e,i){var n=i(85893),a=i(94184),l=i.n(a);e.Z=function(t){var e=t.children,i=t.className,a=t.el,s=void 0===a?"div":a,r=t.clean,o=l()(i,{"mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16":!r}),c=s;return(0,n.jsx)(c,{className:o,children:e})}},41777:function(t,e,i){i.d(e,{Z:function(){return h}});var n=i(85893),a=i(67294),l=i(75305),s=i(17106),r=i(53854),o=i(38808),c=i(30674),d=i(11163);function h(){var t=o.U.site_header,e=(0,c.$G)("common").t,i=t.languageMenu,h=(0,d.useRouter)(),u=h.asPath,m=h.locale,p=m?i.find((function(t){return t.value===m})):i[2],x=(0,a.useState)(p),f=x[0],g=x[1];return(0,n.jsx)(l.R,{value:f,onChange:function(t){g(t),h.push(u,void 0,{locale:t.value})},children:function(t){var o=t.open;return(0,n.jsxs)("div",{className:"relative ltr:ml-2 rtl:mr-2 ltr:lg:ml-0 rtl:lg:mr-0 z-10 w-[140px] sm:w-[150px] lg:w-[130px] xl:w-[150px]",children:[(0,n.jsxs)(l.R.Button,{className:"border border-gray-300 text-heading text-[13px] xl:text-sm font-semibold relative w-full py-2 ltr:pl-3 rtl:pr-3 ltr:pr-7 rtl:pl-7 ltr:text-left rtl:text-right bg-white rounded-lg shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 cursor-pointer",children:[(0,n.jsxs)("span",{className:"flex truncate items-center",children:[(0,n.jsx)("span",{className:"ltr:mr-1.5 rtl:ml-1.5",children:f.icon})," ",e(f.name)]}),(0,n.jsx)("span",{className:"absolute inset-y-0 ltr:right-0 rtl:left-0 flex items-center ltr:pr-1.5 rtl:pl-1.5 pointer-events-none",children:(0,n.jsx)(r.YZt,{className:"w-5 h-5 text-gray-400","aria-hidden":"true"})})]}),(0,n.jsx)(s.u,{show:o,as:a.Fragment,leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,n.jsx)(l.R.Options,{static:!0,className:"absolute w-full py-1 mt-1 overflow-auto bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none text-sm",children:null===i||void 0===i?void 0:i.map((function(t){return(0,n.jsx)(l.R.Option,{className:function(t){var e=t.active;return"".concat(e?"text-amber-900 bg-gray-100":"text-gray-900","\n\t\t\t\t\t\t\t\t\t\t\t\tcursor-pointer select-none relative py-2 px-3")},value:t,children:function(i){var a=i.selected,l=i.active;return(0,n.jsxs)("span",{className:"flex items-center",children:[t.icon,(0,n.jsx)("span",{className:"".concat(a?"font-medium":"font-normal"," block truncate ltr:ml-1.5 rtl:mr-1.5"),children:e(t.name)}),a?(0,n.jsx)("span",{className:"".concat(l&&"text-amber-600","\n                                 absolute inset-y-0 ltr:left-0 rtl:right-0 flex items-center ltr:pl-3 rtl:pr-3")}):null]})}},t.id)}))})})]})}})}},57310:function(t,e,i){var n=i(26042),a=i(69396),l=i(99534),s=i(85893),r=i(25675),o=i.n(r),c=i(96872),d=i(94184),h=i.n(d),u=i(38808);e.Z=function(t){var e=t.className,i=(0,l.Z)(t,["className"]);return(0,s.jsx)(c.Z,(0,a.Z)((0,n.Z)({href:u.U.logo.href,className:h()("inline-flex focus:outline-none",e)},i),{children:(0,s.jsx)(o(),{src:u.U.logo.url,alt:u.U.logo.alt,height:u.U.logo.height,width:u.U.logo.width,layout:"fixed",loading:"eager"})}))}},34758:function(t,e,i){i.d(e,{P:function(){return n}});var n={LOGIN:"/login",REGISTER:"/register",LOGOUT:"/logout",FORGET_PASSWORD:"/forget-password",CATEGORIES:"/categories.json",CATEGORIES_2:"/categories.json",CATEGORIES_ANCIENT:"/categories_ancient.json",FEATURED_CATEGORIES:"/featured_categories.json",COLLECTIONS:"/collections.json",BRANDS:"/brands.json",BRANDS_ANCIENT:"/brands_ancient.json",PRODUCTS:"/products.json",PRODUCTS_2:"/products_2.json",PRODUCTS_ANCIENT:"/products_ancient.json",FEATURED_PRODUCTS:"/featured_products.json",FEATURED_PRODUCTS_ANCIENT:"/featured_products_ancient.json",TOP_SELLER_PRODUCTS:"/products_top_seller.json",ON_SELLING_PRODUCTS:"/products_on_selling.json",PRODUCT:"/product.json",RELATED_PRODUCTS:"/related_products.json",BEST_SELLER_PRODUCTS:"/products_best_seller.json",NEW_ARRIVAL_PRODUCTS:"/products_new_arrival.json",POPULAR_PRODUCTS:"/products_popular.json",NEW_ARRIVAL_PRODUCTS_ANCIENT:"/products_new_arrival.json",FLASH_SALE_PRODUCTS:"/products_flash_sale.json",FLASH_SALE_PRODUCTS_ANCIENT:"/products_flash_sale_ancient.json",SHOPS:"/shops.json",SHOP:"/shop.json",SEARCH:"/search.json",ORDERS:"/orders.json",ORDER:"/order.json"}},75402:function(t,e,i){var n=i(26042),a=i(69396),l=i(6154),s=i(47774),r=l.Z.create({baseURL:"https://chawkbazar.vercel.app/api",timeout:3e4,headers:{Accept:"application/json","Content-Type":"application/json"}});r.interceptors.request.use((function(t){var e=(0,s.L)();return t.headers=(0,a.Z)((0,n.Z)({},t.headers),{Authorization:"Bearer ".concat(e||"")}),t}),(function(t){return Promise.reject(t)})),e.Z=r},53577:function(t,e,i){i.d(e,{V:function(){return a}});var n=i(67294);function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;(0,n.useEffect)((function(){var i=null===t||void 0===t?void 0:t.current,n=function(){window.scrollY>e?null===i||void 0===i||i.classList.add("is-scrolling"):null===i||void 0===i||i.classList.remove("is-scrolling")};return document.addEventListener("scroll",n),function(){document.removeEventListener("scroll",n)}}),[])}},43917:function(t,e,i){i.d(e,{X:function(){return s}});var n=i(31955),a=i(67294),l="accept_cookies",s=function(){var t=(0,a.useState)(!0),e=t[0],i=t[1];(0,a.useEffect)((function(){n.Z.get(l)||i(!1)}),[]);return{acceptedCookies:e,onAcceptCookies:function(){i(!0),n.Z.set(l,"accepted",{expires:365})}}}}}]);