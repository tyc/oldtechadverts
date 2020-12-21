(function() {
    const currentURL = window.location.href.split(/[?#]/)[0];
    const windowFeatures = "height=750,width=450,menubar=yes,toolbar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    const myFormURL = new URL("https://docs.google.com/forms/d/e/1FAIpQLSf9_xxtlrBYOg5tUgPGdcbBF0IzFwGRQiZ8kWCrdgXDi_Pg2A/viewform");
    myFormURL.searchParams.append("q1",currentURL);
    myFormURL.searchParams.append("q2","second answer");
    myFormURL.searchParams.append("q3","third");
    window.open(myFormURL, "OTA_prefill", windowFeatures);
  }
  )();