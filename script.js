let editing = false;

const fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1)
console.log("fruits=", fruits)

const comments = [
    {
        id: "4f550e71-9705-42bb-85d9-5826e08780f7",
        name: "佐藤",
        comment: "優しい二匹に癒されます",
    },
    {
        id: "0a2c283a-0af7-4089-a9b2-4f2b850b4244",
        name: "高橋",
        comment: "いつも一緒に居る人がそばに居れば安心するんだよねぇ🍀",
    },
    {
        id: "07ae9121-d2c1-4d1d-8034-57a57fc3bbdb",
        name: "山田",
        comment: "そうなのねー😢 家族だね😭",
    },
];
// comments.splice(1,1)
// console.log("comments=", comments)



// commentsを表示
function showComments() {
    for (let i = 0; i < comments.length; i++) {

        // コメントと削除ボタン用のdivを作る
        let waku = document.createElement("div");
        waku.classList = "clear"

        // 佐藤： おはようございます          
        let elem = document.createElement("div");
        elem.classList = "clear"  // <div class="clear">佐藤:あいうえお</div>
        elem.innerHTML = comments[i].name + ": " + comments[i].comment;
        waku.appendChild(elem);

        // 編集ボタン
        elem = document.createElement("button");
        elem.classList = "clear"  // <button class="clear">削除</button>
        elem.innerHTML = "編集"
        waku.appendChild(elem);
        elem.addEventListener("click", function () {

            // 仮
            document.getElementById("name").value = "佐藤"
            document.getElementById("comment").value = "優しい二匹に癒されます"

            // 宿題
            // クリックされた行の名前と、コメントを取得して、
            // inputに表示

            document.getElementById("commentButton").innerHTML = "編集"
            editing = true;



        })



        // 削除ボタン
        elem = document.createElement("button");
        elem.classList = "clear"  // <button class="clear">削除</button>
        elem.innerHTML = "削除"

        waku.appendChild(elem);

        elem.addEventListener("click", function () {
            // alert("commentの" + i + "番目を削除しました")
            comments.splice(i, 1);
            clearComments();
            showComments();
        })

        ans.appendChild(waku);
    }
}

// コメントを消す
function clearComments() {
    const all = document.querySelectorAll(".clear");
    for (let i = 0; i < all.length; i++) {
        all[i].remove();
    }
};

const ans = document.querySelector(".ans");

const commentButton = document.getElementById("commentButton");

// コメントボタン
commentButton.addEventListener("click", () => {
    if (editing === true) {
        alert("編集モードです")
        // 宿題
        // inputに入力された値を取得
        // それを、comments arrayの書き換える

        editing = false
    } else {
        alert("コメントモードです")
    }


    let obj = {
        id: "4f550e71-9705-42bb-85d9-5826e08780f7",
        name: document.getElementById("name").value,
        comment: document.getElementById("comment").value,
    };


    // SHOX 👍
    // if (obj.name === "" || obj.comment === "") {
    //   alert("名前とコメントを入力してください");
    //   return;
    // }

    //mexroj　👍
    // if (obj.name === "") {
    //   alert("nameは　まだ")
    //   return;
    // } else {
    //   if (obj.comment === ""){
    //     alert("commentは　まだ")
    //     return;
    //   }
    // }

    //sarvie　👍
    // if (obj.name === "" || obj.comment === "") {
    //   alert("Please write a name and a comment");
    //   return;
    // }

    //alsu　👍
    if (obj.name === "" || obj.comment === "") {
        alert("nameとcommentは　まだ")
        return;
    }


    comments.unshift(obj);
    clearComments()
    showComments();
})

showComments()