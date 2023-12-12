"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7122],{72797:function(e,t,l){var a=l(47568),r=l(26042),s=l(69396),n=l(70655),i=l(85893),c=l(49732),o=l(50381),d=l(14685),m=l(87536),u=l(30674),x="common:text-subscribe-heading",h="common:text-subscribe-description",p="common:button-subscribe",b={subscription_email:""};t.Z=function(e){var t,l=e.className,f=void 0===l?"px-5 sm:px-8 md:px-16 2xl:px-24":l,g=e.disableBorderRadius,v=void 0!==g&&g,j=(0,m.cI)({defaultValues:b}),N=j.register,y=j.handleSubmit,w=j.formState.errors,k=(0,u.$G)().t,Z=x,M=h,S=p;function I(){return(I=(0,a.Z)((function(e){return(0,n.__generator)(this,(function(t){return console.log(e,"data"),[2]}))}))).apply(this,arguments)}return(0,i.jsxs)("div",{className:"".concat(f," flex flex-col xl:flex-row justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16"),children:[(0,i.jsxs)("div",{className:"lg:-mt-2 xl:-mt-0.5 text-center ltr:xl:text-left rtl:xl:text-right mb-7 md:mb-8 lg:mb-9 xl:mb-0",children:[(0,i.jsx)(c.Z,{variant:"mediumHeading",className:"sm:mb-0 md:mb-2.5 lg:mb-3 xl:mb-3.5",children:k("".concat(Z))}),(0,i.jsx)("p",{className:"text-body text-xs md:text-sm leading-6 md:leading-7",children:k("".concat(M))})]}),(0,i.jsx)("form",{onSubmit:y((function(e){return I.apply(this,arguments)})),className:"flex-shrink-0 w-full sm:w-96 md:w-[545px]",noValidate:!0,children:(0,i.jsxs)("div",{className:"flex flex-col sm:flex-row items-start justify-end",children:[(0,i.jsx)(o.Z,(0,s.Z)((0,r.Z)({disableBorderRadius:v,placeholderKey:"forms:placeholder-email-subscribe",type:"email",variant:"solid",className:"w-full",inputClassName:"px-4 lg:px-7 h-12 lg:h-14 text-center ltr:sm:text-left rtl:sm:text-right bg-white"},N("subscription_email",{required:"forms:email-required",pattern:{value:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message:"forms:email-error"}})),{errorKey:null===(t=w.subscription_email)||void 0===t?void 0:t.message})),(0,i.jsx)(d.Z,{disableBorderRadius:v,className:"mt-3 sm:mt-0 w-full sm:w-auto ltr:sm:ml-2 rtl:sm:mr-2 md:h-full flex-shrink-0",children:(0,i.jsx)("span",{className:"lg:py-0.5",children:k("".concat(S))})})]})})]})}},35200:function(e,t,l){var a=l(85893),r=l(96872),s=l(89583),n=l(13813),i=l(94184),c=l.n(i),o=l(72008),d=l(30674);t.Z=function(e){var t=e.data,l=e.className,i=(0,d.$G)("menu").t;return(0,a.jsx)("nav",{className:c()("headerMenu flex w-full relative",l),children:null===t||void 0===t?void 0:t.map((function(e){return(0,a.jsxs)("div",{className:"menuItem group cursor-pointer py-7 ".concat(e.subMenu?"relative":""),children:[(0,a.jsxs)(r.Z,{href:e.path,className:"relative inline-flex items-center px-3 py-2 text-sm font-normal xl:text-base text-heading xl:px-4 group-hover:text-black",children:[i(e.label),((null===e||void 0===e?void 0:e.columns)||e.subMenu)&&(0,a.jsx)("span",{className:"opacity-30 text-xs mt-1 xl:mt-0.5 w-4 flex justify-end",children:(0,a.jsx)(s.RiI,{className:"transition duration-300 ease-in-out transform group-hover:-rotate-180"})})]}),(null===e||void 0===e?void 0:e.columns)&&Array.isArray(e.columns)&&(0,a.jsx)(n.Z,{columns:e.columns}),(null===e||void 0===e?void 0:e.subMenu)&&Array.isArray(e.subMenu)&&(0,a.jsx)("div",{className:"absolute invisible bg-gray-200 opacity-0 group-hover:visible subMenu shadow-header ltr:left-0 rtl:right-0 group-hover:opacity-100",children:(0,a.jsx)("ul",{className:"py-5 text-sm text-body",children:e.subMenu.map((function(e,t){var l="sidebar-menu-".concat(1,"-").concat(t);return(0,a.jsx)(o.Z,{dept:1,data:e,hasSubMenu:e.subMenu,menuName:l,menuIndex:t},l)}))})})]},e.id)}))})}},17653:function(e,t,l){l.d(t,{Z:function(){return S}});var a=l(85893),r=l(2962),s=l(67294),n=l(32453),i=l(38808),c=l(35200),o=l(57310),d=l(78126),m=l(68139),u=l(53577),x=l(5152),h=l.n(x),p=l(30674),b=l(41777),f=h()((function(){return l.e(5395).then(l.bind(l,65395))}),{loadableGenerated:{webpack:function(){return[65395]}},ssr:!1}),g=h()((function(){return l.e(1754).then(l.bind(l,61754))}),{loadableGenerated:{webpack:function(){return[61754]}},ssr:!1}),v=i.U.site_header,j=function(){var e=(0,d.l8)(),t=e.openSearch,l=e.openModal,r=e.setModalView,i=e.isAuthorized,x=(0,p.$G)("common").t,h=(0,s.useRef)();return(0,u.V)(h),(0,a.jsx)("header",{id:"siteHeader",ref:h,className:"relative z-20 w-full h-16 sm:h-20 lg:h-24",children:(0,a.jsx)("div",{className:"fixed z-20 w-full h-16 px-4 text-gray-700 transition duration-200 ease-in-out bg-white innerSticky body-font sm:h-20 lg:h-24 md:px-8 lg:px-6",children:(0,a.jsxs)("div",{className:"flex items-center justify-center mx-auto max-w-[1920px] h-full w-full",children:[(0,a.jsx)(o.Z,{}),(0,a.jsx)(c.Z,{data:v.menu,className:"hidden lg:flex ltr:md:ml-6 rtl:md:mr-6 ltr:xl:ml-10 rtl:xl:mr-10"}),(0,a.jsx)("div",{className:"flex-shrink-0 ltr:ml-auto rtl:mr-auto ltr:lg:mr-5 rtl:lg:ml-5 ltr:xl:mr-8 rtl:xl:ml-8 ltr:2xl:mr-10 rtl:2xl:ml-10",children:(0,a.jsx)(b.Z,{})}),(0,a.jsxs)("div",{className:"items-center justify-end flex-shrink-0 hidden lg:flex gap-x-6 lg:gap-x-5 xl:gap-x-8 2xl:gap-x-10 ltr:ml-auto rtl:mr-auto",children:[(0,a.jsx)("button",{className:"relative flex items-center justify-center flex-shrink-0 h-auto transform focus:outline-none",onClick:t,"aria-label":"search-button",children:(0,a.jsx)(n.Z,{})}),(0,a.jsx)("div",{className:"-mt-0.5 flex-shrink-0",children:(0,a.jsx)(f,{isAuthorized:i,href:m.Z.ACCOUNT,className:"text-sm font-semibold xl:text-base text-heading",btnProps:{className:"text-sm xl:text-base text-heading font-semibold focus:outline-none",children:x("text-sign-in"),onClick:function(){return r("LOGIN_VIEW"),l()}},children:x("text-account")})}),(0,a.jsx)(g,{})]})]})})})},N=l(48168),y=l(4760),w=l(79765),k=l(92335),Z=l(43917),M=l(14685);function S(e){var t=e.children,l=(0,Z.X)(),s=l.acceptedCookies,n=l.onAcceptCookies,i=(0,p.$G)("common").t;return(0,a.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,a.jsx)(r.PB,{additionalMetaTags:[{name:"viewport",content:"width=device-width, initial-scale=1.0"}],title:"ChawkBazar React - React Next E-commerce Template",description:"Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",canonical:"https://chawkbazar.vercel.app/",openGraph:{url:"https://chawkbazar.vercel.app",title:"ChawkBazar React - React Next E-commerce Template",description:"Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",images:[{url:"/assets/images/og-image-01.png",width:800,height:600,alt:"Og Image Alt"},{url:"/assets/images/og-image-02.png",width:900,height:800,alt:"Og Image Alt Second"}]}}),(0,a.jsx)(j,{}),(0,a.jsx)("main",{className:"relative flex-grow",style:{minHeight:"-webkit-fill-available",WebkitOverflowScrolling:"touch"},children:t}),(0,a.jsx)(N.Z,{}),(0,a.jsx)(y.Z,{}),(0,a.jsx)(w.Z,{}),(0,a.jsx)(k.Z,{title:i("text-cookies-title"),hide:s,action:(0,a.jsx)(M.Z,{onClick:function(){return n()},variant:"slim",children:i("text-accept-cookies")})})]})}},98121:function(e,t,l){var a=l(85893);t.Z=function(e){var t=e.className,l=void 0===t?"mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0":t;return(0,a.jsx)("div",{className:"border-t border-gray-300 ".concat(l)})}},72008:function(e,t,l){var a=l(85893),r=l(30674),s=l(25675),n=l.n(s),i=l(51649),c=l(96872),o=l(13813),d=l(94184),m=l.n(d),u=function(e){var t=e.dept,l=e.data,s=e.hasSubMenu,d=e.hasMegaMenu,u=e.hasBrands,h=e.hasBanners,p=e.menuIndex,b=(0,r.$G)("menu").t;return(0,a.jsxs)("li",{className:m()(d?"":"group relative"),children:[(0,a.jsxs)(c.Z,{href:l.path,className:"flex items-center py-2 ltr:pl-5 rtl:pr-5 ltr:xl:pl-7 rtl:xl:pr-7 ltr:pr-3 rtl:pl-3 ltr:xl:pr-3.5 rtl:xl:pl-3.5 hover:text-heading hover:bg-gray-300",children:[l.icon&&(0,a.jsx)("span",{className:"inline-flex ltr:mr-2 rtl:ml-2",children:l.icon}),b(l.label),l.subMenu&&(0,a.jsx)("span",{className:"text-sm mt-0.5 shrink-0 ltr:ml-auto rtl:mr-auto",children:(0,a.jsx)(i.hjJ,{className:"transition duration-300 ease-in-out text-body group-hover:text-black"})})]}),s&&(0,a.jsx)(x,{dept:t,data:l.subMenu,menuIndex:p}),(d||u||h)&&(0,a.jsxs)("div",{className:"absolute flex bg-white categoryMegaMenu shadow-header w-[630px] xl:w-[1000px] 2xl:w-[1200px] ltr:left-full rtl:right-full",children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:(0,a.jsx)(o.Z,{columns:d})}),(0,a.jsxs)("div",{className:"hidden xl:block",children:[(0,a.jsx)("div",{className:"grid grid-cols-3 gap-3 p-6 2xl:py-8 2xl:px-7 3xl:grid-cols-3 justify-items-center",children:u.map((function(e){return(0,a.jsx)(c.Z,{href:e.path,className:"bg-gray-200 border border-gray-300 rounded-md",children:(0,a.jsx)(n(),{src:e.icon.src,height:60,width:150,alt:e.label})},e.id)}))}),(0,a.jsx)("div",{className:"grid grid-cols-2 gap-3 p-6 border-t border-gray-300 2xl:py-8 2xl:px-7 ",children:h.map((function(e){return(0,a.jsx)(c.Z,{href:e.path,children:(0,a.jsx)("img",{className:"",src:e.image.src,alt:e.label})},e.id)}))})]})]})]})},x=function(e){var t=e.dept,l=e.data,r=e.menuIndex;return t+=1,(0,a.jsx)("ul",{className:"absolute z-0 invisible w-56 py-3 bg-gray-200 opacity-0 subMenuChild shadow-subMenu ltr:right-full rtl:left-full ltr:2xl:right-auto rtl:2xl:left-auto ltr:2xl:left-full rtl:2xl:right-full top-4",children:null===l||void 0===l?void 0:l.map((function(e,l){var s="sidebar-submenu-".concat(t,"-").concat(r,"-").concat(l);return(0,a.jsx)(u,{dept:t,data:e,hasSubMenu:e.subMenu,menuName:s,menuIndex:l},s)}))})};t.Z=u},13813:function(e,t,l){var a=l(85893),r=l(67294),s=l(96872),n=l(30674);t.Z=function(e){var t=e.columns,l=(0,n.$G)("menu").t;return(0,a.jsx)("div",{className:"absolute bg-gray-200 megaMenu shadow-header ltr:-left-28 rtl:-right-28 ltr:xl:left-0 rtl:xl:right-0",children:(0,a.jsx)("div",{className:"grid grid-cols-5",children:null===t||void 0===t?void 0:t.map((function(e){var t;return(0,a.jsx)("ul",{className:"pt-6 even:bg-gray-150 pb-7 2xl:pb-8 2xl:pt-7",children:null===e||void 0===e||null===(t=e.columnItems)||void 0===t?void 0:t.map((function(e){var t;return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("li",{className:"mb-1.5",children:(0,a.jsx)(s.Z,{href:e.path,className:"block text-sm py-1.5 text-heading font-semibold px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300",children:l(e.label)})}),null===e||void 0===e||null===(t=e.columnItemItems)||void 0===t?void 0:t.map((function(t){var r;return(0,a.jsx)("li",{className:(null===e||void 0===e||null===(r=e.columnItemItems)||void 0===r?void 0:r.length)===t.id?"border-b border-gray-300 pb-3.5 mb-3":"",children:(0,a.jsx)(s.Z,{href:t.path,className:"text-body text-sm block py-1.5 px-5 xl:px-8 2xl:px-10 hover:text-heading hover:bg-gray-300",children:l(t.label)})},t.id)}))]},e.id)}))},e.id)}))})})}}}]);