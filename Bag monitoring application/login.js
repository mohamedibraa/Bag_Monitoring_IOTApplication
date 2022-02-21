var BagId_Value = GetPluginParameterValue('bagidtxt', 'Text');
var Password_Value = GetPluginParameterValue('passwordtxt', 'Text');

console.log("Clicked")
console.log("BagId_Value", BagId_Value)
console.log("Password_Value", Password_Value)

//************* Start Set Query Parameter Value  For Grid 1 ************ 

//ExecuteQueryModified('SELECT  `TimeStamp`,`pagid`,`nameuser`,`email`,`password` FROM `APPLICATION_1332`              where `pagid`=' + BagId_Value + ' and `password`=' + Password_Value + ' ', Grid_1_callbackFunc, 'Grid 1');

ExecuteQueryModified('SELECT  TimeStamp,BagId,NameUser,Phone,Email,Password FROM APPLICATION_1397                               where BagId = ' + BagId_Value + ' and Password = ' + Password_Value + ' ', Grid_1_callbackFunc, 'Grid 1');


function Grid_1_callbackFunc(error, xhr) {
  if (xhr.response) {
    Grid_1DataArr = JSON.parse(xhr.response);

    if (Grid_1DataArr.length == 1) {
      console.log("login sccessful")
      alert("login sccessful welcome " + Grid_1DataArr[0].NameUser)
      window.location.replace("https://learning.masterofthings.com/rte.html?project=4802&page=6&BagId=" + BagId_Value + "");

      // TBagId = BagId_Value;

    } else {
      console.log("failed..")
      alert("failed to login please register first")
    }


    SetPluginParameterValue('Grid 1', 'SQL query statement', Grid_1DataArr);
    DrawPlugin('Grid 1');
  } //End If 
} //End CB function 

//***************** End Set Query Parameter  ************** 

//*** End Set Query Parameter  ****
