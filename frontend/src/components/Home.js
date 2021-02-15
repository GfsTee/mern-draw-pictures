const axios = require('axios').default;

const Home = () => {
    const handleNew = () => {
        axios.post('http://localhost:4554/api/add')
            .then((response) => {
                console.log(response)
                console.log(response.data._id)
                window.location.href = `/gallery/${response.data._id}`
            })
            .catch((err) => { console.log(err) })
    }
    return (
        <>
            <h2>Want to start something new?</h2>
            <button onClick={handleNew}>Klick here</button>
        </>
    );
}

export default Home;