const fetchData = require('./api');
const axios = require('axios');

jest.mock('axios');

describe('fetchData', () => {
  it('should fetch data successfully from an API', async () => {
    const data = { userId: 1, id: 1, title: 'Test Title' };
    axios.get.mockResolvedValue({ data });

    const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1');
    expect(result).toEqual(data);
  });

  it('should throw an error when the API call fails', async () => {
    axios.get.mockRejectedValue(new Error('Error fetching data'));

    await expect(fetchData('https://jsonplaceholder.typicode.com/posts/1')).rejects.toThrow('Error fetching data');
  });
});