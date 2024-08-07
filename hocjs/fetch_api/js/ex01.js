// API Application Programming Interface
/*
Những chuẩn RESTFul 
- URL: Base Server + resource 
=> Ví dụ: http://api.fullstack.edu.vn/úe
- HTTP METHOD
+ GET
+ POST 
+ PUT 
+ PATCH
+ DELETE

- HTTP METHOD + resource => Endpoint
=> GET/ users => lấy danh sách user
POST /user: Lấy thông tin 1 user 

- Response Code
- Response Body => kiểu Json

- Gọi API 
+ SMLHttpRequest => không trả về promise
+ fetch => trả về promise
+ thư viện: axios, jquery ajax
 */
const serverApi = 'http://localhost:3000';

// fetch(`${serverApi}/users`)
// .then((response) => {
//     console.log(response);
//     return response.json();  //respone.text()  promise
// })
// .then((data) => {
//     // console.log(data);
//     const body = document.body;
//     body.innerHTML = data.map(({name}) => `<h2>${name}</h2>`).join("");
// })

const getUsers = async () => {
    const response = await fetch(`${serverApi}/users`);
    // console.log(response);
    
    const users = await response.json();
    console.log(users);
}

getUsers();

const getUser = async (id) => {
    const response = await fetch(`${serverApi}/users/${id}`);    
    const user = await response.json();
    console.log(user);
}

// getUser(2);

/*
Post => Them moi
Put: Update, ghi de 
Patch: Update, khong ghi de
*/

const postUser = async(data) =>{
    // data la Object
    /*
    - URL 
    - Method
    - Headers: Content-Tyoe
    - Body
    */
   const dataEncode = new URLSearchParams(data).toString();
   console.log(dataEncode);
   
    const reponse = await fetch(`${serverApi}/users`,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data),
        // body:dataEncode,
    });
    console.log(reponse);
}

// postUser({
//     name: "user 7",
//     email: "user7@gmail.com",
// });

const updateUser = async (data,id) => {
    const response = await fetch(`${serverApi}/users/${id}`,{
        method:"PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    console.log(response);
}

// updateUser({
//     name: "User 1111",
// },1)

const deleteUser = async (id) => {
    const response = await fetch(`${serverApi}/users/${id}`,{
        method:"DELETE",
    })
    console.log(response);
}

deleteUser(1);

