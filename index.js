function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      $('#blah').attr('src', e.target.result);
    }
    
    reader.readAsDataURL(input.files[0]); // convert to base64 string
  }
}

$("#imgInp").change(function() {
  readURL(this);
});

function sendMail(mname,maddress,musername,memail,mopinion,mcontact,mtel,mphoto) {
  let subject = mname +"的評價"
  let body =  
              
              "企業名稱:" + mname +
              "企業地址:" + maddress  +
              "評價:" + mopinion  +
              "聯絡人:" + mcontact  +
              "聯絡電話:" + mtel +
              "姓名:" + musername +
              "電郵:" + memail
  
  // window.location.href  = "mailto:" + "me@example.com" + "?subject=" + subject + "&body=" + body;  
  
  Email.send({
    SecureToken: '6825bb0f-431e-42da-b6fb-8c6c0bca0e91',
    To : 'zecharyw@gmail.com',
    From : memail,
    Subject : "Testing",
    Body : body
    // Attachments : [
    //   {
    //     name : "photo.jpg",
    //     data : mphoto
    //   }]
  })
  .then(function(message){
    alert("mail sent successfully")
  });
  }

   /**
 * Convert a base64 string in a Blob according to the data and contentType.
 * 
 * @param b64Data {String} Pure base64 string without contentType
 * @param contentType {String} the content type of the file i.e (image/jpeg - image/png - text/plain)
 * @param sliceSize {Int} SliceSize to process the byteCharacters
 * @see http://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
 * @return Blob
 */
// function b64toBlob(b64Data, contentType, sliceSize) {
//   contentType = contentType || '';
//   sliceSize = sliceSize || 512;

//   var byteCharacters = atob(b64Data);
//   var byteArrays = [];

//   for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
//       var slice = byteCharacters.slice(offset, offset + sliceSize);

//       var byteNumbers = new Array(slice.length);
//       for (var i = 0; i < slice.length; i++) {
//           byteNumbers[i] = slice.charCodeAt(i);
//       }

//       var byteArray = new Uint8Array(byteNumbers);

//       byteArrays.push(byteArray);
//   }

// var blob = new Blob(byteArrays, {type: contentType});
// return blob;
// }



function getInfo(){
  var name = document.getElementById('fname').value;
  var address = document.getElementById('faddress').value;
  var username = document.getElementById('fusername').value;   
  var email = document.getElementById('femail').value; 
  var opinion = document.getElementById('textarea').value;
  var contact = document.getElementById('fcontact').value;
  var tel = document.getElementById('ftel').value;
  var email = document.getElementById('femail').value;
  var photo = document.getElementById('blah').src;
console.log(photo)
  // var block = ImageURL.split(";");
  // // Get the content type of the image
  // var contentType = block[0].split(":")[1];// In this case "image/gif"
  // // get the real base64 content of the file
  // var realData = block[1].split(",")[1];// In this case "R0lGODlhPQBEAPeoAJosM...."
  
  // // Convert it to a blob to upload
  // var blob = b64toBlob(realData, contentType);

  // var photo = new File([blob], "photo.jpg",{type:"image/jpg", lastModified:new Date()});

  // var mydiv = document.getElementById("guideline");
  // const img = document.createElement("img");
  // img.src = URL.createObjectURL(photo);
  // mydiv.appendChild(img);

  if( username == false){
    username = "匿名"
  } 
  
  if(name == false|| address == false|| photo == false|| opinion == false){
    alert("請填寫有'*'的項目或上傳相片。");
  } else{
    sendMail(name,address,username,email,opinion,contact,tel,photo);
  }
}

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("location").innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  document.getElementById("faddress").value = "Latitude: " + position.coords.latitude + 
  " Longitude: " + position.coords.longitude;
} 

 