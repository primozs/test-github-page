webpackJsonp(["kontakt"],{"+XqE":function(e,t,n){"use strict";var o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=u(n("GiK3")),s=(n("QyVd"),n("5e9p"),u(n("X3HN"))),l=u(n("Rb6A"));function u(e){return e&&e.__esModule?e:{default:e}}var p={layout:"contact",title:"Kontakt",description:"Kontakt in lokacija",section:[{body:"##",keyname:"company",title:"Podjetje"}],image:"/images/uploads/ekipa.png",headings:[]},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"===typeof t?"undefined":o(t))&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"===typeof t?"undefined":o(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.default.PureComponent),i(t,[{key:"render",value:function(){var e=this.props;return a.default.createElement(l.default,r({},e,{frontMatter:p}),a.default.createElement(s.default,{url:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.894927191104!2d14.292864115730541!3d45.97335810734495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477ad6f20dcfe2a7%3A0x9f5deae3a36a3bd9!2sPod+Hru%C5%A1evco+33%2C+1360+Vrhnika!5e0!3m2!1sen!2ssi!4v1528830170514",width:"100%",height:"450px",id:"myId",className:"myClassname",display:"initial",position:"relative",allowFullScreen:!0}))}}]),t}();t.default=f},X3HN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n("GiK3"),i=l(r),a=l(n("KSGD")),s=l(n("BEQ0"));function l(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.PureComponent),o(t,[{key:"render",value:function(){var e={ref:"iframe",frameBorder:"0",src:this.props.url,target:"_parent",allowFullScreen:this.props.allowFullScreen||!1,style:(0,s.default)({},{position:this.props.position||"absolute",display:this.props.display||"block",height:this.props.height||"100%",width:this.props.width||"100%"},this.props.styles||{}),height:this.props.height||"100%",name:this.props.name||"",width:this.props.width||"100%"};return i.default.createElement("iframe",(0,s.default)(e,this.props.id?{id:this.props.id}:{},this.props.className?{className:this.props.className}:{}))}}]),t}();u.propTypes={url:a.default.string.isRequired,id:a.default.string,className:a.default.string,width:a.default.string,position:a.default.string,display:a.default.string,name:a.default.string,height:a.default.string,styles:a.default.object,allowFullScreen:a.default.bool},t.default=u},bnAE:function(e,t,n){"use strict";var o=n("+XqE");o=o.default||o,e.exports={component:o,props:{frontMatter:{layout:"contact",title:"Kontakt",description:"Kontakt in lokacija",prependJs:["import Iframe from 'react-iframe';"],section:[{body:"##",keyname:"company",title:"Podjetje"}],image:"/images/uploads/ekipa.png"}}}}});