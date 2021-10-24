(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{124:function(e,a,t){"use strict";var l=t(4),n=t(6),r=t(1),c=t.n(r),s=t(20),m=t.n(s),o=t(54),i=t.n(o),E=t(55),u={tag:E.o,inverse:m.a.bool,color:m.a.string,body:m.a.bool,outline:m.a.bool,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},d=function(e){var a=e.className,t=e.cssModule,r=e.color,s=e.body,m=e.inverse,o=e.outline,u=e.tag,d=e.innerRef,f=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),g=Object(E.k)(i()(a,"card",!!m&&"text-white",!!s&&"card-body",!!r&&(o?"border":"bg")+"-"+r),t);return c.a.createElement(u,Object(l.a)({},f,{className:g,ref:d}))};d.propTypes=u,d.defaultProps={tag:"div"},a.a=d},125:function(e,a,t){"use strict";var l=t(4),n=t(6),r=t(1),c=t.n(r),s=t(20),m=t.n(s),o=t(54),i=t.n(o),E=t(55),u={tag:E.o,className:m.a.string,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.object,m.a.string,m.a.func])},d=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,s=e.tag,m=Object(n.a)(e,["className","cssModule","innerRef","tag"]),o=Object(E.k)(i()(a,"card-body"),t);return c.a.createElement(s,Object(l.a)({},m,{className:o,ref:r}))};d.propTypes=u,d.defaultProps={tag:"div"},a.a=d},130:function(e,a,t){"use strict";var l=t(1),n=t.n(l);t(131);a.a=function(e){var a=parseInt(e.percentage);return n.a.createElement("div",{className:"progress-wrap ftco-animate text-dark"},n.a.createElement("h3",{className:"ff-roboto-medium fs-4"},e.skill),n.a.createElement("div",{className:"progress"},n.a.createElement("div",{className:"progress-bar",role:"progressbar","aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":"100",style:{width:"".concat(a,"%")}},n.a.createElement("div",{className:"ff-montserrat-light fs-4",style:{top:"-24px"}},a,"%"))))}},131:function(e,a,t){},133:function(e,a,t){"use strict";var l=t(1),n=t.n(l),r=t(124),c=t(125);t(134);a.a=function(e){var a=e.skill,t=e.percentage,l=e.lastWeek,s=e.lastMonth,m=function(e){return e/100*360};return n.a.createElement(r.a,{className:"progress-circle mb-5 bg-white rounded-lg shadow text-dark"},n.a.createElement(c.a,null,n.a.createElement("h2",{className:"h5 font-weight-bold text-center mb-4 ff-roboto-medium fs-5"},a),n.a.createElement("div",{className:"progress mx-auto"},n.a.createElement("div",{className:"progress-left",style:t>50?{transform:"rotate(".concat(m(t),"deg)")}:{display:"none"}},n.a.createElement("div",{className:"progress-bar border-primary"})),n.a.createElement("div",{className:"progress-right",style:t<=50?{transform:"rotate(".concat(m(t-50),"deg)")}:{}},n.a.createElement("div",{className:"progress-bar border-primary"})),n.a.createElement("div",{className:"progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center"},n.a.createElement("div",{className:"h2 font-weight-bold ff-montserrat-light fs-8"},t,n.a.createElement("sup",{className:"small"},"%")))),n.a.createElement("div",{className:"row text-center mt-4"},n.a.createElement("div",{className:"col-6 border-right"},n.a.createElement("div",{className:"h4 font-weight-bold mb-0 ff-montserrat-light fs-6"},l,"%"),n.a.createElement("div",{className:"small text-muted"},"Last week")),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"h4 font-weight-bold mb-0 ff-montserrat-light fs-6"},s,"%"),n.a.createElement("div",{className:"small text-muted"},"Last month")))))}},134:function(e,a,t){},212:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),r=t(58),c=t(62),s=(t(71),t(130)),m=t(133),o=t(65),i=t(66),E=t(227),u=t(228),d=t(229);a.default=function(e){return n.a.createElement(l.Fragment,null,n.a.createElement(r.a,null),n.a.createElement("section",{className:"my-5 pt-3"},n.a.createElement(E.a,null,n.a.createElement(o.a,{title:"Skills",subtitle:"I know the ropes of each of these technologies and in each of them I give my best, using the lastest solutions, in accordance with the latest IT trends.",className:"mb-5"}),n.a.createElement(u.a,null,n.a.createElement(d.a,{lg:"3"},n.a.createElement(m.a,{skill:"ReactJS",percentage:"96",lastWeek:"32",lastMonth:"64"})),n.a.createElement(d.a,{lg:"3"},n.a.createElement(m.a,{skill:"ExpressJS",percentage:"92",lastWeek:"44",lastMonth:"70"})),n.a.createElement(d.a,{lg:"3"},n.a.createElement(m.a,{skill:"Jest",percentage:"73",lastWeek:"18",lastMonth:"53"})),n.a.createElement(d.a,{lg:"3"},n.a.createElement(m.a,{skill:"Spring Boot",percentage:"82",lastWeek:"18",lastMonth:"53"}))),n.a.createElement(u.a,null,n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"JavaScript (ES6)",percentage:"97"})),n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"Typescript",percentage:"83"}))),n.a.createElement(u.a,null,n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"Java EE",percentage:"90"})),n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"Python",percentage:"87"}))),n.a.createElement(u.a,null,n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"MongoDB (Mongoose)",percentage:"91"})),n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"MySQL (Sequelize)",percentage:"92"}))),n.a.createElement(u.a,null,n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"Heroku",percentage:"73"})),n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"AWS (S3, EC2, Cloudfront, Route53, SES)",percentage:"73"}))),n.a.createElement(u.a,null,n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"MongoDB Atlas",percentage:"75"})),n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"Git",percentage:"100"}))),n.a.createElement(u.a,null,n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"Trello",percentage:"98"})),n.a.createElement(d.a,{md:"6",lg:"6"},n.a.createElement(s.a,{skill:"Scrum",percentage:"95"}))))),n.a.createElement(i.a,null),n.a.createElement(c.a,null))}},58:function(e,a,t){"use strict";var l=t(69),n=t(1),r=t.n(n),c=t(56),s=t(221),m=t(222),o=t(223),i=t(224),E=t(225),u=t(226),d=(t(59),t(61)),f=t.n(d);a.a=function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),d=t[0],g=t[1];return r.a.createElement("div",{className:"header"},r.a.createElement(s.a,{light:!0,fixed:"top",expand:"md"},r.a.createElement(m.a,{href:"/"},r.a.createElement("img",{className:"logo",src:f.a,alt:"CodeOne Logo"})),r.a.createElement(o.a,{onClick:function(){return g(!d)}}),r.a.createElement(i.a,{isOpen:d,navbar:!0},r.a.createElement(E.a,{className:"ml-auto",navbar:!0},r.a.createElement(u.a,null,r.a.createElement(c.b,{to:"/",className:"nav-link ff-roboto-bold"},"Home")),r.a.createElement(u.a,null,r.a.createElement(c.b,{to:"/me",className:"nav-link ff-roboto-bold"},"About")),r.a.createElement(u.a,null,r.a.createElement(c.b,{to:"/skills",className:"nav-link ff-roboto-bold"},"Skills")),r.a.createElement(u.a,null,r.a.createElement(c.b,{to:"/services",className:"nav-link ff-roboto-bold"},"Services")),r.a.createElement(u.a,null,r.a.createElement(c.b,{to:"/projects",className:"nav-link ff-roboto-bold"},"Projects")),r.a.createElement(u.a,null,r.a.createElement(c.b,{to:"/blog",className:"nav-link ff-roboto-bold"},"Blog")),r.a.createElement(u.a,null,r.a.createElement(c.b,{to:"/contactme",className:"nav-link ff-roboto-bold"},"Contact me"))))))}},59:function(e,a,t){},61:function(e,a,t){e.exports=t.p+"static/media/logo.b2a4ff0f.png"},62:function(e,a,t){"use strict";var l=t(1),n=t.n(l),r=t(227),c=t(228),s=t(229),m=t(56);t(63);a.a=function(e){return n.a.createElement("footer",{className:"footer"},n.a.createElement(r.a,null,n.a.createElement(c.a,null,n.a.createElement(s.a,null,n.a.createElement("div",{className:"footer-widget"},n.a.createElement("h2",null,"About"),n.a.createElement("p",null,"I am a professional in creating web and mobile applications. I  also specialize in broadly defined internet marketing"),n.a.createElement("ul",{className:"footer-social list-unstyled float-md-left float-lft mt-5"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/codeonexyz"},n.a.createElement("span",{className:"icon-twitter"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://facebook.com/codeone.xyz"},n.a.createElement("span",{className:"icon-facebook"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://instagram.com/codeone.xyz"},n.a.createElement("span",{className:"icon-instagram"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://github.com/codeonexyz"},n.a.createElement("span",{className:"icon-github"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://linkedin.com/in/mdelm"},n.a.createElement("span",{className:"icon-linkedin"})))))),n.a.createElement(s.a,null,n.a.createElement("div",{className:"footer-widget"},n.a.createElement("h2",{className:"heading-2"},"Links"),n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement(m.b,{to:"/"},n.a.createElement("span",{className:"icon-long-arrow-right mr-2"}),"Home")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/portfolio"},n.a.createElement("span",{className:"icon-long-arrow-right mr-2"}),"About")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/skills"},n.a.createElement("span",{className:"icon-long-arrow-right mr-2"}),"Skills")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/services"},n.a.createElement("span",{className:"icon-long-arrow-right mr-2"}),"Services")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/projects"},n.a.createElement("span",{className:"icon-long-arrow-right mr-2"}),"Projects")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/blog"},n.a.createElement("span",{className:"icon-long-arrow-right mr-2"}),"Blog")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/contactme"},n.a.createElement("span",{className:"icon-long-arrow-right mr-2"}),"Contact"))))),n.a.createElement(s.a,null,n.a.createElement("div",{className:"footer-widget"},n.a.createElement("h2",{className:"heading-2"},"Services"),n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement(m.b,{to:"/services"},n.a.createElement("span",{className:"icon-long-arrow-right mr-2"}),"Web Development")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/services"},n.a.createElement("span",{className:"icon-long-arrow-right mr-2"}),"API Development")),n.a.createElement("li",null,n.a.createElement(m.b,{to:"/services"},n.a.createElement("span",{className:"icon-long-arrow-right mr-2"}),"Database Design"))))),n.a.createElement(s.a,null,n.a.createElement("div",{className:"footer-widget"},n.a.createElement("h2",{className:"heading-2"},"Have a Questions?"),n.a.createElement("div",{className:"block-23 mb-3"},n.a.createElement("ul",{className:"list-unstyled"},n.a.createElement("li",null,n.a.createElement("span",{className:"icon icon-map-marker"}),n.a.createElement("span",{className:"text"},"\xa0\xa0\xa0\xa0\xa0\xa0Nador, Morocco 62000")),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("span",{className:"icon icon-phone"}),n.a.createElement("span",{className:"text"},"\xa0\xa0\xa0\xa0+21253616347"))),n.a.createElement("li",null,n.a.createElement("a",{href:"/"},n.a.createElement("span",{className:"icon icon-envelope"}),n.a.createElement("span",{className:"text"},"\xa0\xa0\xa0\xa0codeone.xyz@gmail.com")))))))),n.a.createElement(c.a,null,n.a.createElement(s.a,{md:"12",className:"text-center mt-5"},n.a.createElement("p",null,"Copyright \xa9 ",(new Date).getFullYear()," All rights reserved | codeone.xyz")))))}},63:function(e,a,t){},65:function(e,a,t){"use strict";var l=t(1),n=t.n(l);a.a=function(e){return n.a.createElement("div",{className:"text-center ".concat(e.className)},n.a.createElement("h2",{className:"ff-roboto-medium fs-10 text-dark"},e.title),e.subtitle?n.a.createElement("h6",{size:"sm",className:"text-center text-dark ff-montserrat"},n.a.createElement("div",{style:{width:"60%",margin:"0 auto"}},e.subtitle)):"")}},66:function(e,a,t){"use strict";var l=t(1),n=t.n(l),r=t(227),c=t(228),s=t(229);t(67);a.a=function(e){return n.a.createElement("section",{className:"hire-me img"},n.a.createElement("div",{className:"overlay"}),n.a.createElement(r.a,null,n.a.createElement(c.a,{className:"justify-content-center"},n.a.createElement(s.a,{className:"text-center"},n.a.createElement("h2",{className:"ff-roboto-bold fs-11"},"I'm ",n.a.createElement("span",null,"Available")," for freelancing"),n.a.createElement("p",null,"Do you have an idea? I will put it into practice."),n.a.createElement("p",{className:"mb-0 ff-montserrat ff-5"},n.a.createElement("a",{href:"/",className:"btn btn-primary py-3 px-5 ff-montserrat-medium fs-3"},"HIRE ME"))))))}},67:function(e,a,t){}}]);
//# sourceMappingURL=9.1aeb284d.chunk.js.map