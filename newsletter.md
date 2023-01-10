---
layout: post
cover: cover.gif
title: newsletter
date:   2013-12-09 12:00:00
---

<style>
button, input, select, textarea {
  margin: 3px;
  padding: 6px;
  font-size: 1.3rem;
}

.email-input {
  width: 100%;
}

.input-header {
  font-size:1.3rem;
}

#signup-card {
  max-width: 40vmax;
}

#confirm-button {
  margin-top: 2rem;
}

#signup-content {
  font-size: 1.3rem;
}
</style>

Every month, I send out a newsletter with some of the projects I've been working on and any availability I have to work on new projects. I'll never spam you and you can always let me know and I can take you off of the list! Just add your name and email below to sign up.


<div class="card" id="signup-card">
  <div class="card-content" id="signup-content">
    <form action="#" onsubmit="submitEmail();return false">
      <div class="input-header">email</div>
      <div><input class="email-input" id="email"></div>
      <div class="input-header">name</div>
      <div><input class="email-input" id="name"></div>
      <input type="submit" id="confirm-button" value="Sign Up">
    </form>
  </div>
</div>


<script>
  function submitEmail() {
    const url = 'https://parseapi.back4app.com/classes/emails';
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      "X-Parse-Application-Id":"sQt4Uwm3nFXvFRthCfYUvAC5Aj5uhYnMX7sGlD9v",
      "X-Parse-REST-API-Key": atob("TU9teTM2Q3cyWFloMndiczR1TDBFeGhsbDg2U2dZUEJUUWJoSXc2NQ=="),
      "Content-Type":" application/json",
    };

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify({"email":document.getElementById("email").value, "name":document.getElementById("name").value}), 
      headers: headers
    }).then(res => {
        res.json();

        let card = document.getElementById("signup-content");
        card.innerHTML = "Signup successful!<br/>Redirecting to the home page..."
        setTimeout( () => {
          window.location.href = "https://aaron.work";
        }, 3000);
    })
  }
</script>