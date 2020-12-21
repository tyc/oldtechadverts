/* This javascript function will launch new window at the URL for the survey. 
 * and pass on it the answers for the survey.
 */
(function() {

    /* get the current URL and remove any parameters that is in the 
     * URL.
     */
    const currentURL = window.location.href.split(/[?#]/)[0];
    // console.log("currentURL="+currentURL);
  
    const windowFeatures = "height=750,width=450,menubar=yes,toolbar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    const myFormURL = new URL("https://docs.google.com/forms/d/e/1FAIpQLSf9_xxtlrBYOg5tUgPGdcbBF0IzFwGRQiZ8kWCrdgXDi_Pg2A/viewform");
  
    /* attached the first answer to the parameter */
    myFormURL.searchParams.append("q1",currentURL);
  
    /* attached the second answer to the parameter */
    myFormURL.searchParams.append("q2","second answer");
  
    /* attached the third answer to the parameter */
    myFormURL.searchParams.append("q3","third");
    
    console.log(myFormURL.href);
    
    window.open(myFormURL, "OTA_prefill", windowFeatures);
  }
  )();