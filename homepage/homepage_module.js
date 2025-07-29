define( function() {

function PageModule()
{
};

PageModule.prototype.load = function( oPage ) {


  function scriptExists(url) {
    return document.querySelectorAll(`script[src="${url}"]`).length > 0;
  }


var link = "https://akconcept.co.uk/sci/homepage/v1/home_inject.css?v=12";
  if(scriptExists(link)) {
  console.log("SCI link Duplicate : " + link);
  } else {
    var element = document.createElement("link");
    element.setAttribute("href", link);
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');

    document.head.appendChild(element);
  }





/*
var sweetcdn = "https://alliance-healthcare.000webhostapp.com/sci/js/sweetalert.js";

var sweetalert = document.createElement('script');
 // script.async = true;
  sweetalert.setAttribute('src', sweetcdn);
  sweetalert.setAttribute('type', 'text/javascript');

document.head.appendChild(sweetalert); */

var js_file = "https://akconcept.co.uk/sci/homepage/v1/home_inject.js?v=13";

var script = document.createElement('script');
 // script.async = true;
  script.setAttribute('src', js_file);
  script.setAttribute('type', 'text/javascript');

document.head.appendChild(script);



/*
var jq = "https://ualos-sci.sce.manh.com/bi/lib/jquery/3.4.1/jquery.min.js";

var script1 = document.createElement('script');
 // script.async = true;
  script1.setAttribute('src', jq);
  script1.setAttribute('type', 'text/javascript');

document.head.appendChild(script1);

var fa = "https://kit.fontawesome.com/4647a2d2af.js";

var script2 = document.createElement('script');
 // script.async = true;
  script2.setAttribute('src', fa);
 // script2.setAttribute('crossorigin', 'anonymous');

document.body.appendChild(script2);

*/


};

PageModule.prototype.show = function( oPage )
{

};

PageModule.prototype.hide = function( oPage )
{

};

PageModule.prototype.destroy = function( oPage )
{

};

return PageModule;
});
