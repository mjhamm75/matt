$("#button").click(function(e){e.preventDefault();var t=document.getElementById("title").value,n=document.getElementById("pi").value,a=document.getElementById("college").value,l=document.getElementById("dept").value,o=document.getElementById("conferencedate").value,u=document.getElementById("location").value,d=document.getElementById("purpose").value,m=document.getElementById("amount").value,r=document.getElementById("attendees").value,c="pending",i="draft",s="https://internalgrantdev.azurewebsites.net/api/MGrants";$.ajax({url:s,method:"POST",data:{Title:t,PI:n,College:a,Dept:l,ConferenceDate:o,Location:u,Purpose:d,Amount:m,Attendees:r,SubmissionStatus:"pending"}}).done(function(e){alert("Your application has been submitted."),$(".clear-data").val(""),$("textarea").val(""),window.location.href="requests.html"}).error(function(e){alert("Something is not right.")})}),$("#save").click(function(e){e.preventDefault();var t=document.getElementById("title").value,n=document.getElementById("pi").value,a=document.getElementById("college").value,l=document.getElementById("dept").value,o=document.getElementById("conferencedate").value,u=document.getElementById("location").value,d=document.getElementById("purpose").value,m=document.getElementById("amount").value,r=document.getElementById("attendees").value,c="https://internalgrantdev.azurewebsites.net/api/MGrants";$.ajax({url:c,method:"POST",data:{Title:t,PI:n,College:a,Dept:l,ConferenceDate:o,Location:u,Purpose:d,Amount:m,Attendees:r,SubmissionStatus:"draft",Custom1:null,Custom2:null,Custom3:null}}).done(function(e){$(".clear-data").val(""),$("textarea").val(""),alert("Your request has been saved."),window.location.href="requests.html"}).error(function(e){alert("Something is not right")})});