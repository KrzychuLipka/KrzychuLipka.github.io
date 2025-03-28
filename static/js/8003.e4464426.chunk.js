/*! For license information please see 8003.e4464426.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[8003],{929:(e,t,n)=>{n.d(t,{I:()=>h,u:()=>d});var a=n(28531),i=n(5417);function c(){const{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function o(e){e.target.disabled&&e.preventDefault()}const r=["mousedown","mouseup","click"];function l(e){e.target.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}const s={capture:!0};function d(e){if(e.disabled)return e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),void function(e){e.el.click=c,function(e){e.addEventListener("pointerdown",o,s),r.forEach((t=>e.addEventListener(t,l,s)))}(e.el)}(e);(function(e){delete e.el.click,function(e){e.removeEventListener("pointerdown",o,s),r.forEach((t=>e.removeEventListener(t,l,s)))}(e.el)})(e),e.el.removeAttribute("aria-disabled")}const p="interaction-container",h=e=>{let{children:t,disabled:n}=e;return a.qy`<div class=${(0,i.CP)(p)} .inert=${n}>${t}</div>`}},26425:(e,t,n)=>{n.d(t,{C:()=>a,I:()=>o,M:()=>c,S:()=>i,a:()=>r});const a={actionsEnd:"actions-end",actionsStart:"actions-start",description:"description",close:"close",container:"container",containerHover:"container--hover",containerBorder:"container--border",containerBorderSelected:"container--border-selected",containerBorderUnselected:"container--border-unselected",content:"content",contentBottom:"content-bottom",contentContainer:"content-container",contentContainerHasCenterContent:"content-container--has-center-content",contentContainerSelectable:"content-container--selectable",contentContainerUnavailable:"content-container--unavailable",contentContainerWrapper:"content-container-wrapper",contentContainerWrapperBordered:"content-container-wrapper--bordered",contentEnd:"content-end",contentStart:"content-start",customContent:"custom-content",expandedContainer:"expanded-container",dragContainer:"drag-container",gridCell:"grid-cell",icon:"icon",nestedContainer:"nested-container",nestedContainerExpanded:"nested-container--expanded",label:"label",row:"row",selectionContainer:"selection-container",selectionContainerSingle:"selection-container--single",wrapper:"wrapper",wrapperBordered:"wrapper--bordered"},i={actionsStart:"actions-start",contentStart:"content-start",content:"content",contentBottom:"content-bottom",contentEnd:"content-end",actionsEnd:"actions-end"},c=0,o={selectedMultiple:"check-square-f",selectedSingle:"circle-inset-large",unselectedMultiple:"square",unselectedSingle:"circle",collapsedLTR:"chevron-right",collapsedRTL:"chevron-left",open:"chevron-down",blank:"blank",close:"x"},r="data-test-active"},28003:(e,t,n)=>{n.r(t),n.d(t,{ListItemGroup:()=>h});var a=n(30697),i=n(28531),c=n(5417),o=n(929),r=n(26425),l=n(94161);const s="container",d="heading",p=l.AH`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0;display:flex;flex:1 1 0%;background-color:var(--calcite-list-background-color, var(--calcite-color-foreground-1));color:var(--calcite-list-color, var(--calcite-color-text-2))}.heading{font-weight:var(--calcite-font-weight-medium)}:host([scale=s]) .container{padding-inline:var(--calcite-spacing-sm)}:host([scale=s]) .heading{font-size:var(--calcite-font-size-sm);line-height:var(--calcite-font-line-height-fixed-base);padding-block:var(--calcite-spacing-sm) var(--calcite-spacing-xxs)}:host([scale=s]:not(:first-child)) .container{padding-block-start:var(--calcite-spacing-sm)}:host([scale=m]) .container{padding-inline:var(--calcite-spacing-md)}:host([scale=m]) .heading{font-size:var(--calcite-font-size);line-height:var(--calcite-font-line-height-fixed-base);padding-block:var(--calcite-spacing-lg) var(--calcite-spacing-sm)}:host([scale=m]:not(:first-child)) .container{padding-block-start:var(--calcite-spacing-md)}:host([scale=l]) .container{padding-inline:var(--calcite-spacing-lg)}:host([scale=l]) .heading{font-size:var(--calcite-font-size-md);line-height:var(--calcite-font-line-height-fixed-lg);padding-block:var(--calcite-spacing-xl) var(--calcite-spacing-sm-plus, .625rem)}:host([scale=l]:not(:first-child)) .container{padding-block-start:var(--calcite-spacing-md-plus, .875rem)}.heading{padding:0}:host([hidden]){display:none}[hidden]{display:none}`;class h extends c.WF{constructor(){super(...arguments),this.disabled=!1,this.filterHidden=!1,this.scale="m",this.calciteInternalListItemGroupDefaultSlotChange=(0,c.lh)({cancelable:!1})}static#e=(()=>this.properties={disabled:7,filterHidden:7,heading:3,scale:3})();static#t=(()=>this.styles=p)();updated(){(0,o.u)(this)}handleDefaultSlotChange(){this.calciteInternalListItemGroupDefaultSlotChange.emit()}render(){const{disabled:e,heading:t}=this;return(0,o.I)({disabled:e,children:i.qy`<div class=${(0,c.CP)(s)} role=row><div .ariaColSpan=${r.M} class=${(0,c.CP)(d)} role=cell>${t}</div></div><slot @slotchange=${this.handleDefaultSlotChange}></slot>`})}}(0,a.c)("calcite-list-item-group",h)}}]);
//# sourceMappingURL=8003.e4464426.chunk.js.map