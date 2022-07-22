<template>
  <div class="container py-3">
    <h1 class="text-center fst-italic shadow-lg p-3 mb-5 shadow-sm text-dark bg-light">About</h1>
  </div>

<div class="container mb-5" id="cont">
  <div class="row">
  <div class="column">
    <img src="https://i.postimg.cc/1X2Brjqs/Silizwe-1-removebg-preview.png" class="mx-5 px-5" height="400" alt="">
  </div>
  <div class="column my-5" id="column2">
    <h3 class="text-center fst-italic shadow-sm bg-light">About Me</h3>
    <p class="text-center">I am a person who values genuine expression and honesty over blindly following the crowd. I enjoy listening to music and don't enjoy listening to you telling me how  your day was. I love being loved. I love being served. I hate drinking water. I enjoy listening to music and spending some time alone. I can charm dogs. I have no limitations. I never make the same mistake twice. I make it five or six times, just to be sure. Being attractive is just not something I have any control over. Althogh nothing ever goes as planned in this acursed world, I will sever this such fate. Bring about change. A world of only victors, love and peace, I will create such a world.</p>
  </div>
</div>
<div class="row justify-content-center text-center">
  <div class="col-md-4 mb-4 mb-md-5">
    <div class="card">
    <h3 class="text-center fst-italic shadow-sm bg-light">Hobbies</h3>
      <p class="text-center">I like playing soccer and playing mobile games. I also like spend most my time listening music. I also like drawing and also making animations using programs like FlipaClip and Stick Nodes.</p>
    </div>
  </div>
  <div class="col-md-4 mb-4 mb-md-0">
    <div class="card mask-custom-2">
    <h3 class="text-center fst-italic shadow-sm bg-light">Music</h3>
      <p>I listen to Hip Hop and R&B but mostly Hip Hop. I like mostly rap music and I listen to Eminem mostly. I also like J Cole, Lil Wayne, Cordae, Joyner Lucas, Jack Halow, Royce and King Von.</p>
    </div>
  </div>
  <div class="col-md-4 mb-4 mb-md-0">
    <div class="card mask-custom-2">
    <h3 class="text-center fst-italic shadow-sm bg-light">Favourite Quotes</h3>
      <p>
      <ul><li>"Maintain your status as a man of words while retaining a flexible approach to your actions".</li>
      <li>"Every guy is already a king; it’s simply a matter of finding out the nature of your kingdom.".</li>
      </ul>
      </p>
    </div>
  </div>
</div>
</div>
</template>



<script>

</script>



<style scoped>
h1 {
    color: hsl(0, 0%, 28%);
    font-size: 35px;
    font-weight: bold;
    font-family: monospace;
    letter-spacing: 7px;
    cursor: pointer;
    text-transform: uppercase;
  }

  h1 {
    padding: 24px;
    background: linear-gradient(to right, hsl(0, 0%, 30%) 0, hsl(212, 97%, 50%) 10%, hsl(0, 0%, 30%) 20%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 1s infinite linear;
  }

  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 600px;
    }
    100% {
      background-position: 600px;
    }
  }

img{
  filter: drop-shadow(10px 5px 10px  rgb(52, 52, 52));
}

.row{
  margin-top: 50px;
}

  .column {
  float: left;
  width: 50%;
  padding: 10px;
  height: 300px; /* Should be removed. Only for demonstration */
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

#column2{
  padding-right: 70px;
}

#cont{
  box-shadow: 10px 5px 10px  rgb(107, 107, 107);

}

.card{
  width: 400px;
  height: 200px;
  padding: 15px;
  box-shadow: 10px 5px 10px  rgb(107, 107, 107);
}

.card:hover {
  transform: translateY(-1rem);
}

.card:hover~.card {
  transform: translateX(130px);
}

.card:not(:first-child) {
  margin-left: -130px;
}

.card-author {
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  margin: 3rem 0 0;
}

.author-avatar img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  filter: grayscale(100%);
  margin: 16px 10px;
}

.half-circle {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 48px;
  fill: none;
  stroke: #ff8a00;
  stroke-width: 8;
  stroke-linecap: round;
}

.card-header {
  margin-bottom: auto;
}

.card-header p {
  font-size: 14px;
  margin: 0 0 1rem;
  color: #7a7a8c;
}

.card-header h2 {
  font-size: 20px;
  margin: .25rem 0 auto;
  cursor: pointer;
}

.card-header h2:hover {
  background: linear-gradient(90deg,#ff8a00,#e52e71);
  text-shadow: none;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

#div{
  box-shadow: 10px 5px 10px  black;
}
</style>