"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[2951,7113,7995],{1420:(e,t,r)=>{r.d(t,{g:()=>y});var s=r(35143),i=r(91967),o=r(34154),n=r(46053),a=(r(81806),r(76460),r(47249),r(85842)),l=r(68002),h=r(46530),u=r(65419);const c={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"};let y=class extends i.A{constructor(e){super(e),this.floors=null,this.scale=0}destroy(){this.layer=null}get dynamicLayers(){if(!this.hasDynamicLayers)return null;const e=this.visibleSublayers.map((e=>{const t=(0,h.f)(this.floors,e);return e.toExportImageJSON(t)}));return e.length?JSON.stringify(e):null}get hasDynamicLayers(){return this.layer&&(0,u.Sk)(this.visibleSublayers,this.layer.serviceSublayers,this.layer.gdbVersion)}set layer(e){this._get("layer")!==e&&(this._set("layer",e),this.removeHandles("layer"),e&&this.addHandles([e.allSublayers.on("change",(()=>this.notifyChange("visibleSublayers"))),e.on("sublayer-update",(e=>this.notifyChange(c[e.propertyName])))],"layer"))}get layers(){const e=this.visibleSublayers;return e?e.length?"show:"+e.map((e=>e.id)).join(","):"show:-1":null}get layerDefs(){const e=!!this.floors?.length,t=this.visibleSublayers.filter((t=>null!=t.definitionExpression||e&&null!=t.floorInfo));return t.length?JSON.stringify(t.reduce(((e,t)=>{const r=(0,h.f)(this.floors,t),s=(0,o.mA)(r,t.definitionExpression);return null!=s&&(e[t.id]=s),e}),{})):null}get version(){this.commitProperty("layers"),this.commitProperty("layerDefs"),this.commitProperty("dynamicLayers");const e=this.layer;return e&&(e.commitProperty("dpi"),e.commitProperty("imageFormat"),e.commitProperty("imageTransparency"),e.commitProperty("gdbVersion")),(this._get("version")||0)+1}get visibleSublayers(){const e=[];if(!this.layer)return e;const t=this.layer.sublayers,r=this.scale,s=t=>{t.visible&&(0===r||(0,l.zx)(r,t.minScale,t.maxScale))&&(t.sublayers?t.sublayers.forEach(s):e.unshift(t))};t&&t.forEach(s);const i=this._get("visibleSublayers");return!i||i.length!==e.length||i.some(((t,r)=>e[r]!==t))?e:i}toJSON(){const e=this.layer;let t={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?t.dynamicLayers=this.dynamicLayers:t={...t,layers:this.layers,layerDefs:this.layerDefs},t}};(0,s._)([(0,n.MZ)({readOnly:!0})],y.prototype,"dynamicLayers",null),(0,s._)([(0,n.MZ)()],y.prototype,"floors",void 0),(0,s._)([(0,n.MZ)({readOnly:!0})],y.prototype,"hasDynamicLayers",null),(0,s._)([(0,n.MZ)()],y.prototype,"layer",null),(0,s._)([(0,n.MZ)({readOnly:!0})],y.prototype,"layers",null),(0,s._)([(0,n.MZ)({readOnly:!0})],y.prototype,"layerDefs",null),(0,s._)([(0,n.MZ)({type:Number})],y.prototype,"scale",void 0),(0,s._)([(0,n.MZ)({readOnly:!0})],y.prototype,"version",null),(0,s._)([(0,n.MZ)({readOnly:!0})],y.prototype,"visibleSublayers",null),y=(0,s._)([(0,a.$)("esri.layers.support.ExportImageParameters")],y)},1484:(e,t,r)=>{r.d(t,{A:()=>i});var s=r(97255);class i{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.lengths=e??[],this.coords=t??[]}static fromJSON(e){return new i(e.lengths,e.coords)}static fromRect(e){const[t,r,s,o]=e,n=s-t,a=o-r;return new i([5],[t,r,n,0,0,a,-n,0,0,-a])}get isPoint(){return 0===this.lengths.length&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce(((e,t)=>e+t))}get usedMemory(){return 64+(0,s.Qf)(this.lengths,this.coords)}area(){let e=0,t=0;if(!this.lengths.length)return 0;for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];if(s<3)continue;let i=this.coords[2*t],o=this.coords[2*t+1];for(let r=1;r<s;r+=1){const s=this.coords[2*(r+t)],n=this.coords[2*(r+t)+1];e+=-.5*(s-i)*(n+o),i=s,o=n}t+=s}return e}forEachVertex(e){let t=0;this.lengths.length||e(this.coords[0],this.coords[1]);for(let r=0;r<this.lengths.length;r++){const s=this.lengths[r];for(let r=0;r<s;r++)e(this.coords[2*(r+t)],this.coords[2*(r+t)+1]);t+=s}}deltaDecode(){const e=this.clone(),{coords:t,lengths:r}=e;let s=0;for(const i of r){for(let e=1;e<i;e++)t[2*(s+e)]+=t[2*(s+e)-2],t[2*(s+e)+1]+=t[2*(s+e)-1];s+=i}return e}clone(e){if(0===this.lengths.length)return new i([],[this.coords[0],this.coords[1]]);const t=2*(0===this.lengths.length?1:this.lengths.reduce(((e,t)=>e+t))),r=this.coords.slice(0,t);return e?(e.set(r),new i(this.lengths,e)):new i(Array.from(this.lengths),Array.from(r))}}},20176:(e,t,r)=>{r.d(t,{N3:()=>a,Om:()=>n});var s=r(97255),i=r(90321),o=r(1484);class n{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,s=arguments.length>3?arguments[3]:void 0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;this.geometry=e,this.attributes=t,this.centroid=r,this.objectId=s,this.displayId=i}static fromJSON(e){const t=e.geometry?o.A.fromJSON(e.geometry):null,r=e.centroid?o.A.fromJSON(e.centroid):null,s=e.objectId;return new n(t,e.attributes,r,s)}weakClone(){const e=new n(this.geometry,this.attributes,this.centroid,this.objectId);return e.displayId=this.displayId,e}clone(){const e=this.geometry?.clone(),t=new n(e,{...this.attributes},this.centroid?.clone(),this.objectId);return t.displayId=this.displayId,t}ensureCentroid(e){return this.centroid??=(0,i.Q)(new o.A,this.geometry,e.hasZ,e.hasM),this.centroid}get usedMemory(){return 128+(0,s.lM)(this.attributes)+(this.geometry?.usedMemory??0)}}function a(e){return!!e.geometry?.coords?.length}},46530:(e,t,r)=>{function s(e){const t=e.layer;return"floorInfo"in t&&t.floorInfo?.floorField&&"floors"in e.view?o(e.view.floors,t.floorInfo.floorField):null}function i(e,t){return"floorInfo"in t&&t.floorInfo?.floorField?o(e,t.floorInfo.floorField):null}function o(e,t){if(!e?.length)return null;const r=e.filter((e=>""!==e)).map((e=>`'${e}'`));return r.push("''"),`${t} IN (${r.join(",")}) OR ${t} IS NULL`}r.d(t,{E:()=>s,f:()=>i})},75146:(e,t,r)=>{r.d(t,{A:()=>s});class s{constructor(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1,this.uniqueIdField=null,this.queryGeometryType=null,this.queryGeometry=null}weakClone(){const e=new s;return e.objectIdFieldName=this.objectIdFieldName,e.globalIdFieldName=this.globalIdFieldName,e.geohashFieldName=this.geohashFieldName,e.geometryProperties=this.geometryProperties,e.geometryType=this.geometryType,e.spatialReference=this.spatialReference,e.hasZ=this.hasZ,e.hasM=this.hasM,e.features=this.features,e.fields=this.fields,e.transform=this.transform,e.exceededTransferLimit=this.exceededTransferLimit,e.uniqueIdField=this.uniqueIdField,e.queryGeometry=this.queryGeometry,e.queryGeometryType=this.queryGeometryType,e}}},82951:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var s=r(35143),i=r(3825),o=r(50076),n=r(27741),a=r(77717),l=r(50346),h=r(46053),u=r(40565),c=(r(81806),r(47249),r(28379)),y=r(85842),d=r(17707),p=r(49140),m=r(76797),g=r(68002),f=r(80963),b=r(25515),I=r(12406),v=r(36648),N=r(19502),S=r(65624),_=r(31362),M=r(11270),x=r(94729),T=r(21617),w=r(5682),O=r(73907),F=r(78817),P=r(95363),E=r(1420),L=r(16852),Z=r(39568),A=r(65419),V=r(38278),j=r(59187),q=r(67478);let D=class extends((0,S.dM)((0,F.e)((0,w.j)((0,O.I)((0,v.V)((0,N.b)((0,M.q)((0,x.A)((0,a.P)((0,T.J)((0,I.p)((0,_.d)(b.A))))))))))))){constructor(){super(...arguments),this._exportImageParameters=new E.g({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(l.QP).then((()=>this._fetchService(t)))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.includes("PNG32")?"png32":"png24"}writeSublayers(e,t,r,s){if(!this.loaded||!e)return;const i=e.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).toArray();let o=!1;const n=(0,p.aB)(s.origin);if(this.capabilities?.operations.supportsExportMap&&this.capabilities?.exportMap?.supportsDynamicLayers)if(n===p.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("service").sublayers;o=(0,A.Zx)(i,e,p.Gr.SERVICE)}else if(n>p.Gr.PORTAL_ITEM){const e=this.createSublayersForOrigin("portal-item");o=(0,A.Zx)(i,e.sublayers,(0,p.aB)(e.origin))}const a=[],l={writeSublayerStructure:o,...s};let h=o||this.hasVisibleLayersForOrigin(n);i.forEach((e=>{const t=e.write({},l);a.push(t),h=h||"user"===e.originOf("visible")})),a.some((e=>Object.keys(e).length>1))&&(t.layers=a),h&&(t.visibleLayers=i.filter((e=>e.visible)).map((e=>e.id)))}createExportImageParameters(e,t,r,s){const i=s?.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=s?.floors??null,this._exportImageParameters.scale=(0,g.X_)({extent:e,width:t})*i;const o=this._exportImageParameters.toJSON(),n=!s?.rotation||this.version<10.3?{}:{rotation:-s.rotation},a=e?.spatialReference,l=(0,f.YX)(a);o.dpi*=i;const h={};if(s?.timeExtent){const{start:e,end:t}=s.timeExtent.toJSON();h.time=e&&t&&e===t?""+e:`${e??"null"},${t??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(h.time="null,null");return{bbox:e?e.xmin+","+e.ymin+","+e.xmax+","+e.ymax:void 0,bboxSR:l,imageSR:l,size:t+","+r,...o,...n,...h}}async fetchImage(e,t,r,s){const{data:i}=await this._fetchImage("image",e,t,r,s);return i}async fetchImageBitmap(e,t,r,s){const{data:i,url:o}=await this._fetchImage("blob",e,t,r,s);return(0,L.m)(i,o,s?.signal)}async fetchRecomputedExtents(){const e={...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:t}=await(0,i.A)(this.url,e),{extent:r,fullExtent:s,timeExtent:o}=t,n=r||s;return{fullExtent:n&&m.A.fromJSON(n),timeExtent:o&&j.A.fromJSON({start:o[0],end:o[1]})}}loadAll(){return(0,n.g)(this,(e=>{e(this.allSublayers),e(this.subtables)}))}serviceSupportsSpatialReference(e){return(0,V.D)(this,e)}async _fetchImage(e,t,r,s,n){const a={responseType:e,signal:n?.signal??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(t,r,s,n),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},h=this.parsedUrl.path+"/export";if(null!=a.query?.dynamicLayers&&!this.capabilities?.exportMap?.supportsDynamicLayers)throw new o.A("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:a.query});try{const{data:e}=await(0,i.A)(h,a);return{data:e,url:h}}catch(u){if((0,l.zf)(u))throw u;throw new o.A("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:u})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await(0,i.A)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){return!(null==e||!this.sublayersSourceJSON[e]?.visibleLayers)}};(0,s._)([(0,h.MZ)((0,q.P6)("dateFieldsTimeReference"))],D.prototype,"dateFieldsTimeZone",void 0),(0,s._)([(0,h.MZ)({type:Boolean})],D.prototype,"datesInUnknownTimezone",void 0),(0,s._)([(0,h.MZ)()],D.prototype,"dpi",void 0),(0,s._)([(0,h.MZ)()],D.prototype,"gdbVersion",void 0),(0,s._)([(0,h.MZ)()],D.prototype,"imageFormat",void 0),(0,s._)([(0,c.w)("imageFormat",["supportedImageFormatTypes"])],D.prototype,"readImageFormat",null),(0,s._)([(0,h.MZ)({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],D.prototype,"imageMaxHeight",void 0),(0,s._)([(0,h.MZ)({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],D.prototype,"imageMaxWidth",void 0),(0,s._)([(0,h.MZ)()],D.prototype,"imageTransparency",void 0),(0,s._)([(0,h.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],D.prototype,"isReference",void 0),(0,s._)([(0,h.MZ)({json:{read:!1,write:!1}})],D.prototype,"labelsVisible",void 0),(0,s._)([(0,h.MZ)({type:["ArcGISMapServiceLayer"]})],D.prototype,"operationalLayerType",void 0),(0,s._)([(0,h.MZ)({json:{read:!1,write:!1}})],D.prototype,"popupEnabled",void 0),(0,s._)([(0,h.MZ)((0,q.P6)("preferredTimeReference"))],D.prototype,"preferredTimeZone",void 0),(0,s._)([(0,h.MZ)()],D.prototype,"sourceJSON",void 0),(0,s._)([(0,h.MZ)({json:{write:{ignoreOrigin:!0}}})],D.prototype,"sublayers",void 0),(0,s._)([(0,d.K)("sublayers",{layers:{type:[Z.A]},visibleLayers:{type:[u.jz]}})],D.prototype,"writeSublayers",null),(0,s._)([(0,h.MZ)({type:["show","hide","hide-children"]})],D.prototype,"listMode",void 0),(0,s._)([(0,h.MZ)({json:{read:!1},readOnly:!0,value:"map-image"})],D.prototype,"type",void 0),(0,s._)([(0,h.MZ)(P.OZ)],D.prototype,"url",void 0),D=(0,s._)([(0,y.$)("esri.layers.MapImageLayer")],D);const R=D},90321:(e,t,r)=>{function s(e,t){return e?t?4:3:t?3:2}function i(e,t,r,i){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const a=e.coords,l=[],h=r?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:u,coords:c}=t,y=s(r,i);let d=0;for(const s of u){const e=o(h,c,d,s,r,i);e&&l.push(e),d+=s*y}if(l.sort(((e,t)=>{let s=e[2]-t[2];return 0===s&&r&&(s=e[4]-t[4]),s})),l.length){let e=6*l[0][2];a[0]=l[0][0]/e,a[1]=l[0][1]/e,r&&(e=6*l[0][4],a[2]=0!==e?l[0][3]/e:0),(a[0]<h[0]||a[0]>h[1]||a[1]<h[2]||a[1]>h[3]||r&&(a[2]<h[4]||a[2]>h[5]))&&(a.length=0)}if(!a.length){const e=t.lengths[0]?n(c,0,u[0],r,i):null;if(!e)return null;a[0]=e[0],a[1]=e[1],r&&e.length>2&&(a[2]=e[2])}return e}function o(e,t,r,i,o,n){const a=s(o,n);let l=r,h=r+a,u=0,c=0,y=0,d=0,p=0;for(let s=0,g=i-1;s<g;s++,l+=a,h+=a){const r=t[l],s=t[l+1],i=t[l+2],n=t[h],a=t[h+1],m=t[h+2];let g=r*a-n*s;d+=g,u+=(r+n)*g,c+=(s+a)*g,o&&(g=r*m-n*i,y+=(i+m)*g,p+=g),r<e[0]&&(e[0]=r),r>e[1]&&(e[1]=r),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),o&&(i<e[4]&&(e[4]=i),i>e[5]&&(e[5]=i))}if(d>0&&(d*=-1),p>0&&(p*=-1),!d)return null;const m=[u,c,.5*d];return o&&(m[3]=y,m[4]=.5*p),m}function n(e,t,r,i,o){const n=s(i,o);let c=t,y=t+n,d=0,p=0,m=0,g=0;for(let s=0,f=r-1;s<f;s++,c+=n,y+=n){const t=e[c],r=e[c+1],s=e[c+2],o=e[y],n=e[y+1],f=e[y+2],b=i?l(t,r,s,o,n,f):a(t,r,o,n);if(b)if(d+=b,i){const e=u(t,r,s,o,n,f);p+=b*e[0],m+=b*e[1],g+=b*e[2]}else{const e=h(t,r,o,n);p+=b*e[0],m+=b*e[1]}}return d>0?i?[p/d,m/d,g/d]:[p/d,m/d]:r>0?i?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function a(e,t,r,s){const i=r-e,o=s-t;return Math.sqrt(i*i+o*o)}function l(e,t,r,s,i,o){const n=s-e,a=i-t,l=o-r;return Math.sqrt(n*n+a*a+l*l)}function h(e,t,r,s){return[e+.5*(r-e),t+.5*(s-t)]}function u(e,t,r,s,i,o){return[e+.5*(s-e),t+.5*(i-t),r+.5*(o-r)]}r.d(t,{Q:()=>i})},97255:(e,t,r)=>{r.d(t,{Qf:()=>l,Qh:()=>n,RS:()=>i,ez:()=>c,i5:()=>y,lM:()=>o,qK:()=>u});var s=r(78393);const i=16;function o(e){if(!e)return 0;let t=u;for(const r in e)e.hasOwnProperty(r)&&(t+=a(e[r],!1));return t}function n(e){if(!e)return 0;if("number"==typeof e[0])return l(e);if(Array.isArray(e))return function(e){const t=e.length;if(0===t||"number"==typeof e[0])return h(e,8);let r=c;for(let s=0;s<t;s++)r+=a(e[s]);return r}(e);let t=u;for(const r in e)e.hasOwnProperty(r)&&(t+=a(e[r]));return t}function a(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];switch(typeof e){case"object":return t?n(e):u;case"string":return function(e){return 32+e.length}(e);case"number":return i;case"boolean":return 4;default:return 8}}function l(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce(((e,t)=>e+(t?(0,s.iu)(t)?t.byteLength+y:Array.isArray(t)?h(t,i):0:0)),0)}function h(e,t){return c+e.length*t}const u=32,c=16,y=145}}]);
//# sourceMappingURL=7113.7373682c.chunk.js.map