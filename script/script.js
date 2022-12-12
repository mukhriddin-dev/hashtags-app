let inputtag, hashtagArray, container, t;

inputtag = document.querySelector('#hashtags');

container = document.querySelector('.tag-containeruz');

hashtagArray = [];

inputtag.addEventListener('keyup', (event) => {
  
    if (event.which == 13 && inputtag.value.length > 0) {
      
      var text = document.createTextNode(inputtag.value);
      
      var p = document.createElement('p');
      
      container.appendChild(p);
      hashtagArray.push(inputtag.value);
      console.log(hashtagArray)
      p.appendChild(text);
      const jsonData=JSON.stringify(hashtagArray);
      console.log(jsonData);
      
      p.classList.add('tag');
      
      inputtag.value = '';
      
      
      let deleteTags = document.querySelectorAll('.tag');
      
      for(let i = 0; i < deleteTags.length; i++) {
        deleteTags[i].addEventListener('click', () => {
          container.removeChild(deleteTags[i]);
          
        });
      }
    }
});