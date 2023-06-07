async function VolCards() {

    const res = await fetch('http://localhost:3001/nonprofits')

    if (!res.ok) {
        throw new Error('failed to fetch');
    }

    return res.json()
}

export default VolCards;
