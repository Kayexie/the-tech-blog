//create a new post

const createHandler = async (event)=>{
event.preventDefault();

const title = document.querySelector('#title').value.trim();
const content =document.querySelector('#content').value.trim();

console.log('kjdkf;jakldjf;lkadsjf;lkajd;lfkajds;lfk');
console.log(title, content)
if (title && content) {
    const response = await fetch('/api/posts', {
        method:'POST',
        body: JSON.stringify({title, content}),
        headers: {
            'Content-Type': 'application/json',
          },
    });
    if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create a comment');
      }
}
};

document.querySelector('#generatepost').addEventListener('submit', createHandler);