$("#button").click(function(e){e.preventDefault();var t=document.getElementById("title").value,n=document.getElementById("pi").value,a=document.getElementById("college").value,l=document.getElementById("dept").value,u=document.getElementById("conferencedate").value,o=document.getElementById("location").value,d=document.getElementById("purpose").value,m=document.getElementById("amount").value,c=document.getElementById("attendees").value,i="pending",r="draft",s="https://internalgrantdev.azurewebsites.net/api/MGrants";$.ajax({url:s,method:"POST",data:{Title:t,PI:n,College:a,Dept:l,ConferenceDate:u,Location:o,Purpose:d,Amount:m,Attendees:c,SubmissionStatus:"pending"}}).done(function(e){alert("Your application has been submitted."),$(".clear-data").val(""),window.location.href="index.html"}).error(function(e){alert("Something is not right.")})}),$("#save").click(function(e){e.preventDefault();var t=document.getElementById("title").value,n=document.getElementById("pi").value,a=document.getElementById("college").value,l=document.getElementById("dept").value,u=document.getElementById("conferencedate").value,o=document.getElementById("location").value,d=document.getElementById("purpose").value,m=document.getElementById("amount").value,c=document.getElementById("attendees").value,i="https://internalgrantdev.azurewebsites.net/api/MGrants";$.ajax({url:i,method:"POST",data:{Title:t,PI:n,College:a,Dept:l,ConferenceDate:u,Location:o,Purpose:d,Amount:m,Attendees:c,SubmissionStatus:"draft",Custom1:null,Custom2:null,Custom3:null}}).done(function(e){$(".clear-data").val(""),alert("Your request has been saved.")}).error(function(e){alert("Something is not right")})});