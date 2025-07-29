/* HOMEPAGE JAVASCRIPT*/
/*

                    <div id="custom_request" onclick="change_request()" style="padding-left:13px;float: left"><img style="height:20px;padding-left:10px;cursor:pointer;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRklEQVR4nO2ZPWsUQRjHf0UwwbxxgiA5e8HGq6IiFz+AZ53CrxEIadIY7EPAT5BaCEREJAasFETEgEVieYWWeSkMCY4MPgfLsrvzzLmZmT3uD0+z8/rb/8wwLzDWWMH1FNgHzgATOc6A90DPF+JFAp03JbHh44RJPHoakP0EOmocsacBOU2go8YRJxoQ05BwSlPJd6ADbAN/PBr/DWwC94FpYA54CHyMBdLJ5H8MHCjK9IF7Be0tAxexQLZzZSYUTtQJYeoCscNpKVdutyL/phLiAvgUEsTGN3FioMkKmEUlxLLMmaAgg9gViCqYmVwb6yUQVvOxQGy8Aaak/DVgJ5duV6i8ViXtEniW+T4XE6TImdeZNLvcFmk948RAD2KDZGFawGf5dgQsoNdWCiBGnMhCtD0gOsB5KiDmPyD6HvUHAamCWMhsUWZkud3ycMKEAjmsgLgl+7Q6fpZTV+VEWyCNzKGjVEEOlU58AW7U4I5TISCK0qKD+AynliOPiQXiM7Et8G1lXhMSZJjVqU4YpzSV/FAOJ98f0Ja6g4F0h4TQwHRDgszWMDTKYGZjOjLsylME0w0J0pcze0sa1o7rsvnWlbqWPDaOtYCkECNxZXrsxvj3DmFG4RK7l0BHjSOeoNRGAp01JfFcC5F1Zi+ROXMqfVE7odGkouE1GqCbikeYou16cnrkALGXbo3QWgXEV7kyTV7TwM8SiF/AHRqg68CrEgh7YLpLQ/ShAMBeqr2UG/TG6J08odnd6VtgpeLYOtZYjIj+Auqw/obx52KIAAAAAElFTkSuQmCC"></div>
                    */

var customSettings = `<div style="display: flex;   justify-content: space-between;  width: 100%;">

<div class="icon" id="custom_request" title="Raise a change request." onclick="change_request()" style=" cursor:pointer; width: 29px;
    height: 23px;
    background-color: black;
    border-radius: 12%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 16px;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /* border: 2px solid #fff; */
    text-align: center;
    line-height: 1;
    user-select: none;
    padding-top: 2px;">CR</div>


                    <div id="custom_settings" onclick="ShowModal()" style="padding-left:13px;float: right"><img style="height:20px;padding-left:10px;cursor:pointer;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2UlEQVR4nO2av2sUQRTHP8FgUHMngtHCHwg5UCNioqIRS7HRXi099A8wxM4YECGiYv6CWNl5iIWtgoVGLKKthSjmULhYaZFc7pJbGXgLy7ruzszO3e6d+cIXApmbed/deTvffW9hA/8H7gPrgBdiE5iki1CNEOHzA12CItCKEVIH+ukCjMeI8HkoywD3AxPAUMK4soaQSwlzDAE3gH04xgHgqwRRAy7GjH2oIeROzO/PAd9lnMq1kisRpYjkVTnwCBgIjd0BvNEQ8goohH67WS5COL8WgeF2iAjyIzAiefEcWNUQ4XMZeAIcBQ4CCzFjU4nZmyDCZ8Mg+CiqO7CiMW4R2GMjRCdpO82rNkK2Ap9yELwn/AwMYokTDraOCzaB06TEdA6ETOEAyk7MZyjiLbAJRyhltMWWXZwhQZzJ6G6sA0dcCnlhGICyMbeAUWCbcEz2es1wrjlXInbJU0N34acR9iMI9b+KwXy/gC227xPKclwXP/XeUESfxhp9hmJeAw/kkD6VcKG4JzbAdj/XkhaIuGBLKdb7JjH/hbWUialywhS3U665FjVp3OupDo9ZCBlLuWarHUJsfFAhj0IKFkKKeRQympet1cjA2KU1pI2oSW9K8azeocfvduCn5Vp1iXUyye2q9/DLwIxmMcFnxeBAfGYw70vgrpSRDtsW+EwtSkWSOO5OmIj4bWtRXJjGJTnsjstjeVD+nrbYTo/pARvfcm3jRwy3lyuuSM3LCQakEOdlxAWpQqbGbIYiPKEqpabCeQcnvqtcuWArYifwIwcivMCBu9tGyEQOgvdCVD0Tq8aOThF7tUNF7KrE1Ja2wjsZMy6ntW1bYTihCFh10fCJEtOUU7o/otEzr1lMCBtMVU2cinDhTrtWwdbbF+Bsyse1MoD/wslAF8CpiGDjpyzFtjhc0xByRaOlUbZt7HTSlykrnnsUe+WDgZ75hAOpAPbERzUbwBJ/AGHShFfzN0J6AAAAAElFTkSuQmCC"></div>
                </div>`;

