//create a new post

const createHandler = async (event)=>{
event.preventDefault();

const title = document.querySelector('#title').value.trim();
const content =document.querySelector('#content').value.trim();

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

//delete a post 
const deleteHandler = async(event)=> {
  event.preventDefault();
  
  if(event.target.hasAttribute('data-id')){
    const id=event.target.getAttribute('data-id');
  const response = await fetch(`/api/posts/${id}`, {
    method:'DELETE',
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert('Failed to delete post');
  }
}
};

//update a post

const updateHandler = async(event) =>{
  event.preventDefault();
  const title=document.querySelector('#updatetitle').value.trim();
  const content =document.querySelector('#updatecontent').value.trim();

  if(event.target.hasAttribute('data-id')){
    const id=event.target.getAttribute('data-id');
  const response =await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
  }
  });
  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
  }
}

document.querySelector('#generatepost').addEventListener('submit', createHandler);
document.querySelector('#update').addEventListener('click', updateHandler);
document.querySelector('#delete').addEventListener('click', deleteHandler);
