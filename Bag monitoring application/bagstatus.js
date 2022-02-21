//************* Start Set Query Parameter Value  For Map 1 ************ 
GROUP_Id = "GROUP_" + BagId
var q = 'SELECT  id,TimeStamp,currentLuxValue,Lng,Lat FROM ' + GROUP_Id + ' where id in(select max(id) from ' + GROUP_Id + ' ) order by TimeStamp desc limit 100'

ExecuteQueryModified(q, Map_1_callbackFunc, 'Map 1');

function Map_1_callbackFunc(error, xhr) {
  if (xhr.response) {
    Map_1DataArr = JSON.parse(xhr.response);


    SetPluginParameterValue('Map 1', 'SQL query statement', Map_1DataArr);
    DrawPlugin('Map 1');
  } //End If 
} //End CB function 

//***************** End Set Query Parameter  ************** 

//************* Start Set Query Parameter Value  For Grid 1 ************ 

ExecuteQueryModified(q, Grid_1_callbackFunc, 'Grid 1');

function Grid_1_callbackFunc(error, xhr) {
  if (xhr.response) {
    Grid_1DataArr = JSON.parse(xhr.response);
    var Time = Grid_1DataArr[0].TimeStamp
    var Lat = Grid_1DataArr[0].Lat;
    var Lng = Grid_1DataArr[0].Lng;
    var Lux = Grid_1DataArr[0].currentLuxValue
    console.log("time is", Time)
    console.log("lat is", Lat)
    console.log("lng is", Lng)
    console.log("lux is", Lux)
    console.log("*********")
    console.log(BagId)
    console.log("*********")


    if (Lux < 1) {
      SetPluginParameterValue('Map 1', 'Marker URL', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujCv32yScdTBkN75_a16tYX0YV4ttFKkCVA&usqp=CAU');
      DrawPlugin('Map 1');

    } else {
      SetPluginParameterValue('Map 1', 'Marker URL', 'https://thumbs.dreamstime.com/b/textile-school-backpack-icon-cartoon-vector-bag-pack-rucksack-satchel-228899143.jpg');
      DrawPlugin('Map 1');

    }



    SetPluginParameterValue('Grid 1', 'SQL query statement', Grid_1DataArr);
    DrawPlugin('Grid 1');
  } //End If 
} //End CB function 

//***************** End Set Query Parameter  ************** 
