(self.webpackChunkmy_code_editor=self.webpackChunkmy_code_editor||[]).push([[75519],{75519:function(){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,o,r){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(o,(function(e){if("function"===typeof r&&!r(e))return e;for(var o,i=c.length;-1!==t.code.indexOf(o=n(a,i));)++i;return c[i]=e,o})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var o=0,r=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(o>=r.length);u++){var g=i[u];if("string"===typeof g||g.content&&"string"===typeof g.content){var l=r[o],s=t.tokenStack[l],f="string"===typeof g?g:g.content,p=n(a,l),k=f.indexOf(p);if(k>-1){++o;var d=f.substring(0,k),h=new e.Token(a,e.tokenize(s,t.grammar),"language-"+a,s),m=f.substring(k+p.length),y=[];d&&y.push.apply(y,c([d])),y.push(h),m&&y.push.apply(y,c([m])),"string"===typeof g?i.splice.apply(i,[u,1].concat(y)):g.content=y}}else g.content&&c(g.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=75519.9121b568.chunk.js.map