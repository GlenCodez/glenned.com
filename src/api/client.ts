import axios from "axios";
import {BalancesResponse} from "glentils/dist/types";
import {Moment} from "moment";
import config from "../config";

const httpClient = axios.create({
    baseURL: config.api.base,
    timeout: 1000,
    headers: {}
})

const client = {
    get: {
        dailyBalances: async (month: Moment): Promise<BalancesResponse> => {
            try {
                const response = await httpClient.request({
                    method: "get",
                    url: "/balances",
                    params: {
                        date: month.format("YYYY-MM")
                    }
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