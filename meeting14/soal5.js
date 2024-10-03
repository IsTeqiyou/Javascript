async function getPostDetails() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      if (!response.ok) {
        throw new Error('Failed to fetch post');
      }
      const data = await response.json();
      console.log(data.title);
    } catch (error) {
      console.error(error.message);
    }
  }
  
  getPostDetails();