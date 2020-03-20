function client(endpoint, {body, ...customConfig} = {}) {
  console.log(customConfig.headers)
    const token = window.localStorage.getItem('__estatemanager_token__')
    const headers = {'content-type': 'application/json'}
    if (token) {
      headers.Authorization = `Bearer ${token}`
    }
    const config = {
      method: body ? 'POST' : 'GET',
      ...customConfig,
      headers: {
        ...headers,
        ...customConfig.headers,
      },
    }
    console.log('config',config)
    console.log('body',body)
    if (body) {
      config.body = JSON.stringify(body)
    }
  
    return window
   
    //   .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
      .fetch(`http://44ba14f6.ngrok.io/${endpoint}`, config)
      .then(r => {
        console.log('rrrrrrr')
        console.log(r)
        return r.json()
      })
  }
  
  export default client
