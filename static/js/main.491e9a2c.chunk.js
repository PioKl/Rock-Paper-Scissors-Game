(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports=a.p+"static/media/icon-paper.69a8c2e9.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-rock.8ce1e109.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-scissors.bec2f9b3.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-spock.b6446e8e.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-lizard.7d2e0b18.svg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.759a2075.svg"},,,function(e,t,a){e.exports=a.p+"static/media/logo-bonus.f4c973f7.svg"},function(e,t,a){e.exports=a.p+"static/media/image-rules.5d74d25d.svg"},function(e,t,a){e.exports=a.p+"static/media/image-rules-bonus.f19a40fb.svg"},function(e,t,a){e.exports=a.p+"static/media/icon-close.919ab92a.svg"},function(e,t,a){e.exports=a(32)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(13),c=a.n(r),o=(a(23),a(6)),l=a(7),i=a(9),m=a(8),u=a(10),p=(a(24),a(25),a(11)),d=a.n(p),h=a(14),g=a.n(h),E=function(e){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"title"},s.a.createElement("a",{href:"#mainMenu"},s.a.createElement("img",{className:"logoImg",src:e.extendedVersion?g.a:d.a,alt:d.a}))),s.a.createElement("div",{className:"pointsContainer"},s.a.createElement("p",{className:"points-title"},"SCORE"),s.a.createElement("p",{className:"points-count"},e.points)))},C=(a(26),function(e){return s.a.createElement("div",{className:"chooseVersionOfGame"},s.a.createElement("span",{className:"choosedVersion classicVersion"},"Classic Version"),s.a.createElement("label",{className:"versionSwitch"},s.a.createElement("input",{type:"checkbox",name:"",id:"",checked:"".concat(e.extendedVersion?"checked":""),onChange:e.handleSlider}),s.a.createElement("span",{className:"slider round"})),s.a.createElement("span",{className:"choosedVersion extendedVersion"},"Extended Version"))}),f=(a(27),a(1)),k=a.n(f),v=a(2),O=a.n(v),N=a(3),y=a.n(N),S=function(e){return s.a.createElement("div",{className:"chooseOption classicVersionContainer"},s.a.createElement("div",{className:"paperElement paperElementClassic"},s.a.createElement("button",{className:"chooseElementButton",onClick:e.handlePlayerChoice,value:"paper"},s.a.createElement("img",{className:"paperImg",src:k.a,alt:"icon-paper"}))),s.a.createElement("div",{className:"scissorsElement scissorsElementClassic"},s.a.createElement("button",{className:"chooseElementButton",onClick:e.handlePlayerChoice,value:"scissors"},s.a.createElement("img",{className:"scissorsImg",src:y.a,alt:"icon-scissors"}))),s.a.createElement("div",{className:"rockElement rockElementClassic"},s.a.createElement("button",{className:"chooseElementButton",onClick:e.handlePlayerChoice,value:"rock"},s.a.createElement("img",{className:"rockImg",src:O.a,alt:"icon-rock"}))))},T=(a(28),a(4)),b=a.n(T),x=a(5),I=a.n(x),R=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"chooseOption extendedVersionContainer"},s.a.createElement("div",{className:"scissorsElement scissorsElementExtended"},s.a.createElement("button",{className:"chooseElementButton",onClick:e.handlePlayerChoice,value:"scissors"},s.a.createElement("img",{className:"scissorsImg",src:y.a,alt:"icon-scissors"}))),s.a.createElement("div",{className:"spockElement spockElementExtended"},s.a.createElement("button",{className:"chooseElementButton",onClick:e.handlePlayerChoice,value:"spock"},s.a.createElement("img",{className:"spockImg",src:b.a,alt:"icon-spock"}))),s.a.createElement("div",{className:"paperElement paperElementExtended"},s.a.createElement("button",{className:"chooseElementButton",onClick:e.handlePlayerChoice,value:"paper"},s.a.createElement("img",{className:"paperImg",src:k.a,alt:"icon-paper"}))),s.a.createElement("div",{className:"lizardElement lizardElementExtended"},s.a.createElement("button",{className:"chooseElementButton",onClick:e.handlePlayerChoice,value:"lizard"},s.a.createElement("img",{className:"lizardImg",src:I.a,alt:"icon-lizard"}))),s.a.createElement("div",{className:"rockElement rockElementExtended"},s.a.createElement("button",{className:"chooseElementButton",onClick:e.handlePlayerChoice,value:"rock"},s.a.createElement("img",{className:"rockImg",src:O.a,alt:"icon-rock"})))))},w=(a(29),a(15)),V=a.n(w),Y=a(16),U=a.n(Y),z=a(17),A=a.n(z),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).blackBody={backgroundColor:"black"},a.state={rules:!1},a.handleRules=function(e){e.preventDefault(),a.setState({rules:!a.state.rules}),a.props.handleCloseRulesOnAppClick(a.state.rules)},a.displayRules=function(){if(a.state.rules)return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"rulesMenu"},s.a.createElement("div",{className:"rulesTitle"},s.a.createElement("h1",null,"Rules"),s.a.createElement("button",{className:"rulesCloseButton",onClick:a.handleCloseRules,value:"x"},s.a.createElement("img",{src:A.a,alt:"iconClose"}))),s.a.createElement("div",{className:"rulesImgContainer"},s.a.createElement("img",{className:"rulesImg",src:a.props.extendedVersion?U.a:V.a,alt:"rulesImg"}))))},a.handleCloseGlobal=function(){!0===a.props.rulesApp&&a.setState({rules:!1})},a.handleCloseRules=function(){!0===a.state.rules&&a.setState({rules:!1})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"rulesContainer"},this.state.rules?document.addEventListener("click",this.handleCloseGlobal):null,s.a.createElement("button",{className:"rulesOpenButton",onClick:this.handleRules,style:{backgroundColor:this.state.rules?"white":null,color:this.state.rules?"hsl(229, 25%, 31%)":null},value:"rules"},"Rules"),this.displayRules(),this.state.rules?s.a.createElement("style",null,"body { background-color: background-color: rgba(0, 0, 0, .3) } .App {opacity: .3}"):null))}}]),t}(n.Component),L=(a(30),function(e){var t=e.playerChoice,a=e.computerChoice,n=e.currency,r=e.handleRestart;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"result"},s.a.createElement("div",{className:"playerChoice"},s.a.createElement("h1",{className:"pickedTitle"},"You Picked"),s.a.createElement("div",{className:"".concat(t,"Element ").concat("YOU WIN"===n?"winImpulse":null)},s.a.createElement("div",{className:"choosedElement"},s.a.createElement("img",{className:"".concat(t,"Img"),src:"paper"===t?k.a:"rock"===t?O.a:"scissors"===t?y.a:"spock"===t?b.a:"lizard"===t?I.a:null,alt:t})))),s.a.createElement("div",{className:"restartGame"},s.a.createElement("h1",{className:"currencyOfGame"},n),a&&s.a.createElement("button",{className:"buttonRestart",onClick:r,value:"restart"},"Restart")," "),s.a.createElement("div",{className:"computerChoice"},s.a.createElement("h1",{className:"pickedTitle"},"Computer Picked"),a?s.a.createElement("div",{className:"".concat(a,"Element ").concat("YOU LOST"===n?"winImpulse":null)},s.a.createElement("div",{className:"choosedElement"},s.a.createElement("img",{className:"".concat(a,"Img"),src:"paper"===a?k.a:"rock"===a?O.a:"scissors"===a?y.a:"spock"===a?b.a:"lizard"===a?I.a:null,alt:a}))):s.a.createElement("div",{className:"loadingComputerChooseImpulse"},s.a.createElement("div",{className:"loadingComputerChooseImpulse2"})))))}),F=(a(31),function(){return s.a.createElement("div",{className:"footer"},"Challenge by ",s.a.createElement("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noopener noreferrer",className:"footerLink"},"Frontend Mentor"),". Coded by ",s.a.createElement("a",{href:"https://github.com/PioKl",target:"_blank",rel:"noopener noreferrer",className:"footerLink"},"Piotr K\u0142osowski"),".")}),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).gridTemplateAreasChooseOption={display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"auto",gridTemplateAreas:"'header''chooseVersionOfGame''chooseOption'"},a.gridTemplateAreasResult={display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"auto",gridTemplateAreas:"'header''result'"},a.choicesForComputer=["paper","rock","scissors"],a.choicesForComputerExtended=["paper","rock","scissors","spock","lizard"],a.time=3e3,a.points=0,a.playerChoice="",a.state={computerChoice:"",currency:"",gameOn:!1,restart:!1,rules:!1,extendedVersion:!1},a.handlePlayerChoice=function(e){e.preventDefault();var t=[];t=!1===a.state.extendedVersion?a.choicesForComputer[Math.floor(Math.random()*a.choicesForComputer.length)]:a.choicesForComputerExtended[Math.floor(Math.random()*a.choicesForComputerExtended.length)],a.playerChoice=e.currentTarget.value,e.currentTarget.value===t?(a.setState({gameOn:!0}),setTimeout(function(){a.setState({currency:"DRAW",computerChoice:a.playerChoice})},a.time)):"paper"===e.currentTarget.value&&"rock"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points+=1,a.setState({currency:"YOU WIN",computerChoice:"rock"})},a.time)):"rock"===e.currentTarget.value&&"paper"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points>0&&(a.points-=1),a.setState({currency:"YOU LOST",computerChoice:"paper"})},a.time)):"paper"===e.currentTarget.value&&"scissors"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points>0&&(a.points-=1),a.setState({currency:"YOU LOST",computerChoice:"scissors"})},a.time)):"scissors"===e.currentTarget.value&&"paper"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points+=1,a.setState({currency:"YOU WIN",computerChoice:"paper"})},a.time)):"scissors"===e.currentTarget.value&&"rock"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points>0&&(a.points-=1),a.setState({currency:"YOU LOST",computerChoice:"rock"})},a.time)):"rock"===e.currentTarget.value&&"scissors"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points+=1,a.setState({currency:"YOU WIN",computerChoice:"scissors"})},a.time)):"rock"===e.currentTarget.value&&"lizard"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points+=1,a.setState({currency:"YOU WIN",computerChoice:"lizard"})},a.time)):"lizard"===e.currentTarget.value&&"rock"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points>0&&(a.points-=1),a.setState({currency:"YOU LOST",computerChoice:"rock"})},a.time)):"lizard"===e.currentTarget.value&&"spock"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points+=1,a.setState({currency:"YOU WIN",computerChoice:"spock"})},a.time)):"spock"===e.currentTarget.value&&"lizard"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points>0&&(a.points-=1),a.setState({currency:"YOU LOST",computerChoice:"lizard"})},a.time)):"spock"===e.currentTarget.value&&"scissors"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points+=1,a.setState({currency:"YOU WIN",computerChoice:"scissors"})},a.time)):"scissors"===e.currentTarget.value&&"spock"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points>0&&(a.points-=1),a.setState({currency:"YOU LOST",computerChoice:"spock"})},a.time)):"scissors"===e.currentTarget.value&&"lizard"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points+=1,a.setState({currency:"YOU WIN",computerChoice:"lizard"})},a.time)):"lizard"===e.currentTarget.value&&"scissors"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points>0&&(a.points-=1),a.setState({currency:"YOU LOST",computerChoice:"scissors"})},a.time)):"lizard"===e.currentTarget.value&&"paper"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points+=1,a.setState({currency:"YOU WIN",computerChoice:"paper"})},a.time)):"paper"===e.currentTarget.value&&"lizard"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points>0&&(a.points-=1),a.setState({currency:"YOU LOST",computerChoice:"lizard"})},a.time)):"paper"===e.currentTarget.value&&"spock"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points+=1,a.setState({currency:"YOU WIN",computerChoice:"spock"})},a.time)):"spock"===e.currentTarget.value&&"paper"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points>0&&(a.points-=1),a.setState({currency:"YOU LOST",computerChoice:"paper"})},a.time)):"spock"===e.currentTarget.value&&"rock"===t?(a.setState({gameOn:!0}),setTimeout(function(){a.points+=1,a.setState({currency:"YOU WIN",computerChoice:"rock"})},a.time)):"rock"===e.currentTarget.value&&"spock"===t&&(a.setState({gameOn:!0}),setTimeout(function(){a.points>0&&(a.points-=1),a.setState({currency:"YOU LOST",computerChoice:"spock"})},a.time))},a.handleRestart=function(e){e.preventDefault(),!1===a.state.restart&&a.setState({gameOn:!1,computerChoice:"",currency:""})},a.handleEnterRestart=function(e){13===e.keyCode&&!1===a.state.restart&&""!==a.state.computerChoice&&a.setState({gameOn:!1,computerChoice:"",currency:""})},a.handleCloseRulesOnAppClick=function(e){a.setState({rules:!a.state.rules}),!1===e&&a.setState({rules:!1})},a.handleSlider=function(){a.setState({extendedVersion:!a.state.extendedVersion})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleEnterRestart,!1)}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{id:"mainMenu",className:"App",onClick:this.handleCloseRulesOnAppClick,style:this.state.gameOn?this.gridTemplateAreasResult:this.gridTemplateAreasChooseOption}," ",s.a.createElement(E,{extendedVersion:this.state.extendedVersion,points:this.points}),this.state.gameOn?s.a.createElement(s.a.Fragment,null,s.a.createElement(L,{playerChoice:this.playerChoice,computerChoice:this.state.computerChoice,currency:this.state.currency,handleRestart:this.handleRestart,handleEnter:this.handleEnter})):s.a.createElement(s.a.Fragment,null,s.a.createElement(C,{extendedVersion:this.state.extendedVersion,handleSlider:this.handleSlider}),this.state.extendedVersion?s.a.createElement(R,{handlePlayerChoice:this.handlePlayerChoice}):s.a.createElement(S,{handlePlayerChoice:this.handlePlayerChoice}))),s.a.createElement(P,{rulesApp:this.state.rules,handleCloseRulesOnAppClick:this.handleCloseRulesOnAppClick,extendedVersion:this.state.extendedVersion}),s.a.createElement(F,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.491e9a2c.chunk.js.map