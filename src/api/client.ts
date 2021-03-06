import axios from "axios";
import config from "../config";

const httpClient = axios.create({
    baseURL: config.api.base,
    timeout: 1000,
    headers: {}
})

const client = {
    get: {
        dailyBalances: async () => {
            try {
                const response = await httpClient.request({
                    method: "get",
                    url: "/daily-balances"
                })
                return response.data
            } catch (e) {
                console.log(e)
                throw e
            }
        },
        transactionConfigs: async () => {
            try {
                const response = await httpClient.request({
                    method: "get",
                    url: "/transaction-configs"
                })
                return response.data
            } catch (e) {
                console.log(e)
                throw e
            }
        }
    }
}

export default client