export default {
    modules: [
        '@nuxtjs/apollo',
    ],
    components: true,
    apollo:{
        clientConfigs: {
            default: {
                httpEndpoint: 'http://localhost:4000/'
            }
        }
    }
}