/*! For license information please see 2647.0bfeea12.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgeo_desc_test=self.webpackChunkgeo_desc_test||[]).push([[2647],{32263:(e,t,a)=>{a(35688);var n=a(30697),o=a(80526),i=a(28531),l=a(5417),r=a(13922),s=a(50965),c=a(88267),d=a(94161);const h="scrim",p="content",g=72,f=480,u=d.AH`:host{position:absolute;inset:0;z-index:var(--calcite-z-index-overlay);display:flex;block-size:100%;inline-size:100%;flex-direction:column;align-items:stretch}@keyframes calcite-scrim-fade-in{0%{--tw-bg-opacity: 0 }to{--tw-text-opacity: 1 }}.scrim{position:absolute;inset:0;display:flex;flex-direction:column;align-content:center;align-items:center;justify-content:center;overflow:hidden;animation:calcite-scrim-fade-in var(--calcite-internal-animation-timing-medium) ease-in-out;background-color:var(--calcite-scrim-background, var(--calcite-color-transparent-scrim))}.content{padding:1rem}:host([hidden]){display:none}[hidden]{display:none}`;class v extends l.WF{constructor(){super(...arguments),this.resizeObserver=(0,r.c)("resize",(()=>this.handleResize())),this.hasContent=!1,this.loading=!1,this.messages=(0,c.u)()}static#e=(()=>this.properties={hasContent:16,loaderScale:16,loading:7,messageOverrides:0})();static#t=(()=>this.styles=u)();connectedCallback(){super.connectedCallback(),this.resizeObserver?.observe(this.el)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}handleDefaultSlotChange(e){this.hasContent=(0,s.r)(e)}storeLoaderEl(e){this.loaderEl=e,this.handleResize()}getScale(e){return e<g?"s":e>=f?"l":"m"}handleResize(){const{loaderEl:e,el:t}=this;e&&(this.loaderScale=this.getScale(Math.min(t.clientHeight,t.clientWidth)??0))}render(){const{hasContent:e,loading:t,messages:a}=this;return i.qy`<div class=${(0,l.CP)(h)}>${t?i.qy`<calcite-loader .label=${a.loading} .scale=${this.loaderScale} ${(0,o.K)(this.storeLoaderEl)}></calcite-loader>`:null}<div class=${(0,l.CP)(p)} .hidden=${!e}><slot @slotchange=${this.handleDefaultSlotChange}></slot></div></div>`}}(0,n.c)("calcite-scrim",v)},32647:(e,t,a)=>{a(85375),a(95099),a(32263);var n=a(30697),o=a(49469),i=a(80526),l=a(37022),r=a(5417),s=a(50965),c=a(929),d=a(98246),h=a(13922),p=a(28460),g=a(223),f=a(3890),u=a(88267),v=a(33683);const b=a(94161).AH`:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height: calc(var(--calcite-icon-size) * 3);border-radius:var(--calcite-panel-corner-radius, var(--calcite-corner-radius-sharp))}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.header{margin:0;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-color-text-2);color:var(--calcite-color-text-2)}.heading{margin:0;padding:0;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:.5rem}:host([scale=s]){--calcite-internal-panel-default-space: var(--calcite-spacing-sm);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-sm-plus)}:host([scale=s]) .header-content .heading{font-size:var(--calcite-font-size--1)}:host([scale=s]) .header-content .description{font-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-internal-panel-default-space: var(--calcite-spacing-md);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-md-plus)}:host([scale=m]) .header-content .heading{font-size:var(--calcite-font-size-0)}:host([scale=m]) .header-content .description{font-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-internal-panel-default-space: var(--calcite-spacing-lg);--calcite-internal-panel-header-vertical-padding: var(--calcite-spacing-xl)}:host([scale=l]) .header-content .heading{font-size:var(--calcite-font-size-1)}:host([scale=l]) .header-content .description{font-size:var(--calcite-font-size-0)}.content-top,.content-bottom{display:flex;align-items:flex-start;align-self:stretch;padding:var(--calcite-internal-panel-default-space);border-block-start:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3));background-color:var(--calcite-panel-background-color, var(--calcite-color-foreground-1))}.container{position:relative;margin:0;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;overflow:hidden;background-color:var(--calcite-color-background);padding:0;color:var(--calcite-color-text-2);transition:max-block-size var(--calcite-animation-timing),inline-size var(--calcite-animation-timing);box-sizing:border-box;font-size:var(--calcite-font-size--1)}.container *{box-sizing:border-box}.container[hidden]{display:none}.header{z-index:var(--calcite-z-index-header);display:flex;flex-direction:column;background-color:var(--calcite-panel-header-background-color, var(--calcite-color-foreground-1));border-block-end:1px solid var(--calcite-panel-border-color, var(--calcite-panel-header-border-block-end, var(--calcite-color-border-3)))}.header-container{display:flex;inline-size:100%;flex-direction:row;align-items:stretch;justify-content:flex-start;flex:0 0 auto}.header-container--border-end{border-block-end:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3))}.action-bar-container{inline-size:100%}.action-bar-container ::slotted(calcite-action-bar){inline-size:100%}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:.75rem;padding-block:.875rem;margin-inline-end:auto;justify-content:center}.header-content .heading,.header-content .description{display:block;flex:none;overflow-wrap:break-word;padding:0;line-height:var(--calcite-font-line-height-relative-snug)}.header-content .heading{font-weight:var(--calcite-font-weight-medium);color:var(--calcite-panel-heading-text-color, var(--calcite-color-text-1))}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{color:var(--calcite-panel-description-text-color, var(--calcite-color-text-2))}#close,#collapse,.back-button,calcite-action-menu{--calcite-action-background-color: var(--calcite-panel-header-action-background-color);--calcite-action-background-color-hover: var(--calcite-panel-header-action-background-color-hover);--calcite-action-background-color-press: var(--calcite-panel-header-action-background-color-press);--calcite-action-text-color: var(--calcite-panel-header-action-text-color);--calcite-action-text-color-pressed: var(--calcite-panel-header-action-text-color-pressed)}.back-button{border-width:0px;border-style:solid;border-inline-end-width:1px;border-color:var(--calcite-panel-border-color, var(--calcite-color-border-3))}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{position:relative;display:flex;block-size:100%;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;overflow:auto;color:var(--calcite-color-text-2);outline-color:transparent;padding:var(--calcite-panel-space, var(--calcite-panel-content-space, 0));background:var(--calcite-panel-background-color, var(--calcite-color-background))}.content-wrapper:focus-visible{outline:2px solid var(--calcite-color-focus, var(--calcite-ui-focus-color, var(--calcite-color-brand)));outline-offset:calc(-2px*(1 - (2*clamp(0,var(--calcite-offset-invert-focus),1))))}.header-content{flex:1 1 auto;justify-content:center;padding-block:var(--calcite-internal-panel-header-vertical-padding);padding-inline:var(--calcite-internal-panel-default-space)}.header-content.header-slotted-content{padding:var(--calcite-panel-header-content-space, var(--calcite-internal-panel-header-vertical-padding) var(--calcite-internal-panel-default-space))}.footer{margin-block-start:auto;display:flex;flex-direction:row;align-content:space-between;align-items:center;justify-content:center;font-size:var(--calcite-font-size--2);line-height:1.375;border-block-start:1px solid var(--calcite-panel-border-color, var(--calcite-color-border-3));padding:var(--calcite-panel-footer-space, var(--calcite-panel-footer-padding, var(--calcite-internal-panel-default-space)));background-color:var(--calcite-panel-footer-background-color, var(--calcite-color-foreground-1))}.footer-content{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:center}.footer-actions{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:space-evenly;gap:var(--calcite-internal-panel-default-space)}.footer-start{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-start;margin-inline-end:auto;gap:var(--calcite-internal-panel-default-space)}.footer-end{display:flex;flex:1 1 0%;flex-direction:row;align-items:center;justify-content:flex-end;margin-inline-start:auto;gap:var(--calcite-internal-panel-default-space)}.fab-container{position:sticky;inset-block-end:0px;z-index:var(--calcite-z-index-sticky);margin-block:0px;margin-inline:auto;display:block;padding:.5rem;inset-inline:0;inline-size:fit-content}:host([hidden]){display:none}[hidden]{display:none}`;class C extends r.WF{constructor(){super(),this.resizeObserver=(0,h.c)("resize",(()=>this.resizeHandler())),this.hasActionBar=!1,this.hasContentBottom=!1,this.hasContentTop=!1,this.hasEndActions=!1,this.hasFab=!1,this.hasFooterActions=!1,this.hasFooterContent=!1,this.hasFooterEndContent=!1,this.hasFooterStartContent=!1,this.hasHeaderContent=!1,this.hasMenuItems=!1,this.hasStartActions=!1,this.isClosed=!1,this.showHeaderContent=!1,this.closable=!1,this.closed=!1,this.collapseDirection="down",this.collapsed=!1,this.collapsible=!1,this.disabled=!1,this.loading=!1,this.menuOpen=!1,this.menuPlacement=f.e,this.messages=(0,u.u)(),this.overlayPositioning="absolute",this.scale="m",this.calcitePanelClose=(0,r.lh)({cancelable:!1}),this.calcitePanelScroll=(0,r.lh)({cancelable:!1}),this.calcitePanelToggle=(0,r.lh)({cancelable:!1}),this.listen("keydown",this.panelKeyDownHandler)}static#e=(()=>this.properties={hasActionBar:16,hasContentBottom:16,hasContentTop:16,hasEndActions:16,hasFab:16,hasFooterActions:16,hasFooterContent:16,hasFooterEndContent:16,hasFooterStartContent:16,hasHeaderContent:16,hasMenuItems:16,hasStartActions:16,isClosed:16,showHeaderContent:16,beforeClose:0,closable:7,closed:7,collapseDirection:1,collapsed:7,collapsible:7,description:1,disabled:7,heading:1,headingLevel:11,loading:7,menuFlipPlacements:0,menuOpen:7,menuPlacement:3,messageOverrides:0,overlayPositioning:3,scale:3})();static#t=(()=>this.styles=b)();async scrollContentTo(e){this.panelScrollEl?.scrollTo(e)}async setFocus(){await(0,d.c)(this),(0,s.h)(this.containerEl)}async load(){this.isClosed=this.closed}willUpdate(e){e.has("closed")&&this.hasUpdated&&(this.closed?this.close():this.open())}updated(){(0,c.u)(this)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver?.disconnect()}resizeHandler(){const{panelScrollEl:e}=this;e&&"number"==typeof e.scrollHeight&&"number"==typeof e.offsetHeight&&(e.scrollHeight>e.offsetHeight?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex"))}setContainerRef(e){this.containerEl=e}panelKeyDownHandler(e){this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.handleUserClose(),e.preventDefault())}handleUserClose(){this.closed=!0,this.calcitePanelClose.emit()}open(){this.isClosed=!1}async close(){const e=this.beforeClose??(()=>Promise.resolve());try{await e()}catch{return void requestAnimationFrame((()=>{this.closed=!1}))}this.isClosed=!0}collapse(){this.collapsed=!this.collapsed,this.calcitePanelToggle.emit()}panelScrollHandler(){this.calcitePanelScroll.emit()}handleHeaderActionsStartSlotChange(e){this.hasStartActions=(0,s.a)(e)}handleHeaderActionsEndSlotChange(e){this.hasEndActions=(0,s.a)(e)}handleHeaderMenuActionsSlotChange(e){this.hasMenuItems=(0,s.a)(e)}handleActionBarSlotChange(e){const t=(0,s.s)(e).filter((e=>e?.matches("calcite-action-bar")));t.forEach((e=>e.layout="horizontal")),this.hasActionBar=!!t.length}handleHeaderContentSlotChange(e){this.hasHeaderContent=(0,s.a)(e)}handleFabSlotChange(e){this.hasFab=(0,s.a)(e)}handleFooterActionsSlotChange(e){this.hasFooterActions=(0,s.a)(e)}handleFooterEndSlotChange(e){this.hasFooterEndContent=(0,s.a)(e)}handleFooterStartSlotChange(e){this.hasFooterStartContent=(0,s.a)(e)}handleFooterSlotChange(e){this.hasFooterContent=(0,s.a)(e)}contentBottomSlotChangeHandler(e){this.hasContentBottom=(0,s.a)(e)}contentTopSlotChangeHandler(e){this.hasContentTop=(0,s.a)(e)}setPanelScrollEl(e){this.panelScrollEl=e,this.resizeObserver?.disconnect(),e&&(this.resizeObserver?.observe(e),this.resizeHandler())}handleAlertsSlotChange(e){(0,s.s)(e)?.map((e=>{"CALCITE-ALERT"===e.nodeName&&(e.embedded=!0)}))}renderHeaderContent(){const{heading:e,headingLevel:t,description:a,hasHeaderContent:n}=this,i=e?(0,g.H)({class:v.C.heading,level:t,children:e}):null,s=a?l.qy`<span class=${(0,r.CP)(v.C.description)}>${a}</span>`:null;return n||!i&&!s?null:(0,o.D)("header-content",l.qy`<div class=${(0,r.CP)(v.C.headerContent)}>${i}${s}</div>`)}renderActionBar(){return l.qy`<div class=${(0,r.CP)(v.C.actionBarContainer)} .hidden=${!this.hasActionBar}><slot name=${v.S.actionBar} @slotchange=${this.handleActionBarSlotChange}></slot></div>`}renderHeaderSlottedContent(){return(0,o.D)("slotted-header-content",l.qy`<div class=${(0,r.CP)({[v.C.headerContent]:!0,[v.C.headerSlottedContent]:!0})} .hidden=${!this.hasHeaderContent}><slot name=${v.S.headerContent} @slotchange=${this.handleHeaderContentSlotChange}></slot></div>`)}renderHeaderStartActions(){const{hasStartActions:e}=this;return(0,o.D)("header-actions-start",l.qy`<div class=${(0,r.CP)({[v.C.headerActionsStart]:!0,[v.C.headerActions]:!0})} .hidden=${!e}><slot name=${v.S.headerActionsStart} @slotchange=${this.handleHeaderActionsStartSlotChange}></slot></div>`)}renderHeaderActionsEnd(){const{hasEndActions:e,messages:t,closable:a,collapsed:n,collapseDirection:i,collapsible:s,hasMenuItems:c}=this,{collapse:d,expand:h,close:p}=t,g=[v.I.expand,v.I.collapse];"up"===i&&g.reverse();const f=s?l.qy`<calcite-action .ariaExpanded=${!n} .ariaLabel=${d} .icon=${n?g[0]:g[1]} id=${v.a.collapse} @click=${this.collapse} .scale=${this.scale} .text=${d} title=${(n?h:d)??l.s6}></calcite-action>`:null,u=a?l.qy`<calcite-action .ariaLabel=${p} .icon=${v.I.close} id=${v.a.close} @click=${this.handleUserClose} .scale=${this.scale} .text=${p} title=${p??l.s6}></calcite-action>`:null,b=l.qy`<slot name=${v.S.headerActionsEnd} @slotchange=${this.handleHeaderActionsEndSlotChange}></slot>`,C=e||f||u||c;return(0,o.D)("header-actions-end",l.qy`<div class=${(0,r.CP)({[v.C.headerActionsEnd]:!0,[v.C.headerActions]:!0})} .hidden=${!C}>${b}${this.renderMenu()}${f}${u}</div>`)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:a,menuFlipPlacements:n,menuPlacement:i}=this;return(0,o.D)("menu",l.qy`<calcite-action-menu .flipPlacements=${n??["top","bottom"]} .hidden=${!e} .label=${t.options} .open=${a} .overlayPositioning=${this.overlayPositioning} .placement=${i}><calcite-action .icon=${v.I.menu} .scale=${this.scale} slot=${p.S.trigger} .text=${t.options}></calcite-action><slot name=${v.S.headerMenuActions} @slotchange=${this.handleHeaderMenuActionsSlotChange}></slot></calcite-action-menu>`)}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:a,closable:n,collapsible:o,hasMenuItems:i,hasActionBar:s}=this,c=this.renderHeaderContent(),d=e||!!c||t||a||o||n||i;return this.showHeaderContent=d,l.qy`<header class=${(0,r.CP)(v.C.header)} .hidden=${!(d||s)}><div class=${(0,r.CP)({[v.C.headerContainer]:!0,[v.C.headerContainerBorderEnd]:s})} .hidden=${!d}>${this.renderHeaderStartActions()}${this.renderHeaderSlottedContent()}${c}${this.renderHeaderActionsEnd()}</div>${this.renderActionBar()}${this.renderContentTop()}</header>`}renderFooterNode(){const{hasFooterEndContent:e,hasFooterStartContent:t,hasFooterContent:a,hasFooterActions:n}=this,i=t||e||a||n;return l.qy`<footer class=${(0,r.CP)(v.C.footer)} .hidden=${!i}><div class=${(0,r.CP)(v.C.footerContent)} .hidden=${!a}><slot name=${v.S.footer} @slotchange=${this.handleFooterSlotChange}></slot></div><div class=${(0,r.CP)(v.C.footerStart)} .hidden=${a||!t}><slot name=${v.S.footerStart} @slotchange=${this.handleFooterStartSlotChange}></slot></div><div class=${(0,r.CP)(v.C.footerEnd)} .hidden=${a||!e}><slot name=${v.S.footerEnd} @slotchange=${this.handleFooterEndSlotChange}></slot></div><div class=${(0,r.CP)(v.C.footerActions)} .hidden=${a||!n}>${(0,o.D)("footer-actions-slot",l.qy`<slot name=${v.S.footerActions} @slotchange=${this.handleFooterActionsSlotChange}></slot>`)}</div></footer>`}renderContent(){return l.qy`<div class=${(0,r.CP)(v.C.contentWrapper)} .hidden=${this.collapsible&&this.collapsed} @scroll=${this.panelScrollHandler} ${(0,i.K)(this.setPanelScrollEl)}><slot></slot>${this.renderFab()}</div>`}renderContentBottom(){return l.qy`<div class=${(0,r.CP)(v.C.contentBottom)} .hidden=${!this.hasContentBottom}><slot name=${v.S.contentBottom} @slotchange=${this.contentBottomSlotChangeHandler}></slot></div>`}renderContentTop(){return l.qy`<div class=${(0,r.CP)(v.C.contentTop)} .hidden=${!this.hasContentTop}><slot name=${v.S.contentTop} @slotchange=${this.contentTopSlotChangeHandler}></slot></div>`}renderFab(){return l.qy`<div class=${(0,r.CP)(v.C.fabContainer)} .hidden=${!this.hasFab}><slot name=${v.S.fab} @slotchange=${this.handleFabSlotChange}></slot></div>`}render(){const{disabled:e,loading:t,isClosed:a}=this,n=l.qy`<article .ariaBusy=${t} class=${(0,r.CP)(v.C.container)} .hidden=${a} ${(0,i.K)(this.setContainerRef)}>${this.renderHeaderNode()}${this.renderContent()}${this.renderContentBottom()}${this.renderFooterNode()}${(0,o.D)("alerts",l.qy`<slot name=${v.S.alerts} @slotchange=${this.handleAlertsSlotChange}></slot>`)}</article>`;return(0,c.I)({disabled:e,children:l.qy`${t?l.qy`<calcite-scrim .loading=${t}></calcite-scrim>`:null}${n}`})}}(0,n.c)("calcite-panel",C)},33683:(e,t,a)=>{a.d(t,{C:()=>n,I:()=>i,S:()=>l,a:()=>o});const n={actionBarContainer:"action-bar-container",container:"container",contentBottom:"content-bottom",contentTop:"content-top",header:"header",headerContainer:"header-container",headerContainerBorderEnd:"header-container--border-end",heading:"heading",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",fabContainer:"fab-container",footer:"footer",footerContent:"footer-content",footerActions:"footer-actions",footerStart:"footer-start",footerEnd:"footer-end",headerSlottedContent:"header-slotted-content"},o={close:"close",collapse:"collapse"},i={close:"x",menu:"ellipsis",expand:"chevron-down",collapse:"chevron-up"},l={actionBar:"action-bar",alerts:"alerts",contentBottom:"content-bottom",contentTop:"content-top",headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerEnd:"footer-end",footerStart:"footer-start",footerActions:"footer-actions"}}}]);
//# sourceMappingURL=2647.0bfeea12.chunk.js.map