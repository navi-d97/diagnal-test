(this["webpackJsonpdiagnal-test"]=this["webpackJsonpdiagnal-test"]||[]).push([[0],{43:function(A,e,t){},46:function(A,e,t){},47:function(A,e,t){},67:function(A,e,t){"use strict";t.r(e);var g=t(0),o=t.n(g),n=t(13),C=t.n(n),a=t(8),c=t(6),r=t(27),I=t(28),E=t(10),i=t(5),B="GET_MOVIES",s="MOVIES_ERROR",Q="SEARCH_MOVIES",h={allMovies:[],movies:[],search:"",loading:!0},u=function(A,e){var t=new RegExp(e,"i");return A.filter((function(A){return t.test(A.name)}))};var l=Object(c.combineReducers)({moviesList:function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case B:return Object(i.a)(Object(i.a)({},A),{},{allMovies:[].concat(Object(E.a)(A.allMovies),Object(E.a)(e.payload)),movies:[].concat(Object(E.a)(A.movies),Object(E.a)(u(e.payload,A.search))),loading:!1});case Q:return Object(i.a)(Object(i.a)({},A),{},{search:e.payload,movies:u(A.allMovies,e.payload)});case s:return{loading:!1,error:e.payload};default:return A}}}),d=[r.a],b=Object(c.createStore)(l,{},Object(I.composeWithDevTools)(c.applyMiddleware.apply(void 0,d))),j=(t(43),function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,68)).then((function(e){var t=e.getCLS,g=e.getFID,o=e.getFCP,n=e.getLCP,C=e.getTTFB;t(A),g(A),o(A),n(A),C(A)}))}),K=t(34),v=t(32),O=t(29),f=t(30),m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUEAAAHhCAYAAAGHFTxJAAAACXBIWXMAAAsSAAALEgHS3X78AAAOXUlEQVR42u3dP0jc9x8G8Le/pERiv9RCKpIbmgwhl7sOLgcOHTRCKLRg2nBmdeggPVI6hf4Z6lJJOxWKToVIt15okg4podKg28EtdjhiQTCFnoQSqGCRtErzm5RczjP+iznj67W0nqf58Pjk8Xt6mpZMJvMomlvv/2IfcEiHdEiHdEiHdEiHdEiHdEiHdEiHdEiHPICH7OnpiYiISqXSvIecnJzcXx/u3Urz8LM6YDabbb4kh4eHn0mKEREtu/1F1GKxGAMDA7v5LntbfKXXmDukQzqkQzqkQzqkQzqkQzqkQzqkQza9wxHR2+RnnG76L7P8Txcd0AEd0AEd0AEd0AEd0AEd0AEd0AEd0AG3pKmf3LYqSZLmOWChUKh5OZvNRqlUap4Djo6O1t1WLpeb60P8+BPaKpVKDA4O7sr73dUvYBaLxZiamlo30aY4oB10QAd0QAd0QAd0QAd0QAd0QAd0QAc8YAds+ieY7Yef4Wt2++NnDP1dFiJCFKIQhYgQhShEISJEIQpRiCIQohCFiBCFKEQhIkQhClGICPHAhZjP5yOfz9fd3tfXF5VKJSqVSoyPjzfVmT2haeea5wlNSZLU/XDnelbbuJs/OnugmjgyMhJJksSlS5c0cSODg4Nr/wrJ5cuXo1gsRkdHR0RE9Pf3x9mzZ5vug2sTX8QmusQRIkIUohCFKAIhClGICFGIQhQiQhSiEIWIEIUoRCEiRCEKUYhsmaeRaKEABShABChAAQoQAQpQgAJEgAIUoAARoAAFKEAEKEABChABClCAAkSAAhSgABGgAAUoQAQoQAEKEAEKUIACFCACFKAABYgABShAASJAAQpw1/T09MQbb7wRERHpdDoqlUqMjIw01Rmb7hfv5PP5uHbtWt3tj//za9lsVgMbmZiY2Fd/hf3qpxelgYVCIS5evPjU+zXbv6bYVH+Fjx07tun7Jknir/B25HK5SKVScfPmTQGup7OzM+7fv9/wr28zfQZuur/Cg4ODMTQ0FF1dXQ0vY5pp/5ouwNV/+Hl6ejoiIorFYhSLxYiI+Oyzz2r+6zJmE1bDGxgYcB3oOhABClCAAkSAAhSgABGgAAUoQAQoQAEKUIAIUIACFCACFKAABYgABShAASJAAQpQgAhQgAIUIAIUoAAFiAAFKEABIkABClCACFCAzeNwRPSKYfv81g6et14ziM/FoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSghKiBKCEqKEoIQoISghSgiHRbB9PT09ERHxxx9/xOzsrEC2qSWTyTwSQ2NdXV1x6tSpmJiYiIWFhbrXt7e3191eqVTq7jc4OBjlclmg9Xp9On6KU6dO1azek54sYC6XW/d+hUJBmJZwb5VKpUiSJCIiLly4EDMzM0JpsISuCZ+R7u7uiIhIkiRKpdLa7QppCZ8qlUrF+fPn114eHR3d0ftzfeiacMuq1WrcvHkz5ubm4ttvv93x+/vtt99qXl5cXFRAS4hrwn2kvb09Pvroo7WXh4eHN/V2ExMTcfz48Zr1W71GpJ5Pxxt48ssy7e3tNS9ns9nI5/PR1tZWc/vjBVx9cIJPx7uuWCzWvHz37t34/PPPa27L5XKu/zbx6VgJt6mtrS2uXr269vLAwIBQlJD9WkLXhHhgAkqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEoISooSghCghKCFKCEqIEkJLJpN5JAasIAoICogCggKigKCAKCAoIAoICogCggKigKCAKCAoIAoICogCggKigKCAKCAoIAoICogCggKigKCAKCAKCAqIAoICooCggCggKCAKCAqIAoICooCggCggKCAKCAqIAoICooCggCggKCAKCAqIAoICooCggCggCggKiAKCAqKAoIAoICggCggKiAKCAqKAoIAoICggCggKiAKCAqKAoIAoICggCggKiAKCAqKAoIAoICggCogCggKigKCAKCAoIAoICogCggKigKCAKCAoIC+CwyLYntbW1uju7o6IiMnJSYEo4N56+eWXG76uVCpFkiRrL2ezWYE10JLJZB6JobF8Ph9LS0tx69atute1t7fH33//HSsrK2u3jY+PRy6Xq7uvEroG3LK33347IiKOHj0aHR0dda9fWFioKV9ErFs+FHBbqtXq2v//9ddfAnENuLemp6ejUqnE8vLypt9mbGws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",w=t(1);function S(A){var e=A.coverImage,t=A.title;return Object(w.jsxs)("div",{className:"h-full object-contain flex-col align-middle justify-center ml-3 mr-3",children:[Object(w.jsx)("img",{src:e||m,alt:"",className:"object-contain",onError:function(A){A.target.src=m}}),Object(w.jsx)("div",{className:"text-sm text-white",children:t})]})}var F=o.a.memo(S),D=function(A){return"https://raw.githubusercontent.com/navi-d97/movie-details-json/master/CONTENTLISTINGPAGE-PAGE".concat(A,".json")};t(46);function R(A){var e=A.data,t=A.loadMore,o=A.rowHeight,n=void 0===o?220:o,C=A.columnCount,a=void 0===C?3:C,c=A.rowCount,r=void 0===c?25:c,I=A.itemCount,E=void 0===I?100:I,B=Object(g.useRef)(1),s=function(A){var e,t=A.columnIndex,g=A.rowIndex,o=A.data,n=A.style,C=2*g+t;return Object(w.jsx)("div",{className:"GridItem bg-black",style:Object(i.a)(Object(i.a)({},n),{},{left:n.left,top:n.top,width:n.width,height:n.height}),children:o[C]?Object(w.jsx)(F,{coverImage:(e=o[C]["poster-image"],"https://raw.githubusercontent.com/navi-d97/movie-details-json/master/".concat(e)),title:o[C].name}):Object(w.jsx)("div",{className:"text-white h-full flex items-center justify-center text-center"})})},Q=Object(g.forwardRef)((function(A,e){var t=A.style,g=Object(K.a)(A,["style"]);return Object(w.jsx)("div",Object(i.a)({ref:e,style:Object(i.a)({},t)},g))}));return Object(w.jsx)("div",{className:"flex-1 h-full",children:Object(w.jsx)(O.a,{threshold:6,isItemLoaded:function(A){return!!e[A]},itemCount:Math.min(e.length+8,E),loadMoreItems:function(A){B.current+=1,t(B.current)},children:function(A){var t=A.onItemsRendered,g=A.ref,o=function(A){var e=A.overscanRowStartIndex,g=A.overscanRowStopIndex,o=A.overscanColumnStopIndex;t({visibleStartIndex:2*e,visibleStopIndex:2*g+o})};return Object(w.jsx)(f.a,{children:function(A){var t=A.height,C=A.width;return Object(w.jsx)(v.a,{className:"Grid",columnCount:a,columnWidth:C/a,height:t,innerElementType:Q,rowCount:r,rowHeight:n,width:C,itemData:e,onItemsRendered:o,ref:g,children:s})}})}})})}var x=t(33);t(47);function p(A){var e=A.searchValue,t=A.onSearch,o=Object(g.useState)(e||""),n=Object(x.a)(o,2),C=n[0],a=n[1];return Object(g.useEffect)((function(){""===(null===C||void 0===C?void 0:C.trim())&&t(C)}),[C,t]),Object(w.jsxs)("div",{className:"sticky z-10 nav-bar flex flex-row bg-transparent",children:[Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAACoCAYAAAAFOV7fAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFpJREFUeNrs28EJwCAUBUFN0n/DCRgtY2EGbMDj8v4cY6wBAAAAEHb5AgAAAKBO4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAg79lv+QYAAACg7ASOzzcAAAAAZQIHAAAAkHcCx+sbAAAAgDILDgAAACDPggMAAADIs+AAAAAA8gQOAAAAIM+JCgAAAJBnwQEAAADkWXAAAAAAeRYcAAAAQJ7AAQAAAOQ5UQEAAADyLDgAAACAPAsOAAAAIM+CAwAAAMiz4AAAAADyLDgAAACAPIEDAAAAyHOiAgAAAORZcAAAAAB5FhwAAABAngUHAAAAkCdwAAAAAHlOVAAAAIA8Cw4AAAAgz4IDAAAAyLPgAAAAAPIEDgAAACDPiQoAAACQZ8EBAAAA5FlwAAAAAHkWHAAAAECeBQcAAACQZ8EBAAAA5AkcAAAAQJ4TFQAAACDPggMAAADIs+AAAAAA8iw4AAAAgDyBAwAAAMhzogIAAADkWXAAAAAAeRYcAAAAQJ4FBwAAAJAncAAAAAB5TlQAAACAPAsOAAAAIM+CAwAAAMiz4AAAAADyBA4AAAAgz4kKAAAAkGfBAQAAAORZcAAAAAB5FhwAAABAngUHAAAAkDf3u30DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFD0CzAAJFo6q4ZAlCMAAAAASUVORK5CYII=",alt:"",className:"absolute z-10 bg-transparent gradiant-image"}),Object(w.jsx)("input",{placeholder:"Search..",value:C,className:"z-10 h-full w-11/12 ml-2 bg-transparent text-white text-xl outline-none",onChange:function(A){return a(A.target.value)}}),Object(w.jsx)("button",{className:"z-10 w-1/12 h-full mr-2",onClick:function(){return t(C)},children:Object(w.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkRJREFUeNrsmdFxwjAMhh0m8AjZoNmg2QBGSDdgg2YT6AShE4ROEJggbBA2cOU7p8dxiSxsyyE0utPlAbD5bOmPLCcigCmlJDyygY9OSZJcxQSWOIKk8NiAv4Pn4BL5ugY7gv+AHwD0Ip7NACgHr5Sf6d/nzwKUgtcqrFVm5yeDKsA7xWN63GIKqJ2KY7tXhGKBS8ag4EENkRP4t1G+e9MisR55FQzZHlTzg2unSmJulNTkN+JTEneu5JJzm9WuavaAuuahwdoYeUDI3za0rEcLEUJoFjF2azeB8rbcu9WaIpcDTFoWtPCdoGIPCbdFrXwH509ixzTgkvhtJLBtaOlfWaqCY6QKDpsncwUbFQYob05RTrv4PNI1DMYqgTrySSLo/1iJF7WXBrsGjW13k0gzyAnsHFKNPGxsvrMr2AV7x8XqfiEfX1zBMKldR9qtteWE7rxiHXJSlsy7JbH5fVXxgCQ0d1m1RYTjwNkS6Lgam6ZV0LG2CCznooYJrGGfEwbaxOz7Efoemxj12m2HSgYQC+s8sWO+bxXkHrncEnqWKUfcF8TGZk0NFxPm1NuaICE41uLWrbZP4hj9xd7ZVAnaU+Nvwn4xeG978K/+5Rz8RnSCS4lBZWQpEB4IS++blingMkLCu5oeNyMoMhucNC3pUDeb3X3LnCAuDVvdegPYeuxQOfQHiZf2DXdR3odoaVa6RUBq872MsGjNU8AxRcQCt8AtcAvcArfA/Xs4MTejwok5GgGuEHM1BG6+UAjcH9SvAAMAy5K2QTwDnF4AAAAASUVORK5CYII=",alt:"search",className:"object-contain"})})]})}var M=o.a.memo(p),P=t(9),Y=t.n(P),G=t(18),U=t(31),H=t.n(U),z=function(A){return function(){var e=Object(G.a)(Y.a.mark((function e(t){var g;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.a.get(D(A));case 3:g=e.sent,t({type:B,payload:g.data.page["content-items"].content}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:s,payload:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(A){return e.apply(this,arguments)}}()};function y(){var A=Object(a.b)(),e=Object(a.c)((function(A){return A.moviesList})),t=e.loading,o=e.error,n=e.movies;Object(g.useEffect)((function(){A(z(1))}),[A]);var C=Object(g.useCallback)((function(e){e<=3&&A(z(e))}),[A]),c=Object(g.useCallback)((function(e){var t;A((t=e,function(){var A=Object(G.a)(Y.a.mark((function A(e){return Y.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:e({type:Q,payload:t});case 1:case"end":return A.stop()}}),A)})));return function(e){return A.apply(this,arguments)}}()))}),[A]);return Object(w.jsxs)("div",{className:"flex-1 h-screen bg-black",children:[Object(w.jsx)(M,{onSearch:c}),t?"Loading...":o?Object(w.jsx)("div",{className:"text-white",children:o.message}):Object(w.jsx)(R,{data:n,loadMore:C,rowCount:Math.min(n.length/2,28),itemCount:54})]})}C.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(a.a,{store:b,children:Object(w.jsx)(y,{})})}),document.getElementById("root")),j()}},[[67,1,2]]]);
//# sourceMappingURL=main.1eff114f.chunk.js.map