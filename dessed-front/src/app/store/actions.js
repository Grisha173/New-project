export const getMainSettings = async (dispatch) => {
    axios
        .get('http://localhost:1337/api/osnovnye-nastrojki')
        .then((data) => dispatch({type: 'putMainSettings', payload: data.data.attributes}))
}