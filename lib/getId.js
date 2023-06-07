export default async function getId(id) {
    const res = await fetch(`http://localhost:3001/nonprofits/${id}`)

    if (!res.ok) {
        throw new Error('hello you did not fetch')
    }

    return res.json()
}
