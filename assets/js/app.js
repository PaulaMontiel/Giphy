const inputText = document.querySelector("input")
const containerImage = document.getElementById("elementos")

inputText.addEventListener("keypress",(event) => { 
    let key = event.wich || event.keyCode ;
    if (key === 13){
         let gif = inputText.value;
         inputText.value= " ";
         containerImage.innerHTML= " ";
         fetch(`https://api.giphy.com/v1/stickers/search?api_key=3SwqSH7M9VKat0YYdowYwDEL0q30Ajrv&q=${gif}&limit=25&offset=0&rating=G&lang=en`)
         .then (response => response.json())
         .then (data =>{
           renderInfo(data);
         })

     }

})
 
const renderInfo = data => {
    data.data.forEach(element => {
    let gifImage = element.images.downsized.url;
    containerImage.innerHTML += `<img src="${gifImage}">`;
    
});
}
console.log(data);