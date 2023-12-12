"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8797],{48168:function(e,t,r){var n=r(85893),l=r(73306),i=r(25774),a=r(51009),s=a.M.widgets,o=a.M.payment;t.Z=function(){return(0,n.jsxs)("footer",{className:"border-b-4 border-heading mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-2",children:[(0,n.jsx)(l.Z,{widgets:s}),(0,n.jsx)(i.Z,{payment:o})]})}},47722:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(85893),l=r(16466),i=r(58391);function a(e){var t=e.hideProductDescription,r=void 0!==t&&t,a=e.showCategory,s=void 0!==a&&a,o=e.showRating,d=void 0!==o&&o,c=e.demoVariant,u=e.disableBorderRadius,x=void 0!==u&&u,m=e.className,p=void 0===m?"mb-9 md:mb-10 xl:mb-12":m,g=(0,i.l)({limit:10,demoVariant:c}),f=g.data,h=g.isLoading,v=g.error;return(0,n.jsx)(l.Z,{className:p,hideProductDescription:r,showCategory:s,showRating:d,sectionHeading:"text-new-arrivals",products:f,loading:h,error:null===v||void 0===v?void 0:v.message,uniqueKey:"new-arrivals",demoVariant:c,disableBorderRadius:x})}},58279:function(e,t,r){var n=r(26042),l=r(69396),i=r(85893),a=r(24561);t.Z=function(e){return(0,i.jsxs)(a.ZP,(0,l.Z)((0,n.Z)({speed:2,width:320,height:440,viewBox:"0 0 320 440",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",className:"w-full h-auto"},e),{children:[(0,i.jsx)("rect",{x:"0",y:"345",rx:"3",ry:"3",width:"180",height:"8"}),(0,i.jsx)("rect",{x:"0",y:"377",rx:"3",ry:"3",width:"280",height:"6"}),(0,i.jsx)("rect",{x:"0",y:"416",rx:"3",ry:"3",width:"80",height:"10"}),(0,i.jsx)("rect",{x:"0",y:"0",rx:"6",ry:"6",width:"320",height:"320"})]}))}},52597:function(e,t,r){r.d(t,{Z:function(){return _}});var n=r(85893),l=r(26003),i=r(25675),a=r.n(i),s=r(78126),o=r(9627),d=r(49732),c=r(94184),u=r.n(c),x=function(e){var t,r,l=e.product,i=e.index,c=e.variant,x=void 0===c?"left":c,m=e.imgLoading,p=void 0===m?"lazy":m,g=e.disableBorderRadius,f=void 0!==g&&g,h=260;"left"===x&&0===i||"center"===x&&1===i||"combined"===x&&0===i?(r="row-span-full lg:row-span-2 col-span-full lg:col-span-2",h=620):"combined"===x?2===i?(r="col-span-2 lg:col-span-1 lg:row-span-2",h=620):(r="col-span-2 lg:col-span-1",h=620):"modern"===x?(r="col-span-2 md:row-span-2",h=620):r="col-span-2 lg:col-span-1";var v,b=(0,s.l8)(),y=b.openModal,w=b.setModalView,_=b.setModalData,N=(0,o.ZP)({amount:l.sale_price?l.sale_price:l.price,baseAmount:l.price,currencyCode:"USD"}),j=N.price,P=N.basePrice,Z=N.discount;return(0,n.jsxs)("div",{onClick:function(){return _({data:l}),w("PRODUCT_VIEW"),y()},className:"".concat(r," cursor-pointer group flex flex-col bg-gray-200 ").concat(!f&&"rounded-md"," relative items-center justify-between overflow-hidden"),children:[(0,n.jsx)("div",{className:u()("flex justify-center items-center p-4 h-full 3xl:min-h-[330px]",{"!p-0":"modern"===x}),title:null===l||void 0===l?void 0:l.name,children:(0,n.jsx)(a(),{src:null!==(v=null===l||void 0===l||null===(t=l.image)||void 0===t?void 0:t.original)&&void 0!==v?v:"/assets/placeholder/products/product-featured.png",width:h,height:h,objectFit:"contain",loading:p,alt:(null===l||void 0===l?void 0:l.name)||"Product Image",className:"transition duration-500 ease-in-out transform group-hover:scale-110"})}),"modern"===x&&(0,n.jsx)("span",{className:u()("absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 bg-[#B26788] text-white text-10px md:text-sm leading-5 inline-block px-2 xl:px-3 pt-0.5 pb-1",{"!py-0.5":"modern"===x,"rounded-md ":!f}),children:"Featured"}),Z&&(0,n.jsxs)("span",{className:u()("absolute top-3.5 md:top-5 3xl:top-7 ltr:left-3.5 rtl:right-3.5 ltr:md:left-5 rtl:md:right-5 ltr:3xl:left-7 rtl:3xl:right-7 bg-heading text-white text-10px md:text-sm leading-5 rounded-md inline-block px-2 xl:px-3 pt-0.5 pb-1",{"text-[#22C55E] bg-transparent ltr:!left-auto rtl:!right-auto right-3.5 md:right-5 3xl:right-7 font-bold":"modern"===x}),children:[Z," ","modern"===x&&" off"]}),(0,n.jsxs)("div",{className:"flex flex-col w-full px-4 pb-4 md:flex-row lg:flex-col 2xl:flex-row md:justify-between md:items-center lg:items-start 2xl:items-center md:px-5 3xl:px-7 md:pb-5 3xl:pb-7",title:null===l||void 0===l?void 0:l.name,children:[(0,n.jsxs)("div",{className:"overflow-hidden ltr:md:pr-2 rtl:md:pl-2 ltr:lg:pr-0 rtl:lg:pl-0 ltr:2xl:pr-2 rtl:2xl:pl-2",children:[(0,n.jsx)("h2",{className:"mb-1 text-sm font-semibold truncate text-heading md:text-base xl:text-lg",children:null===l||void 0===l?void 0:l.name}),"modern"!==x?(0,n.jsx)("p",{className:"text-body text-xs xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px]",children:null===l||void 0===l?void 0:l.description}):(0,n.jsx)(d.Z,{className:"pb-0.5 truncate",children:"35 Brands, 1000+ Products"})]}),"modern"!==x&&(0,n.jsxs)("div",{className:"flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col items-center md:items-end lg:items-start 2xl:items-end justify-end ltr:md:text-right rtl:md:text-left lg:ltr:text-left rtl:text-right ltr:xl:text-right rtl:xl:text-left mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5",children:[Z&&(0,n.jsx)("del",{className:"text-sm md:text-base lg:text-sm xl:text-base 3xl:text-lg",children:P}),(0,n.jsx)("div",{className:"text-heading font-segoe font-semibold text-base md:text-xl lg:text-base xl:text-xl 3xl:text-2xl 3xl:mt-0.5 ltr:pr-2 rtl:pl-2 ltr:md:pr-0 rtl:md:pl-0 ltr:lg:pr-2 rtl:lg:pl-2 ltr:2xl:pr-0 rtl:2xl:pl-0",children:j})]})]})]})},m=r(47568),p=r(828),g=r(70655),f=r(75402),h=r(34758),v=r(88767),b=function(){var e=(0,m.Z)((function(e){var t,r;return(0,g.__generator)(this,(function(n){switch(n.label){case 0:return t=e.queryKey,r=(0,p.Z)(t,2),r[0],r[1],[4,f.Z.get(h.P.FEATURED_PRODUCTS)];case 1:return[2,n.sent().data]}}))}));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=(0,m.Z)((function(e){var t,r;return(0,g.__generator)(this,(function(n){switch(n.label){case 0:return t=e.queryKey,r=(0,p.Z)(t,2),r[0],r[1],[4,f.Z.get(h.P.FEATURED_PRODUCTS_ANCIENT)];case 1:return[2,n.sent().data]}}))}));return function(t){return e.apply(this,arguments)}}(),w=r(15239),_=function(e){var t,r=e.sectionHeading,i=e.categorySlug,s=e.className,o=void 0===s?"mb-12 md:mb-14 xl:mb-16":s,d=e.variant,c=void 0===d?"left":d,m=e.limit,p=void 0===m?5:m,g=e.hideBanner,f=void 0!==g&&g,_=e.demoVariant,N=e.disableBorderRadius,j=void 0!==N&&N,P="ancient"===(t={limit:p,demoVariant:_}).demoVariant?(0,v.useQuery)([h.P.FEATURED_PRODUCTS,t],y):(0,v.useQuery)([h.P.FEATURED_PRODUCTS,t],b),Z=P.data,R=P.error;return(0,n.jsxs)("div",{className:o,children:[(0,n.jsx)(l.Z,{sectionHeading:r,categorySlug:i}),R?(0,n.jsx)(w.Z,{message:null===R||void 0===R?void 0:R.message}):(0,n.jsxs)("div",{className:u()("grid grid-cols-4 grid-rows-2 gap-".concat("ancient"===_?1:3," md:gap-").concat("ancient"===_?2:5," xl:gap-").concat("ancient"===_?1:7),{"lg:grid-cols-4":"modern"===c}),children:[!1===f&&"modern"===c&&(0,n.jsx)("div",{className:"col-span-2 md:row-span-2",children:(0,n.jsx)(a(),{src:"/assets/images/products/featured/featured-products-banner.png",width:435,height:647,objectFit:"contain",className:"rounded-md"})}),null===Z||void 0===Z?void 0:Z.slice(0,p).map((function(e,t){return(0,n.jsx)(x,{disableBorderRadius:j,product:e,variant:c,index:t},"product--key".concat(e.id))}))]})]})}},41005:function(e,t,r){r.d(t,{t:function(){return u}});var n=r(47568),l=r(828),i=r(70655),a=r(75402),s=r(34758),o=r(88767),d=function(){var e=(0,n.Z)((function(e){var t,r;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return t=e.queryKey,r=(0,l.Z)(t,2),r[0],r[1],[4,a.Z.get(s.P.FLASH_SALE_PRODUCTS)];case 1:return[2,n.sent().data]}}))}));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)((function(e){var t,r;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return t=e.queryKey,r=(0,l.Z)(t,2),r[0],r[1],[4,a.Z.get(s.P.FLASH_SALE_PRODUCTS_ANCIENT)];case 1:return[2,n.sent().data]}}))}));return function(t){return e.apply(this,arguments)}}(),u=function(e){return"ancient"===e.demoVariant?(0,o.useQuery)([s.P.FLASH_SALE_PRODUCTS_ANCIENT,e],c):(0,o.useQuery)([s.P.FLASH_SALE_PRODUCTS,e],d)}},58391:function(e,t,r){r.d(t,{l:function(){return u}});var n=r(47568),l=r(828),i=r(70655),a=r(75402),s=r(34758),o=r(88767),d=function(){var e=(0,n.Z)((function(e){var t,r;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return t=e.queryKey,r=(0,l.Z)(t,2),r[0],r[1],[4,a.Z.get(s.P.NEW_ARRIVAL_PRODUCTS)];case 1:return[2,n.sent().data]}}))}));return function(t){return e.apply(this,arguments)}}(),c=function(){var e=(0,n.Z)((function(e){var t,r;return(0,i.__generator)(this,(function(n){switch(n.label){case 0:return t=e.queryKey,r=(0,l.Z)(t,2),r[0],r[1],[4,a.Z.get(s.P.NEW_ARRIVAL_PRODUCTS_ANCIENT)];case 1:return[2,n.sent().data]}}))}));return function(t){return e.apply(this,arguments)}}(),u=function(e){return"ancient"===e.demoVariant?(0,o.useQuery)([s.P.NEW_ARRIVAL_PRODUCTS_ANCIENT,e],c):(0,o.useQuery)([s.P.PRODUCTS_ANCIENT,e],d)}}}]);