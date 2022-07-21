<template>
<h1 class="text-center bg-light">Contact Me</h1>
<div class="container" id="container">
<form class="form contact-form" action="https://formspree.io/donnyburnside1@gmail.com">
<div>
    <label class="form-label" for="name">Name</label>
    <input class="form-control" id="name" name="name" type="text" required />
</div>
<div>
    <label class="form-label" for="email">Email</label>
    <input class="form-control" id="email" name="email" type="email" required />
</div>
<div>
    <label class="form-label" for="subject">Subject</label>
    <select class="form-control" id="subject" name="subject" required>
    <option value="" selected disabled>Choose a Subject</option>
    <optgroup label="Option Group">
        <option value="subject-one">Subject One</option>
        <option value="subject-two">Subject Two</option>
        <option value="subject-three">Subject Three</option>
    </optgroup>
    <option value="subject-four">Subject Four</option>
    <option value="subject-five">Subject Five</option>
    <option value="subject-six">Subject Six</option>
    </select>
</div>
<div>
    <label class="form-label" for="message">Message</label>
    <textarea class="form-control" id="message" name="message" required></textarea>
</div>
<div>
    <button class="button" type="submit">Submit</button>
    <button class="button" type="reset">Clear</button>
</div>
</form>
</div>
</template>




<script>

</script>




<style lang="scss">

#container{
    margin-left: 400px;
    box-shadow: 10px 5px 10px  black;
    width: 700px
}
/*
Form
*/

.form {
& > div {
    & ~ div {
    margin-top: 20px;
    }
    &.is-hidden {
    display: none;
    }
}
&-label {
    display: inline-block;
    margin-bottom: 5px;
    font-size: 0.875rem;
    font-weight: 700;
}
&-control {
    display: block;
    width: 100%;
    padding: 10px;
    font: 0.875rem/1.5 sans-serif;
    color: #333;
    background-color: #fff;
    border: 1px solid #bbb;
    border-radius: 4px;
    box-sizing: border-box;
}
}

/*
Contact Form
*/

.contact-form {
width: 100%;
max-width: 568px;
padding: 40px;
background-color: #fefefe;
border-radius: 4px;
box-shadow: 0px 1px 3px 0 rgba(0, 0, 0, 0.125);
box-sizing: border-box;

&--loading {
    opacity: 0.5;
    pointer-events: none;
}
&--errors {}
&--sent {
    & > div ~ div {
    margin: 0;
    }
}
}

/*
Button
*/

.button {
appearance: none;
padding: 5px 10px;
font: 0.875rem/1.5 sans-serif;
background-color: #ddd;
border: 1px solid transparent;
border-radius: 4px;
cursor: pointer;
box-sizing: border-box;
}

</style>