var modalHTML = `<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <div class="modal-header">
      <span id="close_modal" onclick="CloseModal()">&times;</span>
      <h2>SCI Custom Settings</h2>
    </div>
    <div class="modal-body">
      <p></p>

      <div class="" style="">
      Default Facility Settings
<select name="settings_default_facility" class="custom_dropdown" title="Re login for changes to take effect." onchange="change_default_facility()" id="settings_default_facility">
  <option disabled value> -- Select Default Facility  -- </option>
  <option value="profile">User Profile Default</option>
  <option value="cookie">Custom Cookie</option>

</select>
</div>
    </div>
    <div class="modal-footer">
      <div><button id="btn_close_modal" onclick="CloseModal()" type="button">OK</button></div>
    </div>
  </div>

</div>`;

var list_header = `
<td style="font-size:14pt;background-color:#FFFFFF;text-align:center;padding-top: 21px;">
<span id="sci_auto_report_image" style="margin-right: 27px;">
<img tabindex="0" style="height:35px;vertical-align:middle;margin-left: 50px;" roid="i337" specname="image" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABmElEQVR4nO2Yz0rEMBDGv62wHpY9avGu4oLe3fYuvoA+gsetq+7VP8vOe0tgAiFs27huJtOSD0IhbTP58TWTSYGsYYkitlcA8zGAkCQMjQWGIreVc50NGWTmwER1JjYIpGBIAEQEhoRAosOQIEhUGGmQaDApQKLApAI5OgwpaquxgFAGQXoHKDviKbUDlB3xlNoByo54Su0AZUc8pXaAsiOeUjtA2RFPqR2gsTpyC+BkDCAE4APAYgggDYAlgNLpK7mvcfoeAUw0gvzwZN3J2XtWBT+zdWBUgRiIy474vq4cmIUmkPue+PtU8b0NO9UpqTUxOQCkcNbMnQaQZUB89LjyDAUgZwHx22Qz2zsUgEyPEP9bA8hpR/yXwDE+NYCc43Bd8BhrDSD1P0AqHuNJA0gTsg/sUcF/6W0xmRykLwW3qeZ330IqYimQbUuJ0qZrfmenrUSxMFXPZ1awE7bOegiBkAZx10zNm92UW8mQa35mxxDBZbykbvjQ1Adq1sSfD1bSMp+OyUCmdjJlh9mxvzg7mRTbetT9BTKYAoV+4/YGAAAAAElFTkSuQmCC" void="v92" id="v92" _noc="true">
</span>
<span class="sci_list_header" tabindex="0" ctx="1"  specname="textItem"  _noc="true" style="font-size: 27px;">Automated Report List</span>
</td>`;


// var tbodyRef = document.querySelector('[lid="MainTable1"]').getElementsByTagName('tbody')[0];
var tbl1 = document.querySelector('[lid="MainTable1"]') ;
var tbl2 = document.querySelector('[lid="MainTable3"]') ;
var tbl3 = document.querySelector('[lid="MainTable5"]') ;
var tbl11 = document.querySelector('[lid="MainTable11"]') ;

checkClassAddListHeader(tbl1);
checkClassAddListHeader(tbl2);
checkClassAddListHeader(tbl3);
checkClassAddListHeader(tbl11);

 function checkClassAddListHeader(el) {

   if(el){
         var elements = el.getElementsByClassName('sci_list_header');

               if (elements.length > 0)  {

               } else  {
                         var tbodyRef = el.getElementsByTagName('tbody')[0];

                         // Insert a row at the end of table
                         var newRow = tbodyRef.insertRow(0);

                         // Insert a cell at the end of the row
                         var newCell = newRow.insertCell(0);
                         newCell.colSpan = "3";
                         newCell.innerHTML = list_header;
                         // Append a text node to the cell
                         // var newText = document.createTextNode('new row1');
                          // newCell.appendChild(newText);
               }
             } else {

             }

 }

var modalCustom = document.getElementById("myModal");


if(modalCustom) {

} else {
  var modalElement = document.createElement('div');
  modalElement.innerHTML = modalHTML;
  document.body.appendChild(modalElement);
}



var base_tabs = document.getElementById("idTopPageTabs");
var facility_dropdown = document.getElementById("facility_dropdown") ;
var custom_settings = document.getElementById("custom_settings") ;
var custom_request = document.getElementById("custom_request") ;



