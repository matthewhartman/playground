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
   o=n.createElement(t);o.defer=1;o.src='https://'+_fs_host+'/s/fs.js';
   y=n.getElementsByTagName(t)[0];y.parentNode.insertBefore(o,y);
   g.identify=function(i,v){g(l,{uid:i});if(v)g(l,v)};g.setUserVars=function(v){g(l,v)};
   g.shutdown=function(){g("rec",!1)};g.restart=function(){g("rec",!0)};
   g.consent=function(a){g("consent",!arguments.length||a)};
   g.identifyAccount=function(i,v){o='account';v=v||{};v.acctId=i;g(o,v)};
   g.clearUserCookie=function(){};
})(window,document,window['_fs_namespace'],'script','user');