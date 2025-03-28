"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[24,1509,8067,8707],{58067:(e,t,n)=>{n.r(t),n.d(t,{fromExtent:()=>C,fromGeometry:()=>G,fromMultipoint:()=>M,fromPoint:()=>V,fromPolygon:()=>d,fromPolyline:()=>v,fromSpatialReference:()=>w,getSpatialReference:()=>x,toExtent:()=>_,toGeometry:()=>P,toMultipoint:()=>R,toPoint:()=>Z,toPolygon:()=>S,toPolyline:()=>k});var r=n(26871),s=(n(21557),n(97799)),a=n(91523),o=n(79186),u=n(82103),i=n(76797),c=n(66388),l=n(19247),m=n(65215),f=n(23701),h=(n(59739),n(48045));const p="_gxVersion",y=2,g=1;function x(e){return Array.isArray(e)?e[0].spatialReference:e.spatialReference}function G(e){switch(e.type){case"point":return V(e);case"multipoint":return M(e);case"polyline":return v(e);case"polygon":return d(e);case"extent":return C(e);default:throw new Error(`Unsupported geometry type: ${e.type}`)}}function C(e){if(!e.getCacheValue(p)){const t=new a.E;t.setCoords(e.xmin,e.ymin,e.xmax,e.ymax),e.hasM&&t.setInterval(y,0,e.mmin,e.mmax),e.hasZ&&t.setInterval(g,0,e.zmin,e.zmax),e.setCacheValue(p,t)}return e.getCacheValue(p)}function M(e){if(!e.getCacheValue(p)){const t=new o.M,n=new a.P,r=e.points,s=e.hasM,u=e.hasZ,i=u?3:2;for(let e=0,a=r.length;e<a;e++){const a=r[e];n.setXYCoords(a[0],a[1]),u&&n.setZ(a[2]??0),s&&n.setM(a[i]??NaN),t.add(n)}e.setCacheValue(p,t)}return e.getCacheValue(p)}function V(e){if(!e.getCacheValue(p)){const t=new a.P;t.setXYCoords(e.x,e.y),e.hasM&&t.setM(e.m),e.hasZ&&t.setZ(e.z),e.setCacheValue(p,t)}return e.getCacheValue(p)}function d(e){if(!e.getCacheValue(p)){const{curveRings:t,hasM:n,hasZ:r,rings:s}=e,a=(0,h.fromGeometryToGXGeometry)({curveRings:t,hasM:n,hasZ:r,rings:s});e.setCacheValue(p,a)}return e.getCacheValue(p)}function v(e){if(!e.getCacheValue(p)){const{curvePaths:t,hasM:n,hasZ:r,paths:s}=e,a=(0,h.fromGeometryToGXGeometry)({curvePaths:t,hasM:n,hasZ:r,paths:s});e.setCacheValue(p,a)}return e.getCacheValue(p)}function w(e){if(e.wkid)return(0,u.c)(e.wkid);const t=e.wkt2||e.wkt;return t?(0,u.b)(t):null}function P(e,t){if(e)switch(e.getGeometryType()){case s.G.enumPoint:return Z(e,t);case s.G.enumEnvelope:return _(e,t);case s.G.enumMultiPoint:return R(e,t);case s.G.enumPolyline:return k(e,t);case s.G.enumPolygon:return S(e,t)}return null}function _(e,t){if(e.isEmpty())return null;const n=new i.A({xmin:e.getXMin(),ymin:e.getYMin(),xmax:e.getXMax(),ymax:e.getYMax(),spatialReference:t}),r=e.getDescription();if(r.hasM()){const t=e.queryInterval(y,0);n.mmin=t.vmin,n.mmax=t.vmax}if(r.hasZ()){const t=e.queryInterval(g,0);n.zmin=t.vmin,n.zmax=t.vmax}return n.setCacheValue(p,e),n}function R(e,t){if(e.isEmpty())return null;const n=e.getDescription(),r=n.hasM(),s=n.hasZ(),o=[],u=new a.P;for(let a=0,c=e.getPointCount();a<c;a++){e.getPointByVal(a,u);const t=[u.getX(),u.getY()];s&&t.push(u.getZ()),r&&t.push(u.getM()),o.push(t)}const i=new c.A({hasM:r,hasZ:s,points:o,spatialReference:t});return i.setCacheValue(p,e),i}function Z(e,t){if(e instanceof r.P)return new l.A({x:e.x,y:e.y,spatialReference:t});if(e.isEmpty())return null;const n=new l.A({x:e.getX(),y:e.getY(),spatialReference:t}),s=e.getDescription();return s.hasM()&&(n.m=e.getM()),s.hasZ()&&(n.z=e.getZ()),n.setCacheValue(p,e),n}function S(e,t){if(e.isEmpty())return null;const n=m.A.fromJSON({spatialReference:t,...(0,h.toGeometry)(e,null)});return n.setCacheValue(p,e),n}function k(e,t){if(e.isEmpty())return null;const n=f.A.fromJSON({spatialReference:t,...(0,h.toGeometry)(e,null)});return n.setCacheValue(p,e),n}},68707:(e,t,n)=>{n.d(t,{G:()=>r,S:()=>s});class r{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class s extends r{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},69874:(e,t,n)=>{n.d(t,{a:()=>u,b:()=>i,e:()=>l,s:()=>c});var r=n(82103),s=n(58067);class a extends r.d{getOperatorType(){return 2}execute(e,t,n,s){return(0,r.r)(e,t,n,3,s)}}const o=new a;function u(e){const t=(0,s.getSpatialReference)(e);return o.accelerateGeometry((0,s.fromGeometry)(e),(0,s.fromSpatialReference)(t),1)}function i(e,t){return o.execute((0,s.fromGeometry)(e),(0,s.fromGeometry)(t),(0,s.fromSpatialReference)(e.spatialReference),null)}const c=o.supportsCurves(),l=Object.freeze(Object.defineProperty({__proto__:null,accelerateGeometry:u,execute:i,supportsCurves:c},Symbol.toStringTag,{value:"Module"}))},72442:(e,t,n)=>{n.r(t),n.d(t,{accelerateGeometry:()=>r.a,execute:()=>r.b,supportsCurves:()=>r.s});var r=n(69874);n(58067)}}]);
//# sourceMappingURL=24.d7547afc.chunk.js.map