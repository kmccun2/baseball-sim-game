(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{72:function(e,t,a){e.exports=a.p+"static/media/logo.5279250a.png"},76:function(e,t,a){e.exports=a(89)},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(46),l=a.n(s),u=a(2),c=a.n(u),i=a(8),o=a(59),m=a(9),p=function(){return r.a.createElement("div",{className:"directions"},r.a.createElement("p",null,"1. Go to gc.com and export your team's stats to CSV."),r.a.createElement("p",null,"2. Click browse and upload the file."),r.a.createElement("p",null,"3. Click on players to select your lineup."),r.a.createElement("p",null,"4. Select a number of games and innings per game you'd like to play."),r.a.createElement("p",null,"5. Play ball!"))},b=a(67),d=a.n(b),S=Object(m.b)(function(e){return{roster:e.rosterReducer.roster,loading:e.rosterReducer.loading,stateCsv:e.rosterReducer.stateCsv,storedCsv:e.rosterReducer.storedCsv}},{setRoster:function(e){return function(){var t=Object(i.a)(c.a.mark(function t(a){var n,r,s,l,u,i,o,m;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=e.split("\n"),r=[],s=n[1].split(","),console.log(s),l=[],u=1;case 7:if(!(u<n.length)){t.next=19;break}for(i={},o=n[u].split(","),m=0;m<53;m++)i[s[m]]=o[m];if(!1!==l.includes(o[0])){t.next=16;break}if(l.push(o[0]),"Team"!==o[0]){t.next=15;break}return t.abrupt("break",19);case 15:""!==i.Number&&"Number"!==i.Number&&"Team"!==i.Number&&"Glossary:"!==i.Number&&(r.push(i),r.map(function(e){return e.color="#00000020",e}));case 16:u++,t.next=7;break;case 19:a({type:"SET_ROSTER",payload:r});case 20:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},createLineup:function(){return function(){var e=Object(i.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t({type:"CREATE_LINEUP",payload:[{batter:null,color:"#1abc9c",id:0},{batter:null,color:"#e74c3c",id:1},{batter:null,color:"#8e44ad",id:2},{batter:null,color:"#34495e",id:3},{batter:null,color:"#2ecc71",id:4},{batter:null,color:"#f1c40f",id:5},{batter:null,color:"#2980b9",id:6},{batter:null,color:"#e67e22",id:7},{batter:null,color:"#ce7373",id:8}]});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},clearLineup:function(){return function(){var e=Object(i.a)(c.a.mark(function e(t){var a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=[{batter:null,color:"#1abc9c",id:0},{batter:null,color:"#e74c3c",id:1},{batter:null,color:"#8e44ad",id:2},{batter:null,color:"#34495e",id:3},{batter:null,color:"#2ecc71",id:4},{batter:null,color:"#f1c40f",id:5},{batter:null,color:"#2980b9",id:6},{batter:null,color:"#e67e22",id:7},{batter:null,color:"#8e44ad",id:8}],e.abrupt("return",t({type:"CLEAR_LINEUP",payload:{lineup:a,results:null}}));case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},newRoster:function(){return function(){var e=Object(i.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"NEW_ROSTER"}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},newRosterLineup:function(e){return function(){var e=Object(i.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"NEW_ROSTER_LINEUP"}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},clearLineupRoster:function(e){return function(){var t=Object(i.a)(c.a.mark(function t(a){var n;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return(n=e.filter(function(e){return e})).map(function(e){return e.color="#00000020",e}),t.abrupt("return",a({type:"CLEAR_LINEUP_ROSTER",payload:n}));case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},rosterLoading:function(){return function(){var e=Object(i.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t({type:"ROSTER_LOADING"}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},loadCsv:function(e){return function(){var t=Object(i.a)(c.a.mark(function t(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a({type:"LOAD_CSV",payload:e}));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=e.newRoster,a=e.clearLineup,s=e.createLineup,l=e.setRoster,u=e.newRosterLineup,m=e.clearLineupRoster,b=e.roster,S=e.rosterLoading,f=e.loading,B=e.stateCsv,v=e.loadCsv,E=e.storedCsv,g=Object(n.useState)(!0),O=Object(o.a)(g,2),N=O[0],C=O[1],h=Object(n.useState)(""),P=Object(o.a)(h,2),k=P[0],y=P[1],A=Object(n.useState)("Select an exported CSV file from GameChanger..."),R=Object(o.a)(A,2),I=R[0],L=R[1],T=function(){var e=Object(i.a)(c.a.mark(function e(t){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:B.includes("20 NYM,Alonso,Pete")?alert("Hey where ya goin?? You have to select a file first."):(S(!1),l(B),s(),y(!0));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,k&&!f?r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"submit",value:"New Roster",className:"center btn btn-primary btn-block mt-4 col-md-6",onClick:function(){return u(),v(E),t(),y(!1),L("Select an exported CSV file from GameChanger..."),void C(!0)}}),r.a.createElement("input",{type:"submit",value:"Clear Lineup",className:"center clear-lineup btn btn-primary btn-block mt-4 col-md-6",onClick:function(){a(),m(b)}})):r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"mlb-roster",onClick:function(e){e.preventDefault(),S(),l(B),s(),y(!0)}},"Use MLB Players"),r.a.createElement(d.a,{handleFiles:function(e){var t=new FileReader;t.onload=function(e){v(t.result)},t.readAsText(e[0]),L("new_roster.csv"),C(!1)},fileTypes:".csv"},r.a.createElement("div",{className:"custom-file mb-4"},r.a.createElement("button",{type:"file",className:"custom-file-input",id:"customFile"}),r.a.createElement("label",{className:"custom-file-label",htmlFor:"customFile"},I))),r.a.createElement("button",{type:"submit",value:"Upload",className:"btn btn-primary btn-block mt-4",onClick:T},"Upload"),N&&r.a.createElement(n.Fragment,null,r.a.createElement(p,null),r.a.createElement("div",{className:"credit"},"Created by @kurtisleaux"))))}),f=a(91),B=Object(m.b)(function(e){return{roster:e.rosterReducer.roster,lineup:e.lineupReducer.lineup,active:e.lineupReducer.active}},{assignPlayer:function(e,t,a,n){return function(){var r=Object(i.a)(c.a.mark(function r(s){var l,u,i,o,m,p,b;return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=a.filter(function(e){return e.Number===n}),u=e.filter(function(e){return e.id===t}),(i=e.filter(function(e){return e}))[t]={batter:l[0],id:t,color:u[0].color},o=i.filter(function(e){return null===e.batter}),m=8,p=function(){return m=0===o.length?8:o[0].id},b=i.filter(function(e){return null!=e.batter}).length,m=p(),r.abrupt("return",s({type:"ASSIGN_PLAYER",payload:{lineup:i,active:m,numActive:b}}));case 11:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()},updateLineup:function(e){return function(){var t=Object(i.a)(c.a.mark(function t(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a({type:"UPDATE_LINEUP",payload:e}));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},setBorder:function(e,t,a,n){return function(){var r=Object(i.a)(c.a.mark(function r(s){var l,u,i;return c.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return l=e.filter(function(e){return e.id===a}),u=l[0].color,(i=n.filter(function(e){return e})).map(function(e){return e.color===u&&(e.color="#00000020"),e.Number===t&&(e.color=u),e}),r.abrupt("return",s({type:"SET_BORDER",payload:i}));case 5:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}()}})(function(e){var t=e.name,a=e.number,n=e.color,s=e.ab,l=e.avg,u=e.slg,c=e.ops,i=e.bb,o=e.ks,m=e.roster,p=e.active,b=e.lineup,d=e.assignPlayer,S=e.setBorder,B=parseFloat(l).toFixed(3).toString();B=B.replace("0.",".");var v=parseFloat(u).toFixed(3).toString();v=v.replace("0.",".");var E=parseFloat(c).toFixed(3).toString();return E=E.replace("0.","."),r.a.createElement("div",{className:"player col-xs-6 col-lg-3 col-md-4 col-sm-6  p-2",onClick:function(e){return d(b,p,m,a),void S(b,a,p,m)}},r.a.createElement(f.a,{style:{border:"3px solid "+n}},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,{className:"bold-e"},t),r.a.createElement(f.a.Subtitle,{className:"mb-4 text-muted"},"#",a),r.a.createElement(f.a.Text,{className:"stat-title my-0"},"AB: ",r.a.createElement("span",{className:"stat-text"},s)),r.a.createElement(f.a.Text,{className:"stat-title my-0"},"AVG: ",r.a.createElement("span",{className:"stat-text"},B)),r.a.createElement(f.a.Text,{className:"stat-title my-0"},"SLG: ",r.a.createElement("span",{className:"stat-text"},v)),r.a.createElement(f.a.Text,{className:"stat-title my-0"},"OPS: ",r.a.createElement("span",{className:"stat-text"},E)),r.a.createElement(f.a.Text,{className:"stat-title my-0"},"BB/HBP: ",r.a.createElement("span",{className:"stat-text"},i)),r.a.createElement(f.a.Text,{className:"stat-title my-0"},"SO: ",r.a.createElement("span",{className:"stat-text"},o)))))}),v=Object(m.b)(function(e){return{roster:e.rosterReducer.roster}},{})(function(e){var t=e.roster;e.active,e.lineup,e.assignPlayer;return r.a.createElement(n.Fragment,null,t.length>0?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"roster bold-e"},"SELECT YOUR LINEUP"),r.a.createElement("div",{className:"player-cards mx-n2"},t.map(function(e){return r.a.createElement(B,{name:e.Last+", "+e.First,number:e.Number,ab:e.AB,avg:e.AVG,slg:e.SLG,ops:e.OPS,sb:e.SB,bb:(parseInt(e.HBP,10)+parseInt(e.BB,10)).toString(),ks:e.SO,key:e.Number,color:e.color})}))):null)}),E=Object(m.b)(function(e){return{active:e.lineupReducer.active}},{setActive:function(e){return function(){var t=Object(i.a)(c.a.mark(function t(a){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",a({type:"SET_ACTIVE",payload:parseInt(e)}));case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(function(e){var t=e.active,a=e.setActive,n=e.id,s=e.batter;return r.a.createElement("div",{className:"batter"},r.a.createElement("div",{className:t===n?"icon icon-active":"icon",style:s.batter?{backgroundColor:s.color,color:"white",border:"none"}:{backgroundColor:"#f7f7f7"},id:n,onClick:function(e){return function(e){a(e.target.id)}(e)}},null===s.batter?s.id+1:s.batter.First[0]+s.batter.Last[0]))}),g=a(75),O=a(58),N=function(e){e.touched;var t=e.message;return t?r.a.createElement("div",{className:"form-message invalid"},t):r.a.createElement("div",{className:"hidden"})},C=Object(m.b)(function(e){return{sim_results:e.lineupReducer.sim_results}},{})(function(e){var t=e.sim_results;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"results-container"},r.a.createElement("div",{className:"result col-md-3 p-2"},r.a.createElement("div",{className:"result-header"},"Runs Scored"),r.a.createElement("div",{className:"result-data"},t.runs_scored)),r.a.createElement("div",{className:"result col-md-3 p-2"},r.a.createElement("div",{className:"result-header"},"Runs Per Game"),r.a.createElement("div",{className:"result-data"},t.runs_per_game.toFixed(1))),r.a.createElement("div",{className:"result col-md-3 p-2"},r.a.createElement("div",{className:"result-header"},"Max Runs (Game)"),r.a.createElement("div",{className:"result-data"},t.max_runs)),r.a.createElement("div",{className:"result col-md-3 p-2"},r.a.createElement("div",{className:"result-header"},"Min Runs (Game)"),r.a.createElement("div",{className:"result-data"},t.min_runs))),r.a.createElement("table",{className:"player-stats"}))}),h=Object(m.b)(function(e){return{lineup:e.lineupReducer.lineup,sim_results:e.lineupReducer.sim_results,stateCsv:e.rosterReducer.stateCsv}},{simulateGame:function(e,t,a){return function(){var n=Object(i.a)(c.a.mark(function n(r){var s,l,u,i,o,m,p,b,d,S,f,B,v,E,g;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:for(s=e[0].batter,l=e[1].batter,u=e[2].batter,i=e[3].batter,o=e[4].batter,m=e[5].batter,p=e[6].batter,b=e[7].batter,d=e[8].batter,S=!1,f=!1,B=!1,v=0,E={games:t,innings_per:a,runs:0,runs_scored:0,games_played:0,count_innings:1,runs_per_game:0,max_runs:0,min_runs:100,lineup:[{batter:s,average:0,singles:0,doubles:0,triples:0,homeruns:0,walks:0,strikeouts:0,hits:0,abs:0},{batter:l,average:0,singles:0,doubles:0,triples:0,homeruns:0,walks:0,strikeouts:0,hits:0,abs:0},{batter:u,average:0,singles:0,doubles:0,triples:0,homeruns:0,walks:0,strikeouts:0,hits:0,abs:0},{batter:i,average:0,singles:0,doubles:0,triples:0,homeruns:0,walks:0,strikeouts:0,hits:0,abs:0},{batter:o,average:0,singles:0,doubles:0,triples:0,homeruns:0,walks:0,strikeouts:0,hits:0,abs:0},{batter:m,average:0,singles:0,doubles:0,triples:0,homeruns:0,walks:0,strikeouts:0,hits:0,abs:0},{batter:p,average:0,singles:0,doubles:0,triples:0,homeruns:0,walks:0,strikeouts:0,hits:0,abs:0},{batter:b,average:0,singles:0,doubles:0,triples:0,homeruns:0,walks:0,strikeouts:0,hits:0,abs:0},{batter:d,average:0,singles:0,doubles:0,triples:0,homeruns:0,walks:0,strikeouts:0,hits:0,abs:0}]},g=function(e,t,a){var n=parseInt(e.batter["1B"])/parseInt(e.batter.PA),r=parseInt(e.batter["2B"])/parseInt(e.batter.PA),s=parseInt(e.batter["3B"])/parseInt(e.batter.PA),l=parseInt(e.batter.HR)/parseInt(e.batter.PA),u=parseInt(e.batter.BB)/parseInt(e.batter.PA),c=e.batter.SO/parseInt(e.batter.PA),i="Out",o=Math.random();switch(o<n?i="Single":o<n+r?i="Double":o<n+r+s?i="Triple":o<n+r+s+l?i="Homer":o<n+r+s+l+u?i="Walk":o<n+r+s+l+u+c&&(i="Strikeout"),i){case"Single":switch(!0){case S&&!f&&!B:f=!0;break;case S&&f&&!B:B=!0,f=!1,E.runs+=1;break;case S&&f&&B:E.runs+=2;break;case S&&!f&&B:f=!0,E.runs+=1;break;case!S&&f&&!B:f=!1,E.runs+=1;break;case!S&&f&&B:f=!1,E.runs+=2;break;case!S&&!f&&B:E.runs+=1}S=!0,B=!1,e.singles+=1,e.hits+=1,e.abs+=1;break;case"Double":switch(!0){case S&&!f&&!B:B=!0;break;case S&&f&&!B:B=!0,E.runs+=1;break;case S&&f&&B:B=!0,E.runs+=2;break;case S&&!f&&B:B=!0,E.runs+=1;break;case!S&&f&&!B:E.runs+=1;break;case!S&&f&&B:E.runs+=2;break;case!S&&!f&&B:E.runs+=1}S=!1,f=!0,e.doubles+=1,e.hits+=1,e.abs+=1;break;case"Triple":switch(!0){case S&&!f&&!B:E.runs+=1;break;case S&&f&&!B:E.runs+=2;break;case S&&f&&B:E.runs+=3;break;case S&&!f&&B:E.runs+=2;break;case!S&&f&&!B:E.runs+=1;break;case!S&&f&&B:E.runs+=2;break;case!S&&!f&&B:E.runs+=1}S=!1,f=!1,B=!0,e.triples+=1,e.hits+=1,e.abs+=1;break;case"Homerun":switch(!0){case!S&&!f&&!B:E.runs+=1;break;case S&&!f&&!B:E.runs+=2;break;case S&&f&&!B:E.runs+=3;break;case S&&f&&B:E.runs+=4;break;case S&&!f&&B:E.runs+=3;break;case!S&&f&&!B:E.runs+=2;break;case!S&&f&&B:E.runs+=3;break;case!S&&!f&&B:E.runs+=2}S=!1,f=!1,B=!1,e.homeruns+=1,e.hits+=1,e.abs+=1;break;case"Walk":switch(!0){case S&&!f&&!B:f=!0;break;case S&&f&&!B:B=!0;break;case S&&f&&B:E.runs+=1;break;case S&&!f&&B:f=!0}S=!0,e.walks+=1;break;case"Strikeout":v+=1,e.strikeous+=1,e.abs+=1,e.strikeouts+=1;break;case"Out":v+=1,e.abs+=1}return 3===v&&(S=!1,f=!1,B=!1,v=0,E.count_innings+=1),E.count_innings===a+1&&(E.runs_scored+=E.runs,E.runs>E.max_runs&&(E.max_runs=E.runs),E.runs<E.min_runs&&(E.min_runs=E.runs),E.runs=0,E.games_played+=1,E.count_innings=1),E.games_played===t&&(E.runs_per_game=E.runs_scored/t),E};E.games_played<t;)E.lineup.map(function(e){return E.games_played<t&&g(e,t,a),e});return E.lineup=E.lineup.map(function(e){return e.average=e.hits/e.abs,e.pas=e.abs+e.walks,e}),n.abrupt("return",r({type:"SIMULATE_GAME",payload:E}));case 18:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(function(e){var t=e.lineup,a=e.simulateGame,s=e.sim_results,l=e.stateCsv,u=O.b().shape({games:O.a().typeError("Games input must be a number.").min(1,"Must enter a number of games").max(4e3,"Invalid input. You may have exceeded the max number of games.").required("Please enter a number of games you'd like to simulate."),innings:O.a().typeError("Innings input must be a number.").min(1,"Must enter a number of innings per game").max(100,"Invalid input. Innings must be a value less than 10.").required("Please enter a number of innings you'd like to simulate.")});return r.a.createElement(n.Fragment,null,r.a.createElement(g.a,{initialValues:l.includes("20 NYM,Alonso,Pete")?{games:162,innings:9}:{games:40,innings:7},validationSchema:u,onSubmit:function(e,n){var r=n.setSubmitting;r(!0),a(t,parseInt(e.games),parseInt(e.innings)),r(!1)}},function(e){var t=e.values,a=e.errors,s=e.touched,l=e.handleChange,u=e.isSubmitting,c=e.handleSubmit;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"settings-header"},"Enter the number of games and innings per game you'd like to play."),r.a.createElement(N,{touched:s.games,message:a.games}),r.a.createElement(N,{touched:s.innings,message:a.innings}),r.a.createElement("form",{className:"settings-form",onSubmit:c},r.a.createElement("label",{htmlFor:"games"},"Games: "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"games",id:"games",className:s.games&&a.games?"input has-error":"input",onChange:l,value:t.games}),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"innings"},"Innings (per game): "),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"innings",id:"innings",className:s.innings&&a.innings?"input has-error":"input",value:t.innings,onChange:l}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit",value:"play",className:"playball",disabled:u},"Play Ball!")))}),s&&r.a.createElement(C,null))}),P=Object(m.b)(function(e){return{lineup:e.lineupReducer.lineup,numActive:e.lineupReducer.numActive,loading:e.rosterReducer.loading}},{})(function(e){var t=e.lineup,a=e.numActive,s=e.loading;return r.a.createElement(n.Fragment,null,s?r.a.createElement("div",{className:"spinner-container"},"Creating your roster..."):r.a.createElement(n.Fragment,null,t.length>0&&r.a.createElement("div",{className:"lineup"},t.map(function(e){return r.a.createElement(E,{id:e.id,color:e.color,batter:e,key:e.id,active:e.active})})),9===a&&r.a.createElement("div",{className:"game-settings"},r.a.createElement(h,null))))}),k=a(72),y=a.n(k),A=a(21),R=a(73),I=a(74),L=a(12),T={roster:[],stateCsv:',,,Offensive Stats,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,Defensive Stats,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nNumber,Last,First,GP,PA,AB,H,1B,2B,3B,HR,RBI,R,HBP,ROE,FC,CI,BB,SO,AVG,OBP,SLG,OPS,PA/BB,BB/K,C%,K-L,SB,CS,SB%,PIK,GIDP,GITP,XBH,TB,AB/HR,BA/RISP,PS,PS/PA,2S+3,2S+3%,6+,6+%,FLB%,GB%,SAC,SF,LOB,2OUTRBI,HHB,QAB,QAB%,BABIP,IP,GP,GS,W,L,SV,SVO,BS,SV%,H,R,ER,BB,SO,HBP,ERA,WHIP,BF,#P,TS,TB,P/IP,P/BF,<3,<3%,LOO,1ST2OUT,123INN,<13,FIP,S%,FPS,FPS%,FPSO%,FPSW%,FPSH%,BB/INN,0BBINN,BBS,LOBB,LOBBS,WP,ABA,SM,SM%,K/G,K/BF,K/BB,WEAK%,HHB%,GB%,FLB%,GO,FO,GO/FO,BAA,HR,BABIP,LOB,BK,PIK,SB,CS,SB%,FB,FBS,FBS%,CT,CTS,CTS%,CB,CBS,CBS%,SL,SLS,SLS%,CH,CHS,CHS%,OS,OSS,OSS%,TC,A,PO,E,DP,TP,FPCT,cINN,cPB,cSB,cCS,cCS%,cPIK,cCI\n20 NYM,Alonso,Pete,,693,597,155,70,30,2,53,,,21,,,,72,183,0.26,0.358,0.583,0.941,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n44 HOU,Alvarez,Yordan,,369,313,98,45,26,0,27,,,2,,,,52,94,0.313,0.412,0.655,1.067,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n28 COL,Arenado,Nolan,,662,588,185,111,31,2,41,,,4,,,,62,93,0.315,0.379,0.583,0.962,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n55 PIT,Bell,Josh,,613,527,146,69,37,3,37,,,5,,,,74,118,0.277,0.367,0.569,0.936,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n35 LAD,Bellinger,Cody,,661,558,170,86,34,3,47,,,3,,,,95,108,0.305,0.406,0.629,1.035,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n50 BOS,Betts,Mookie,,706,597,176,102,40,5,29,,,3,,,,97,101,0.295,0.391,0.524,0.915,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n19 COL,Blackmon,Charlie,,634,580,182,101,42,7,32,,,9,,,,40,104,0.314,0.364,0.576,0.94,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n2 BOS,Bogaerts,Xander,,698,614,190,105,52,0,33,,,2,,,,76,122,0.309,0.384,0.555,0.939,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n2 HOU,Bregman,Alex,,690,554,164,84,37,2,41,,,9,,,,119,83,0.296,0.423,0.592,1.015,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n20 OAK,Canha,Mark,,497,410,112,67,16,3,26,,,18,,,,67,107,0.273,0.396,0.517,0.913,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n6 CHC,Castellanos,Nicholas,,225,212,68,31,21,0,16,,,2,,,,10,47,0.321,0.356,0.646,1.002,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n1 HOU,Correa,Carlos,,321,280,78,40,16,1,21,,,2,,,,35,75,0.279,0.358,0.568,0.926,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n23 MIN,Cruz,Nelson,,521,454,141,74,26,0,41,,,7,,,,56,131,0.311,0.392,0.639,1.031,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n11 BOS,Devers,Rafael,,702,647,201,111,54,4,32,,,4,,,,48,119,0.311,0.361,0.555,0.916,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n12 TOT,Dickerson,Corey,,279,260,79,37,28,2,12,,,0,,,,16,56,0.304,0.341,0.565,0.906,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n5 ATL,Freeman,Freddie,,692,597,176,102,34,2,38,,,6,,,,87,127,0.295,0.389,0.549,0.938,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n13 TEX,Gallo,Joey,,297,241,61,23,15,1,22,,,2,,,,52,114,0.253,0.389,0.598,0.986,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n18 MIN,Garver,Mitch,,359,311,85,37,16,1,31,,,5,,,,41,87,0.273,0.365,0.63,0.995,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n18 MIL,Hiura,Keston,,348,314,95,51,23,2,19,,,8,,,,25,107,0.303,0.368,0.57,0.938,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n99 NYY,Judge,Aaron,,447,378,103,57,18,1,27,,,3,,,,64,141,0.272,0.381,0.54,0.921,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n47 WSN,Kendrick,Howie,,370,334,115,74,23,1,17,,,4,,,,27,49,0.344,0.395,0.572,0.966,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n8 CLE,Luplow,Jordan,,261,225,62,31,15,1,15,,,2,,,,33,61,0.276,0.372,0.551,0.923,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n4 ARI,Marte,Ketel,,628,569,187,110,36,9,32,,,4,,,,53,86,0.329,0.389,0.592,0.981,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n28 BOS,Martinez,J.D.,,657,575,175,104,33,2,36,,,4,,,,72,138,0.304,0.383,0.557,0.939,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n6 NYM,McNeil,Jeff,,567,510,162,100,38,1,23,,,21,,,,35,75,0.318,0.384,0.531,0.916,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n17 TBR,Meadows,Austin,,591,530,154,85,29,7,33,,,7,,,,54,131,0.291,0.364,0.558,0.922,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n10 CHW,Moncada,Yoan,,559,511,161,97,34,5,25,,,4,,,,40,154,0.315,0.367,0.548,0.915,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n24 TEX,Pence,Hunter,,316,286,85,49,17,1,18,,,2,,,,26,69,0.297,0.358,0.552,0.91,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n6 WSN,Rendon,Anthony,,646,545,174,93,44,3,34,,,12,,,,80,86,0.319,0.412,0.598,1.01,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n44 CHC,Rizzo,Anthony,,613,512,150,91,29,3,27,,,27,,,,71,86,0.293,0.405,0.52,0.924,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n22 MIN,Sano,Miguel,,439,380,94,39,19,2,34,,,3,,,,55,159,0.247,0.346,0.576,0.923,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n41 CLE,Santana,Carlos,,686,573,161,96,30,1,34,,,3,,,,108,108,0.281,0.397,0.515,0.911,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n12 KCR,Soler,Jorge,,679,589,156,74,33,1,48,,,10,,,,73,178,0.265,0.354,0.569,0.922,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n22 WSN,Soto,Juan,,659,542,153,82,32,5,34,,,3,,,,108,132,0.282,0.401,0.548,0.949,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n4 HOU,Springer,George,,556,479,140,78,20,3,39,,,6,,,,67,113,0.292,0.383,0.591,0.974,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n27 COL,Story,Trevor,,656,588,173,95,38,5,35,,,7,,,,58,174,0.294,0.363,0.554,0.917,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n7 CIN,Suarez,Eugenio,,662,575,156,83,22,2,49,,,11,,,,70,189,0.271,0.358,0.572,0.93,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n23 SDP,Tatis Jr.,Fernando,,372,334,106,65,13,6,22,,,5,,,,30,110,0.317,0.379,0.59,0.969,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n27 LAA,Trout,Mike,,600,470,137,63,27,2,45,,,16,,,,110,120,0.291,0.438,0.645,1.083,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n22 MIL,Yelich,Christian,,580,489,161,85,29,3,44,,,8,,,,80,118,0.329,0.429,0.671,1.1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nTeam,Totals,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"',storedCsv:',,,Offensive Stats,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,Defensive Stats,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nNumber,Last,First,GP,PA,AB,H,1B,2B,3B,HR,RBI,R,HBP,ROE,FC,CI,BB,SO,AVG,OBP,SLG,OPS,PA/BB,BB/K,C%,K-L,SB,CS,SB%,PIK,GIDP,GITP,XBH,TB,AB/HR,BA/RISP,PS,PS/PA,2S+3,2S+3%,6+,6+%,FLB%,GB%,SAC,SF,LOB,2OUTRBI,HHB,QAB,QAB%,BABIP,IP,GP,GS,W,L,SV,SVO,BS,SV%,H,R,ER,BB,SO,HBP,ERA,WHIP,BF,#P,TS,TB,P/IP,P/BF,<3,<3%,LOO,1ST2OUT,123INN,<13,FIP,S%,FPS,FPS%,FPSO%,FPSW%,FPSH%,BB/INN,0BBINN,BBS,LOBB,LOBBS,WP,ABA,SM,SM%,K/G,K/BF,K/BB,WEAK%,HHB%,GB%,FLB%,GO,FO,GO/FO,BAA,HR,BABIP,LOB,BK,PIK,SB,CS,SB%,FB,FBS,FBS%,CT,CTS,CTS%,CB,CBS,CBS%,SL,SLS,SLS%,CH,CHS,CHS%,OS,OSS,OSS%,TC,A,PO,E,DP,TP,FPCT,cINN,cPB,cSB,cCS,cCS%,cPIK,cCI\n20 NYM,Alonso,Pete,,693,597,155,70,30,2,53,,,21,,,,72,183,0.26,0.358,0.583,0.941,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n44 HOU,Alvarez,Yordan,,369,313,98,45,26,0,27,,,2,,,,52,94,0.313,0.412,0.655,1.067,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n28 COL,Arenado,Nolan,,662,588,185,111,31,2,41,,,4,,,,62,93,0.315,0.379,0.583,0.962,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n55 PIT,Bell,Josh,,613,527,146,69,37,3,37,,,5,,,,74,118,0.277,0.367,0.569,0.936,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n35 LAD,Bellinger,Cody,,661,558,170,86,34,3,47,,,3,,,,95,108,0.305,0.406,0.629,1.035,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n50 BOS,Betts,Mookie,,706,597,176,102,40,5,29,,,3,,,,97,101,0.295,0.391,0.524,0.915,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n19 COL,Blackmon,Charlie,,634,580,182,101,42,7,32,,,9,,,,40,104,0.314,0.364,0.576,0.94,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n2 BOS,Bogaerts,Xander,,698,614,190,105,52,0,33,,,2,,,,76,122,0.309,0.384,0.555,0.939,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n2 HOU,Bregman,Alex,,690,554,164,84,37,2,41,,,9,,,,119,83,0.296,0.423,0.592,1.015,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n20 OAK,Canha,Mark,,497,410,112,67,16,3,26,,,18,,,,67,107,0.273,0.396,0.517,0.913,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n6 CHC,Castellanos,Nicholas,,225,212,68,31,21,0,16,,,2,,,,10,47,0.321,0.356,0.646,1.002,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n1 HOU,Correa,Carlos,,321,280,78,40,16,1,21,,,2,,,,35,75,0.279,0.358,0.568,0.926,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n23 MIN,Cruz,Nelson,,521,454,141,74,26,0,41,,,7,,,,56,131,0.311,0.392,0.639,1.031,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n11 BOS,Devers,Rafael,,702,647,201,111,54,4,32,,,4,,,,48,119,0.311,0.361,0.555,0.916,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n12 TOT,Dickerson,Corey,,279,260,79,37,28,2,12,,,0,,,,16,56,0.304,0.341,0.565,0.906,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n5 ATL,Freeman,Freddie,,692,597,176,102,34,2,38,,,6,,,,87,127,0.295,0.389,0.549,0.938,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n13 TEX,Gallo,Joey,,297,241,61,23,15,1,22,,,2,,,,52,114,0.253,0.389,0.598,0.986,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n18 MIN,Garver,Mitch,,359,311,85,37,16,1,31,,,5,,,,41,87,0.273,0.365,0.63,0.995,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n18 MIL,Hiura,Keston,,348,314,95,51,23,2,19,,,8,,,,25,107,0.303,0.368,0.57,0.938,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n99 NYY,Judge,Aaron,,447,378,103,57,18,1,27,,,3,,,,64,141,0.272,0.381,0.54,0.921,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n47 WSN,Kendrick,Howie,,370,334,115,74,23,1,17,,,4,,,,27,49,0.344,0.395,0.572,0.966,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n8 CLE,Luplow,Jordan,,261,225,62,31,15,1,15,,,2,,,,33,61,0.276,0.372,0.551,0.923,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n4 ARI,Marte,Ketel,,628,569,187,110,36,9,32,,,4,,,,53,86,0.329,0.389,0.592,0.981,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n28 BOS,Martinez,J.D.,,657,575,175,104,33,2,36,,,4,,,,72,138,0.304,0.383,0.557,0.939,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n6 NYM,McNeil,Jeff,,567,510,162,100,38,1,23,,,21,,,,35,75,0.318,0.384,0.531,0.916,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n17 TBR,Meadows,Austin,,591,530,154,85,29,7,33,,,7,,,,54,131,0.291,0.364,0.558,0.922,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n10 CHW,Moncada,Yoan,,559,511,161,97,34,5,25,,,4,,,,40,154,0.315,0.367,0.548,0.915,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n24 TEX,Pence,Hunter,,316,286,85,49,17,1,18,,,2,,,,26,69,0.297,0.358,0.552,0.91,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n6 WSN,Rendon,Anthony,,646,545,174,93,44,3,34,,,12,,,,80,86,0.319,0.412,0.598,1.01,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n44 CHC,Rizzo,Anthony,,613,512,150,91,29,3,27,,,27,,,,71,86,0.293,0.405,0.52,0.924,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n22 MIN,Sano,Miguel,,439,380,94,39,19,2,34,,,3,,,,55,159,0.247,0.346,0.576,0.923,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n41 CLE,Santana,Carlos,,686,573,161,96,30,1,34,,,3,,,,108,108,0.281,0.397,0.515,0.911,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n12 KCR,Soler,Jorge,,679,589,156,74,33,1,48,,,10,,,,73,178,0.265,0.354,0.569,0.922,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n22 WSN,Soto,Juan,,659,542,153,82,32,5,34,,,3,,,,108,132,0.282,0.401,0.548,0.949,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n4 HOU,Springer,George,,556,479,140,78,20,3,39,,,6,,,,67,113,0.292,0.383,0.591,0.974,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n27 COL,Story,Trevor,,656,588,173,95,38,5,35,,,7,,,,58,174,0.294,0.363,0.554,0.917,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n7 CIN,Suarez,Eugenio,,662,575,156,83,22,2,49,,,11,,,,70,189,0.271,0.358,0.572,0.93,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n23 SDP,Tatis Jr.,Fernando,,372,334,106,65,13,6,22,,,5,,,,30,110,0.317,0.379,0.59,0.969,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n27 LAA,Trout,Mike,,600,470,137,63,27,2,45,,,16,,,,110,120,0.291,0.438,0.645,1.083,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n22 MIL,Yelich,Christian,,580,489,161,85,29,3,44,,,8,,,,80,118,0.329,0.429,0.671,1.1,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\nTeam,Totals,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\n"'},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_ROSTER":return Object(L.a)({},e,{roster:n,loading:!1});case"NEW_ROSTER":return Object(L.a)({},e,{roster:[]});case"SET_BORDER":case"CLEAR_LINEUP_ROSTER":return Object(L.a)({},e,{roster:n});case"ROSTER_LOADING":return Object(L.a)({},e,{loading:!0});case"LOAD_CSV":return Object(L.a)({},e,{stateCsv:n});default:return e}},w={lineup:[],loading:!0,active:0,numActive:0},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"CREATE_LINEUP":return Object(L.a)({},e,{lineup:n,loading:!1,active:0});case"SET_ACTIVE":return Object(L.a)({},e,{active:n});case"ASSIGN_PLAYER":return Object(L.a)({},e,{lineup:n.lineup,active:n.active,numActive:n.numActive});case"UPDATE_LINEUP":return Object(L.a)({},e,{lineup:n});case"CLEAR_LINEUP":return Object(L.a)({},e,{lineup:n.lineup,sim_results:n.results,active:0,numActive:0});case"SIMULATE_GAME":return Object(L.a)({},e,{sim_results:n});case"NEW_ROSTER_LINEUP":return{lineup:[],active:0,numActive:0};default:return e}},H=Object(A.combineReducers)({rosterReducer:F,lineupReducer:_}),x=[I.a],G=Object(A.createStore)(H,{},Object(R.composeWithDevTools)(A.applyMiddleware.apply(void 0,x))),M=function(){return r.a.createElement(m.a,{store:G},r.a.createElement("div",{className:"container mt-4"},r.a.createElement("h4",{className:"display-4 text-center mb-4"},"Lineup Simulator"),r.a.createElement("img",{src:y.a,className:"logo",alt:"logo"}),r.a.createElement(S,null),r.a.createElement(P,null),r.a.createElement(v,null)))};a(88);l.a.render(r.a.createElement(M,null),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.026ea708.chunk.js.map