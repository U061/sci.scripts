define( function() {

function PageModule()
{
};

PageModule.prototype.load = function( oPage ) {


  function scriptExists(url) {
    return document.querySelectorAll(`script[src="${url}"]`).length > 0;
  }


var link = "https://u061.github.io/sci.scripts/homepage/inject.css";
  if(scriptExists(link)) {
  console.log("SCI link Duplicate : " + link);
  } else {
    var element = document.createElement("link");
    element.setAttribute("href", link);
    element.setAttribute('rel', 'stylesheet');
    element.setAttribute('type', 'text/css');

    document.head.appendChild(element);
  }




var js_file = "https://u061.github.io/sci.scripts/homepage/inject.js";

var script = document.createElement('script');
 // script.async = true;
  script.setAttribute('src', js_file);
  script.setAttribute('type', 'text/javascript');

document.head.appendChild(script);


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
