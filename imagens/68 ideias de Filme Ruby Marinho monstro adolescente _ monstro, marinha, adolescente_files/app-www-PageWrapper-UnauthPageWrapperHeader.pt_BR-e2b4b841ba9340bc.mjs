"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[65252],{160567:(e,t,i)=>{i.d(t,{Pw:()=>n,SB:()=>s,ZP:()=>a,x9:()=>l});let n=80,s=56,l=e=>"phone"===e?s:n;function a(e,t){return t?0:l(e)}},378720:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(667294);let s=()=>{let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{t(!0)},[]),e}},870891:(e,t,i)=>{i.r(t),i.d(t,{default:()=>es});var n=i(616550),s=i(883119),l=i(525364),a=i(741983),o=i(48481),r=i(554786),d=i(472980),c=i(126189),u=i(686703),h=i(253812),_=i(667294),p=i(140017),x=i(217058),g=i(623409),b=i(468653),f=i(499041),m=i(510989),P=i(340523),j=i(608516),w=i(5859),y=i(37156),A=i(454051),z=i(785893);function k({onClick:e,onDismiss:t,open:i}){let l=(0,p.ZP)(),a=(0,n.$B)(),[o,r]=(0,_.useState)(""),d=(0,g.Z)(),c=(0,_.useRef)(null),{country:u,isBot:h,isAuthenticated:x,locale:b}=(0,w.B)(),f=(0,y.Z)(),m="en"===b.slice(0,2),P={id:"ideas",text:x||"JP"!==u?l.bt("Explorar", "Explore", "unauth.header.tabs.ideas", undefined, true):l.bt("Explore ideias", "Explore ideas", "unauth.header.tabs.ideas.jp", undefined, true),href:"/ideas/"},j=[P];m&&j.push({id:"videos",text:l.bt("Assistir", "Watch", "unauth.header.tabs.videos", undefined, true),href:"/videos/"}),(h||!x&&m&&"US"===u)&&j.push({id:"shopping",text:l.bt("Loja", "Shop", "unauth.header.tabs.shop", undefined, true),href:"/shopping/"}),f&&j.push({id:"today",text:l.bt("Hoje", "Today", "unauth.header.tabs.today", undefined, true),href:(0,A.tG)()});let k=-1;a.url.startsWith("/today/")?k=j.findIndex(e=>e.href===(0,A.tG)()):a.url.startsWith("/ideas/")?k=j.findIndex(e=>"/ideas/"===e.href):a.url.startsWith("/videos/")?k=j.findIndex(e=>"/videos/"===e.href):a.url.startsWith("/shopping/")&&(k=j.findIndex(e=>"/shopping/"===e.href));let v=j[k]||P,S=((0,n.$B)(v.href)||{isExact:!1}).isExact,C=e=>{e===(0,A.tG)()?d({action:"click",item:"nav-bar-hub-dropdown-today"}):"/videos/"===e?d({action:"click",item:"nav-bar-hub-dropdown-videos"}):"/ideas/"===e?d({action:"click",item:"nav-bar-hub-dropdown-ideas"}):"/shopping/"===e&&d({action:"click",item:"nav-bar-hub-dropdown-shopping"})};return(0,z.jsxs)(_.Fragment,{children:[(0,z.jsx)(s.kC,{height:"100%",justifyContent:"center",width:"100%",children:(0,z.jsx)(s.xu,{"data-test-id":"hub-dropdown",marginStart:2,minWidth:110,children:(0,z.jsx)(s.zx,{ref:c,accessibilityControls:"hub-dropdown",accessibilityExpanded:i,accessibilityHaspopup:!0,accessibilityLabel:v.text,color:"transparent",fullWidth:!0,iconEnd:"arrow-down",onClick:e,selected:i,size:"lg",text:v.text})})}),i&&(0,z.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{zIndex:1100}},"data-test-id":"unauth-header-nav-dropdown",marginTop:1,children:(0,z.jsx)(s.J2,{accessibilityLabel:v.text,anchor:c.current,color:"white",id:"hub-dropdown",idealDirection:"forceDown",onDismiss:t,role:"listbox",shouldFocus:!0,size:"lg",children:(0,z.jsx)(s.xu,{direction:"column",display:"flex",flex:"grow",margin:2,children:j.map(({text:e,href:i,id:n})=>{let l=v.href===i&&S;return(0,z.jsx)(s.xu,{color:o===n?"secondary":"transparent",direction:"column",display:"flex",onMouseEnter:()=>{r(n)},onMouseLeave:()=>{r("")},padding:2,role:"option",rounding:2,children:(0,z.jsx)(s.rU,{accessibilityLabel:e,href:i,onClick:({event:e,dangerouslyDisableOnNavigation:n})=>{if(t(),l){e.preventDefault(),n();return}C(i)},underline:"none",children:(0,z.jsxs)(s.kC,{children:[(0,z.jsx)(s.kC,{direction:"column",flex:"grow",gap:{column:1,row:0},children:(0,z.jsx)(s.xv,{color:"default",inline:!0,lineClamp:1,weight:"bold",children:e})}),l&&(0,z.jsx)(s.xu,{alignItems:"center",color:"transparent",display:"flex",justifyContent:"center",children:(0,z.jsx)(s.JO,{accessibilityLabel:"Selected item",color:"default",icon:"check",size:12})})]})})},n)})})})})]})}var v=i(97630);let S={TODAY:"TODAY",VIDEOS:"VIDEOS",SHOPPING:"SHOPPING",IDEAS:"IDEAS"},C=(e,t,i)=>({[S.TODAY]:{text:e.bt("Hoje", "Today", "unauth.header.tabs.today", undefined, true),href:(0,A.tG)()},[S.VIDEOS]:{text:e.bt("Assistir", "Watch", "unauth.header.tabs.videos", undefined, true),href:"/videos/"},[S.SHOPPING]:{text:e.bt("Loja", "Shop", "unauth.header.tabs.shop", undefined, true),href:"/shopping/"},[S.IDEAS]:{text:t||"JP"!==i?e.bt("Explorar", "Explore", "unauth.header.tabs.ideas", undefined, true):e.bt("Explore ideias", "Explore ideas", "unauth.header.tabs.ideas.jp", undefined, true),href:"/ideas/"}});function I(){let e=(0,p.ZP)(),t=(0,n.$B)(),i=(0,g.Z)(),s=(0,r.ZP)(),{country:l,isBot:a,isAuthenticated:o,locale:d}=(0,w.B)(),c=(0,y.Z)(),u="desktop"===s,h="en"===d.slice(0,2),x=a||!o&&h&&"US"===l,b=C(e,o,l),f=null;t.url.startsWith("/today/")?f=S.TODAY:t.url.startsWith("/ideas/")?f=S.IDEAS:t.url.startsWith("/videos/")?f=S.VIDEOS:t.url.startsWith("/shopping/")&&(f=S.SHOPPING);let m=e=>{u&&e&&(window.location.href=b[e].href)};return(0,z.jsxs)(_.Fragment,{children:[c&&(0,z.jsx)(v.Z,{isSelected:f===S.TODAY,onClick:()=>{i({action:"click",item:"site-map-today"}),m(S.TODAY)},text:b[S.TODAY].text,url:b[S.TODAY].href}),h&&(0,z.jsx)(v.Z,{isSelected:f===S.VIDEOS,onClick:()=>{i({action:"click",item:"site-map-videos"}),m(S.VIDEOS)},text:b[S.VIDEOS].text,url:b[S.VIDEOS].href}),x&&(0,z.jsx)(v.Z,{isSelected:f===S.SHOPPING,onClick:()=>{i({action:"click",item:"root-nav-shopping"}),m(S.SHOPPING)},text:b[S.SHOPPING].text,url:b[S.SHOPPING].href}),(0,z.jsx)(v.Z,{isSelected:f===S.IDEAS,onClick:()=>{i({action:"click",item:"site-map-ideas"}),m(S.IDEAS)},text:b[S.IDEAS].text,url:b[S.IDEAS].href})]})}var L=i(160567),E=i(906906),Z=i(118923),D=i(832853);let T=(0,_.lazy)(()=>i.e(18627).then(i.bind(i,618627))),O=(0,D.Z)(()=>i.e(18627).then(i.bind(i,618627)),{ssr:!1}),B=(0,_.forwardRef)(({onPrimaryButtonClick:e,onLoginButtonClick:t,primaryButtonText:i},l)=>{let[o,d]=(0,_.useState)(!1),[c,u]=(0,_.useState)(!1),[h,b]=(0,_.useState)(!1),[w,y]=(0,_.useState)(!1),A=(0,Z.b)(),v=(0,p.ZP)(),S=(0,n.TH)(),C=(0,r.ZP)(),D="desktop"===C,B="tablet"===C,U=(0,_.useRef)(null),N=(0,_.useRef)(null),H=(0,_.useRef)(null),{checkExperiment:R}=(0,P.F)(),W=(0,g.Z)(),G=D&&(0,a.C$)(S),$=D&&!(0,a.C$)(S),[F,Y]=(0,a.C$)(S)&&["red","gray"]||(0,a.uM)(S)&&["transparent","gray"]||["gray","red"],V=(0,a.nU)(S);return(0,_.useEffect)(()=>{b(!(0,a.C$)(S)&&!B&&window?.innerWidth>=1024)},[S,B]),(0,_.useEffect)(()=>{let e=()=>{!(0,a.C$)(S)&&window.innerWidth<1280?y(!0):y(!1)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[S]),(0,_.useEffect)(()=>{if($){let e=e=>{let{target:t}=e;t instanceof Node&&!H.current?.contains(t)&&!N.current?.contains(t)&&d(!1)};return window.addEventListener("mousedown",e),function(){window.removeEventListener("mousedown",e)}}},[$]),(0,z.jsxs)(s.xu,{ref:l,alignItems:"center",color:"default",direction:"row",display:"flex",height:L.Pw,justifyContent:"between",padding:4,width:"100%",children:[(0,z.jsxs)(s.kC,{alignItems:"center",direction:"row",justifyContent:"start",children:[(0,z.jsx)(s.iP,{onTap:()=>{W({action:"click",item:"pinterest-logo",within:"unauth-header"})},children:(0,z.jsx)(s.xu,{"data-test-id":"unauth-header-logo",children:(0,z.jsx)(s.rU,{display:"inlineBlock",href:"/",onClick:({dangerouslyDisableOnNavigation:e})=>e(),rounding:"pill",tapStyle:"compress",target:"self",underline:"none",children:(0,z.jsxs)(s.xu,{alignItems:"center",direction:"row",display:"flex",paddingX:3,children:[(0,z.jsx)(s.JO,{accessibilityLabel:v.bt("Pinterest", "Pinterest", "Pinterest logo", undefined, true),color:"brandPrimary",icon:"pinterest",size:G?32:24}),D&&(0,z.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{letterSpacing:"-1px"}},marginStart:1,onClick:()=>{W({action:"click",item:"pinterest-logo"})},children:(0,z.jsx)(s.X6,{accessibilityLevel:G?1:2,color:V?"default":"error",overflow:"normal",size:"400",children:V?v.bt("Business", "Business", "unauthHeader.logoText.business", undefined, true):v.bt("Pinterest", "Pinterest", "Company name", undefined, true)})})]})})})}),!V&&(w?(0,z.jsx)(k,{onClick:()=>{u(!c),(0,x.NC)("click_hub_dropdown_nav"),W({action:"click",item:"nav-bar-hub-dropdown"})},onDismiss:()=>u(!1),open:c}):(0,z.jsx)(I,{}))]}),h&&!V&&(0,z.jsx)(f.b,{children:(0,z.jsx)(s.xu,{"data-test-id":"search-box-container",display:"none",flex:"grow",mdDisplay:"block",paddingX:2,children:(0,z.jsx)(E.Z,{widthType:"auto"})})}),V?null:(0,z.jsxs)(s.kC,{alignItems:"center",direction:"row",flex:"none",justifyContent:"start",children:[(0,a.C$)(S)&&(0,z.jsxs)(s.xu,{alignItems:"center",display:"flex",justifyContent:"between",marginEnd:6,children:[(0,z.jsx)(s.xu,{"data-test-id":"header-about-button",margin:4,children:(0,z.jsx)(s.xv,{weight:"bold",children:(0,z.jsx)(s.rU,{href:"/_/_/about/",onClick:()=>{W({action:"click",item:"header-about-button"})},target:"blank",children:v.bt("Sobre", "About", "Link to page describing what Pinterest is.", undefined, true)})})}),(0,z.jsx)(s.xu,{"data-test-id":"header-business-button",margin:4,children:(0,z.jsx)(s.xv,{weight:"bold",children:(0,z.jsx)(s.rU,{href:"/_/_/business/",onClick:()=>{W({action:"click",item:"header-business-button"})},target:"blank",children:v.bt("Business", "Business", "unauth.homepage.link", undefined, true)})})}),(0,z.jsx)(s.xu,{"data-test-id":"header-blog-button",margin:4,children:(0,z.jsx)(s.xv,{weight:"bold",children:(0,z.jsx)(s.rU,{href:"/_/_/blog/",onClick:()=>{W({action:"click",item:"header-blog-button"})},target:"blank",children:v.bt("Blog", "Blog", "Link to the Pinterest business site.", undefined, true)})})})]}),(0,z.jsx)(s.xu,{"data-test-id":G?"simple-login-button":"login-button",marginEnd:2,children:(0,z.jsx)(s.zx,{ref:U,color:F,onClick:({event:e})=>t(e),size:G?"md":"lg",text:v.bt("Entrar", "Log in", "Label for log in button", undefined, true)})}),(0,z.jsx)(s.xu,{"data-test-id":G?"simple-signup-button":"signup-button",children:(0,z.jsx)(s.zx,{color:R("lex_follow_button").group.includes("main_cta")?"gray":Y,onClick:t=>{e(t.event)},size:G?"md":"lg",text:i})}),$&&(0,z.jsxs)(_.Fragment,{children:[(0,z.jsx)(s.xu,{ref:N,children:(0,z.jsx)(s.xu,{"data-test-id":"setting-button",display:"flex",justifyContent:"center",marginBottom:3,marginStart:2,marginTop:3,children:(0,z.jsx)(s.hU,{accessibilityLabel:v.bt("Configuração", "Setting", "unauthHeaderBar.seetingsButton", undefined, true),icon:"arrow-down",iconColor:"gray",onClick:({event:e})=>{e.preventDefault(),e.stopPropagation(),(0,x.NC)("click_header_setting"),W({action:"click",item:"setting-button"}),d(!o)},size:"xs"})})}),o&&(0,z.jsx)(m.Z,{name:"SafeSuspense_UnauthHeader_UnauthSettingFlyout",children:A?(0,z.jsx)(s.xu,{ref:H,children:(0,z.jsx)(O,{anchor:N.current,fallback:(0,z.jsx)(s.xu,{})})}):(0,z.jsx)(j.Z,{fallback:(0,z.jsx)(s.xu,{}),children:(0,z.jsx)(s.xu,{ref:H,children:(0,z.jsx)(T,{anchor:N.current})})})})]},"settingButton")]})]})});B.displayName="UnauthHeader";var U=i(90647),N=i(773616),H=i(333965);function R({showDesktopSignupModal:e}){let t=(0,p.ZP)(),i=(0,n.k6)(),a=(0,n.TH)(),o=(0,N.Z)(),r=(0,g.Z)(),{viewType:d,viewParameter:c}=(0,l.SU)(),{trackConversionUpsell:u}=(0,b.Z)(),h=()=>{(0,x.NC)("mweb_press_header_login"),r({action:"click",within:"unauth-header",item:"login-button"}),e?e("login"):(u({viewType:d,viewParameter:c,element:30,eventType:14688,component:14213,upsellReason:"click_login_on_header"}),i.push({pathname:"/login",state:{attributionLabel:"click_login_on_header",...a.state}}))};return(0,z.jsxs)(_.Fragment,{children:[(0,z.jsx)(s.xu,{"data-test-id":"unauth-header",position:"fixed",top:!0,width:"100%",zIndex:H.Z,children:o?(0,z.jsx)(U.Z,{app_upsell_type:"unauth-header",componentType:14161,children:({handleOpenApp:e})=>(0,z.jsx)(B,{onLoginButtonClick:h,onPrimaryButtonClick:()=>e({deepLinkUri:"/"===a.pathname?a.pathname:a.pathname.substr(1)}),primaryButtonText:t.bt("Baixar aplicativo", "Download app", "mweb.unauth_header.download_app", undefined, true)})}):(0,z.jsx)(B,{onLoginButtonClick:h,onPrimaryButtonClick:()=>{(0,x.NC)("mweb_press_header_signup"),r({action:"click",within:"unauth-header",item:"signup-button"}),e?e("signup"):(u({viewType:d,viewParameter:c,element:31,eventType:14688,component:14215,upsellReason:"click_signup_on_header"}),i.push({pathname:"/signup",state:{attributionLabel:"click_signup_on_header",next:a.pathname,...a.state}}))},primaryButtonText:t.bt("Criar conta", "Sign up", "Text on button on the top bar that leads users to signing up.", undefined, true)})}),(0,z.jsx)(s.xu,{height:L.Pw})]})}var W=i(545007),G=i(587703),$=i(696534),F=i(378720);let Y=()=>{let e=(0,W.v9)(e=>!!e?.session?.isSeoBot),t=(0,F.Z)();return!e&&!t},V=({children:e,fallback:t})=>Y()?t||null:e;var X=i(669177),J=i(721055);function K(){let e=(0,p.ZP)(),t=(0,n.TH)(),i=(0,n.k6)(),{viewType:o,viewParameter:r}=(0,l.SU)(),{userAgentPlatform:d,userAgent:c}=(0,W.v9)(({session:e})=>e),{isBot:u}=(0,w.B)(),h=(0,X.Rp)({isBot:u,platform:d,userAgent:c}),_=(0,J.Z)(),f=function(){let{isBot:e}=(0,w.B)();return(t,i)=>{e||(0,x.NC)(t,i)}}(),m=(0,N.Z)(),{checkExperiment:j}=(0,P.F)(),y=(0,G.Z)(),A=(0,g.Z)(),{trackConversionUpsell:k}=(0,b.Z)(),v=(0,$.vs)(),S=e.bt("Entrar", "Log in", "Label for log in button", undefined, true),C=e.bt("Criar conta", "Sign up", "Text on button on the top bar that leads users to signing up.", undefined, true),I=!h&&!(0,a.Xn)(t),E=((0,a.dr)(t)||(0,a.$Y)(t)||(0,a.E0)(t))&&!j("lex_follow_button").group.includes("main_cta"),Z=!m||_||E?"signup":"download",D=j("mweb_unauth_login_primary_header").group,T=D.includes("login_primary"),O=!T&&D.includes("login"),B=e.bt("Baixar", "Download", "mweb.unauth.interstitial_upsell.download_button_text", undefined, true),H=(I?S.length:0)+("signup"===Z?C.length:0)+("download"===Z?B.length:0),R=(0,z.jsx)(s.zx,{color:T?"white":E?"red":"gray",fullWidth:!0,onClick:()=>{A({action:"click",within:"unauth-header",item:"signup-button"}),y({component:13198,element:31,event_type:102,view_type:o,view_parameter:r}),f("press_header_signup"),k({viewType:o,viewParameter:r,eventType:14688,component:14215,upsellReason:"click_signup_on_header"}),i.push({pathname:"/signup",state:{attributionLabel:"click_signup_on_header",...t.state}})},size:"md",text:C});return(0,z.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{boxShadow:"0 1px 0 0 rgba(0, 0, 0, 0.08)",backgroundColor:v?"#333":"white",transition:"all 225ms cubic-bezier(0.0,0.0,0.2,1) 500ms",transform:"translateY(0)"}},left:!0,paddingX:3,position:"relative",top:!0,width:"100vw",children:(0,z.jsxs)(s.xu,{alignItems:"center","data-test-id":"unauth-header",direction:"row",display:"flex",justifyContent:"between",children:[(0,z.jsx)(s.iP,{accessibilityLabel:e.bt("Aplicativo do Pinterest", "Pinterest App", "Pinterest icon for app upsell", undefined, true),onTap:()=>{A({action:"click",within:"unauth-header",item:"pinterest-logo"})},children:(0,z.jsxs)(s.xu,{alignItems:"center",direction:"row",display:"flex",marginEnd:3,children:[(0,z.jsx)(s.xu,{alignItems:"center","data-test-id":"pinterest-logo-icon",display:"flex",height:L.SB,justifyContent:"center",rounding:2,children:(0,z.jsx)(s.I_,{accessibilityLabel:e.bt("Aplicativo do Pinterest", "Pinterest App", "Pinterest icon for app upsell", undefined, true),href:"/",icon:"pinterest",iconColor:"brandPrimary",padding:1,size:"xl"})}),(0,z.jsx)(s.xu,{"data-test-id":"pinterest-logo-text",paddingX:1,paddingY:2,children:H<18&&(0,z.jsxs)(s.xu,{children:[(0,z.jsx)(s.X6,{color:"error",overflow:"normal",size:"400",children:h?e.bt("Pinterest Lite", "Pinterest Lite", "Pinterest lite brand for the app upsell", undefined, true):e.bt("Pinterest", "Pinterest", "Pinterest brand for the app upsell", undefined, true)}),h&&(0,z.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{whiteSpace:"pre-wrap"}},children:(0,z.jsx)(s.xu,{children:(0,z.jsx)(s.xv,{color:"subtle",inline:!0,size:"100",children:e.bt("Economize espaço no seu dispositivo", "Save space on your device", "Unauth app upsell copy that describe Pinterest product core value to users", undefined, true)})})})]})})]})}),(0,z.jsx)(V,{children:(0,z.jsxs)(s.xu,{alignItems:"center","data-test-id":"UnauthAppUpsellButton",direction:"row",display:"flex",flex:"none",marginEnd:0,children:["signup"===Z&&T&&(0,z.jsx)(s.xu,{"data-test-id":"signup-button",children:R}),I&&(0,z.jsx)(s.xu,{"data-test-id":"login-button",marginEnd:v?1:0,children:(0,z.jsx)(s.zx,{color:D.includes("red")&&"signup"===Z?"red":D.includes("gray")&&"signup"===Z?"gray":"white",fullWidth:!0,onClick:()=>{A({action:"click",within:"unauth-header",item:"login-button"}),y({component:13198,element:30,event_type:102,view_type:o,view_parameter:r}),f("press_header_login"),k({viewType:o,viewParameter:r,eventType:14688,component:14213,upsellReason:"click_login_on_header"}),i.push({pathname:"/login",state:{attributionLabel:"click_login_on_header",next:t.pathname,...t.state}})},size:"md",text:S})}),"signup"!==Z||O||T?"signup"!==Z&&(0,z.jsx)(s.xu,{"data-test-id":"download-button",children:(0,z.jsx)(U.Z,{app_upsell_type:"unauth-header",componentType:14161,children:({handleOpenApp:e})=>(0,z.jsx)(s.zx,{color:(0,a.j8)(t)||j("lex_follow_button").group.includes("main_cta")?"gray":"red",fullWidth:!0,onClick:()=>{e()},size:"md",text:B})})}):(0,z.jsx)(s.xu,{"data-test-id":"signup-button",children:R})]})})]})})}var M=i(866265);let q={signup:{attributionLabel:"click_signup_on_header",signupFlow:{type:"signup"},source:"defaultSource"},login:{attributionLabel:"click_login_on_header",signupFlow:{type:"login"},source:"login"}},Q=e=>(0,a.mP)(e)||(0,a.hd)(e),ee=e=>(0,a.Ni)(e)||(0,a.Xn)(e)||"/invited/"===e.pathname,et=e=>e.pathname.includes("_created")||e.pathname.includes("boards")&&!(0,a.En)(e)||e.pathname.includes("_saved"),ei=e=>(0,a.mP)(e),en=({deviceType:e})=>{let t=(0,n.TH)(),i=(0,d.Z)(),o=(0,M.Z)(),r=(0,u.n)(),{viewParameter:_,viewType:p}=(0,l.SU)(),x=(0,z.jsxs)(s.xu,{color:"default",children:["tablet"===e?!(0,a.En)(t)&&!(0,a.Xn)(t)&&(0,z.jsx)(R,{}):o&&!et(t)&&!i&&(0,z.jsx)(K,{})," "]});return r.showReferredAppUpsell?(0,z.jsx)(c.Z,{onDismiss:()=>r.setShowReferredAppUpsellVal(!1),viewParameter:_,viewType:p}):ei(t)?(0,z.jsx)(s.xu,{position:"fixed",width:"100%",zIndex:h.J,children:x}):(0,z.jsx)(s.Le,{top:0,zIndex:h.J,children:x})};function es({showDesktopSignupModal:e}){let t=(0,r.ZP)(),i=(0,n.TH)(),l=(0,o.Z)();if("desktop"===t){let t=(0,z.jsx)(R,{showDesktopSignupModal:e&&(t=>(0,a.C$)(i)?l({reason:"CLICK_LOGIN_OR_SIGNUP",attributionLabel:"login"===t?"click_login_on_header":"click_signup_on_header",desktopOptions:{modalType:t,modalOptions:{source:"homePage",container:"home_page"}}}):e({signupFlow:q[t].signupFlow,attributionLabel:q[t].attributionLabel,source:q[t].source,container:"unauth_header",reason:"CLICK_LOGIN_OR_SIGNUP"}))});return Q(i)?(0,z.jsx)(s.xu,{position:"fixed",width:"100%",zIndex:h.$,children:t}):!ee(i)&&t}return(0,z.jsx)(en,{deviceType:t})}},253812:(e,t,i)=>{i.d(t,{$:()=>l,J:()=>s});var n=i(883119);let s=new n.Ry(5),l=new n.Ry(1e3)},333965:(e,t,i)=>{i.d(t,{Z:()=>n});let n=new(i(883119)).Ry(9999)},866265:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(616550),s=i(43604),l=i(5859),a=i(624797),o=i(810052);let r=()=>{let e=(0,n.TH)(),t=(0,o.a)(),{locale:i,userAgent:{platform:r,raw:d}}=(0,l.B)();if(!t)return!1;let{appInstallBannerIsEnabled:c,pinPageGlobalContext:u}=t,h=!!(0,a.mB)(e.search).invite_code;return c&&!(0,s.$K)(d)&&!(i.includes("ar")&&"ios"!==r)&&!(u?.isStoryPin===!0&&h)}},721055:(e,t,i)=>{i.d(t,{Z:()=>x});var n=i(545007),s=i(616550),l=i(43604),a=i(741983),o=i(5859),r=i(573810),d=i(554786),c=i(773616),u=i(669177),h=i(166630),_=i(953565);let p=e=>!!(0,l.dh)(e)&&((0,r.qn)("ufausfiiab")||((0,_.nP)("unauth.floating_app_upsell.suppress_for_instagram_in_app_browser"),(0,r.Nh)("ufausfiiab","1")),!0),x=()=>{let{isBot:e}=(0,o.B)(),t=(0,s.TH)(),{userAgentPlatform:i,userAgent:l}=(0,n.v9)(e=>e.session),r=(0,c.Z)();return!((0,d.ml)()&&!r)&&!(0,u.Rp)({isBot:e,platform:i,userAgent:l})&&((0,a.uM)(t)||(0,a.am)(t))&&!(0,h.P)()&&!p(l)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/app-www-PageWrapper-UnauthPageWrapperHeader.pt_BR-e2b4b841ba9340bc.mjs.map