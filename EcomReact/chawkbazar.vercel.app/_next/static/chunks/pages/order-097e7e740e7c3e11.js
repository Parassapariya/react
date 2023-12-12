(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1941],{75943:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order",function(){return r(12852)}])},72797:function(e,t,r){"use strict";var l=r(47568),s=r(26042),a=r(69396),d=r(70655),n=r(85893),i=r(49732),o=r(50381),x=r(14685),c=r(87536),m=r(30674),u="common:text-subscribe-heading",p="common:text-subscribe-description",b="common:button-subscribe",g={subscription_email:""};t.Z=function(e){var t,r=e.className,h=void 0===r?"px-5 sm:px-8 md:px-16 2xl:px-24":r,f=e.disableBorderRadius,y=void 0!==f&&f,j=(0,c.cI)({defaultValues:g}),N=j.register,v=j.handleSubmit,_=j.formState.errors,w=(0,m.$G)().t,Z=u,k=p,S=b;function H(){return(H=(0,l.Z)((function(e){return(0,d.__generator)(this,(function(t){return console.log(e,"data"),[2]}))}))).apply(this,arguments)}return(0,n.jsxs)("div",{className:"".concat(h," flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16"),children:[(0,n.jsxs)("div",{className:"lg:-mt-2 xl:-mt-0.5 text-center ltr:xl:text-left rtl:xl:text-right mb-7 md:mb-8 lg:mb-9 xl:mb-0",children:[(0,n.jsx)(i.Z,{variant:"mediumHeading",className:"sm:mb-0 md:mb-2.5 lg:mb-3 xl:mb-3.5",children:w("".concat(Z))}),(0,n.jsx)("p",{className:"text-body text-xs md:text-sm leading-6 md:leading-7",children:w("".concat(k))})]}),(0,n.jsx)("form",{onSubmit:v((function(e){return H.apply(this,arguments)})),className:"flex-shrink-0 w-full sm:w-96 md:w-[545px]",noValidate:!0,children:(0,n.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-end",children:[(0,n.jsx)(o.Z,(0,a.Z)((0,s.Z)({disableBorderRadius:y,placeholderKey:"forms:placeholder-email-subscribe",type:"email",variant:"solid",className:"w-full",inputClassName:"px-4 lg:px-7 h-12 lg:h-14 text-center ltr:sm:text-left rtl:sm:text-right bg-white"},N("subscription_email",{required:"forms:email-required",pattern:{value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"forms:email-error"}})),{errorKey:null===(t=_.subscription_email)||void 0===t?void 0:t.message})),(0,n.jsx)(x.Z,{disableBorderRadius:y,className:"mt-3 sm:mt-0 w-full sm:w-auto ltr:sm:ml-2 rtl:sm:mr-2 md:h-full flex-shrink-0",children:(0,n.jsx)("span",{className:"lg:py-0.5",children:w("".concat(S))})})]})})]})}},87137:function(e,t,r){"use strict";var l=r(85893),s=r(81980),a=r(9627),d=r(11163),n=r(30674),i=function(e){var t=e.product,r=(0,a.ZP)({amount:t.price*t.quantity,currencyCode:"USD"}).price;return(0,l.jsxs)("tr",{className:"font-normal border-b border-gray-300 last:border-b-0",children:[(0,l.jsxs)("td",{className:"p-4",children:[t.name," * ",t.quantity]}),(0,l.jsx)("td",{className:"p-4",children:r})]},t.id)};t.Z=function(e){var t=e.className,r=void 0===t?"pt-10 lg:pt-12":t,o=(0,d.useRouter)().query.id,x=(0,n.$G)("common").t,c=(0,s.O)(null===o||void 0===o?void 0:o.toString()),m=c.data,u=c.isLoading,p=(0,a.ZP)(m&&{amount:m.total,currencyCode:"USD"}).price,b=(0,a.ZP)(m&&{amount:m.shipping_fee?m.total+m.shipping_fee:m.total,currencyCode:"USD"}).price,g=(0,a.ZP)(m&&{amount:m.shipping_fee,currencyCode:"USD"}).price;return u?(0,l.jsx)("p",{children:"Loading..."}):(0,l.jsxs)("div",{className:r,children:[(0,l.jsxs)("h2",{className:"mb-6 text-lg font-bold md:text-xl xl:text-2xl text-heading xl:mb-8",children:[x("text-order-details"),":"]}),(0,l.jsxs)("table",{className:"w-full text-sm font-semibold text-heading lg:text-base",children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"w-1/2 p-4 bg-gray-150 ltr:text-left rtl:text-right ltr:first:rounded-tl-md rtl:first:rounded-tr-md",children:x("text-product")}),(0,l.jsx)("th",{className:"w-1/2 p-4 bg-gray-150 ltr:text-left rtl:text-right ltr:last:rounded-tr-md rtl:last:rounded-tl-md",children:x("text-total")})]})}),(0,l.jsx)("tbody",{children:null===m||void 0===m?void 0:m.products.map((function(e,t){return(0,l.jsx)(i,{product:e},t)}))}),(0,l.jsxs)("tfoot",{children:[(0,l.jsxs)("tr",{className:"odd:bg-gray-150",children:[(0,l.jsxs)("td",{className:"p-4 italic",children:[x("text-sub-total"),":"]}),(0,l.jsx)("td",{className:"p-4",children:p})]}),(0,l.jsxs)("tr",{className:"odd:bg-gray-150",children:[(0,l.jsxs)("td",{className:"p-4 italic",children:[x("text-shipping"),":"]}),(0,l.jsxs)("td",{className:"p-4",children:[g,(0,l.jsx)("span",{className:"text-[13px] font-normal ltr:pl-1.5 rtl:pr-1.5 inline-block",children:"via Flat rate"})]})]}),(0,l.jsxs)("tr",{className:"odd:bg-gray-150",children:[(0,l.jsxs)("td",{className:"p-4 italic",children:[x("text-payment-method"),":"]}),(0,l.jsx)("td",{className:"p-4",children:null===m||void 0===m?void 0:m.payment_gateway})]}),(0,l.jsxs)("tr",{className:"odd:bg-gray-150",children:[(0,l.jsxs)("td",{className:"p-4 italic",children:[x("text-total"),":"]}),(0,l.jsx)("td",{className:"p-4",children:b})]}),(0,l.jsxs)("tr",{className:"odd:bg-gray-150",children:[(0,l.jsxs)("td",{className:"p-4 italic",children:[x("text-note"),":"]}),(0,l.jsx)("td",{className:"p-4",children:"new order"})]})]})]})]})}},49732:function(e,t,r){"use strict";var l=r(26042),s=r(69396),a=r(85893),d=(r(67294),r(94184)),n=r.n(d);t.Z=function(e){var t=e.style,r=e.className,d=e.variant,i=void 0===d?"body":d,o=e.children,x=e.html,c={body:"p",mediumHeading:"h3",heading:"h4",pageHeading:"h1",subHeading:"h2"}[i],m=x?{dangerouslySetInnerHTML:{__html:x}}:{};return(0,a.jsx)(c,(0,s.Z)((0,l.Z)({className:n()({"text-sm sm:leading-6 leading-7":"body"===i,"text-body":"body"===i,"text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold":"mediumHeading"===i,"text-heading":"mediumHeading"===i||"heading"===i||"pageHeading"===i||"subHeading"===i,"text-sm md:text-base xl:text-lg font-semibold":"heading"===i,"text-2xl font-bold":"pageHeading"===i,"text-lg md:text-2xl xl:text-3xl 2xl:text-4xl  font-bold":"subHeading"===i},r),style:t},m),{children:o}))}},81980:function(e,t,r){"use strict";r.d(t,{O:function(){return o}});var l=r(47568),s=r(70655),a=r(75402),d=r(34758),n=r(88767),i=function(){var e=(0,l.Z)((function(e){return(0,s.__generator)(this,(function(e){switch(e.label){case 0:return[4,a.Z.get("".concat(d.P.ORDER))];case 1:return[2,e.sent().data]}}))}));return function(t){return e.apply(this,arguments)}}(),o=function(e){return(0,n.useQuery)([d.P.ORDER,e],(function(){return i(e)}))}},12852:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return b},default:function(){return g}});var l=r(85893),s=r(89146),a=r(17653),d=r(72797),n=r(93807),i=r(60155),o=r(87137),x=r(81980),c=r(11163),m=r(9627),u=r(30674);function p(){var e=(0,c.useRouter)().query.id,t=(0,u.$G)("common").t,r=(0,x.O)(null===e||void 0===e?void 0:e.toString()),s=r.data,a=r.isLoading,d=(0,m.ZP)(s&&{amount:s.shipping_fee?s.total+s.shipping_fee:s.total,currencyCode:"USD"}).price;return a?(0,l.jsx)("p",{children:"Loading..."}):(0,l.jsxs)("div",{className:"xl:px-32 2xl:px-44 3xl:px-56 py-16 lg:py-20",children:[(0,l.jsxs)("div",{className:"border border-gray-300 bg-gray-50 px-4 lg:px-5 py-4 rounded-md flex items-center justify-start text-heading text-sm md:text-base mb-6 lg:mb-8",children:[(0,l.jsx)("span",{className:"w-10 h-10 ltr:mr-3 rtl:ml-3 ltr:xl:mr-4 rtl:xl:ml-4 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0",children:(0,l.jsx)(i.cfq,{className:"w-5 h-5 text-green-600"})}),t("text-order-received")]}),(0,l.jsxs)("ul",{className:"border border-gray-300 bg-gray-50 rounded-md flex flex-col md:flex-row mb-7 lg:mb-8 xl:mb-10",children:[(0,l.jsxs)("li",{className:"text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0",children:[(0,l.jsxs)("span",{className:"uppercase text-[11px] block text-body font-normal leading-5",children:[t("text-order-number"),":"]}),null===s||void 0===s?void 0:s.tracking_number]}),(0,l.jsxs)("li",{className:"text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0",children:[(0,l.jsxs)("span",{className:"uppercase text-[11px] block text-body font-normal leading-5",children:[t("text-date"),":"]}),"April 22, 2021"]}),(0,l.jsxs)("li",{className:"text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0",children:[(0,l.jsxs)("span",{className:"uppercase text-[11px] block text-body font-normal leading-5",children:[t("text-email"),":"]}),null===s||void 0===s?void 0:s.customer.email]}),(0,l.jsxs)("li",{className:"text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0",children:[(0,l.jsxs)("span",{className:"uppercase text-[11px] block text-body font-normal leading-5",children:[t("text-total"),":"]}),d]}),(0,l.jsxs)("li",{className:"text-heading font-semibold text-base lg:text-lg border-b md:border-b-0 md:border-r border-dashed border-gray-300 px-4 lg:px-6 xl:px-8 py-4 md:py-5 lg:py-6 last:border-0",children:[(0,l.jsxs)("span",{className:"uppercase text-[11px] block text-body font-normal leading-5",children:[t("text-payment-method"),":"]}),null===s||void 0===s?void 0:s.payment_gateway]})]}),(0,l.jsx)("p",{className:"text-heading text-sm md:text-base mb-8",children:t("text-pay-cash")}),(0,l.jsx)(o.Z,{})]})}var b=!0;function g(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.Z,{pageHeader:"text-page-order"}),(0,l.jsxs)(s.Z,{children:[(0,l.jsx)(p,{}),(0,l.jsx)(d.Z,{})]})]})}g.Layout=a.Z}},function(e){e.O(0,[5445,4617,6556,7224,7296,7215,9774,2888,179],(function(){return t=75943,e(e.s=t);var t}));var t=e.O();_N_E=t}]);