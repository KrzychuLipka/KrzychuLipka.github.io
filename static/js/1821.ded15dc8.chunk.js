"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[1821],{10294:(e,t,r)=>{r.d(t,{S:()=>l});var o=r(15941),n=r(31633),s=r(20664),i=r(5568),a=r(13927);function l(e,t,r){const l=function(e,t,r,o){const i=(e=>!Array.isArray(e[0]))(t)?(e,r)=>t[3*e+r]:(e,r)=>t[e][r],l=o?(0,n.GA)(o)/(0,n.G9)(o):1;return(0,a.lU)(e,((e,t)=>(0,s.i)(e,i(t,0)*l,i(t,1)*l,i(t,2))),r)}(u,e,t,r)?(0,a.Qj)(u):[0,0,1];return Math.abs(l[2])>Math.cos((0,o.kU)(80))?i._.Z:Math.abs(l[1])>Math.abs(l[0])?i._.Y:i._.X}const u=(0,a.vt)()},33905:(e,t,r)=>{r.d(t,{A:()=>p});var o,n=r(35143),s=r(69539),i=r(42553),a=r(46053),l=(r(81806),r(76460),r(47249),r(85842)),u=r(75257),c=r(63713);let h=o=class extends i.A{constructor(e){super(e),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const r=null!=e?e.get(this):null;if(r)return r;const n=new o(this.clonePropertiesWithDeduplication(t));return null!=e&&e.set(this,n),n}clonePropertiesWithDeduplication(e){return{color:null!=this.color?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(e),normalTexture:this.normalTexture?.cloneWithDeduplication(e),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let e=0;return e+=null!=this.color?16:0,null!=this.colorTexture&&(e+=this.colorTexture.memoryUsage),e+=null!=this.colorTextureTransform?20:0,null!=this.normalTexture&&(e+=this.normalTexture.memoryUsage),e+=null!=this.normalTextureTransform?20:0,e}};(0,n._)([(0,a.MZ)({type:s.A,json:{write:!0}})],h.prototype,"color",void 0),(0,n._)([(0,a.MZ)({type:u.A,json:{write:!0}})],h.prototype,"colorTexture",void 0),(0,n._)([(0,a.MZ)({type:c.A,json:{write:!0}})],h.prototype,"colorTextureTransform",void 0),(0,n._)([(0,a.MZ)({type:u.A,json:{write:!0}})],h.prototype,"normalTexture",void 0),(0,n._)([(0,a.MZ)({type:c.A,json:{write:!0}})],h.prototype,"normalTextureTransform",void 0),(0,n._)([(0,a.MZ)({nonNullable:!0,json:{write:!0}})],h.prototype,"alphaMode",void 0),(0,n._)([(0,a.MZ)({nonNullable:!0,json:{write:!0}})],h.prototype,"alphaCutoff",void 0),(0,n._)([(0,a.MZ)({nonNullable:!0,json:{write:!0}})],h.prototype,"doubleSided",void 0),h=o=(0,n._)([(0,l.$)("esri.geometry.support.MeshMaterial")],h);const p=h},44032:(e,t,r)=>{r.d(t,{A:()=>p});var o,n=r(35143),s=r(69539),i=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),l=r(33905),u=r(75257),c=r(63713);let h=o=class extends l.A{constructor(e){super(e),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(e,t){const r=null!=e?e.get(this):null;if(r)return r;const n=new o(this.clonePropertiesWithDeduplication(t));return null!=e&&e.set(this,n),n}getMemoryUsage(){let e=super.getMemoryUsage();return e+=null!=this.emissiveColor?16:0,null!=this.emissiveTexture&&(e+=this.emissiveTexture.memoryUsage),e+=null!=this.emissiveTextureTransform?20:0,null!=this.occlusionTexture&&(e+=this.occlusionTexture.memoryUsage),e+=null!=this.occlusionTextureTransform?20:0,null!=this.metallicRoughnessTexture&&(e+=this.metallicRoughnessTexture.memoryUsage),e+=null!=this.metallicRoughnessTextureTransform?20:0,e}clonePropertiesWithDeduplication(e){return{...super.clonePropertiesWithDeduplication(e),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(e),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(e),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(e),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};(0,n._)([(0,i.MZ)({type:s.A,json:{write:!0}})],h.prototype,"emissiveColor",void 0),(0,n._)([(0,i.MZ)({type:u.A,json:{write:!0}})],h.prototype,"emissiveTexture",void 0),(0,n._)([(0,i.MZ)({type:c.A,json:{write:!0}})],h.prototype,"emissiveTextureTransform",void 0),(0,n._)([(0,i.MZ)({type:u.A,json:{write:!0}})],h.prototype,"occlusionTexture",void 0),(0,n._)([(0,i.MZ)({type:c.A,json:{write:!0}})],h.prototype,"occlusionTextureTransform",void 0),(0,n._)([(0,i.MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],h.prototype,"metallic",void 0),(0,n._)([(0,i.MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],h.prototype,"roughness",void 0),(0,n._)([(0,i.MZ)({type:u.A,json:{write:!0}})],h.prototype,"metallicRoughnessTexture",void 0),(0,n._)([(0,i.MZ)({type:c.A,json:{write:!0}})],h.prototype,"metallicRoughnessTextureTransform",void 0),h=o=(0,n._)([(0,a.$)("esri.geometry.support.MeshMaterialMetallicRoughness")],h);const p=h},63713:(e,t,r)=>{r.d(t,{A:()=>u});var o=r(35143),n=r(69098),s=r(42553),i=r(46053),a=(r(81806),r(76460),r(47249),r(85842));let l=class extends(n.A.ClonableMixin(s.A)){constructor(e){super(e),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};(0,o._)([(0,i.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],l.prototype,"offset",void 0),(0,o._)([(0,i.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"rotation",void 0),(0,o._)([(0,i.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],l.prototype,"scale",void 0),l=(0,o._)([(0,a.$)("esri.geometry.support.MeshTextureTransform")],l);const u=l},75257:(e,t,r)=>{r.d(t,{A:()=>w});var o,n=r(35143),s=(r(81806),r(16770)),i=r(42553),a=r(46053),l=r(40565),u=(r(47249),r(28379)),c=r(85842),h=r(17707),p=r(79453);const m=new WeakMap;let d=0,g=o=class extends i.A{constructor(e){super(e),this.wrap="repeat"}get url(){return this._get("url")||null}set url(e){this._set("url",e),e&&this._set("data",null)}get data(){return this._get("data")||null}set data(e){this._set("data",e),e&&this._set("url",null)}writeData(e,t,r,o){if(e instanceof HTMLImageElement){const n={type:"image-element",src:(0,p.t)(e.src,o),crossOrigin:e.crossOrigin};t[r]=n}else if(e instanceof HTMLCanvasElement){const o={type:"canvas-element",imageData:f(e.getContext("2d").getImageData(0,0,e.width,e.height))};t[r]=o}else if(e instanceof HTMLVideoElement){const n={type:"video-element",src:(0,p.t)(e.src,o),autoplay:e.autoplay,loop:e.loop,muted:e.muted,crossOrigin:e.crossOrigin,preload:e.preload};t[r]=n}else if(e instanceof ImageData){const o={type:"image-data",imageData:f(e)};t[r]=o}}readData(e){switch(e.type){case"image-element":{const t=new Image;return t.src=e.src,t.crossOrigin=e.crossOrigin,t}case"canvas-element":{const t=y(e.imageData),r=document.createElement("canvas");return r.width=t.width,r.height=t.height,r.getContext("2d").putImageData(t,0,0),r}case"image-data":return y(e.imageData);case"video-element":{const t=document.createElement("video");return t.src=e.src,t.crossOrigin=e.crossOrigin,t.autoplay=e.autoplay,t.loop=e.loop,t.muted=e.muted,t.preload=e.preload,t}default:return}}get transparent(){const{data:e,url:t}=this;return e instanceof HTMLCanvasElement?T(e.getContext("2d").getImageData(0,0,e.width,e.height)):e instanceof ImageData?T(e):!(!t?.toLowerCase().endsWith(".png")&&!t?.toLocaleLowerCase().startsWith("data:image/png;"))}set transparent(e){this._overrideIfSome("transparent",e)}get contentHash(){var e=this;const t="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",r=function(){return`d:${arguments.length>0&&void 0!==arguments[0]?arguments[0]:""},t:${e.transparent},w:${t}`};return null!=this.url?r(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?r(this.data.src):(m.has(this.data)||m.set(this.data,++d),r(m.get(this.data))):r()}get memoryUsage(){let e=0;if(e+=null!=this.url?this.url.length:0,null!=this.data){const t=this.data;"data"in t?e+=t.data.byteLength:t instanceof HTMLImageElement?e+=t.naturalWidth*t.naturalHeight*3:t instanceof HTMLCanvasElement&&(e+=t.width*t.height*3)}return e}clone(){const e={url:this.url,data:this.data,wrap:this._cloneWrap()};return new o(e)}cloneWithDeduplication(e){const t=e.get(this);if(t)return t;const r=this.clone();return e.set(this,r),r}_cloneWrap(){return"string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(e){return"string"==typeof e?new o({url:e}):e instanceof HTMLImageElement||e instanceof HTMLCanvasElement||e instanceof ImageData||e instanceof HTMLVideoElement?new o({data:e}):(0,l.PZ)(o,e)}};function f(e){let t="";for(let r=0;r<e.data.length;r++)t+=String.fromCharCode(e.data[r]);return{data:btoa(t),width:e.width,height:e.height}}function y(e){const t=atob(e.data),r=new Uint8ClampedArray(t.length);for(let o=0;o<t.length;o++)r[o]=t.charCodeAt(o);return(0,s.eV)(r,e.width,e.height)}function T(e){for(let t=3;t<e.data.length;t+=4)if(255!==e.data[t])return!0;return!1}(0,n._)([(0,a.MZ)({type:String,json:{write:p.w}})],g.prototype,"url",null),(0,n._)([(0,a.MZ)({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),(0,a.MZ)()],g.prototype,"data",null),(0,n._)([(0,h.K)("data")],g.prototype,"writeData",null),(0,n._)([(0,u.w)("data")],g.prototype,"readData",null),(0,n._)([(0,a.MZ)({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],g.prototype,"transparent",null),(0,n._)([(0,a.MZ)({json:{write:!0}})],g.prototype,"wrap",void 0),(0,n._)([(0,a.MZ)({readOnly:!0})],g.prototype,"contentHash",null),g=o=(0,n._)([(0,c.$)("esri.geometry.support.MeshTexture")],g);const w=g},77176:(e,t,r)=>{r.d(t,{b:()=>s});var o=r(15941),n=r(38496);function s(e,t,r){const s=Array.isArray(e),c=s?e.length/t:e.byteLength/(4*t),h=s?e:new Uint32Array(e,0,c*t),p=r?.minReduction??0,m=r?.originalIndices||null,d=m?m.length:0,g=r?.componentOffsets||null;let f=0;if(g)for(let o=0;o<g.length-1;o++){const e=g[o+1]-g[o];e>f&&(f=e)}else f=c;const y=Math.floor(1.1*f)+1;(null==u||u.length<2*y)&&(u=new Uint32Array((0,o.cU)(2*y)));for(let o=0;o<2*y;o++)u[o]=0;let T=0;const w=!!g&&!!m,v=w?d:c;let x=(0,n.my)(c);const _=new Uint32Array(d),M=1.96;let A=0!==p?Math.ceil(4*M*M/(p*p)*p*(1-p)):v,b=1,Z=g?g[1]:v;for(let o=0;o<v;o++){if(o===A){const e=1-T/o;if(e+M*Math.sqrt(e*(1-e)/o)<p)return null;A*=2}if(o===Z){for(let e=0;e<2*y;e++)u[e]=0;if(m)for(let e=g[b-1];e<g[b];e++)_[e]=x[m[e]];Z=g[++b]}const e=w?m[o]:o,r=e*t,n=l(h,r,t);let s=n%y,a=T;for(;0!==u[2*s+1];){if(u[2*s]===n){const e=u[2*s+1]-1;if(i(h,r,e*t,t)){a=x[e];break}}s++,s>=y&&(s-=y)}a===T&&(u[2*s]=n,u[2*s+1]=e+1,T++),x[e]=a}if(0!==p&&1-T/c<p)return null;if(w){for(let e=g[b-1];e<_.length;e++)_[e]=x[m[e]];x=(0,n.Dg)(_)}const C=s?new Array(T):new Uint32Array(T*t);T=0;for(let o=0;o<v;o++)x[o]===T&&(a(h,(w?m[o]:o)*t,C,T*t,t),T++);if(m&&!w){const e=new Uint32Array(d);for(let t=0;t<e.length;t++)e[t]=x[m[t]];x=(0,n.Dg)(e)}return{buffer:Array.isArray(C)?C:C.buffer,indices:x,uniqueCount:T}}function i(e,t,r,o){for(let n=0;n<o;n++)if(e[t+n]!==e[r+n])return!1;return!0}function a(e,t,r,o,n){for(let s=0;s<n;s++)r[o+s]=e[t+s]}function l(e,t,r){let o=0;for(let n=0;n<r;n++)o=e[t+n]+o|0,o=o+(o<<11)+(o>>>2)|0;return o>>>0}let u=null},79629:(e,t,r)=>{r.d(t,{A:()=>f});var o,n=r(35143),s=r(42553),i=r(53084),a=r(76460),l=r(46053),u=r(21403),c=r(85842),h=r(40565),p=r(33905),m=r(44032),d=r(36417);let g=o=class extends s.A{static from(e){return(0,h.PZ)(o,e)}constructor(e){super(e),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(e){return(0,d.b)(e,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},a.A.getLogger(this))}castMaterial(e){return(0,h.PZ)(e&&"object"==typeof e&&("metallic"in e||"roughness"in e||"metallicRoughnessTexture"in e)?m.A:p.A,e)}clone(){return new o({faces:(0,i.o8)(this.faces),shading:this.shading,material:(0,i.o8)(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(e,t){const r={faces:(0,i.o8)(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(e,t):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new o(r)}get memoryUsage(){let e=0;return null!=this.faces&&(e+=this.faces.byteLength),null!=this.material&&(e+=this.material.memoryUsage),e}};(0,n._)([(0,l.MZ)({json:{write:d.B}})],g.prototype,"faces",void 0),(0,n._)([(0,u.w)("faces")],g.prototype,"castFaces",null),(0,n._)([(0,l.MZ)({type:p.A,json:{write:!0}})],g.prototype,"material",void 0),(0,n._)([(0,u.w)("material")],g.prototype,"castMaterial",null),(0,n._)([(0,l.MZ)({json:{write:!0}})],g.prototype,"name",void 0),(0,n._)([(0,l.MZ)({type:String,json:{write:!0}})],g.prototype,"shading",void 0),(0,n._)([(0,l.MZ)({type:Boolean})],g.prototype,"trustSourceNormals",void 0),g=o=(0,n._)([(0,c.$)("esri.geometry.support.MeshComponent")],g);const f=g},99785:(e,t,r)=>{r.d(t,{Wq:()=>o,lO:()=>p,oR:()=>m});var o,n,s=r(38983),i=r(5568),a=r(5262),l=r(44815),u=r(38496),c=r(10294),h=r(77176);function p(e){const t=m(e.rings,e.hasZ,o.CCW_IS_HOLE,e.spatialReference),r=new Array;let n=0,i=0;for(const o of t.polygons){const e=o.count,a=o.index,c=(0,l.l5)(t.position,3*a,3*e),h=o.holeIndices.map((e=>e-a)),p=(0,u.Dg)((0,s.e)(c,h,3));r.push({position:c,faces:p}),n+=c.length,i+=p.length}const a=function(e,t,r){if(1===e.length)return e[0];const o=(0,l.jh)(t),n=new Array(r);let s=0,i=0,a=0;for(const l of e){for(let e=0;e<l.position.length;e++)o[s++]=l.position[e];for(const e of l.faces)n[i++]=e+a;a=s/3}return{position:o,faces:(0,u.Dg)(n)}}(r,n,i),c=Array.isArray(a.position)?(0,h.b)(a.position,3,{originalIndices:a.faces}):(0,h.b)(a.position.buffer,6,{originalIndices:a.faces});return a.position=(0,l.xm)(new Float64Array(c.buffer)),a.faces=c.indices,a}function m(e,t,r,n){const s=e.length,i=new Array(s),a=new Array(s),u=new Array(s);let c=0;for(let o=0;o<s;++o)c+=e[o].length;let h=0,p=0,m=0;const f=(0,l.jh)(3*c);let y=0;for(let l=s-1;l>=0;l--){const c=e[l],T=r===o.CCW_IS_HOLE&&g(c,t,n);if(T&&1!==s)i[h++]=c;else{let e=c.length;for(let t=0;t<h;++t)e+=i[t].length;const r={index:y,pathLengths:new Array(h+1),count:e,holeIndices:new Array(h)};r.pathLengths[0]=c.length,c.length>0&&(u[m++]={index:y,count:c.length}),y=T?d(c,c.length-1,-1,f,y,c.length,t):d(c,0,1,f,y,c.length,t);for(let o=0;o<h;++o){const e=i[o];r.holeIndices[o]=y,r.pathLengths[o+1]=e.length,e.length>0&&(u[m++]={index:y,count:e.length}),y=d(e,0,1,f,y,e.length,t)}h=0,r.count>0&&(a[p++]=r)}}for(let o=0;o<h;++o){const e=i[o];e.length>0&&(u[m++]={index:y,count:e.length}),y=d(e,0,1,f,y,e.length,t)}return a.length=p,u.length=m,{position:f,polygons:a,outlines:u}}function d(e,t,r,o,n,s,i){n*=3;for(let a=0;a<s;++a){const s=e[t];o[n++]=s[0],o[n++]=s[1],o[n++]=i&&s[2]?s[2]:0,t+=r}return n/3}function g(e,t,r){if(!t)return!(0,a.$3)(e);const o=e.length-1;switch((0,c.S)(e,o,r)){case i._.X:return!(0,a.$3)(e,i._.Y,i._.Z);case i._.Y:return!(0,a.$3)(e,i._.X,i._.Z);case i._.Z:return!(0,a.$3)(e,i._.X,i._.Y)}}(n=o||(o={}))[n.NONE=0]="NONE",n[n.CCW_IS_HOLE=1]="CCW_IS_HOLE"}}]);
//# sourceMappingURL=1821.ded15dc8.chunk.js.map