// DROPDOWN INJECTION CHECK - check if the dropdown is added already else add
/*
if(custom_request) {
console.log('SCI - Help Icon Exists... Skipping');
} else {
  var row = base_tabs.getElementsByTagName("tr")[0];
  var y = row.insertCell(-1);
   y.innerHTML= customHelp ;
   console.log('SCI - Help Icon Not Found... Creating');
}
*/

if (custom_settings) {
  console.log('SCI - Custom Settings tab Exists... Skipping');
} else {
  var row = base_tabs.getElementsByTagName("tr")[0];
  var y = row.insertCell(-1);

  y.innerHTML= customSettings;
  console.log('SCI - Custom Settings tab Not Found... Creating');


}
// alert('yes');
// clsComboBox pv
// var mainfacility = document.getElementsByClassName("clsComboBox");
//mainfacility[0].addEventListener("change", change_facility);

//document.getElementById("facility_dropdown").addEventListener("change", change_facility);

var selects = document.querySelectorAll('.clsComboBox');

selects.forEach(select => {
  select.addEventListener('change', function(event) {
    var selectedValue = event.target.value;
    var isValidValue = ['1101', '1102', '1104', '1105','1106','1107','1108','1109','1110','1116','1117','1118','1121','1122','1501','1505','1510'].includes(selectedValue);

    if (isValidValue) {
      console.log("SCI Homepage - Facility value changed to ", selectedValue);
     // alert(selectedValue);
     setCookie('sci_default_facility_cookie', selectedValue) ;

   } else {
     console.log("SCI Homepage - Facility value Error = ", selectedValue);
   }

  });
});



// DROPDOWN CHANGE - when dropdown is changed
function change_facility() {
  var mainfacility = document.getElementsByClassName("clsComboBox");
  d = mainfacility[0].value;
  // alert(d);
//  setCookie('sci_default_facility_cookie', d) ;
}

function change_default_facility(){
  var newSettingValue = document.getElementById("settings_default_facility").value;
setCookie('sci_default_facility_type', newSettingValue);

console.log("SCI Homepage - Default Facility Settings Changed to = ", newSettingValue);

if (newSettingValue == "cookie") {
  setCookie('sci_default_facility_cookie', newSettingValue);
}


}

function getCookie(c_name) {
  //  return localStorage.getItem(c_name);
  var match = document.cookie.match(RegExp('(?:^|;\\s*)' + c_name + '=([^;]*)'));
   return match ? match[1] : null;
}

function setCookie(c_name, value) {
    return localStorage.setItem(c_name, value);
}


// Save tab click to localStorage
document.querySelectorAll('#idTopPageTabs .clsTabDivInner').forEach(tab => {
    tab.addEventListener('click', function () {
      // alert('click');
        const tabName = this.textContent.trim();
        localStorage.setItem('sci_homepage_current_tab', tabName);
    });
});





function change_request(e) {
  event.stopImmediatePropagation();
  event.stopPropagation();
  event.preventDefault();

var url1 = 'https://forms.office.com/Pages/ResponsePage.aspx?id=HsNaC3rhIUCdBFUPhjIHZVNt87_ZlnxGmANFNodoljpUNDk5S1M5NElEVzg2NjJLS1VTOFk4REdUVC4u';
window.open(url1, "_blank");
  // alert(d);
//  setCookie('sci_default_facility_cookie', d) ;
}


var modal = document.getElementById("myModal");
var btn = document.getElementById("custom_settings");
var span = document.getElementById("close_modal");
var ok = document.getElementById("btn_close_modal");

// When the user clicks the button, open the modal
//span.addEventListener("click", myFunction);
// ok.addEventListener("click", myFunction);
// When the user clicks on <span> (x), close the modal

console.log("SCI - Homepage Javascript End");

function ShowModal() {
  var selectValue = "profile";

  if (localStorage.getItem("sci_default_facility_type") === null) {
  // Do nothing
  } else if (localStorage.getItem("sci_default_facility_type") == "cookie") {
      var selectValue = "cookie";
  } else {
  // Do nothing
  }
  document.getElementById("settings_default_facility").value = selectValue ;
  modal.style.display = "block";
}

function CloseModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/*
  waitForElm('#facility_dropdown').then((elm) => {
    document.querySelector('#facility_dropdown').onclick = function() {
  //    return false;
this.parentNode.className = '';
 this.parentNode.setAttribute('style', 'vertical-align: middle !important');
 this.parentNode.setAttribute('style', 'padding-right: 0px !important');
 this.parentNode.setAttribute('style', 'padding-left: 0px !important');

}

  });
*/

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


/*var fac= {
  x1122: "Cavendish",
  x1108: "Preston"
};


var x1122 = '<option value="1122">Cavendish 1122</option>';
var x1108 = '<option value="1122">Cavendish 1122</option>';

var final1 = get_facility_dropdown();
var f_name = fac['x' + final1];
this['x' + final1] = '<option value="' + final1 + '">'+ f_name +' '+ final1 +'</option>'; */
