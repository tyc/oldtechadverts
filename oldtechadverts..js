(function() {
    /* parse the command line to extract the parameters for the three questions.
     */
    const queryString = window.location.search;
    console.log(queryString);  
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    
    const a1=urlParams.get('q1');
    const a2=urlParams.get('q2');
    const a3=urlParams.get('q3');
    
    var listPapertextareaInput = document.getElementsByClassName("quantumWizTextinputPapertextareaInput exportTextarea");
    
    console.log(listPapertextareaInput[0].className);
    console.log(listPapertextareaInput[0]);
    
    var postValue_1 = document.getElementsByName("entry.1762311180");
    var postValue_2 = document.getElementsByName("entry.850410197");
    var postValue_3 = document.getElementsByName("entry.151000889");
    
    var listQuestions = document.getElementsByClassName("quantumWizTextinputPapertextareaEl modeLight freebirdFormviewerComponentsQuestionTextLong freebirdFormviewerComponentsQuestionTextTextInput freebirdThemedInput");
                                                       
    console.log(listQuestions[0].className);
    console.log(listQuestions[0]);
      
    /* added the value for the first answer */
    listPapertextareaInput[0].setAttribute("data-initial-value",a1);
    listPapertextareaInput[0].setAttribute("badinput","false");
    listPapertextareaInput[0].value=a1;
    listPapertextareaInput[0].text=a1;
    // console.log(postValue_1st[0]);
    postValue_1[0].setAttribute("value",a1);
    listQuestions[0].className += " hasValue";
    // console.log(listQuestions[0]);
    
    /* added the value for the second answer */
    listPapertextareaInput[1].setAttribute("data-initial-value",a2);
    listPapertextareaInput[1].setAttribute("badinput","false");
    listPapertextareaInput[1].value=a2;
    listPapertextareaInput[1].text=a2;
    // console.log(postValue_1st[1]);
    postValue_2[0].setAttribute("value",a2);
    listQuestions[1].className += " hasValue";
    // console.log(listQuestions[0]);
    
    /* added the value for the third answer */
    listPapertextareaInput[2].setAttribute("data-initial-value",a3);
    listPapertextareaInput[2].setAttribute("badinput","false");
    listPapertextareaInput[2].value=a3;
    listPapertextareaInput[2].text=a3;
    // console.log(postValue_1st[1]);
    postValue_3[0].setAttribute("value",a3);
    listQuestions[2].className += " hasValue";
    // console.log(listQuestions[0]);
  })();