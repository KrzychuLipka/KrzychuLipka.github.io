"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[8532],{78532:(e,t,i)=>{i.r(t),i.d(t,{default:()=>F});var s=i(35143),r=i(94417),n=i(69098),o=i(73582),l=i(42553),a=i(30726),u=i(46053),p=i(21403),d=(i(81806),i(47249),i(85842)),h=i(40565),c=i(19247);let y=class extends(l.A.JSONSupportMixin(n.A)){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return null!=this.observer&&this.farDistance>0}equals(e){return(0,a.CM)(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&(0,r.xH)(this.feature,e.feature)}};(0,s._)([(0,u.MZ)({type:c.A,json:{write:{isRequired:!0}}})],y.prototype,"observer",void 0),(0,s._)([(0,u.MZ)({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],y.prototype,"farDistance",void 0),(0,s._)([(0,u.MZ)({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),(0,p.w)((e=>o.ie.normalize((0,h.GB)(e),void 0,!0)))],y.prototype,"heading",void 0),(0,s._)([(0,u.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],y.prototype,"tilt",void 0),(0,s._)([(0,u.MZ)({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],y.prototype,"horizontalFieldOfView",void 0),(0,s._)([(0,u.MZ)({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],y.prototype,"verticalFieldOfView",void 0),(0,s._)([(0,u.MZ)(r.N1)],y.prototype,"feature",void 0),(0,s._)([(0,u.MZ)({json:{read:!1}})],y.prototype,"isValid",null),y=(0,s._)([(0,d.$)("esri.analysis.Viewshed")],y);const w=y;var v=i(95085),f=i(94643),m=i(3975),_=i(15941),g=i(68134),x=(i(76460),i(76797)),M=i(9624);const b=f.A.ofType(w);let O=class extends v.A{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles((0,g.wB)((()=>this._computeExtent()),(e=>{null==e.pending&&(this._extent=e.extent)}),g.pc))}get viewsheds(){return this._get("viewsheds")||new b}set viewsheds(e){this._set("viewsheds",(0,m.V)(e,this.viewsheds,b))}get spatialReference(){for(const e of this.viewsheds)if(null!=e.observer)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map((e=>{let{observer:t}=e;return t}))}async waitComputeExtent(){const e=this._computeExtent();null!=e.pending&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(null==e)return{pending:null,extent:null};const t=this.viewsheds.filter((e=>null!=e.observer)),i=t.map((e=>e.observer)).toArray(),s=(0,M.projectOrLoadMany)(i,e);return null!=s.pending?{pending:s.pending,extent:null}:{pending:null,extent:s.geometries.map(((e,i)=>{const s=t.at(i);return null!=e&&null!=s?this._computeViewshedExtent(this.viewsheds.at(i),e):null})).filter((e=>null!=e)).reduce(((e,t)=>function(e,t){return null==e?t:null==t?e:e.union(t)}(e,t)),null)}}_computeViewshedExtent(e,t){const{farDistance:i,heading:s,tilt:r,horizontalFieldOfView:n,verticalFieldOfView:l}=e,{spatialReference:a}=t,u=n/2,p=l/2,d=i/a.metersPerUnit,h=[o.ie.normalize(s-u),s,o.ie.normalize(s+u)],c=x.A.fromPoint(t),y=e=>{const t=h.map((t=>o.ie.normalize(t-e)));if(t[0]>t[2]||360===n)return d;const i=t.map((e=>Math.abs(e>180?360-e:e))).reduce(((e,t)=>e>t?t:e));return i>90?0:d*Math.cos((0,_.kU)(i))};c.xmax+=y(90),c.xmin-=y(-90),c.ymax+=y(0),c.ymin-=y(180);const w=t.z;if(null!=w){let e=w,t=w;const s=r-90,n=(0,_.qE)(s+p,-90,90),o=(0,_.qE)(s-p,-90,90),l=a?.isGeographic?i:d;e+=l*Z(n),t+=l*Z(o);const h=V(p)*l,y=Z(s)*h*(1-V(u));r<90&&(e-=y),r>90&&(t-=y),c.zmax=Math.max(e,w),c.zmin=Math.min(t,w)}return c}clear(){this.viewsheds.removeAll()}};function V(e){return Math.cos((0,_.kU)(e))}function Z(e){return Math.sin((0,_.kU)(e))}(0,s._)([(0,u.MZ)({type:["viewshed"]})],O.prototype,"type",void 0),(0,s._)([(0,u.MZ)({cast:m.H,type:b,nonNullable:!0})],O.prototype,"viewsheds",null),(0,s._)([(0,u.MZ)({readOnly:!0})],O.prototype,"spatialReference",null),(0,s._)([(0,u.MZ)()],O.prototype,"_extent",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],O.prototype,"extent",null),(0,s._)([(0,u.MZ)({readOnly:!0})],O.prototype,"requiredPropertiesForEditing",null),O=(0,s._)([(0,d.$)("esri.analysis.ViewshedAnalysis")],O);const N=O;var R=i(77717),z=i(17707),E=i(25515),q=i(11270);let A=class extends((0,q.q)((0,R.P)(E.A))){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new N,this.opacity=1}initialize(){this.addHandles((0,g.wB)((()=>this.source),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),g.pc))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new N)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,t,i,s){t.viewsheds=e.filter((e=>e.isValid())).map((e=>e.toJSON(s))).toJSON()}};(0,s._)([(0,u.MZ)({json:{read:!1},readOnly:!0})],A.prototype,"type",void 0),(0,s._)([(0,u.MZ)({type:["ViewshedLayer"]})],A.prototype,"operationalLayerType",void 0),(0,s._)([(0,u.MZ)({type:N,nonNullable:!0})],A.prototype,"source",void 0),(0,s._)([(0,u.MZ)({readOnly:!0})],A.prototype,"spatialReference",null),(0,s._)([(0,u.MZ)({readOnly:!0})],A.prototype,"fullExtent",null),(0,s._)([(0,u.MZ)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],A.prototype,"opacity",void 0),(0,s._)([(0,u.MZ)({type:["show","hide"]})],A.prototype,"listMode",void 0),(0,s._)([(0,u.MZ)({type:f.A.ofType(w),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],A.prototype,"viewsheds",null),(0,s._)([(0,z.K)("web-scene","viewsheds")],A.prototype,"writeViewsheds",null),A=(0,s._)([(0,d.$)("esri.layers.ViewshedLayer")],A);const F=A}}]);
//# sourceMappingURL=8532.7d97ed54.chunk.js.map