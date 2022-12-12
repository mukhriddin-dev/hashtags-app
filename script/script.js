let inputtag, hashtagArray, container, t, sendForm, newInput;

inputtag = document.querySelector('#hashtags');

container = document.querySelector('.tag-containeruz');

sendForm = document.querySelector('#sendForm');

newInput= document.querySelector('#sends');

hashtagArray = [];

inputtag.addEventListener('keyup', (event) => {
   event.preventDefault();

   if (event.which == 13 && inputtag.value.length > 0) {

      var text = document.createTextNode(inputtag.value);

      var p = document.createElement('p');

      container.appendChild(p);
      hashtagArray.push(inputtag.value);
      console.log(hashtagArray)
      p.appendChild(text);
      const jsonData = JSON.stringify(Object.assign({}, hashtagArray));
      console.log(jsonData);

      p.classList.add('tag');

      inputtag.value = '';
      newInput.setAttribute('name', jsonData);


      let deleteTags = document.querySelectorAll('.tag');

      for (let i = 0; i < deleteTags.length; i++) {
         deleteTags[i].addEventListener('click', () => {
            container.removeChild(deleteTags[i]);

         });
      }
   }
});

sendForm.addEventListener("submit", (e) => {
   // e.preventDefault();
   let nm = newInput.getAttribute("name");
   console.log(nm);

})