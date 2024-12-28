import axios from 'axios'


export const createCategory = async (token, form) => {
    // code body
    return axios.post('https://idontcutmyhair-log.vercel.app/api/category', form, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const listCategory = async () => {
    // code body
    return axios.get('https://idontcutmyhair-log.vercel.app/api/category')
}

export const removeCategory = async (token, id) => {
    // code body
    return axios.delete('https://idontcutmyhair-log.vercel.app/api/category/'+id, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}