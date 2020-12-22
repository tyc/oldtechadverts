# oldtechadverts
For Old Tech Adverts

## OTA trigger
This javascript is to open a new window with the URL pointed to a Google Form for collectng the data.

The window is launched in a landscape mode on the left hand side of the screen. So ideally, the page showing the advert should be open on the right hand side. This will allow you have both the form and the advert page side by side.



<a href="javascript:(function()%7B(function()%20%7B%0A%20%20%20%20const%20currentURL%20%3D%20window.location.href.split(%2F%5B%3F%23%5D%2F)%5B0%5D%3B%0A%20%20%20%20const%20windowFeatures%20%3D%20%22height%3D750%2Cwidth%3D450%2Cmenubar%3Dyes%2Ctoolbar%3Dyes%2Clocation%3Dyes%2Cresizable%3Dyes%2Cscrollbars%3Dyes%2Cstatus%3Dyes%22%3B%0A%20%20%20%20const%20myFormURL%20%3D%20new%20URL(%22https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSf9_xxtlrBYOg5tUgPGdcbBF0IzFwGRQiZ8kWCrdgXDi_Pg2A%2Fviewform%22)%3B%0A%20%20%20%20myFormURL.searchParams.append(%22q1%22%2CcurrentURL)%3B%0A%20%20%20%20myFormURL.searchParams.append(%22q2%22%2C%22second%20answer%22)%3B%0A%20%20%20%20myFormURL.searchParams.append(%22q3%22%2C%22third%22)%3B%0A%20%20%20%20window.open(myFormURL%2C%20%22OTA_prefill%22%2C%20windowFeatures)%3B%0A%20%20%7D%0A%20%20)()%3B%7D)()%3B">OTA trigger</a>

