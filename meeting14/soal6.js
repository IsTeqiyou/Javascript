async function checkPostAvailability() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const postData = await response.json();
      if (postData.userId > 5) {
        console.log('Post is available for user IDs greater than 5');
      } else {
        console.log('Post is not available for user IDs greater than 5');
      }
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  }
  
  checkPostAvailability();