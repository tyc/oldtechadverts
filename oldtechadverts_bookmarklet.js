(function() {
    alert('We are now killing it');
  })();


(function() {

  window.open("https://docs.google.com/forms/d/e/1FAIpQLSf9_xxtlrBYOg5tUgPGdcbBF0IzFwGRQiZ8kWCrdgXDi_Pg2A/viewform?usp=sf_link");

  var listPaperinputInput = document.getElementsByClassName('quantumWizTextinputPaperinputInputArea');
  console.log(listPaperinputInput);
  listPaperinputInput[0].value="Hello,World";
  listPaperinputInput[1].value="Goodbye, World"
  
  var listPapertextareaInput = document.getElementsByClassName('quantumWizTextinputPapertextareaInput');
  console.log(listPapertextareaInput);
  listPapertextareaInput[0].value="I am in the middle";

})();


(function() {

  
  var listPapertextareaInput = document.getElementsByClassName("quantumWizTextinputPapertextareaInput exportTextarea");
  
  /*
  console.log(listPapertextareaInput);
  listPapertextareaInput[0].value="I am not here12";
  listPapertextareaInput[0].text="I am not here12";
  listPapertextareaInput[1].value="I am not here13";
  listPapertextareaInput[1].text="I am not here13";
  listPapertextareaInput[2].value="I am not here14";
  listPapertextareaInput[2].text="I am not here14";
  */
  
  console.log(listPapertextareaInput[0]);
	listPapertextareaInput[0].setAttribute("data-initial-value","I am not here12");
  listPapertextareaInput[0].setAttribute("badinput","false");
  listPapertextareaInput[0].value="I am not here12";
  listPapertextareaInput[0].text="I am not here12";
  console.log(listPapertextareaInput[0]);

})();

<div class="quantumWizTextinputPapertextareaEl modeLight freebirdFormviewerComponentsQuestionTextLong freebirdFormviewerComponentsQuestionTextTextInput freebirdThemedInput hasValue" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow="" jsname="YPqjbf"><div class="quantumWizTextinputPapertextareaMainContent exportContent"><div class="quantumWizTextinputPapertextareaPlaceholder exportLabel" aria-hidden="true" jsname="LwH6nd">Your answer</div><div class="quantumWizTextinputPapertextareaContentArea exportContentArea"><textarea class="quantumWizTextinputPapertextareaInput exportTextarea" jsname="YPqjbf" data-rows="1" tabindex="0" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" data-initial-value="I am not here12" aria-labelledby="i1" aria-describedby="i2 i3" style="height: 24px;" badinput="false"></textarea></div><div class="quantumWizTextinputPapertextareaUnderline exportUnderline"></div><div jsname="XmnwAc" class="quantumWizTextinputPapertextareaFocusUnderline exportFocusUnderline animationInitialized" style="transform-origin: 124.633px center 0px;"></div></div><div class="quantumWizTextinputPapertextareaCounterErrorHolder"><div jsname="ty6ygf" class="quantumWizTextinputPapertextareaHint exportHint"></div></div></div>
<div class="quantumWizTextinputPapertextareaEl modeLight freebirdFormviewerComponentsQuestionTextLong freebirdFormviewerComponentsQuestionTextTextInput freebirdThemedInput hasValue" jscontroller="pxq3x" jsaction="clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV" jsshadow="" jsname="YPqjbf"><div class="quantumWizTextinputPapertextareaMainContent exportContent"><div class="quantumWizTextinputPapertextareaPlaceholder exportLabel" aria-hidden="true" jsname="LwH6nd">Your answer</div><div class="quantumWizTextinputPapertextareaContentArea exportContentArea"><textarea class="quantumWizTextinputPapertextareaInput exportTextarea" jsname="YPqjbf" data-rows="1" tabindex="0" aria-label="Your answer" jscontroller="gZjhIf" jsaction="input:Lg5SV;ti6hGc:XMgOHc;rcuQ6b:WYd;" dir="auto" data-initial-dir="auto" data-initial-value="I am not here12" aria-labelledby="i1" aria-describedby="i2 i3" style="height: 24px;" badinput="false"></textarea></div><div class="quantumWizTextinputPapertextareaUnderline exportUnderline"></div><div jsname="XmnwAc" class="quantumWizTextinputPapertextareaFocusUnderline exportFocusUnderline animationInitialized" style="transform-origin: 151.633px center 0px;"></div></div><div class="quantumWizTextinputPapertextareaCounterErrorHolder"><div jsname="ty6ygf" class="quantumWizTextinputPapertextareaHint exportHint"></div></div></div>


(function() {

  
  var listPapertextareaInput = document.getElementsByClassName("quantumWizTextinputPapertextareaInput exportTextarea");
  
  console.log(listPapertextareaInput[0].className);
  console.log(listPapertextareaInput[0]);
  
  var postValue_1 = document.getElementsByName("entry.1762311180");
  var postValue_2 = document.getElementsByName("entry.850410197");
  var postValue_3 = document.getElementsByName("entry.151000889");
  
  var listQuestions = document.getElementsByClassName("quantumWizTextinputPapertextareaEl modeLight freebirdFormviewerComponentsQuestionTextLong freebirdFormviewerComponentsQuestionTextTextInput freebirdThemedInput");
                                                     
  console.log(listQuestions[0].className);
  console.log(listQuestions[0]);
  
  var inputNewString = "jack has a funny nose";
  var inputNewString2 = "bob has a funny nose";
  
  /* added the value for the first answer */
  listPapertextareaInput[0].setAttribute("data-initial-value",inputNewString);
  listPapertextareaInput[0].setAttribute("badinput","false");
  listPapertextareaInput[0].value=inputNewString;
  listPapertextareaInput[0].text=inputNewString;
  // console.log(postValue_1st[0]);
  postValue_1[0].setAttribute("value",inputNewString);
  listQuestions[0].className += " hasValue";
  // console.log(listQuestions[0]);
  
  /* added the value for the first answer */
  listPapertextareaInput[1].setAttribute("data-initial-value",inputNewString2);
  listPapertextareaInput[1].setAttribute("badinput","false");
  listPapertextareaInput[1].value=inputNewString2;
  listPapertextareaInput[1].text=inputNewString2;
  // console.log(postValue_1st[1]);
  postValue_2[0].setAttribute("value",inputNewString2);
  listQuestions[1].className += " hasValue";
  // console.log(listQuestions[0]);
  
  
})();