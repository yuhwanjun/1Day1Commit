var arr32 = new Array();
const NONE_dis = "none-dis";
const post = document.querySelector("#post");

Array.prototype.shuffle = function() {
    var length = this.length;
    while(length){
        var index = Math.floor((length--)*Math.random());
        var temp = this[length];
        this[length] = this[index];
        this[index] = temp;
    }

    return this;
}

function start32() {
    post.classList.add(NONE_dis);
}

function gameStart() {
    console.log("섞기 전: " + arr32);
    arr32.shuffle();
    console.log("섞은 후: " + arr32);

    start32();
}

function local() {
    const textBoxList = document.getElementsByName("LV");

    for (textBox of textBoxList) {
        arr32.push(textBox.value);
    }
    console.log(arr32.length);
    console.log(arr32);

    if (arr32.indexOf("") < 0) {
        gameStart();
    } else {
        alert("ㅠㅠ");
        arr32 = [];
    }

}
