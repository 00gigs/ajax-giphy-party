

const giphySpace = $('#Giphys')
const  Userinput = $('#searchterm')



function appendGif(res) {
    let arr = res.data.length;
    if (arr) {
      let IDX = Math.floor(Math.random() * arr);
      let newspace = $("<div>", { class: "empty space" });
      let Gif = $("<img>", {
        src: res.data[IDX].images.original.url,
        class: "image"
      });
      newspace.append(Gif);
      giphySpace.append(newspace);
    }
  }
//allows user to search using jquery DOM
$('form').on('submit', async function(e){
    e.preventDefault()
        let SearchBox = Userinput.val()
        Userinput.val('')
        //get response data 
        const response = await axios.get('https://api.giphy.com/v1/gifs/search',{params:{
            q:SearchBox,
            api_key:'h9MINQ8n8detgAP9rhy7HwtZGgM1xPiU'
    }})
appendGif(response.data)   
})

$("#Remove").on("click", function() {
    giphySpace.empty();
  });




