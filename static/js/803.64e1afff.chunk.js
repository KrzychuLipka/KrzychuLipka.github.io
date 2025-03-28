"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[803,4552],{16852:(e,t,l)=>{l.d(t,{C:()=>n,m:()=>s});var r=l(50076),o=l(50346);async function s(e,t,l){let s;try{s=await createImageBitmap(e)}catch(n){throw new r.A("request:server",`Unable to load ${t}`,{url:t,error:n})}return(0,o.Te)(l),s}async function n(e,t,l,s,n){let i;try{i=await createImageBitmap(e)}catch(a){throw new r.A("request:server",`Unable to load tile ${t}/${l}/${s}`,{error:a,level:t,row:l,col:s})}return(0,o.Te)(n),i}},24552:(e,t,l)=>{l.r(t),l.d(t,{default:()=>I});var r,o=l(35143),s=l(3825),n=l(50076),i=l(77717),a=l(88685),p=l(90534),u=l(46053),c=(l(81806),l(76460),l(47249),l(28379)),y=l(85842),d=l(17707),w=l(76797),v=l(19247),h=l(13312),m=l(25515),f=l(65624),A=l(11270),g=l(94729),M=l(21617),b=l(5682),_=l(16852),T=l(22848),Z=l(88235),j=l(90565);let S=r=class extends((0,f.dM)((0,M.J)((0,b.j)((0,A.q)((0,g.A)((0,i.P)(m.A))))))){constructor(){super(...arguments),this.copyright="",this.fullExtent=new w.A(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,h.A.WebMercator),this.legendEnabled=!1,this.isReference=null,this.popupEnabled=!1,this.spatialReference=h.A.WebMercator,this.subDomains=null,this.tileInfo=new Z.A({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new v.A({x:-20037508.342787,y:20037508.342787,spatialReference:h.A.WebMercator}),spatialReference:h.A.WebMercator,lods:[new T.A({level:0,scale:591657527.591555,resolution:156543.033928}),new T.A({level:1,scale:295828763.795777,resolution:78271.5169639999}),new T.A({level:2,scale:147914381.897889,resolution:39135.7584820001}),new T.A({level:3,scale:73957190.948944,resolution:19567.8792409999}),new T.A({level:4,scale:36978595.474472,resolution:9783.93962049996}),new T.A({level:5,scale:18489297.737236,resolution:4891.96981024998}),new T.A({level:6,scale:9244648.868618,resolution:2445.98490512499}),new T.A({level:7,scale:4622324.434309,resolution:1222.99245256249}),new T.A({level:8,scale:2311162.217155,resolution:611.49622628138}),new T.A({level:9,scale:1155581.108577,resolution:305.748113140558}),new T.A({level:10,scale:577790.554289,resolution:152.874056570411}),new T.A({level:11,scale:288895.277144,resolution:76.4370282850732}),new T.A({level:12,scale:144447.638572,resolution:38.2185141425366}),new T.A({level:13,scale:72223.819286,resolution:19.1092570712683}),new T.A({level:14,scale:36111.909643,resolution:9.55462853563415}),new T.A({level:15,scale:18055.954822,resolution:4.77731426794937}),new T.A({level:16,scale:9027.977411,resolution:2.38865713397468}),new T.A({level:17,scale:4513.988705,resolution:1.19432856685505}),new T.A({level:18,scale:2256.994353,resolution:.597164283559817}),new T.A({level:19,scale:1128.497176,resolution:.298582141647617}),new T.A({level:20,scale:564.248588,resolution:.14929107082380833}),new T.A({level:21,scale:282.124294,resolution:.07464553541190416}),new T.A({level:22,scale:141.062147,resolution:.03732276770595208}),new T.A({level:23,scale:70.5310735,resolution:.01866138385297604})]}),this.type="web-tile",this.urlTemplate=null,this.wmtsInfo=null}normalizeCtorArgs(e,t){return"string"==typeof e?{urlTemplate:e,...t}:e}load(e){const t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then((()=>{let e="";if(this.urlTemplate)if(this.spatialReference.equals(this.tileInfo.spatialReference)){const t=new p.s0(this.urlTemplate);!(this.subDomains&&this.subDomains.length>0)&&t.authority?.includes("{subDomain}")&&(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new n.A("web-tile-layer:load",`WebTileLayer (title: '${this.title}', id: '${this.id}') ${e}`)}));return this.addResolvingPromise(t),Promise.resolve(this)}get levelValues(){const e=[];if(!this.tileInfo)return null;for(const t of this.tileInfo.lods)e[t.level]=t.levelValue||t.level;return e}readSpatialReference(e,t){return e||h.A.fromJSON(t.fullExtent?.spatialReference)}get tileServers(){if(!this.urlTemplate)return null;const e=[],{urlTemplate:t,subDomains:l}=this,r=new p.s0(t),o=r.scheme?r.scheme+"://":"//",s=o+r.authority+"/",n=r.authority;if(n?.includes("{subDomain}")){if(l&&l.length>0&&n.split(".").length>1)for(const i of l)e.push(o+n.replaceAll(/\{subDomain\}/gi,i)+"/")}else e.push(s);return e.map(p.Il)}get urlPath(){if(!this.urlTemplate)return null;const e=this.urlTemplate,t=new p.s0(e),l=(t.scheme?t.scheme+"://":"//")+t.authority+"/";return e.slice(l.length)}readUrlTemplate(e,t){return e||t.templateUrl}writeUrlTemplate(e,t){(0,p.BQ)(e)&&(e="https:"+e),e&&(e=e.replaceAll(/\{z\}/gi,"{level}").replaceAll(/\{x\}/gi,"{col}").replaceAll(/\{y\}/gi,"{row}"),e=(0,p.S8)(e)),t.templateUrl=e}fetchTile(e,t,l){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:o}=r,n=this.getTileUrl(e,t,l),i={responseType:"image",signal:o,query:{...this.refreshParameters}};return(0,s.A)(n,i).then((e=>e.data))}async fetchImageBitmapTile(e,t,l){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const{signal:n}=o;if(this.fetchTile!==r.prototype.fetchTile){const r=await this.fetchTile(e,t,l,o);return(0,_.C)(r,e,t,l,n)}const i=this.getTileUrl(e,t,l),a={responseType:"blob",signal:n,query:{...this.refreshParameters}},{data:p}=await(0,s.A)(i,a);return(0,_.C)(p,e,t,l,n)}getTileUrl(e,t,l){const{levelValues:r,tileServers:o,urlPath:s}=this;if(!r||!o||!s)return"";const n=r[e];return o[t%o.length]+(0,a.HC)(s,{level:n,z:n,col:l,x:l,row:t,y:t})}};(0,o._)([(0,u.MZ)({type:String,value:"",json:{write:!0}})],S.prototype,"copyright",void 0),(0,o._)([(0,u.MZ)({type:w.A,json:{write:!0},nonNullable:!0})],S.prototype,"fullExtent",void 0),(0,o._)([(0,u.MZ)({readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"legendEnabled",void 0),(0,o._)([(0,u.MZ)({type:["show","hide"]})],S.prototype,"listMode",void 0),(0,o._)([(0,u.MZ)({json:{read:!0,write:!0}})],S.prototype,"blendMode",void 0),(0,o._)([(0,u.MZ)()],S.prototype,"levelValues",null),(0,o._)([(0,u.MZ)({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],S.prototype,"isReference",void 0),(0,o._)([(0,u.MZ)({type:["WebTiledLayer"],value:"WebTiledLayer"})],S.prototype,"operationalLayerType",void 0),(0,o._)([(0,u.MZ)({readOnly:!0,json:{read:!1,write:!1}})],S.prototype,"popupEnabled",void 0),(0,o._)([(0,u.MZ)({type:h.A})],S.prototype,"spatialReference",void 0),(0,o._)([(0,c.w)("spatialReference",["spatialReference","fullExtent.spatialReference"])],S.prototype,"readSpatialReference",null),(0,o._)([(0,u.MZ)({type:[String],json:{write:!0}})],S.prototype,"subDomains",void 0),(0,o._)([(0,u.MZ)({type:Z.A,json:{write:!0}})],S.prototype,"tileInfo",void 0),(0,o._)([(0,u.MZ)({readOnly:!0})],S.prototype,"tileServers",null),(0,o._)([(0,u.MZ)({json:{read:!1}})],S.prototype,"type",void 0),(0,o._)([(0,u.MZ)()],S.prototype,"urlPath",null),(0,o._)([(0,u.MZ)({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],S.prototype,"urlTemplate",void 0),(0,o._)([(0,c.w)("urlTemplate",["urlTemplate","templateUrl"])],S.prototype,"readUrlTemplate",null),(0,o._)([(0,d.K)("urlTemplate",{templateUrl:{type:String}})],S.prototype,"writeUrlTemplate",null),(0,o._)([(0,u.MZ)({type:j.x,json:{write:!0}})],S.prototype,"wmtsInfo",void 0),S=r=(0,o._)([(0,y.$)("esri.layers.WebTileLayer")],S);const I=S},50803:(e,t,l)=>{l.r(t),l.d(t,{default:()=>w});var r=l(35143),o=l(46053),s=(l(81806),l(76460),l(47249),l(85842)),n=l(76797),i=l(19247),a=l(13312),p=l(24552),u=l(22848),c=l(88235),y=l(70652);let d=class extends p.default{constructor(){super(...arguments),this.portalItem=null,this.isReference=null,this.tileInfo=new c.A({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new i.A({x:-20037508.342787,y:20037508.342787,spatialReference:a.A.WebMercator}),spatialReference:a.A.WebMercator,lods:[new u.A({level:0,scale:591657527.591555,resolution:156543.033928}),new u.A({level:1,scale:295828763.795777,resolution:78271.5169639999}),new u.A({level:2,scale:147914381.897889,resolution:39135.7584820001}),new u.A({level:3,scale:73957190.948944,resolution:19567.8792409999}),new u.A({level:4,scale:36978595.474472,resolution:9783.93962049996}),new u.A({level:5,scale:18489297.737236,resolution:4891.96981024998}),new u.A({level:6,scale:9244648.868618,resolution:2445.98490512499}),new u.A({level:7,scale:4622324.434309,resolution:1222.99245256249}),new u.A({level:8,scale:2311162.217155,resolution:611.49622628138}),new u.A({level:9,scale:1155581.108577,resolution:305.748113140558}),new u.A({level:10,scale:577790.554289,resolution:152.874056570411}),new u.A({level:11,scale:288895.277144,resolution:76.4370282850732}),new u.A({level:12,scale:144447.638572,resolution:38.2185141425366}),new u.A({level:13,scale:72223.819286,resolution:19.1092570712683}),new u.A({level:14,scale:36111.909643,resolution:9.55462853563415}),new u.A({level:15,scale:18055.954822,resolution:4.77731426794937}),new u.A({level:16,scale:9027.977411,resolution:2.38865713397468}),new u.A({level:17,scale:4513.988705,resolution:1.19432856685505}),new u.A({level:18,scale:2256.994353,resolution:.597164283559817}),new u.A({level:19,scale:1128.497176,resolution:.298582141647617})]}),this.subDomains=["a","b","c"],this.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",this.operationalLayerType="OpenStreetMap",this.type="open-street-map",this.fullExtent=new n.A(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,a.A.WebMercator),this.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA"}get refreshInterval(){return 0}};(0,r._)([(0,o.MZ)({type:y.default,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"portalItem",void 0),(0,r._)([(0,o.MZ)({type:Boolean,json:{read:!1,write:!1}})],d.prototype,"isReference",void 0),(0,r._)([(0,o.MZ)({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],d.prototype,"refreshInterval",null),(0,r._)([(0,o.MZ)({type:c.A,json:{write:!1}})],d.prototype,"tileInfo",void 0),(0,r._)([(0,o.MZ)({type:["show","hide"]})],d.prototype,"listMode",void 0),(0,r._)([(0,o.MZ)({readOnly:!0,json:{read:!1,write:!1}})],d.prototype,"subDomains",void 0),(0,r._)([(0,o.MZ)({readOnly:!0,json:{read:!1,write:!1}})],d.prototype,"urlTemplate",void 0),(0,r._)([(0,o.MZ)({type:["OpenStreetMap"]})],d.prototype,"operationalLayerType",void 0),(0,r._)([(0,o.MZ)({json:{read:!1}})],d.prototype,"type",void 0),(0,r._)([(0,o.MZ)({readOnly:!0,json:{read:!1,write:!1},nonNullable:!0})],d.prototype,"fullExtent",void 0),(0,r._)([(0,o.MZ)({json:{read:!1,write:!1}})],d.prototype,"copyright",void 0),(0,r._)([(0,o.MZ)({json:{read:!1,write:!1}})],d.prototype,"wmtsInfo",void 0),d=(0,r._)([(0,s.$)("esri.layers.OpenStreetMapLayer")],d);const w=d},90565:(e,t,l)=>{l.d(t,{x:()=>p});var r,o=l(35143),s=l(42553),n=l(53084),i=l(46053),a=(l(81806),l(76460),l(85842));let p=r=class extends s.A{constructor(e){super(e)}clone(){return new r({customLayerParameters:(0,n.o8)(this.customLayerParameters),customParameters:(0,n.o8)(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})}};(0,o._)([(0,i.MZ)({json:{type:Object,write:!0}})],p.prototype,"customLayerParameters",void 0),(0,o._)([(0,i.MZ)({json:{type:Object,write:!0}})],p.prototype,"customParameters",void 0),(0,o._)([(0,i.MZ)({type:String,json:{write:!0}})],p.prototype,"layerIdentifier",void 0),(0,o._)([(0,i.MZ)({type:String,json:{write:!0}})],p.prototype,"tileMatrixSet",void 0),(0,o._)([(0,i.MZ)({type:String,json:{write:!0}})],p.prototype,"url",void 0),p=r=(0,o._)([(0,a.$)("esri.layers.support.WMTSLayerInfo")],p)}}]);
//# sourceMappingURL=803.64e1afff.chunk.js.map