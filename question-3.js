// เริ่มเขียนโค้ดตรงนี้
async function getUser(){
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const longName = users.map(users => users.name).filter(name => name.length > 17);
        console.log(longName);
}
getUser();
