"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[1509,8067,8707],{58067:(e,t,n)=>{n.r(t),n.d(t,{fromExtent:()=>C,fromGeometry:()=>G,fromMultipoint:()=>M,fromPoint:()=>V,fromPolygon:()=>w,fromPolyline:()=>P,fromSpatialReference:()=>d,getSpatialReference:()=>x,toExtent:()=>v,toGeometry:()=>Z,toMultipoint:()=>_,toPoint:()=>R,toPolygon:()=>k,toPolyline:()=>E});var r=n(26871),s=(n(21557),n(97799)),a=n(91523),o=n(79186),i=n(82103),u=n(76797),c=n(66388),l=n(19247),m=n(65215),h=n(23701),f=(n(59739),n(48045));const g="_gxVersion",y=2,p=1;function x(e){return Array.isArray(e)?e[0].spatialReference:e.spatialReference}function G(e){switch(e.type){case"point":return V(e);case"multipoint":return M(e);case"polyline":return P(e);case"polygon":return w(e);case"extent":return C(e);default:throw new Error(`Unsupported geometry type: ${e.type}`)}}function C(e){if(!e.getCacheValue(g)){const t=new a.E;t.setCoords(e.xmin,e.ymin,e.xmax,e.ymax),e.hasM&&t.setInterval(y,0,e.mmin,e.mmax),e.hasZ&&t.setInterval(p,0,e.zmin,e.zmax),e.setCacheValue(g,t)}return e.getCacheValue(g)}function M(e){if(!e.getCacheValue(g)){const t=new o.M,n=new a.P,r=e.points,s=e.hasM,i=e.hasZ,u=i?3:2;for(let e=0,a=r.length;e<a;e++){const a=r[e];n.setXYCoords(a[0],a[1]),i&&n.setZ(a[2]??0),s&&n.setM(a[u]??NaN),t.add(n)}e.setCacheValue(g,t)}return e.getCacheValue(g)}function V(e){if(!e.getCacheValue(g)){const t=new a.P;t.setXYCoords(e.x,e.y),e.hasM&&t.setM(e.m),e.hasZ&&t.setZ(e.z),e.setCacheValue(g,t)}return e.getCacheValue(g)}function w(e){if(!e.getCacheValue(g)){const{curveRings:t,hasM:n,hasZ:r,rings:s}=e,a=(0,f.fromGeometryToGXGeometry)({curveRings:t,hasM:n,hasZ:r,rings:s});e.setCacheValue(g,a)}return e.getCacheValue(g)}function P(e){if(!e.getCacheValue(g)){const{curvePaths:t,hasM:n,hasZ:r,paths:s}=e,a=(0,f.fromGeometryToGXGeometry)({curvePaths:t,hasM:n,hasZ:r,paths:s});e.setCacheValue(g,a)}return e.getCacheValue(g)}function d(e){if(e.wkid)return(0,i.c)(e.wkid);const t=e.wkt2||e.wkt;return t?(0,i.b)(t):null}function Z(e,t){if(e)switch(e.getGeometryType()){case s.G.enumPoint:return R(e,t);case s.G.enumEnvelope:return v(e,t);case s.G.enumMultiPoint:return _(e,t);case s.G.enumPolyline:return E(e,t);case s.G.enumPolygon:return k(e,t)}return null}function v(e,t){if(e.isEmpty())return null;const n=new u.A({xmin:e.getXMin(),ymin:e.getYMin(),xmax:e.getXMax(),ymax:e.getYMax(),spatialReference:t}),r=e.getDescription();if(r.hasM()){const t=e.queryInterval(y,0);n.mmin=t.vmin,n.mmax=t.vmax}if(r.hasZ()){const t=e.queryInterval(p,0);n.zmin=t.vmin,n.zmax=t.vmax}return n.setCacheValue(g,e),n}function _(e,t){if(e.isEmpty())return null;const n=e.getDescription(),r=n.hasM(),s=n.hasZ(),o=[],i=new a.P;for(let a=0,c=e.getPointCount();a<c;a++){e.getPointByVal(a,i);const t=[i.getX(),i.getY()];s&&t.push(i.getZ()),r&&t.push(i.getM()),o.push(t)}const u=new c.A({hasM:r,hasZ:s,points:o,spatialReference:t});return u.setCacheValue(g,e),u}function R(e,t){if(e instanceof r.P)return new l.A({x:e.x,y:e.y,spatialReference:t});if(e.isEmpty())return null;const n=new l.A({x:e.getX(),y:e.getY(),spatialReference:t}),s=e.getDescription();return s.hasM()&&(n.m=e.getM()),s.hasZ()&&(n.z=e.getZ()),n.setCacheValue(g,e),n}function k(e,t){if(e.isEmpty())return null;const n=m.A.fromJSON({spatialReference:t,...(0,f.toGeometry)(e,null)});return n.setCacheValue(g,e),n}function E(e,t){if(e.isEmpty())return null;const n=h.A.fromJSON({spatialReference:t,...(0,f.toGeometry)(e,null)});return n.setCacheValue(g,e),n}},68707:(e,t,n)=>{n.d(t,{G:()=>r,S:()=>s});class r{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class s extends r{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}}}]);
//# sourceMappingURL=1509.b096c5dd.chunk.js.map