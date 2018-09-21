(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/docs/custom.mdx":function(e,n,o){"use strict";o.r(n);var t=o("./node_modules/react/index.js"),a=o.n(t),r=o("./node_modules/@mdx-js/tag/dist/index.js"),s=o("./node_modules/docz/dist/index.m.js"),m=o("./src/index.js"),l=o("./node_modules/styled-components/dist/styled-components.browser.esm.js");function d(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}n.default=function(e){var n=e.components,o=d(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"using-a-custom-configuration"}},"Using a custom configuration"),a.a.createElement(r.MDXTag,{name:"p",components:n},"To use a custom config, import the ",a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"ThemeProvider"),"\nfrom Styled-components ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"import { ThemeProvider } from 'styled-components'"),",\nand pass a named object ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"awesomegrid")," to the theme prop, as the example below.\nThe properties of your custom configuration will overwrite the default settings. Just set properties that are different from the default."),a.a.createElement(r.MDXTag,{name:"p",components:n},"Try changing any property in customConf below and see what happens."),a.a.createElement(s.Playground,{__position:0,__code:'{() => {\n  const customConf = {\n    columns: 12,\n    gutterWidth: 16, // px\n    paddingWidth: 16, // px\n    mediaQuery: \'only screen\',\n    container: {\n      sm: 540, // px\n      md: 720, // px\n      lg: 960, // px\n      xl: 1140, // px\n    },\n    breakpoints: {\n      xs: 1, // px\n      sm: 576, // px\n      md: 768, // px\n      lg: 992, // px\n      xl: 1200, // px\n    },\n  }\n  return (\n    <ThemeProvider theme={{ awesomegrid: customConf }}>\n      <Container>\n        <Row>\n          <Col debug xs={4} sm={6} md={9}>\n            <span role="img" aria-label="so cool">\n              xs=\n              {1} sm=\n              {3} md=\n              {6} lg=\n              {6}\n            </span>\n          </Col>\n          <Col debug noGutter>\n            <Col debug>inside another Col</Col>\n            <Col debug>inside another Col</Col>\n          </Col>\n        </Row>\n        <Row>\n          <Col debug xs={12} sm={6} md={10} lg={6}>\n            xs=\n            {12} sm=\n            {6} md=\n            {10} lg=\n            {6}\n          </Col>\n          <Col debug xs={12} sm={6} md={2} lg={6}>\n            xs=\n            {12} sm=\n            {6} md=\n            {2} lg=\n            {6}\n          </Col>\n        </Row>\n      </Container>\n    </ThemeProvider>\n  )\n}}',__scope:{props:o,Container:m.b,Row:m.c,Col:m.a,ThemeProvider:l.a}},function(){return a.a.createElement(l.a,{theme:{awesomegrid:{columns:12,gutterWidth:16,paddingWidth:16,mediaQuery:"only screen",container:{sm:540,md:720,lg:960,xl:1140},breakpoints:{xs:1,sm:576,md:768,lg:992,xl:1200}}}},a.a.createElement(m.b,null,a.a.createElement(m.c,null,a.a.createElement(m.a,{debug:!0,xs:4,sm:6,md:9},a.a.createElement("span",{role:"img","aria-label":"so cool"},"xs=",1," sm=",3," md=",6," lg=",6)),a.a.createElement(m.a,{debug:!0,noGutter:!0},a.a.createElement(m.a,{debug:!0},"inside another Col"),a.a.createElement(m.a,{debug:!0},"inside another Col"))),a.a.createElement(m.c,null,a.a.createElement(m.a,{debug:!0,xs:12,sm:6,md:10,lg:6},"xs=",12," sm=",6," md=",10," lg=",6),a.a.createElement(m.a,{debug:!0,xs:12,sm:6,md:2,lg:6},"xs=",12," sm=",6," md=",2," lg=",6))))}))}}}]);