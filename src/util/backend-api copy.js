import axios from 'axios'

//const HOSTNAME = document.location.host
//const SERVER = HOSTNAME.includes('fdrpjournals')?('https://' + HOSTNAME):('http://' + HOSTNAME)
const SERVER = 'https://panel.fdrpjournals.org'
const SERVER_URL = SERVER + '/api/'
const BASE_URL = SERVER + '/api/journals/v1/'
const ACCOUNTS_URL = SERVER + '/api/accounts/v1/'

const instance = axios.create({
    baseURL: SERVER,
    timeout: false,
    params: {} // do not remove this, its added to add params later in the config
})

// Add a request interceptor
instance.interceptors.request.use(function(config) {
    //let usertoken = Store.state.usertoken
    //let token = usertoken
    let token = 'akl135'

    if (token) {
        config.headers.common['Authorization'] = 'Bearer_' + token
        config.headers.common['Access-Control-Allow-Origin'] = '*'
    } else {
        // Use application/x-www-form-urlencoded for login
        config.headers.common['Access-Control-Allow-Origin'] = '*'
        config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
    }

    return config
}, function(error) {
    // Do something with request error
    return Promise.reject(error)
})

instance.interceptors.response.use((response) => response, (error) => {
    //this.alert.showConsoleAlert(error.config)
    return Promise.reject(error)
})

export default {
    getData(action) {
        let url = `${BASE_URL}`
        url += action + '.json'
        return instance.get(url)
    },
    getDataModule(action, module) {
        let url = `${SERVER_URL}`
        url += module + action + '.json'
        return instance.get(url)
    },
    getDataModulePagination(action, module, data) {
        let url = `${SERVER_URL}`
        url += module + action + '.json?' + data
        return instance.get(url)
    },
    getDataPagination(action, data) {
        let url = `${BASE_URL}`
        url += action + '.json?' + data
        return instance.get(url)
    },
    getDataRegister(action, data) {
        let url = `${ACCOUNTS_URL}`
        url += action + '.json?' + data
        return instance.get(url)
    },
    postDataModule(action, data, module) {
        let url = `${SERVER_URL}`
        url += module + action + '.json'
        return instance.post(url, data)
    },
    postData(action, data) {
        let url = `${BASE_URL}`
        url += action + '.json'
        return instance.post(url, data)
    },
    convertLead(action, data) {
        let url = `${BASE_URL}`
        url += action + '/convert.json'
        return instance.post(url, data)
    },
    putDataModule(action, data, module) {
        let url = `${SERVER_URL}`
        url += module + action + '.json'
        return instance.put(url, data)
    },
    putData(action, data) {
        let url = `${BASE_URL}`
        url += action + '.json'
        return instance.put(url, data)
    },
    deleteData(action) {
        let url = `${BASE_URL}`
        url += action + '.json'
        return instance.delete(url)
    },
    deleteDataModule(action, module) {
        let url = `${SERVER_URL}`
        url += module + action + '.json'
        return instance.delete(url)
    },
    deletePerm(action, data) {
        let url = `${BASE_URL}`
        url += action + '.json'
        return instance.put(url, data)
    },
    getLogin() {
        let url = `${ACCOUNTS_URL}`
        url += 'login.json'
        return instance.get(url)
    },
    login(action, data) {
        let url = `${ACCOUNTS_URL}`
        url += action + '.json'
        return instance.post(url, data)
    },
    portalLogin(action, data) {
        let url = `${ACCOUNTS_URL}`
        url += action + '.json'
        return instance.post(url, data)
    },
    register(action, data) {
        let url = `${ACCOUNTS_URL}`
        url += action + '.json'
        return instance.post(url, data)
    },
    uploadFile(action, formData, module) {
        let url = `${SERVER_URL}`
        url += module + action + '.json'
        return instance.post(url, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}
