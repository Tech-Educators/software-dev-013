export async function fetchData<T>(url: string): Promise<T> {
    const res = await fetch(url)
    if (!res.ok) {
        throw new Error('error')
    }
    const data = await res.json()
    return data as T
}

// I want ot be able to feed it the type of the data I'm trying to fetch and also return a promise of that same time.