(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,t,n){"use strict";n.r(t);n(48);var a=n(7),r=n.n(a),i=n(144),o=n.n(i),s=n(0),c=n.n(s),l=n(143),d={z1:"#fafafa",z2:"#f0f0f0",z3:"#e1e1e1",z4:"#cdcdcd",z5:"#b4b4b4",z6:"#979797",z7:"#767676",z8:"#525252",z9:"#2d2d2d"},m={z1:"#fcfcf9",z2:"#f3f3ef",z3:"#e5e5df",z4:"#d1d1cb",z5:"#b9b9b2",z6:"#9b9b94",z7:"#797974",z8:"#555551",z9:"#2e2e2c"},u="#fff",p="#ffcf56",g='"Lato", sans-serif',h='"Oswald", sans-serif',f=525,b=768,w=1024,v={print:12,regular:16},y={heading:1.2,regular:1.5},k=function(e){return e/v.regular},E=Object(l.b)("div",{target:"e1pe1gzg0"})("display:grid;position:relative;grid-gap:0 ",k(45),"em;grid-template:[row1-start] 'header header' auto [row1-end] [row2-start] 'primary secondary' auto [row2-end] [row3-start] 'other secondary' 1fr [row3-end] / 1fr ",1.61803398875,"fr;width:100vw;max-width:",k(w),"em;height:",141.4,"vw;max-height:",1.414*k(w),"em;margin:",k(50),"em auto;padding:",k(35),"em ",k(60),"em ",k(60),"em;transition:box-shadow 0.5s;background:",u,";box-shadow:0 8px 20px 0 ",m.z3,";cursor:default;@media print{margin:0 auto;box-shadow:none;}@media screen and (max-width:",k(w),"em){height:auto;min-height:calc(100vh - ",k(100),"em);max-height:none;box-shadow:0 0 40px 30px ",u,";}@media screen and (max-width:",k(b),"em){grid-template:[row1-start] 'header' auto [row1-end] [row2-start] 'primary' auto [row2-end] [row3-start] 'secondary' auto [row3-end] [row4-start] 'other' auto [row4-end] / 1fr;}@media screen and (max-width:",k(f),"em){margin:0;padding:",k(15),"em;text-align:center;}"),j={gridArea:"header"},x={gridArea:"primary"},z={gridArea:"secondary"},S={gridArea:"other"},C=function(e){var t=e.header,n=e.primarySections,a=e.secondarySections,r=e.otherSections;return s.createElement(E,null,s.createElement("div",{className:Object(l.a)(j)},t),s.createElement("div",{className:Object(l.a)(x)},n),s.createElement("div",{className:Object(l.a)(z)},a),s.createElement("div",{className:Object(l.a)(S)},r))},O=(n(145),Object(l.b)("div",{target:"e8w7h880"})("margin-left:1px;padding-left:",k(32),"em;border-left:1px solid ",m.z4,";@media screen and (max-width:",k(f),"em){margin:",k(30),"em 0 0;padding-left:0;border:none;}")),I=n(147),N=Object(l.b)("div",{target:"e1s52xc80"})("display:flex;flex-wrap:wrap;max-width:60vw;margin:0.5em 0;color:",m.z7,";font-size:0.9em;@media screen and (max-width:",k(f),"em){justify-content:center;max-width:none;}"),q=Object(l.b)("div",{target:"e1s52xc81"})("margin:0.2em 0.5em 0.2em 0;padding:0 0.5em;background:",d.z2,";box-shadow:0 1px 0 1px ",m.z4,";user-select:none;"),A=function(e){var t=e.tags;return c.a.createElement(N,null,o.a.map(t,function(e){return c.a.createElement(q,{key:e},e)}))},M=Object(l.b)("a",{target:"eswe4qw0"})("font-size:0.9em;"),P=function(e){var t=e.projects;return c.a.createElement(O,null,o.a.map(t,function(e,t){return c.a.createElement(c.a.Fragment,{key:t},c.a.createElement("h5",null,c.a.createElement(I.a,null)," ",e.title," ",e.github&&c.a.createElement(M,{href:e.github,target:"_blank"},c.a.createElement(I.c,null))," ",e.link&&c.a.createElement(M,{href:e.link,target:"_blank"},c.a.createElement(I.d,null))),e.tags&&c.a.createElement(A,{tags:e.tags}),c.a.createElement("span",null,e.description))}))},T=function(e){var t=e.job;return c.a.createElement(O,null,c.a.createElement("h4",null,t.position,c.a.createElement("a",{href:t.link,target:"_blank"},c.a.createElement("span",null," @",t.at))),c.a.createElement("h6",null,"// "+t.from+" - "+t.to),t.tags&&c.a.createElement(A,{tags:t.tags}),c.a.createElement("span",null,t.description),t.projects&&c.a.createElement(P,{projects:t.projects}))},B=Object(l.b)("div",{target:"e1b0nfos0"})("padding-top:1em;"),G=function(e){var t=e.section;return c.a.createElement(B,null,c.a.createElement("h3",null,"— ",t.title," —"),c.a.createElement("span",null,t.description),t.jobs?o.a.map(t.jobs,function(e,t){return c.a.createElement(T,{key:t,job:e})}):null,t.projects&&c.a.createElement(P,{projects:t.projects}))},J=n(154),Q=n.n(J),F=Object(l.b)("div",{target:"eyjwrh70"})("display:flex;flex-wrap:wrap;align-items:center;@media screen and (max-width:",k(f),"em){flex-direction:column;}"),L=Object(l.b)("div",{target:"eyjwrh71"})("display:flex;position:relative;align-items:center;margin:0 -",k(5),"em;padding:",k(5),"em;color:",m.z8,";letter-spacing:",k(1),"em;user-select:",function(e){return e.copyable?"all":"auto"},";&:hover{background:",m.z2,";color:",m.z9,";}&:not(:hover):not(:last-child):after{content:'·';position:absolute;right:0.5em;}&:not(:hover) > *:nth-child(3){visibility:hidden;}> *:not(:last-child){margin-right:0.5em;}@media (min-width:",k(f),"em){margin-right:0.5em;}"),R=Object(l.b)("a",{target:"eyjwrh72"})("&:not(:hover):not(:last-child) > *:after{content:'·';position:absolute;right:0.5em;}"),K=Object(l.b)("div",{target:"eyjwrh73"})("color:",m.z8,";font-size:0.75em;"),D=Object(l.b)("div",{target:"eyjwrh74"})("position:absolute;bottom:0;left:50%;padding:0 ",k(5),"em;transform:",function(e){return e.visible?"translate(-50%, 100%)":"translate(-50%, 50%)"},";transition:all 0.2s;transition-delay:0.2s;border-radius:",k(2),"em;opacity:",function(e){return e.visible?1:0},";background:",m.z8,";color:",m.z1,";font-size:0.75em;user-select:none;"),H=function(e){function t(t){var n;return(n=e.call(this,t)||this).getOnCopy=function(e){return function(){var t;n.setState(((t={})[e]={copied:!0},t))}},n.getOnBlur=function(e){return function(){var t;n.setState(((t={})[e]={copied:!1},t))}},n.renderContact=function(e,t){var a=e.IconComponent,r=e.text,i=e.link,o=e.ActionIconComponent,s=e.tip,l="email"===t,d=c.a.createElement(L,{key:t,copyable:l,onMouseLeave:n.getOnBlur(t)},c.a.createElement(a,null),c.a.createElement("div",null,r,n.renderTooltip(t)),o?c.a.createElement(o,null):s?c.a.createElement(K,null,s):null);return i?c.a.createElement(R,{key:t,href:i,target:"_blank"},d):l?c.a.createElement(Q.a,{key:t,text:r,onCopy:n.getOnCopy(t)},d):d},n.renderTooltip=function(e){return c.a.createElement(D,{visible:n.state[e]&&n.state[e].copied},"Copied")},n.state={},n}return r()(t,e),t.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("h1",null,this.props.firstName),c.a.createElement("h2",null,this.props.lastName)),c.a.createElement(F,null,o.a.map(this.props.contacts,this.renderContact)))},t}(c.a.Component),U=n(159),_=n(158),V={firstName:"Chonnipa",lastName:"Kittisiriprasert",contacts:{email:{IconComponent:I.e,text:"chonnipa.kit@gmail.com",ActionIconComponent:_.a},github:{IconComponent:I.c,text:"github.com/pnagi",ActionIconComponent:I.b,link:"https://github.com/pnagi"},website:{IconComponent:U.a,text:"pnagi.github.io",tip:"You are here!"}},primarySections:{aboutMe:{title:"About Me",description:"Creative software engineer passionate in developing functional and beautiful inside out software. Eager to lean new things and love listening to music."},education:{title:"Education",description:c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,"2013 - 2017"),c.a.createElement("strong",null,"Kasetsart University"),c.a.createElement("div",null,"B.Eng. Software & Knowledge Engineering")),projects:{final:{title:'Senior Project: "Interact"',description:"Developed an UX analytic system, where user can track, experiment and visualize the usage of user's website real-time.",github:"https://github.com/TheInteract",tags:["javascript","react","stylus","d3","node.js","graphql","apollo","mongodb","docker","kubernetes","google cloud platform"]}}}},secondarySections:{experiences:{title:"Experiences",jobs:{twFullTime:{position:"Software Engineer",at:"Taskworld",from:"June 2017",to:"Present",link:"https://taskworld.com",description:"Maintained a task management software, improved existed features, added features, and reduced technical debt.",projects:{search:{title:"Dedicate search page & New design of global search",description:"",tags:["+","elasticsearch","mustache"]},elasticsearch:{title:"Migrated Elasticsearch v2.4 to v6.2 (Breaking changes)",description:"",tags:["+","elasticsearch","mustache"]},kubernetes:{title:"Kubernetes POC",description:"",tags:["+","docker","kubernetes","kops","helm","aws","circleci"]}},tags:["typescript","react","redux","node.js","mongodb"]},twPartTime:{position:"Part-time Software Engineer",at:"Taskworld",from:"January 2017",to:"May 2017",link:"https://taskworld.com",description:"Maintained a task management software and participated in features development.",tags:["javascript","react","redux","node.js","mongodb"]},twIntern:{position:"Software Engineer Intern",at:"Taskworld",from:"August 2016",to:"December 2016",link:"https://taskworld.com",description:"Maintained a task management software and added features.",projects:{background:{title:"Background Selection",link:"https://medium.com/taskworld-blog/feast-your-eyes-on-taskworlds-stunning-new-look-66138eb208e"},chatHeads:{title:"Chat Heads (Frontend)",link:"https://medium.com/taskworld-blog/message-without-switching-tabs-with-chat-heads-d4b30051b2b4"},navBars:{title:"New Design Navigation Bars",link:"https://medium.com/taskworld-blog/feast-your-eyes-on-taskworlds-stunning-new-look-66138eb208e"}},tags:["javascript","react","redux","node.js","mongodb"]},kitLabIntern:{position:"Software Engineer Lab Intern",at:"Kyoto Institute of Technology",from:"June 2016",to:"August 2016",link:"https://www.kit.ac.jp/en/",description:"Joined `Software Engineer` lab and developed GitQuest, a gamify git visualization website.",projects:{gitQuest:{title:"GitQuest",github:"https://github.com/pnagi/GitQuest",tags:["javascript","react","create.js"]}}},wnIntern:{position:"Software Engineer Intern",at:"Wongnai Media",from:"June 2015",to:"July 2015",link:"https://www.wongnai.com/",description:"Developed internal tools, joined core team and maintained core product.",tags:["shell script","backbone","google maps api","less","java","spring mvc"]}}}},otherSections:{contribution:{title:"Contribution",projects:{reactBkk:{title:"React Bangkok 3.0.0",description:"Volunteered to design and cooperated in frontend site development.",github:"https://github.com/reactbkk/3.0.0",tags:["javascript","react","emotion"]}}},activities:{title:"Activities",projects:{pizza:{title:"Pizza Hackathon 2018",description:"Joined and won 1st prize as part of Gitthereum team.",link:"https://medium.com/@peawyoyoyin/gitthereum-transforming-git-into-a-working-blockchain-538df6617ac6",github:"https://github.com/gitthereum",tags:["git","javascript","blockchain"]},barcamp:{title:"Barcamp Bangkhen 2015",description:"Volunteered to lead the event, set up design concept, done design stuff and cooperated in website development.",link:"http://2015.barcampbangkhen.org",github:"https://github.com/chinclubi/bcbk-frontend",tags:["javascript","angular","css"]}}}}},W=n(160),X=n(148),Y=n(164),Z=n.n(Y),$=n(153),ee=(n(172),n(78));Object(ee.injectGlobal)("html{font-size:",v.regular,"px;line-height:",y.regular," !important;@media print{font-size:",v.print,"px;}}body{width:100%;overflow-x:hidden;overflow-y:scroll;background:",d.z1,";color:",d.z8,";font-family:",g,";@media print{background:none;}}h1,h2,h3,h4,h5,h6{display:block;margin:1.414em 0 0.25em;color:",d.z9,";font-family:",h,";font-weight:600;line-height:",y.heading,";text-rendering:optimizeLegibility;text-transform:uppercase;+h1,+h2,+h3,+h4,+h5,+h6{margin-top:0.25em;}}h1{margin-top:0.5rem;margin-right:-",k(10),"rem;font-size:3.6rem;letter-spacing:",k(10),"rem;@media screen and (max-width:",k(f),"em){font-size:2.4rem;}}h2{margin-right:-",k(10),"rem;font-size:2.4rem;font-weight:400;letter-spacing:",k(10),"rem;@media screen and (max-width:",k(f),"em){font-size:1.2em;}}h3{margin-right:-",k(5),"rem;font-size:1.2rem;letter-spacing:",k(5),"rem;}h4{margin-right:-",k(2),"rem;font-size:1rem;letter-spacing:",k(2),"rem;}h5{margin-right:-",k(2),"rem;font-size:0.9rem;font-weight:400;letter-spacing:",k(2),"rem;}h6{margin-right:-",k(3),"rem;color:",m.z6,";font-size:0.75rem;font-weight:400;letter-spacing:",k(3),"rem;}a{color:",m.z8,";text-decoration:none;&:hover,&:focus{color:",m.z9,";}}p{margin-top:0;margin-bottom:1rem;}::selection{background:",p,";}@page{size:A4;margin:0.2in 0 0.1in;}");var te=function(e){var t=e.children;return c.a.createElement(X.StaticQuery,{query:"3728639798",data:W},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(Z.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description}]}),c.a.createElement($.b.Provider,{value:{color:"inherit"}},t))})},ne=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).renderSections=function(e){return o.a.map(e,function(e,t){return c.a.createElement(G,{key:t,section:e})})},t.renderHeader=function(){return c.a.createElement(H,{firstName:V.firstName,lastName:V.lastName,contacts:V.contacts})},t}return r()(t,e),t.prototype.render=function(){return c.a.createElement(te,null,c.a.createElement(C,{header:this.renderHeader(),primarySections:this.renderSections(V.primarySections),secondarySections:this.renderSections(V.secondarySections),otherSections:this.renderSections(V.otherSections)}))},t}(c.a.PureComponent);t.default=ne},148:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return g}),n.d(t,"StaticQueryContext",function(){return u}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(142),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(149),d=n.n(l);n.d(t,"PageRenderer",function(){return d.a});var m=n(45);n.d(t,"parsePath",function(){return m.a});var u=r.a.createContext({}),p=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(e,t,n){var a;e.exports=(a=n(163))&&a.default||a},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Chonnipa K.",description:"My resume"}}}}},163:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(71),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ee841248fd3e5c38bdc5.js.map