(function() {
  const queryString = window.location.search;
  console.log(queryString);  
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams);    
  const a1=urlParams.get('q1');
  const a2=urlParams.get('q2');
  const a3=urlParams.get('q3');
  var listPapertextareaInput = document.getElementsByClassName("quantumWizTextinputPapertextareaInput exportTextarea");    
  var postValue_1 = document.getElementsByName("entry.1762311180");
  var postValue_2 = document.getElementsByName("entry.850410197");
  var postValue_3 = document.getElementsByName("entry.151000889");
  var listQuestions = document.getElementsByClassName("quantumWizTextinputPapertextareaEl modeLight freebirdFormviewerComponentsQuestionTextLong freebirdFormviewerComponentsQuestionTextTextInput freebirdThemedInput");
  listPapertextareaInput[0].setAttribute("data-initial-value",a1);
  listPapertextareaInput[0].setAttribute("badinput","false");
  listPapertextareaInput[0].value=a1;
  listPapertextareaInput[0].text=a1;
  postValue_1[0].setAttribute("value",a1);
  listQuestions[0].className += " hasValue";
  listPapertextareaInput[1].setAttribute("data-initial-value",a2);
  listPapertextareaInput[1].setAttribute("badinput","false");
  listPapertextareaInput[1].value=a2;
  listPapertextareaInput[1].text=a2;
  postValue_2[0].setAttribute("value",a2);
  listQuestions[1].className += " hasValue";
  listPapertextareaInput[2].setAttribute("data-initial-value",a3);
  listPapertextareaInput[2].setAttribute("badinput","false");
  listPapertextareaInput[2].value=a3;
  listPapertextareaInput[2].text=a3;
  postValue_3[0].setAttribute("value",a3);
  listQuestions[2].className += " hasValue";
})();
