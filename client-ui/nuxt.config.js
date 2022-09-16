export default {
    modules: [
        '@nuxtjs/apollo',
    ],
    
    apollo:{
        clientConfigs: {
            default: {
                httpEndpoint: 'http://localhost:4000/'
            }
        }
    }
}