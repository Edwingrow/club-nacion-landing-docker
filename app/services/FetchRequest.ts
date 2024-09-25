const baseURL = 'http://localhost:3000/api';

export const GetListAccountWithTag = async (tags: string, page: number = 1, limit: number = 4, sortBy: string = 'location', order: string = 'asc') => {
  const url = new URL(`${baseURL}/carousel-list`);
    url.searchParams.append('tags', tags);
    url.searchParams.append('page', page.toString());
    url.searchParams.append('limit', limit.toString());
    url.searchParams.append('sortBy', sortBy);
    url.searchParams.append('order', order);
  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Error en la solicitud');
    }
  
    const data = await response.json();
    return data
};

export const GetListWithVoucher = async (page: number = 1, limit: number = 4, sortBy: string = 'location', order: string = 'asc') => {
  const url = new URL(`${baseURL}/carousel-list-with-voucher`);
  url.searchParams.append('page', page.toString());
  url.searchParams.append('limit', limit.toString());
  url.searchParams.append('sortBy', sortBy);
  url.searchParams.append('order', order);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error en la solicitud');
  }

  const data = await response.json();
  return data
};
