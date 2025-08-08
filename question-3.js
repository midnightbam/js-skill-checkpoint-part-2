// เริ่มเขียนโค้ดตรงนี้
async function getUser(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        const longName = users.map(user => user.name).filter(name => name.length > 17);
        console.log(longName);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}
getUser();
