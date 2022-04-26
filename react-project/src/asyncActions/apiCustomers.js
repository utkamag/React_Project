import data from "../components/Data";


const apiCustomers = () => {
    return  function(dispatch) {
        fetch("https://evilinsult.com/generate_insult.php?lang=en&type=json")
            .then(response => response.json())
            .then(json => dispatch({type: "ADD_MANY_CUSTOMERS", payload: json}))
    }

}

export default apiCustomers()