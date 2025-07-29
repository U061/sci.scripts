define( function() {
"use strict";

var g_aDataStores = [];

function C_DataStoreViewer()
{
};

C_DataStoreViewer.prototype.draw = function( oControlHost ){
	var aDataStores = g_aDataStores;
	var o = oControlHost.configuration;

	if ( o && o["Control name"] )	{
		var oControl = oControlHost.page.getControlByName( o["Control name"] );
		aDataStores = o["Data store name"] ? [oControl.getDataStore( o["Data store name"] )] : oControl.dataStores;
	}


	for ( var i = 0; i < aDataStores.length; i++ ) 	{
		// alert(JSON.stringify(aDataStores[i]));

		var d = aDataStores[i];
		var ds = JSON.stringify(d, null, 2);
		let json = JSON.parse(ds);
		// console.log(jsonData[5]);

		for (var key in json) {

		          if (typeof json[key] == "object"){
                var z = JSON.stringify(json[key].columns[0].values[0], null, 2);
              }
						}
	}

	if (typeof z !== 'undefined') {
	    if (z){
        z = z.replace(/['"]+/g, '');

				if (z == "2000" | z.toLowerCase() == "system" || z == "1000") {
					var z= '';

					localStorage.setItem('sci_default_facility_profile', '');
				} else {
					localStorage.setItem('sci_default_facility_profile', z);
				}

			} else {
					var z= '';
					localStorage.setItem('sci_default_facility_profile', '');
			}
	} else {
		var z= '';
		localStorage.setItem('sci_default_facility_profile', '');
	}


if (z == '') {

	waitForElm('#settings_default_facility').then((elm) => {
	document.getElementById("settings_default_facility").value  = "cookie";
	});

						// INITIALIZE DROPDOWN - check if facility is set
						if (localStorage.getItem("sci_default_facility_cookie") === null) {
							localStorage.setItem('sci_default_facility_type', 'cookie');
						//	localStorage.setItem('sci_default_facility_cookie', '');

						} else {
						z = localStorage.getItem("sci_default_facility_cookie");
						localStorage.setItem('sci_default_facility_type', 'cookie');
						}

} else {

	waitForElm('#settings_default_facility').then((elm) => {
	document.getElementById("settings_default_facility").value  = "profile";
	});

	localStorage.setItem('sci_default_facility_profile', z);

}



waitForElm('#facility_dropdown').then((elm) => {
document.getElementById("facility_dropdown").value = z;
});






};

function get_facility_dropdown(){

var final = '';

            if (localStorage.getItem("sci_default_facility_type") === null || localStorage.getItem("sci_default_facility_type") == 'profile') {

                          // INITIALIZE DROPDOWN - check if facility is set
                          if (localStorage.getItem("sci_default_facility_profile") === null) {
                          } else {
                          final = localStorage.getItem("sci_default_facility_profile");
                          }

            } else {

                            // INITIALIZE DROPDOWN - check if facility is set
                            if (localStorage.getItem("sci_default_facility_cookie") === null) {
                            } else {
                            final = localStorage.getItem("sci_default_facility_cookie");
                            }
            }
      return final;
}

class ButtonSwitch {
  constructor(domNode) {
    this.switchNode = domNode;
    this.switchNode.addEventListener('click', () => this.toggleStatus());

    // Set background color for the SVG container Rect
    var color = getComputedStyle(this.switchNode).getPropertyValue(
      'background-color'
    );
    var containerNode = this.switchNode.querySelector('rect.container');
    containerNode.setAttribute('fill', color);
  }

  // Switch state of a switch
  toggleStatus() {
    const currentState =
      this.switchNode.getAttribute('aria-checked') === 'true';
    const newState = String(!currentState);

    this.switchNode.setAttribute('aria-checked', newState);
  }
}

// Initialize switches
window.addEventListener('load', function () {
  // Initialize the Switch component on all matching DOM nodes
  Array.from(document.querySelectorAll('button[role^=switch]')).forEach(
    (element) => new ButtonSwitch(element)
  );
});


function getCookie(c_name) {
  //  return localStorage.getItem(c_name);
  var match = document.cookie.match(RegExp('(?:^|;\\s*)' + c_name + '=([^;]*)'));
   return match ? match[1] : null;
}

function setCookie(c_name, value) {
    return localStorage.setItem(c_name, value);
}


function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}


C_DataStoreViewer.prototype.setData = function( oControlHost, oDataStore )
{
	g_aDataStores[oDataStore.index] = oDataStore;
};

C_DataStoreViewer.prototype.F_HTMLEncode = function( s )
{
	return String( s ).replace( /&/g, "&amp;" ).replace( /</g, "&lt;" ).replace( />/g, "&gt;" );
};

return C_DataStoreViewer;
});
