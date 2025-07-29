define( function() {
    "use strict";

    var g_aDataStores = [];
    var oPage;
    function BasicControl(){}

    BasicControl.prototype.initialize = function( oControlHost, fnDoneInitializing )
    {

    this.m_oControlHost = oControlHost;

        fnDoneInitializing();
    };


BasicControl.prototype.draw = function( oControlHost )     {

// alert(window.screen.availHeight + ' ' + window.screen.availWidth + ' - ' + window.screen.height + ' : ' +  window.screen.width) ;

  var oControl = this.m_oControlHost.page.getControlByName( "FACILITY" );
  console.log( oControl ? "found control" : "control not found" );

  // var promptContent = document.querySelector('[lid="T1"]') ;
  var el = oControlHost.container;

  el.innerHTML = `
          <style> #loader_blocker, #loader_progress {
            visibility: visible;
          }

          .clsViewerBlocker {
 height: 115px !important;
          }


          </style>
  <div class="clsViewerBlocker" id="loader_blocker" style="cursor: wait;  ">
  <div class="clsViewerProgress clsDialogText" id="loader_progress" style=" display: flex; width: 400px; height: 117px;margin-right: 14px;">
  <div style="padding:21px 32px 21px 32px;"><svg class="clsHalLoadingSpinner" style="display:inline-block; vertical-align:middle;">
  <use xlink:href="#def_hal_loading"></use></svg><span style="margin-left:12px" hal_ids="IDS_PREVIEW_WORKING">Checking Default Facility...</span></div>

  </div>
  </div>
          `;

// CHECK DEFAULT FACILITY SETTINGS - COOKIE OR PROFILE
var cookieCheck = "profile";
var option = "";

if (localStorage.getItem("sci_default_facility_type") === null) {
  // do nothing
 } else if (localStorage.getItem("sci_default_facility_type") == "cookie") {
   var defaultFacilityCookieValue = localStorage.getItem("sci_default_facility_cookie") ;
   var isValidValue = ['1101', '1102', '1104', '1105','1106','1107','1108','1109','1110','1116','1117','1118','1121','1122','1501','1505','1510'].includes(defaultFacilityCookieValue);
           if (isValidValue){
             var cookieCheck = "cookie";
           } else {
             // do nothing
           }
 } else {
   // do nothing
 }

 console.log("SCI Default facility setting is set to ", cookieCheck.toUpperCase() );

// USE the check value to determine the facility values
if (cookieCheck == "cookie"){
var option = localStorage.getItem("sci_default_facility_cookie");
var selection = [{'use': option}];
oControl.setValues(selection);
oControlHost.finish();

} else {


  var aDataStores = g_aDataStores;
	var o = oControlHost.configuration;

  if ( o && o["Control name"] )	{
    var oControl1 = oControlHost.page.getControlByName( o["Control name"] );
    aDataStores = o["Data store name"] ? [oControl1.getDataStore( o["Data store name"] )] : oControl1.dataStores;
  }


  	for ( var i = 0; i < aDataStores.length; i++ ) 	{
  		// alert(JSON.stringify(aDataStores[i]));

  		var d = aDataStores[i];
  		var ds = JSON.stringify(d, null, 2);
  		let json = JSON.parse(ds);
  		// console.log(json);

  		for (var key in json) {

  		          if (typeof json[key] == "object"){
                //  console.log(json[key]);
                  var z = JSON.stringify(json[key].columns[0].values[0], null, 2);
                }
  						}
  	}

    if (typeof z !== 'undefined') {
              if (z){
                var option = z.replace(/['"]+/g, '') ;
                console.log('SCI Custom - The default Facilty data item = ' + option)
                localStorage.setItem('sci_default_facility_profile', option);

                          if ( option.length > 3){
                          var selection = [{'use': option}];
                          oControl.setValues(selection);
                         oControlHost.finish();
                          } else {
                          document.querySelector("#loader_blocker").style.display = "none";
                          document.querySelector("#loader_progress").style.display = "none";
                          }

              } else {
                          document.querySelector("#loader_blocker").style.display = "none";
                          document.querySelector("#loader_progress").style.display = "none";

              }
    } else {
      document.querySelector("#loader_blocker").style.display = "none";
      document.querySelector("#loader_progress").style.display = "none";
    }

// END
}


  // document.querySelector("#loader_blocker").style.display = "none";
  // document.querySelector("#loader_progress").style.display = "none";
  // el.style.visibility = "hidden";

  };

  function storeCookie(cookieName, cookieValue) {
      // Set the cookie expiry date to 1 January 2100 to ensure it does not expire
      var expDate = new Date();
      expDate.setFullYear(2100, 0, 1);
      document.cookie = cookieName + "=" + cookieValue + "; expires=" + expDate.toUTCString();
  }


  function setlocalCookie(cookieName, cookieValue) {
      localStorage.removeItem(cookieName);
      localStorage.setItem(cookieName, cookieValue);
  }

  function getlocalCookie(cookieName) {
     return localStorage.getItem(cookieName);
  }

    return BasicControl;
    });
