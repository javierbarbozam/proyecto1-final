function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone : document.getElementById("phone").value,
    query: document.getElementById("query").value,
  };

  const serviceID = "service_vgu962n";
  const templateID = "template_funn9g7";

  emailjs.send(serviceID, templateID, params)
    .then(res=>{
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("query").value = "";
      console.log(res);
      alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
}