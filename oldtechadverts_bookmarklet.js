/* This javascript function will launch new window at the URL for the survey. 
 * and pass on it the answers for the survey.
 */
(function() {

  const currentURL = window.location.href.split(/[?#]/)[0];
  console.log("currentURL="+currentURL);

  const myFormURL = new URL("https://docs.google.com/forms/d/e/1FAIpQLSf9_xxtlrBYOg5tUgPGdcbBF0IzFwGRQiZ8kWCrdgXDi_Pg2A/viewform");

  /* attached the first answer to the parameter */
  myFormURL.searchParams.append("q1",currentURL);

  console.log(myFormURL.href);
  
  window.open(myFormURL);
}
)();


(function() {

  /* parse the command line to extract the parameters for the three questions.
   */
  const queryString = window.location.search;
  console.log(queryString);  
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams);
  
  const a1=urlParams.get('q1');
  console.log(a1);


  
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