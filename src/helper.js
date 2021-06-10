const fetchSearch = (searchTerm) => {
    return fetch(`http://localhost:4000/main/${searchTerm}`)
    .then(response => response.json())
    .then(resData => resData.results)
}

const wrapPromise = (promise) => {
    let status = 'pending'
    let result = ''
    let suspender = promise.then(response => {
        status = 'success'
        result = response
        console.log('hello from suspender', result)
    }, err => {
        status = 'error'
        result = err
    })
    return {
        read() {
            if(status === 'pending') {
                console.log('result is: ' + result)
                throw suspender
            } else if (status === 'error') {
                console.log(result)
                throw result
            }
            console.log('Hitting end')
            return result
        }
    }
}

export const createResource = (searchTerm) => {
    return {
        result: wrapPromise(fetchSearch(searchTerm))
    }
}