import axios from "axios"
import { axiosJWT } from "./UserService"

export const getAllProduct = async (search, limit) => {
    let res = {}
    if (search?.length > 0) {
        res = await axios.get(`http://localhost:3000/api/products/get-all?filter=name&filter=${search}&limit=${limit}`)
    } else {
        res = await axios.get(`http://localhost:3000/api/products/get-all?limit=${limit}`)
    }
    return res.data
}

export const getProductType = async (type, page, limit) => {
    if (type) {
        const res = await axios.get(`http://localhost:3000/api/products/get-all?filter=type&filter=${type}&limit=${limit}&page=${page}`)
        return res.data
    }
}

export const createProduct = async (data) => {
    const res = await axios.post(`http://localhost:3000/api/products/create`, data)
    return res.data
}

export const getDetailsProduct = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/products/get-details/${id}`)
    return res.data
}

export const updateProduct = async (id, access_token, data) => {
    const res = await axiosJWT.put(`http://localhost:3000/api/products/update/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteProduct = async (id, access_token) => {
    const res = await axiosJWT.delete(`http://localhost:3000/api/products/delete/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteManyProduct = async (data, access_token,) => {
    const res = await axiosJWT.post(`http://localhost:3000/api/products/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getAllTypeProduct = async () => {
    const res = await axios.get(`http://localhost:3000/api/products/get-all-type`)
    return res.data
}