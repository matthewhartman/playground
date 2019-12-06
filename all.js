if (this.customElements) try { customElements.define('built-in', document.createElement('p').constructor, { 'extends': 'p' }); if (typeof Cypress !== 'undefined') throw new Error() } catch (a) { document.write('<script defer src="https://unpkg.com/@ungap/custom-elements-builtin@0.2.7/min.js" crossorigin="anonymous" ><' + '/script>') } else document.write('<script defer src="https://unpkg.com/document-register-element@1.13.2/build/document-register-element.js" crossorigin="anonymous" ><' + '/script>');


if (typeof HTMLElement === 'object') document.write('<script defer src="https://unpkg.com/custom-elements-es5-adapter@1.0.0/custom-elements-es5-adapter.js" crossorigin="anonymous"><' + '/script>')

window.lpTag = window.lpTag || {}, 'undefined' == typeof window.lpTag._tagCount ? (window.lpTag = { wl: lpTag.wl || null, scp: lpTag.scp || null, site: '60671217' || '', section: lpTag.section || '', tagletSection: lpTag.tagletSection || null, autoStart: lpTag.autoStart !== !1, ovr: lpTag.ovr || {}, _v: '1.10.0', _tagCount: 1, protocol: 'https:', events: { bind: function (t, e, i) { lpTag.defer(function () { lpTag.events.bind(t, e, i) }, 0) }, trigger: function (t, e, i) { lpTag.defer(function () { lpTag.events.trigger(t, e, i) }, 1) } }, defer: function (t, e) { 0 === e ? (this._defB = this._defB || [], this._defB.push(t)) : 1 === e ? (this._defT = this._defT || [], this._defT.push(t)) : (this._defL = this._defL || [], this._defL.push(t)) }, load: function (t, e, i) { var n = this; setTimeout(function () { n._load(t, e, i) }, 0) }, _load: function (t, e, i) { var n = t; t || (n = this.protocol + '//' + (this.ovr && this.ovr.domain ? this.ovr.domain : 'lptag.liveperson.net') + '/tag/tag.js?site=' + this.site); var o = document.createElement('script'); o.setAttribute('charset', e ? e : 'UTF-8'), i && o.setAttribute('id', i), o.setAttribute('src', n), document.getElementsByTagName('head').item(0).appendChild(o) }, init: function () { this._timing = this._timing || {}, this._timing.start = (new Date).getTime(); var t = this; window.attachEvent ? window.attachEvent('onload', function () { t._domReady('domReady') }) : (window.addEventListener('DOMContentLoaded', function () { t._domReady('contReady') }, !1), window.addEventListener('load', function () { t._domReady('domReady') }, !1)), 'undefined' === typeof window._lptStop && this.load() }, start: function () { this.autoStart = !0 }, _domReady: function (t) { this.isDom || (this.isDom = !0, this.events.trigger('LPT', 'DOM_READY', { t: t })), this._timing[t] = (new Date).getTime() }, vars: lpTag.vars || [], dbs: lpTag.dbs || [], ctn: lpTag.ctn || [], sdes: lpTag.sdes || [], hooks: lpTag.hooks || [], identities: lpTag.identities || [], ev: lpTag.ev || [] }, lpTag.init()) : window.lpTag._tagCount += 1;

// Utag
(function(a,b,c,d){ a='//tags.tiqcdn.com/utag/openaus/sitecore-main/prod/utag.js'; b=document; c='script'; d=b.createElement(c); d.src=a; d.type='text/java'+c; d.defer=true; a=b.getElementsByTagName(c)[0]; a.parentNode.insertBefore(d,a); })();

// FS
window['_fs_debug'] = false;
window['_fs_host'] = 'fullstory.com';
window['_fs_org'] = '354FR';
window['_fs_namespace'] = 'FS';
(function(m,n,e,t,l,o,g,y){
   if (e in m) {if(m.console && m.console.log) { m.console.log('FullStory namespace conflict. Please set window["_fs_namespace"].');} return;}
   g=m[e]=function(a,b){g.q?g.q.push([a,b]):g._api(a,b);};g.q=[];
   o=n.createElement(t);o.async=1;o.src='https://'+_fs_host+'/s/fs.js';
   y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
   g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
   g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
   g.consent=function(a){g("consent",!arguments.length||a)};
   g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
   g.clearUserCookie=function(){};
})(window,document,window['_fs_namespace'],'script','user');


// YouTube
var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

