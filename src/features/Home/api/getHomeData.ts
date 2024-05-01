import Axios from "axios";
import MockAdapter from "axios-mock-adapter";
import {mockHomeData} from './mockHomeData'
import { EnumFeatureName, isAxiosMockByApp } from "../../../config";

export const axios = Axios.create();

export const api_getHomeData = (): Promise<any> => {
    const url = "api/ghmedtls";

    if(isAxiosMockByApp(EnumFeatureName.About)) {
        const mock = new MockAdapter(axios, {delayResponse: 1000});
        mock.onGet(url).reply(200, {...mockHomeData});
    } 
       
    return axios.get(url);
}