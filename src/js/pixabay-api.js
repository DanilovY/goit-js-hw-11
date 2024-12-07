export const getImages = search => {
  const searchParams = new URLSearchParams({
    key: '47498478-5b3c5ee421281cd3bcc4956d2',
    q: search,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `https://pixabay.com/api/?${searchParams}`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
