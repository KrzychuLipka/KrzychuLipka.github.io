"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[3245],{3245:(e,t,n)=>{n.r(t),n.d(t,{executeScript:()=>W,extend:()=>z,functionHelper:()=>j});var r=n(66240),o=n(54093),a=n(82214),i=n(36593),l=n(67253),c=n(9861),s=n(48015),u=n(55742),f=n(43036),w=n(8167),p=n(302),d=n(29759),h=n(65005),g=n(25811),y=n(19155),m=n(50568),b=n(12476),v=n(84231),D=n(89189),X=n(13312),S=n(85632);async function T(e,t){const n=[];for(let r=0;r<t.arguments.length;r++)n.push(await A(e,t.arguments[r]));return n}async function x(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await T(e,t))}class $ extends u.fF{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){var t=this;return function(){const n={spatialReference:t.context.spatialReference,console:t.context.console,lrucache:t.context.lrucache,timeZone:t.context.timeZone??null,exports:t.context.exports,libraryResolver:t.context.libraryResolver,interceptor:t.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:t.context.globalScope};if(n.depthCounter.depth>64)throw new c.D$(e,c.TX.MaximumCallDepth,null);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return G(t.definition,n,o,null)}}call(e,t){return F(e,t,((n,r,o)=>{const a={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(a.depthCounter.depth>64)throw new c.D$(e,c.TX.MaximumCallDepth,t);return G(this.definition,a,o,t)}))}marshalledCall(e,t,n,r){return r(e,t,(async(o,a,i)=>{const l={spatialReference:e.spatialReference,globalScope:n.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:{}};return i=i.map((t=>!(0,f.i)(t)||t instanceof u.CU?t:(0,u.o6)(t,e,r))),(0,u.o6)(await G(this.definition,l,i,t),n,r)}))}}class I extends o.x{constructor(e){super(),this.source=e}global(e){const t=this.executingContext.globalScope[(0,r.X)(e)];if((0,f.i)(t.value)&&!(t.value instanceof u.CU)){const e=new u.CU;e.fn=t.value,e.parameterEvaluator=F,e.context=this.executingContext,t.value=e}return t.value}setGlobal(e,t){if((0,f.i)(t))throw new c.D$(null,c.TX.AssignModuleFunction,null);this.executingContext.globalScope[(0,r.X)(e)]={value:t}}hasGlobal(e){return void 0===this.executingContext.exports[e]&&(e=(0,r.X)(e)),void 0!==this.executingContext.exports[e]}async loadModule(e){let t=e.spatialReference;null==t&&(t=new X.A({wkid:102100})),this.moduleScope=P({},e.customfunctions,e.timeZone),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new a.a(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===e.abortSignal||null===e.abortSignal?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console??V,lrucache:e.lrucache,timeZone:e.timeZone??null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await B(this.executingContext,this.source.syntax)}}async function F(e,t,n){return!0===t.preparsed?n(e,null,t.arguments):n(e,t,await T(e,t))}async function A(e,t){t.breakpoint&&await t.breakpoint();try{switch(t.type){case"UpdateExpression":return await async function(e,t){const n=t.argument;if("CallExpression"===n.type)throw new c.D$(e,c.TX.NeverReach,t);if("MemberExpression"===n.type){const r=await A(e,n.object);let o,a;if(!0===n.computed)o=await A(e,n.property);else{if("Identifier"!==n.property.type)throw new c.D$(e,c.TX.Unrecognized,t);o=n.property.name}if((0,S.cy)(r)){if(!(0,S.Et)(o))throw new c.D$(e,c.TX.ArrayAccessorMustBeNumber,t);if(o<0&&(o=r.length+o),o<0||o>=r.length)throw new c.D$(e,c.TX.OutOfBounds,t);a=(0,f.t)(r[o]),r[o]="++"===t.operator?a+1:a-1}else if(r instanceof l.A){if(!1===(0,S.Kg)(o))throw new c.D$(e,c.TX.KeyAccessorMustBeString,t);if(!0!==r.hasField(o))throw new c.D$(e,c.TX.FieldNotFound,t,{key:o});a=(0,f.t)(r.field(o)),r.setField(o,"++"===t.operator?a+1:a-1)}else if(r instanceof I){if(!1===(0,S.Kg)(o))throw new c.D$(e,c.TX.ModuleAccessorMustBeString,t);if(!0!==r.hasGlobal(o))throw new c.D$(e,c.TX.ModuleExportNotFound,t);a=(0,f.t)(r.global(o)),r.setGlobal(o,"++"===t.operator?a+1:a-1)}else{if(!(0,f.n)(r))throw(0,f.m)(r)?new c.D$(e,c.TX.Immutable,t):new c.D$(e,c.TX.InvalidParameter,t);if(!1===(0,S.Kg)(o))throw new c.D$(e,c.TX.KeyAccessorMustBeString,t);if(!0!==r.hasField(o))throw new c.D$(e,c.TX.FieldNotFound,t,{key:o});a=(0,f.t)(r.field(o)),r.setField(o,"++"===t.operator?a+1:a-1)}return!1===t.prefix?a:"++"===t.operator?a+1:a-1}const o=(0,r.X)(n);let a;if(null!=e.localScope&&void 0!==e.localScope[o])return a=(0,f.t)(e.localScope[o].value),e.localScope[o]={value:"++"===t.operator?a+1:a-1},!1===t.prefix?a:"++"===t.operator?a+1:a-1;if(void 0!==e.globalScope[o])return a=(0,f.t)(e.globalScope[o].value),e.globalScope[o]={value:"++"===t.operator?a+1:a-1},!1===t.prefix?a:"++"===t.operator?a+1:a-1;throw new c.D$(e,c.TX.InvalidIdentifier,t)}(e,t);case"AssignmentExpression":return await async function(e,t){const n=t.left;if("MemberExpression"===n.type){const r=await A(e,n.object);let o;if(!0===n.computed)o=await A(e,n.property);else{if("Identifier"!==n.property.type)throw new c.D$(e,c.TX.InvalidIdentifier,t);o=n.property.name}const a=await A(e,t.right);if((0,S.cy)(r)){if(!(0,S.Et)(o))throw new c.D$(e,c.TX.ArrayAccessorMustBeNumber,t);if(o<0&&(o=r.length+o),o<0||o>r.length)throw new c.D$(e,c.TX.OutOfBounds,t);if(o===r.length){if("="!==t.operator)throw new c.D$(e,c.TX.OutOfBounds,t);r[o]=N(a,t.operator,r[o],t,e)}else r[o]=N(a,t.operator,r[o],t,e)}else if(r instanceof l.A){if(!1===(0,S.Kg)(o))throw new c.D$(e,c.TX.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,N(a,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new c.D$(e,c.TX.FieldNotFound,t,{key:o});r.setField(o,N(a,t.operator,null,t,e))}}else if(r instanceof I){if(!1===(0,S.Kg)(o))throw new c.D$(e,c.TX.KeyAccessorMustBeString,t);if(!0!==r.hasGlobal(o))throw new c.D$(e,c.TX.ModuleExportNotFound,t);r.setGlobal(o,N(a,t.operator,r.global(o),t,e))}else{if(!(0,f.n)(r))throw(0,f.m)(r)?new c.D$(e,c.TX.Immutable,t):new c.D$(e,c.TX.InvalidParameter,t);if(!1===(0,S.Kg)(o))throw new c.D$(e,c.TX.KeyAccessorMustBeString,t);if(!0===r.hasField(o))r.setField(o,N(a,t.operator,r.field(o),t,e));else{if("="!==t.operator)throw new c.D$(e,c.TX.FieldNotFound,t,{key:o});r.setField(o,N(a,t.operator,null,t,e))}}return f.w}const o=(0,r.X)(n);if(null!=e.localScope&&void 0!==e.localScope[o]){const n=await A(e,t.right);return e.localScope[o]={value:N(n,t.operator,e.localScope[o].value,t,e)},f.w}if(void 0!==e.globalScope[o]){const n=await A(e,t.right);return e.globalScope[o]={value:N(n,t.operator,e.globalScope[o].value,t,e)},f.w}throw new c.D$(e,c.TX.InvalidIdentifier,t)}(e,t);case"TemplateLiteral":return await async function(e,t){let n="",r=0;for(const o of t.quasis)if(n+=o.value?o.value.cooked:"",!1===o.tail){if(t.expressions[r]){const o=await A(e,t.expressions[r]);if((0,f.i)(o))throw new c.D$(e,c.TX.NoFunctionInTemplateLiteral,t);n+=(0,f.f)(o)}r++}return n}(e,t);case"Identifier":return E(e,t);case"MemberExpression":return await async function(e,t){const n=await A(e,t.object);if(null===n)throw new c.D$(e,c.TX.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(n instanceof l.A||(0,f.z)(n))return n.field(t.property.name);if(n instanceof D.A)return(0,i.Bl)(n,t.property.name,e,t);if(n instanceof I){if(!n.hasGlobal(t.property.name))throw new c.D$(e,c.TX.InvalidIdentifier,t);return n.global(t.property.name)}throw new c.D$(e,c.TX.InvalidMemberAccessKey,t)}throw new c.D$(e,c.TX.InvalidMemberAccessKey,t)}let r=await A(e,t.property);if(n instanceof l.A||(0,f.z)(n)){if((0,S.Kg)(r))return n.field(r);throw new c.D$(e,c.TX.InvalidMemberAccessKey,t)}if(n instanceof I){if((0,S.Kg)(r))return n.global(r);throw new c.D$(e,c.TX.InvalidMemberAccessKey,t)}if(n instanceof D.A){if((0,S.Kg)(r))return(0,i.Bl)(n,r,e,t);throw new c.D$(e,c.TX.InvalidMemberAccessKey,t)}if((0,S.cy)(n)){if((0,S.Et)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new c.D$(e,c.TX.OutOfBounds,t);return n[r]}throw new c.D$(e,c.TX.InvalidMemberAccessKey,t)}if((0,f.m)(n)){if((0,S.Et)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length()+r),r>=n.length()||r<0)throw new c.D$(e,c.TX.OutOfBounds,t);return n.get(r)}throw new c.D$(e,c.TX.InvalidMemberAccessKey,t)}if((0,S.Kg)(n)){if((0,S.Et)(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=n.length+r),r>=n.length||r<0)throw new c.D$(e,c.TX.OutOfBounds,t);return n[r]}throw new c.D$(e,c.TX.InvalidMemberAccessKey,t)}throw new c.D$(e,c.TX.InvalidMemberAccessKey,t)}(e,t);case"Literal":return t.value;case"CallExpression":return await async function(e,t){if("MemberExpression"===t.callee.type){const n=await A(e,t.callee.object);if(!(n instanceof I))throw new c.D$(e,c.TX.FunctionNotFound,t);const r=!1===t.callee.computed?t.callee.property.name:await A(e,t.callee.property);if(!n.hasGlobal(r))throw new c.D$(e,c.TX.FunctionNotFound,t);const o=n.global(r);if(!(0,f.i)(o))throw new c.D$(e,c.TX.CallNonFunction,t);return o.call(e,t)}if("Identifier"!==t.callee.type)throw new c.D$(e,c.TX.FunctionNotFound,t);const n=(0,r.X)(t.callee);if(null!=e.localScope&&void 0!==e.localScope[n]){const r=e.localScope[n];if((0,f.i)(r.value))return r.value.call(e,t);throw new c.D$(e,c.TX.CallNonFunction,t)}if(void 0!==e.globalScope[n]){const r=e.globalScope[n];if((0,f.i)(r.value))return r.value.call(e,t);throw new c.D$(e,c.TX.CallNonFunction,t)}throw new c.D$(e,c.TX.FunctionNotFound,t)}(e,t);case"UnaryExpression":return await async function(e,t){const n=await A(e,t.argument);if((0,S.Lm)(n)){if("!"===t.operator)return!n;if("-"===t.operator)return-1*(0,f.t)(n);if("+"===t.operator)return 1*(0,f.t)(n);if("~"===t.operator)return~(0,f.t)(n);throw new c.D$(e,c.TX.UnsupportedUnaryOperator,t)}if("-"===t.operator)return-1*(0,f.t)(n);if("+"===t.operator)return 1*(0,f.t)(n);if("~"===t.operator)return~(0,f.t)(n);throw new c.D$(e,c.TX.UnsupportedUnaryOperator,t)}(e,t);case"BinaryExpression":return await async function(e,t){const n=await A(e,t.left),r=await A(e,t.right);switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return(0,f.C)((0,f.t)(n),(0,f.t)(r),t.operator);case"==":return(0,f.B)(n,r);case"!=":return!(0,f.B)(n,r);case"<":case">":case"<=":case">=":return(0,f.A)(n,r,t.operator);case"+":return(0,S.Kg)(n)||(0,S.Kg)(r)?(0,f.f)(n)+(0,f.f)(r):(0,f.t)(n)+(0,f.t)(r);case"-":return(0,f.t)(n)-(0,f.t)(r);case"*":return(0,f.t)(n)*(0,f.t)(r);case"/":return(0,f.t)(n)/(0,f.t)(r);case"%":return(0,f.t)(n)%(0,f.t)(r);default:throw new c.D$(e,c.TX.UnsupportedOperator,t)}}(e,t);case"LogicalExpression":return await async function(e,t){const n=await A(e,t.left);if(!(0,S.Lm)(n))throw new c.D$(e,c.TX.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":{if(!0===n)return n;const r=await A(e,t.right);if((0,S.Lm)(r))return r;throw new c.D$(e,c.TX.LogicExpressionOrAnd,t)}case"&&":{if(!1===n)return n;const r=await A(e,t.right);if((0,S.Lm)(r))return r;throw new c.D$(e,c.TX.LogicExpressionOrAnd,t)}default:throw new c.D$(e,c.TX.LogicExpressionOrAnd,t)}}(e,t);case"ArrayExpression":return await async function(e,t){const n=[];for(let r=0;r<t.elements.length;r++)n.push(await A(e,t.elements[r]));for(let r=0;r<n.length;r++){if((0,f.i)(n[r]))throw new c.D$(e,c.TX.NoFunctionInArray,t);n[r]===f.w&&(n[r]=null)}return n}(e,t);case"ObjectExpression":return await async function(e,t){const n=[];for(let i=0;i<t.properties.length;i++){const r=t.properties[i],o=await A(e,r.value),a="Identifier"===r.key.type?r.key.name:await A(e,r.key);n[i]={key:a,value:o}}const r={},o=new Map;for(let i=0;i<n.length;i++){const a=n[i];if((0,f.i)(a.value))throw new c.D$(e,c.TX.NoFunctionInDictionary,t);if(!1===(0,S.Kg)(a.key))throw new c.D$(e,c.TX.KeyMustBeString,t);let l=a.key.toString();const s=l.toLowerCase();o.has(s)?l=o.get(s):o.set(s,l),a.value===f.w?r[l]=null:r[l]=a.value}const a=new l.A(r);return a.immutable=!1,a}(e,t);default:throw new c.D$(e,c.TX.Unrecognized,t)}}catch(n){throw(0,c.Nh)(e,t,n)}}async function R(e,t){t.breakpoint&&await t.breakpoint();try{switch(t.type){case"ImportDeclaration":return await async function(e,t){const n=(0,r.X)(t.specifiers[0].local),o=e.libraryResolver.loadLibrary(n);let a;return e.libraryResolver._moduleSingletons?.has(o.uri)?a=e.libraryResolver._moduleSingletons.get(o.uri):(a=new I(o),await a.loadModule(e),e.libraryResolver._moduleSingletons?.set(o.uri,a)),e.globalScope[n]={value:a},f.w}(e,t);case"ExportNamedDeclaration":return await async function(e,t){if(await R(e,t.declaration),"FunctionDeclaration"===t.declaration.type)e.exports[(0,r.X)(t.declaration.id)]="function";else if("VariableDeclaration"===t.declaration.type)for(const n of t.declaration.declarations)e.exports[(0,r.X)(n.id)]="variable";return f.w}(e,t);case"VariableDeclaration":return await O(e,t,0);case"BlockStatement":return await B(e,t);case"FunctionDeclaration":return await async function(e,t){const n=(0,r.X)(t.id);return e.globalScope[n]={value:new $(t,e)},f.w}(e,t);case"ReturnStatement":return await async function(e,t){if(null===t.argument)return new f.R(f.w);const n=await A(e,t.argument);return new f.R(n)}(e,t);case"IfStatement":return await async function(e,t){const n=await A(e,t.test);if(!0===n)return R(e,t.consequent);if(!1===n)return null!==t.alternate?R(e,t.alternate):f.w;throw new c.D$(e,c.TX.BooleanConditionRequired,t)}(e,t);case"ExpressionStatement":return await async function(e,t){const n=await A(e,t.expression);return n===f.w?f.w:new f.I(n)}(e,t);case"ForStatement":return await async function(e,t){try{for(null!==t.init&&("VariableDeclaration"===t.init.type?await R(e,t.init):await A(e,t.init));;){if(null!==t.test){const n=await A(e,t.test);if(!0===e.abortSignal?.aborted)throw new c.D$(e,c.TX.Cancelled,t);if(!1===n)break;if(!0!==n)throw new c.D$(e,c.TX.BooleanConditionRequired,t)}const n=await R(e,t.body);if(n===f.x)break;if(n instanceof f.R)return n;null!==t.update&&await A(e,t.update)}return f.w}catch(n){throw n}}(e,t);case"WhileStatement":return await async function(e,t){let n=await A(e,t.test);if(!1===n)return f.w;if(!0!==n)throw new c.D$(e,c.TX.BooleanConditionRequired,t);for(;!0===n;){const r=await R(e,t.body);if(r===f.x)break;if(r instanceof f.R)return r;if(n=await A(e,t.test),!0!==n&&!1!==n)throw new c.D$(e,c.TX.BooleanConditionRequired,t)}return f.w}(e,t);case"ForInStatement":return await async function(e,t){const n=await A(e,t.right);"VariableDeclaration"===t.left.type&&await R(e,t.left);const o=(0,r.X)("VariableDeclaration"===t.left.type?t.left.declarations[0].id:t.left);let a=null;if(null!=e.localScope&&void 0!==e.localScope[o]&&(a=e.localScope[o]),null===a&&void 0!==e.globalScope[o]&&(a=e.globalScope[o]),null===a)throw new c.D$(e,c.TX.InvalidIdentifier,t);return(0,S.cy)(n)||(0,S.Kg)(n)?await k(e,t,n,a):(0,f.m)(n)?await C(e,t,n,a):n instanceof l.A||(0,f.z)(n)?await k(e,t,n.keys(),a,"k"):(0,f.p)(n)?await M(e,t,n,a):(0,f.l)(n)?await k(e,t,(0,i.T)(n),a,"k"):f.w}(e,t);case"ForOfStatement":return await async function(e,t){const n=await A(e,t.right);"VariableDeclaration"===t.left.type&&await R(e,t.left);const o=(0,r.X)("VariableDeclaration"===t.left.type?t.left.declarations[0].id:t.left);let a=null;if(null!=e.localScope&&void 0!==e.localScope[o]&&(a=e.localScope[o]),null===a&&void 0!==e.globalScope[o]&&(a=e.globalScope[o]),null===a)throw new c.D$(e,c.TX.InvalidIdentifier,t);return(0,S.cy)(n)||(0,S.Kg)(n)?await k(e,t,n,a,"k"):(0,f.m)(n)?await C(e,t,n,a,"k"):n instanceof l.A||(0,f.z)(n)?await async function(e,t,n,r){for(const o of n.keys()){const a=n.field(o);r.value=new l.A({key:o,value:a});const i=await R(e,t.body);if(i===f.x)break;if(i instanceof f.R)return i}return f.w}(e,t,n,a):(0,f.p)(n)?await M(e,t,n,a):(0,f.l)(n)?await async function(e,t,n,r){for(const o of(0,i.T)(n)){const a=(0,i.Bl)(n,o,e,t,1);r.value=new l.A({key:o,value:a});const c=await R(e,t.body);if(c===f.x)break;if(c instanceof f.R)return c}return f.w}(e,t,n,a):f.w}(e,t);case"BreakStatement":return f.x;case"EmptyStatement":return f.w;case"ContinueStatement":return f.y;default:throw new c.D$(e,c.TX.Unrecognized,t)}}catch(n){throw(0,c.Nh)(e,t,n)}}async function k(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"i";const a=n.length;for(let i=0;i<a;i++){if("k"===o){if(i>=n.length)throw new c.D$(e,c.TX.OutOfBounds,t);r.value=n[i]}else r.value=i;const a=await R(e,t.body);if(a===f.x)break;if(a instanceof f.R)return a}return f.w}async function C(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"i";const a=n.length();for(let i=0;i<a;i++){r.value="k"===o?n.get(i):i;const a=await R(e,t.body);if(a===f.x)break;if(a instanceof f.R)return a}return f.w}async function M(e,t,n,r){const o=n.iterator(e.abortSignal);let a;for(;null!=(a=await o.next());){const o=s.A.createFromGraphicLikeObject(a.geometry,a.attributes,n,e.timeZone);o._underlyingGraphic=a,r.value=o;const i=await R(e,t.body);if(i===f.x)break;if(i instanceof f.R)return i}return f.w}function N(e,t,n,r,o){switch(t){case"=":return e===f.w?null:e;case"/=":return(0,f.t)(n)/(0,f.t)(e);case"*=":return(0,f.t)(n)*(0,f.t)(e);case"-=":return(0,f.t)(n)-(0,f.t)(e);case"+=":return(0,S.Kg)(n)||(0,S.Kg)(e)?(0,f.f)(n)+(0,f.f)(e):(0,f.t)(n)+(0,f.t)(e);case"%=":return(0,f.t)(n)%(0,f.t)(e);default:throw new c.D$(o,c.TX.UnsupportedOperator,r)}}async function B(e,t){return K(e,t,0)}async function K(e,t,n){if(n>=t.body.length)return f.w;const r=await R(e,t.body[n]);return r instanceof f.R||r===f.x||r===f.y||n===t.body.length-1?r:K(e,t,n+1)}async function O(e,t,n){return n>=t.declarations.length||(await async function(e,t){let n=null;if(n=null===t.init?null:await A(e,t.init),null!==e.localScope){if(n===f.w&&(n=null),"Identifier"!==t.id.type)throw new c.D$(e,c.TX.InvalidIdentifier,t);const o=(0,r.X)(t.id);return void(null!=e.localScope&&(e.localScope[o]={value:n}))}if("Identifier"!==t.id.type)throw new c.D$(e,c.TX.InvalidIdentifier,t);const o=(0,r.X)(t.id);n===f.w&&(n=null),e.globalScope[o]={value:n}}(e,t.declarations[n]),n===t.declarations.length-1||await O(e,t,n+1)),f.w}function E(e,t){const n=(0,r.X)(t);if(null!=e.localScope&&void 0!==e.localScope[n])return e.localScope[n].value;if(void 0!==e.globalScope[n])return e.globalScope[n].value;throw new c.D$(e,c.TX.InvalidIdentifier,t)}const U={};async function L(e,t,n,r){const o=await A(e,t.arguments[n]);if((0,f.B)(o,r))return A(e,t.arguments[n+1]);const a=t.arguments.length-n;return 1===a?A(e,t.arguments[n]):2===a?null:3===a?A(e,t.arguments[n+2]):L(e,t,n+2,r)}async function Z(e,t,n,r){if(!0===r)return A(e,t.arguments[n+1]);if(3===t.arguments.length-n)return A(e,t.arguments[n+2]);const o=await A(e,t.arguments[n+2]);if(!1===(0,S.Lm)(o))throw new c.D$(e,c.TX.ModuleExportNotFound,t.arguments[n+2]);return Z(e,t,n+2,o)}async function G(e,t,n,o){const a=e.body;if(n.length!==e.params.length)throw new c.D$(t,c.TX.WrongNumberOfParameters,null);for(let l=0;l<n.length;l++){const o=e.params[l];"Identifier"===o.type&&null!=t.localScope&&(t.localScope[(0,r.X)(o)]={value:n[l]})}const i=await R(t,a);if(i instanceof f.R)return i.value;if(i===f.x)throw new c.D$(t,c.TX.UnexpectedToken,o);if(i===f.y)throw new c.D$(t,c.TX.UnexpectedToken,o);return i instanceof f.I?i.value:i}(0,d.d)(U,x),(0,v.d)(U,x),(0,h.d)(U,x,E),(0,m.d)(U,x),(0,y.d)(U,x),(0,b.d)(U,x),(0,g.registerFunctions)({functions:U,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:x,standardFunctionAsync:F}),U.iif=async function(e,t){(0,f.D)(null===t.arguments?[]:t.arguments,3,3,e,t);const n=await A(e,t.arguments[0]);if(!1===(0,S.Lm)(n))throw new c.D$(e,c.TX.BooleanConditionRequired,t);return A(e,n?t.arguments[1]:t.arguments[2])},U.defaultvalue=async function(e,t){(0,f.D)(null===t.arguments?[]:t.arguments,2,3,e,t);const n=await A(e,t.arguments[0]);if(3===t.arguments.length){const r=await A(e,t.arguments[1]),o=(0,i.jd)(n,r);return null!=o&&""!==o?o:A(e,t.arguments[2])}return null==n||""===n?A(e,t.arguments[1]):n},U.decode=async function(e,t){if(t.arguments.length<2)throw new c.D$(e,c.TX.WrongNumberOfParameters,t);if(2===t.arguments.length)return A(e,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new c.D$(e,c.TX.WrongNumberOfParameters,t);return L(e,t,1,await A(e,t.arguments[0]))},U.when=async function(e,t){if(t.arguments.length<3)throw new c.D$(e,c.TX.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new c.D$(e,c.TX.WrongNumberOfParameters,t);const n=await A(e,t.arguments[0]);if(!1===(0,S.Lm)(n))throw new c.D$(e,c.TX.BooleanConditionRequired,t.arguments[0]);return Z(e,t,0,n)};const q={fixSpatialReference:f.u,parseArguments:T,standardFunction:x,standardFunctionAsync:F,evaluateIdentifier:E};for(const Q in U)U[Q]={value:new u.UQ(U[Q])};const _=function(){};function P(e,t,n){const r=new _;null==e&&(e={}),null==t&&(t={});const o=new l.A({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o};for(const a in t)r[a]={value:new u.UQ(t[a])};for(const a in e)r[a]={value:(0,S.DU)(e[a])?s.A.createFromGraphic(e[a],n):e[a]};return r}function V(e){console.log(e)}_.prototype=U,_.prototype.infinity={value:Number.POSITIVE_INFINITY},_.prototype.pi={value:Math.PI};const j=q;function z(e){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:x,standardFunctionAsync:F,evaluateIdentifier:E};for(let n=0;n<e.length;n++)e[n].registerFunctions(t);for(const n in t.functions)U[n]={value:new u.UQ(t.functions[n])},_.prototype[n]=U[n];for(let n=0;n<t.signatures.length;n++)(0,w.WC)(t.signatures[n],"async")}async function W(e,t){let n=t.spatialReference;null==n&&(n=new X.A({wkid:102100}));let r=null;e.usesModules&&(r=new a.a(new Map,e.loadedModules));const o=P(t.vars,t.customfunctions,t.timeZone),i={spatialReference:n,services:t.services,exports:{},libraryResolver:r,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:o,console:t.console??V,timeZone:t.timeZone??null,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}},l=await B(i,e);if(l instanceof f.R||l instanceof f.I){const e=l.value;if(e===f.w)return null;if((0,f.i)(e))throw new c.D$(i,c.TX.IllegalResult,null);return e}if(l===f.w)return null;if(l===f.x)throw new c.D$(i,c.TX.IllegalResult,null);if(l===f.y)throw new c.D$(i,c.TX.IllegalResult,null);throw new c.D$(i,c.TX.NeverReach,null)}z([p.A])}}]);
//# sourceMappingURL=3245.c31d9976.chunk.js.map