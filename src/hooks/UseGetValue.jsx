import { useState } from "react";

export const useGetValues = (initialState) => {
    const [formdata, setFormData] = useState(initialState)

    const handleChange = (e) => {
        let {name, value} = e.target
        setFormData( prev => ({...prev, [name]: value}))
    }
    return {formdata, setFormData, handleChange}
}