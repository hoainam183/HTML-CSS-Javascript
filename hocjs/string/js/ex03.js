var keyword = "lorem";
var content = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum harum quaerat quis eos ullam neque?lorem At, ex, ab in temporibus magni non velit vero omnis esse doloremque tempora! Amet, illo lorem?`

var title = `<p>Tim kiem voi tu khoa <b>${keyword}</b></p>`;
var bottom = `<p>Da tim thay <b>0</b> ket qua voi tu khoa <b>${keyword}</b></p>`

var position = content.toLowerCase().indexOf(keyword);

// console.log(`<span>${content.slice(position,keyword.length)}</span>`);
var result="";
while(position!==-1){
    result += content.slice(0,position) + `<span>${content.slice(position,position+keyword.length)}</span>`; 
    content = content.slice(position+keyword.length);
    position = content.toLowerCase().indexOf(keyword);
    // console.log(content);
}
result += content;
document.write(title + result + bottom);