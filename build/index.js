(window.webpackJsonp_planet4_gpca_plugin_blocks=window.webpackJsonp_planet4_gpca_plugin_blocks||[]).push([[2],{22:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){}}]),function(e){function t(t){for(var c,l,i=t[0],o=t[1],s=t[2],m=0,u=[];m<i.length;m++)l=i[m],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&u.push(r[l][0]),r[l]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);for(d&&d(t);u.length;)u.shift()();return n.push.apply(n,s||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],c=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(c=!1)}c&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var c={},r={1:0},n=[];function l(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=c,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(a,c,function(t){return e[t]}.bind(null,c));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var i=window.webpackJsonp_planet4_gpca_plugin_blocks=window.webpackJsonp_planet4_gpca_plugin_blocks||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=o;n.push([27,2]),a()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},,function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e},a.apply(this,arguments)}e.exports=a},,function(e,t){e.exports=window.wp.blocks},,,function(e,t){e.exports=window.wp.data},,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(7),r=a(2),n=a(5),l=a.n(n),i=a(0),o=a(1),s=a(10),d=a(3);function m(e){return function(t){return function(a){var c={};c[t]=a,e(c)}}}a(21);var u={keepPlaceholderOnFocus:!0},b=Object(s.withSelect)((function(e,t){var a=t.attributes.mediaId;return{media:a?e("core").getMedia(a):void 0}}))((function(e){var t=e.attributes,a=t.url,c=t.imgSrc,n=t.mediaId,s=t.mediaUrl,b=t.imgUrl,p=t.imgAlt,O=t.title,j=t.desc,g=t.eventDate,h=t.eventLocation,v=t.coordinates,E=e.setAttributes,f="lib"===c?s:b,y=m(E);return Object(i.createElement)("div",Object(o.useBlockProps)(),Object(i.createElement)(o.InspectorControls,null,Object(i.createElement)("div",{className:"card-settings"},Object(i.createElement)(d.PanelBody,{className:"card-settings-link".concat(a?"":" warn"),title:Object(r.__)("Link","cards"),initialOpen:!0},Object(i.createElement)(o.PlainText,{type:"string",value:a,onChange:y("url"),placeholder:Object(r.__)("URL","cards")})),Object(i.createElement)(d.PanelBody,{title:Object(r.__)("Image","cards"),initialOpen:!0},Object(i.createElement)(o.PlainText,{type:"string",value:p,onChange:y("imgAlt"),placeholder:"alt"}),Object(i.createElement)(d.TabPanel,{initialTabName:c,onSelect:y("imgSrc"),tabs:[{name:"lib",title:Object(r.__)("Media Library","cards"),el:Object(i.createElement)("div",{className:"tab-panel"},Object(i.createElement)(o.MediaUploadCheck,null,Object(i.createElement)(o.MediaUpload,{allowedTypes:["image"],onSelect:function(e){E({mediaId:e.id,mediaUrl:e.url})},value:n,render:function(e){var t=e.open;return Object(i.createElement)("div",null,s&&Object(i.createElement)(i.Fragment,null,Object(i.createElement)("div",{className:"card-image"},Object(i.createElement)("img",{src:s,alt:p||O||a}))),!s&&Object(i.createElement)(d.Button,{onClick:t},Object(r.__)("Open Media Library","cards")),s&&Object(i.createElement)(d.Button,{onClick:function(){E({mediaId:0,mediaUrl:""})}},Object(r.__)("Remove Image","cards")))}})))},{name:"url",title:Object(r.__)("Image URL","cards"),el:Object(i.createElement)(i.Fragment,null,Object(i.createElement)(o.PlainText,{type:"url",value:b,onChange:y("imgUrl"),placeholder:Object(r.__)("Image URL","cards")}),Object(i.createElement)("div",{className:"card-image"},Object(i.createElement)("img",{src:b,alt:O||a})))}]},(function(e){return e.el}))),Object(i.createElement)(d.PanelBody,{title:Object(r.__)("Geolocation","cards"),initialOpen:!1},Object(i.createElement)(o.PlainText,{type:"string",value:v,onChange:y("coordinates"),placeholder:Object(r.__)("Coordinates","cards")})))),Object(i.createElement)("div",{className:"a-card card-editor"},f&&Object(i.createElement)("div",{className:"card-image"},Object(i.createElement)("img",{src:f,alt:O||a})),Object(i.createElement)("div",{className:"card-title"},Object(i.createElement)("a",{className:"card-url",href:a},O),Object(i.createElement)(o.RichText,l()({tagName:"strong",value:O,onChange:y("title"),allowedFormats:["core/italic"],placeholder:Object(r.__)("Title","cards")},u))),Object(i.createElement)(o.RichText,l()({className:"card-event-date",tagName:"em",value:g,onChange:y("eventDate"),placeholder:Object(r.__)("Event date","cards")},u)),Object(i.createElement)(o.RichText,l()({className:"card-desc",tagName:"p",value:j,onChange:y("desc"),placeholder:Object(r.__)("Description…","cards")},u)),Object(i.createElement)(o.RichText,l()({className:"card-event-location",tagName:"span",value:h,onChange:y("eventLocation"),placeholder:Object(r.__)("Event location","cards")},u)),v&&Object(i.createElement)("span",{className:"card-coordinates"},v)))}));a(22),a(23);var p=["cards-block/card"];function O(e){var t=e.show;return Object(i.createElement)("div",{className:"cards-list-search ".concat("true"===t?"is-visible":"is-hidden")},Object(i.createElement)("input",{className:"show-search",type:"hidden",value:t}),Object(i.createElement)("div",{className:"cards-list-search-controls"},Object(i.createElement)("span",{className:"icon",role:"img","aria-label":Object(r.__)("Search","list")},Object(i.createElement)("svg",{viewBox:"0 0 512 512"},Object(i.createElement)("path",{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"})))," ",Object(i.createElement)("input",{type:"text"})),Object(i.createElement)("ol",{className:"cards-list-search-results"}))}function j(e){var t=e.show,a=e.apiKey,c=void 0===a?"":a,r=e.apiKey2,n=void 0===r?"":r;return Object(i.createElement)("div",{className:"cards-list-map ".concat("true"===t?"is-visible":"is-hidden")},Object(i.createElement)("input",{className:"show-map",type:"hidden",value:t}),Object(i.createElement)("input",{className:"map-api-key",type:"hidden",value:c}),Object(i.createElement)("span",{className:"map-api-key-2"},n),t&&Object(i.createElement)("div",{id:"cards-list-map-element"}))}a(24),a(25);var g=["cards-block/category"];a(26);var h=Object(i.createElement)("g",null,Object(i.createElement)("path",{d:"M 0 3 C 0 0 0 0 2 0 L 4 0 C 6 0 6 0 6 3 C 6 6 6 6 4 6 L 2 6 C 0 6 0 6 0 3 M 0 3",stroke:"black",fill:"white",strokeWidth:"0.2"}),Object(i.createElement)("path",{d:"M 0 3 L 6 3",stroke:"black",strokeWidth:"0.2"}),Object(i.createElement)("circle",{cx:"4",cy:"1",r:"0.5",stroke:"black",strokeWidth:"0.15",fill:"none"}),Object(i.createElement)("path",{d:"M 0.3 2.5 Q 1.714 1.5 1.99 1.506 Q 2.275 1.501 3.002 2.009 Q 3.736 2.5 4 2.5 Q 4.24 2.497 4.997 1.983 Q 5.564 1.502 5.7 1.5",stroke:"black",strokeWidth:"0.15",fill:"none"})),v=Object(i.createElement)("g",null,h,Object(i.createElement)("g",{transform:"translate(1, 1)"},h)),E={url:"https://perdu.com",title:"Perdu sur l'Internet?",desc:"Un site web facétieux consistant en un détournement du concept du « vous êtes ici »",imgSrc:"url",imgUrl:"https://upload.wikimedia.org/wikipedia/commons/9/93/Perdu.svg",imgAlt:"Screenshot",mediaId:0,eventDate:"Depuis le 19 juin 1996",eventLocation:"perdu.com"};Object(c.registerBlockType)("cards-block/card",{apiVersion:2,title:Object(r.__)("Card","cards"),description:Object(r.__)("Cards with clickable title, description, image, and more","cards"),category:"text",icon:function(){return Object(i.createElement)(d.Icon,{icon:Object(i.createElement)("svg",{viewBox:"-1 -1 8 8"},h)})},edit:b,save:function(e){var t=e.attributes,a=t.url,c=t.title,r=t.desc,n=t.imgSrc,l=t.mediaUrl,s=t.imgUrl,d=t.eventDate,m=t.eventLocation,u=t.coordinates,b="lib"===n?l:s;return Object(i.createElement)("div",o.useBlockProps.save(),Object(i.createElement)("div",{className:"a-card"},b&&Object(i.createElement)("div",{className:"card-image","data-imgsrc":n},Object(i.createElement)("img",{src:b,alt:c||a})),Object(i.createElement)("strong",{className:"card-title"},Object(i.createElement)("a",{href:a},Object(i.createElement)(o.RichText.Content,{value:c||a}))),d&&Object(i.createElement)("em",{className:"card-event-date"},Object(i.createElement)(o.RichText.Content,{value:d})),r&&Object(i.createElement)("p",{className:"card-desc"},Object(i.createElement)(o.RichText.Content,{value:r})),m&&Object(i.createElement)("span",{className:"card-event-location"},Object(i.createElement)(o.RichText.Content,{value:m})),u&&Object(i.createElement)("span",{className:"card-coordinates"},u)))},attributes:{url:{type:"string",source:"attribute",selector:"a",attribute:"href"},imgSrc:{type:"string",default:"lib"},imgUrl:{type:"string"},mediaId:{type:"number",default:0},mediaUrl:{type:"string"},imageUrl:{type:"string",source:"attribute",selector:"img",attribute:"src"},imgAlt:{type:"string",source:"attribute",selector:"img",attribute:"alt"},title:{type:"string",source:"html",selector:"a"},desc:{type:"string",source:"html",selector:".card-desc"},eventDate:{type:"string",source:"html",selector:".card-event-date"},eventLocation:{type:"string",source:"html",selector:".card-event-location"},coordinates:{type:"string",source:"html",selector:".card-coordinates"}},example:{attributes:E}}),Object(c.registerBlockType)("cards-block/category",{apiVersion:2,title:Object(r.__)("Card Category","category"),description:Object(r.__)("Collapsible category for card list","category"),supports:{align:!0},icon:function(){return Object(i.createElement)(d.Icon,{icon:Object(i.createElement)("svg",{viewBox:"-1 -1 10 9.5"},Object(i.createElement)("rect",{x:"-0.5",y:"-1",width:"8",height:"2",stroke:"#black",strokeWidth:"0.2",fill:"#074365",strokeDasharray:"0.5"}),Object(i.createElement)("path",{d:"M 2.5 -0.3 L 3.5 0.4 L 4.5 -0.3",stroke:"white",strokeWidth:"0.3"}),Object(i.createElement)("g",{transform:"translate(0, 1.5)"},v))})},edit:function(e){var t=e.attributes.title,a=e.setAttributes;return Object(i.createElement)("div",Object(o.useBlockProps)(),Object(i.createElement)(o.RichText,{className:"category-title",tagName:"h2",value:t,onChange:function(e){a({title:e})},allowedFormats:["core/italic"],placeholder:Object(r.__)("Category Title","category"),keepPlaceholderOnFocus:!0}),Object(i.createElement)("div",{className:"cards-list-category-contents"},Object(i.createElement)(o.InnerBlocks,{allowedBlocks:p,orientation:"vertical"})))},save:function(e){var t=e.attributes.title,a=function(e){var t=e.replace(/^\s+|\s+$/g,"");t=t.toLowerCase();for(var a="ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;",c=0,r=a.length;c<r;c+=1)t=t.replace(new RegExp(a.charAt(c),"g"),"aaaaaeeeeeiiiiooooouuuunc------".charAt(c));return t.replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}(t),c="#".concat(a);return Object(i.createElement)("div",o.useBlockProps.save(),Object(i.createElement)("h2",{className:"category-title"},Object(i.createElement)("a",{id:a,href:c,title:t},t)),Object(i.createElement)("div",{className:"cards-list-category-contents"},Object(i.createElement)(o.InnerBlocks.Content,null)))},attributes:{title:{type:"string",source:"text",selector:".category-title"}}}),Object(c.registerBlockType)("cards-block/list",{apiVersion:2,title:Object(r.__)("List of cards","cards"),description:Object(r.__)("List of cards with categories, search and more","cards"),supports:{align:!0},category:"text",icon:function(){return Object(i.createElement)(d.Icon,{icon:Object(i.createElement)("svg",{viewBox:"-1 -1 8 12"},Object(i.createElement)("path",{d:"M -0.5 -0.5 L 7.5 -0.5",stroke:"#074365",strokeWidth:"2"}),Object(i.createElement)("g",{transform:"translate(0, 1.5)"},v),Object(i.createElement)("path",{d:"M -0.5 10.5 L 7.5 10.5",stroke:"#074365",strokeWidth:"2"}))})},edit:function(e){var t=e.attributes,a=t.showSearch,c=t.showMap,n=t.mapApiKey,l=t.mapApiKey2,s=m(e.setAttributes);return Object(i.useEffect)((function(){c&&n&&window.MAP_loadMap&&window.MAP_loadMap()}),[c,n]),Object(i.createElement)("div",Object(o.useBlockProps)(),Object(i.createElement)(o.InspectorControls,null,Object(i.createElement)("div",{className:"cards-list-settings"},Object(i.createElement)(d.PanelBody,{title:Object(r.__)("Search","cards"),initialOpen:!0},Object(i.createElement)(d.CheckboxControl,{label:Object(r.__)("Enable Search","cards"),checked:"true"===a,onChange:function(e){return s("showSearch")(e?"true":"false")}})),Object(i.createElement)(d.PanelBody,{title:Object(r.__)("Map","cards"),initialOpen:!0},Object(i.createElement)(d.CheckboxControl,{label:Object(r.__)("Enable Map","cards"),checked:"true"===c,onChange:function(e){return s("showMap")(e?"true":"false")}}),"true"===c&&Object(i.createElement)(o.PlainText,{type:"string",value:n,onChange:function(e){s("mapApiKey")(e),s("mapApiKey2")(e)},placeholder:Object(r.__)("MapBox API key","cards"),className:n?"":"warn"})))),Object(i.createElement)(O,{show:a}),Object(i.createElement)("div",{className:"map-area"},Object(i.createElement)(j,{show:c,apiKey:n,apiKey2:l}),Object(i.createElement)("div",{className:"map-btns ".concat("true"===c?"is-visible":"is-hidden")},Object(i.createElement)("button",{onClick:window.MAP_updateMarkers},"Refresh Markers"),Object(i.createElement)("button",{onClick:window.MAP_autofit},"Auto-fit"))),Object(i.createElement)(o.InnerBlocks,{allowedBlocks:g}))},save:function(e){var t=e.attributes,a=t.showSearch,c=t.showMap,r=t.mapApiKey,n=t.mapApiKey2;return Object(i.createElement)("div",o.useBlockProps.save(),Object(i.createElement)(O,{show:a}),Object(i.createElement)(j,{show:c,apiKey:r,apiKey2:n}),Object(i.createElement)(o.InnerBlocks.Content,null))},attributes:{showSearch:{type:"string",source:"attribute",selector:".show-search",attribute:"value",default:"false"},showMap:{type:"string",source:"attribute",selector:".show-map",attribute:"value",default:"false"},mapApiKey:{type:"string",source:"attribute",selector:".map-api-key",attribute:"value"},mapApiKey2:{type:"string",source:"html",selector:".map-api-key-2"}},example:{showSearch:"true",showMap:"false",innerBlocks:[{name:"cards-block/category",attributes:{title:"Liens"},innerBlocks:[{name:"cards-block/card",attributes:E}]}]}})}]);