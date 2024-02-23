"use client"

import axios from "axios"

export default function AxiosProvider({
    children,
}: {
    children: React.ReactNode
}) {
    axios.defaults.baseURL = `http://localhost:3000/api`

    return children
}