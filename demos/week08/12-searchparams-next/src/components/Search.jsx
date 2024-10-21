'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation"

export default function Search() {

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const {replace} = useRouter()

    function handleSearch(term) {
        const params = new URLSearchParams(searchParams)
        term ? params.set('q', term) : params.delete('q')
        replace(`${pathname}?${params.toString()}`)
    }
    return (
        <input type="text" onChange={(e) => {
            handleSearch(e.target.value)
        }} 
        defaultValue={searchParams.get(`q`)?.toString()}/>
    )
}