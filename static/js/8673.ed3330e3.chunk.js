"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[8673,8707],{8673:(e,t,r)=>{r.r(t),r.d(t,{execute:()=>s,executeMany:()=>u});var n=r(77724),o=r(48045);function s(e,t){const r=(0,o.fromGeometry)(e),s=r.getSpatialReference();return(0,o.toGeometry)((0,n.g7)(r.getGeometry(),(0,o.fromGeometryToGXGeometry)(t),s),s)}function u(e){const[t,r]=(0,o.fromGeometries)(e);return(0,o.toGeometry)((0,n.zo)(t,r),r)}},68707:(e,t,r)=>{r.d(t,{G:()=>n,S:()=>o});class n{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class o extends n{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},77724:(e,t,r)=>{r.d(t,{fz:()=>i,g7:()=>u,zo:()=>m});var n=r(68707),o=(r(97799),r(26871),r(79186),r(21557),r(82103));r(91523);const s=new o.h;function u(e,t,r){return s.execute(e,t,r,null)}function m(e,t){return s.executeMany(new n.S(e),t,null).next()}function i(){return s.supportsCurves()}}}]);
//# sourceMappingURL=8673.ed3330e3.chunk.js.map