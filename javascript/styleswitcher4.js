 /* Reference: Sowden, P (2001) Alternative Style: Working With Alternate Style Sheets. [online]
 Available at: http://www.alistapart.com/articles/alternate/ [Accessed 5th July 2012]
 */ 
  
  
  
   function setActiveStyleSheet(title){
    var i, a, main;
    for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1
          && a.getAttribute("title")) 
        {
          a.disabled = true;
          if(a.getAttribute("title") == title) 
            a.disabled = false;
        }
      }
	}	
    
    
    
    function createCookie(name,value,days) {
      if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
      }
      else expires = "";
      document.cookie = name+"="+value+expires+"; path=/";
    }
    function readCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    }

    function getPreferredStyleSheet() {
      var i, a;
      for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1
           && a.getAttribute("rel").indexOf("alt") == -1
           && a.getAttribute("title")
           ) return a.getAttribute("title");
      }
      return null;
    }
    function getActiveStyleSheet() {
      var i, a;
       for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
        if(a.getAttribute("rel").indexOf("style") != -1
        && a.getAttribute("title")
        && !a.disabled) return a.getAttribute("title");
      }
      return null;
    }

  
    window.onunload=function(e) {
      var title = getActiveStyleSheet();
      createCookie("style", title, 30);
     }
	

/*I used the JQuery command document.ready instead of window.onload. Window.onload waits for 
everything on the page to load before it carries out the function whereas document.ready executes 
the function as soon as the HTML is loaded. This was more appropriate for the 'contact' page due
 to the embedded map and the extra time it takes for this to load*/

	$(document).ready(function(e) {
      var cookie = readCookie("style");
      var title = cookie ? cookie : getPreferredStyleSheet();
      setActiveStyleSheet(title);
    });