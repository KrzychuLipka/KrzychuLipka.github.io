"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[8672],{58672:(e,t,i)=>{i.r(t),i.d(t,{default:()=>j});var r,o=i(35143),s=i(45802),n=i(42553),l=i(53084),p=i(46053),a=i(40565),d=i(85842),u=i(17707),y=i(13312),h=i(19902),c=i(31608);i(81806),i(76460),i(47249);let v=r=class extends n.A{constructor(e){super(e),this.groupByFields=void 0,this.topCount=void 0,this.orderByFields=void 0}clone(){return new r({groupByFields:this.groupByFields,topCount:this.topCount,orderByFields:this.orderByFields})}};(0,o._)([(0,p.MZ)({type:[String],json:{write:!0}})],v.prototype,"groupByFields",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{write:!0}})],v.prototype,"topCount",void 0),(0,o._)([(0,p.MZ)({type:[String],json:{write:!0}})],v.prototype,"orderByFields",void 0),v=r=(0,o._)([(0,d.$)("esri.rest.support.TopFilter")],v);const w=v;var m,_=i(59187);const S=new s.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),R=new s.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let M=m=class extends n.A{constructor(e){super(e),this.cacheHint=void 0,this.distance=void 0,this.geometry=null,this.geometryPrecision=void 0,this.maxAllowableOffset=void 0,this.num=void 0,this.objectIds=null,this.orderByFields=null,this.outFields=null,this.outSpatialReference=null,this.resultType=null,this.returnGeometry=!1,this.returnM=void 0,this.returnZ=void 0,this.start=void 0,this.spatialRelationship="intersects",this.timeExtent=null,this.topFilter=void 0,this.units=null,this.where="1=1"}writeStart(e,t){t.resultOffset=this.start,t.resultRecordCount=this.num||10}clone(){return new m((0,l.o8)({cacheHint:this.cacheHint,distance:this.distance,geometry:this.geometry,geometryPrecision:this.geometryPrecision,maxAllowableOffset:this.maxAllowableOffset,num:this.num,objectIds:this.objectIds,orderByFields:this.orderByFields,outFields:this.outFields,outSpatialReference:this.outSpatialReference,resultType:this.resultType,returnGeometry:this.returnGeometry,returnZ:this.returnZ,returnM:this.returnM,start:this.start,spatialRelationship:this.spatialRelationship,timeExtent:this.timeExtent,topFilter:this.topFilter,units:this.units,where:this.where}))}};(0,o._)([(0,p.MZ)({type:Boolean,json:{write:!0}})],M.prototype,"cacheHint",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{write:{overridePolicy:e=>({enabled:e>0})}}})],M.prototype,"distance",void 0),(0,o._)([(0,p.MZ)({types:c.yR,json:{read:h.rS,write:!0}})],M.prototype,"geometry",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{write:!0}})],M.prototype,"geometryPrecision",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{write:!0}})],M.prototype,"maxAllowableOffset",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{read:{source:"resultRecordCount"}}})],M.prototype,"num",void 0),(0,o._)([(0,p.MZ)({json:{write:!0}})],M.prototype,"objectIds",void 0),(0,o._)([(0,p.MZ)({type:[String],json:{write:!0}})],M.prototype,"orderByFields",void 0),(0,o._)([(0,p.MZ)({type:[String],json:{write:!0}})],M.prototype,"outFields",void 0),(0,o._)([(0,p.MZ)({type:y.A,json:{read:{source:"outSR"},write:{target:"outSR"}}})],M.prototype,"outSpatialReference",void 0),(0,o._)([(0,p.MZ)({type:String,json:{write:!0}})],M.prototype,"resultType",void 0),(0,o._)([(0,p.MZ)({json:{write:!0}})],M.prototype,"returnGeometry",void 0),(0,o._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],M.prototype,"returnM",void 0),(0,o._)([(0,p.MZ)({type:Boolean,json:{write:{overridePolicy:e=>({enabled:e})}}})],M.prototype,"returnZ",void 0),(0,o._)([(0,p.MZ)({type:Number,json:{read:{source:"resultOffset"}}})],M.prototype,"start",void 0),(0,o._)([(0,u.K)("start"),(0,u.K)("num")],M.prototype,"writeStart",null),(0,o._)([(0,p.MZ)({type:String,json:{read:{source:"spatialRel",reader:S.read},write:{target:"spatialRel",writer:S.write}}})],M.prototype,"spatialRelationship",void 0),(0,o._)([(0,p.MZ)({type:_.A,json:{write:!0}})],M.prototype,"timeExtent",void 0),(0,o._)([(0,p.MZ)({type:w,json:{write:!0}})],M.prototype,"topFilter",void 0),(0,o._)([(0,p.MZ)({type:String,json:{read:R.read,write:{writer:R.write,overridePolicy(e){return{enabled:null!=e&&null!=this.distance}}}}})],M.prototype,"units",void 0),(0,o._)([(0,p.MZ)({type:String,json:{write:!0}})],M.prototype,"where",void 0),M=m=(0,o._)([(0,d.$)("esri.rest.support.TopFeaturesQuery")],M),M.from=(0,a.dp)(M);const j=M}}]);
//# sourceMappingURL=8672.b640d1bc.chunk.js.map