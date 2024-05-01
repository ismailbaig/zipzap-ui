

export enum EnumFeatureName {
    Home = "home",
    About = "about"
}

export const isAxiosMockByApp = (featureName: EnumFeatureName): boolean => {
    switch(featureName) {
        case EnumFeatureName.Home: {
            return process.env.REACT_APP_IS_HOME_AXIOS_MOCK === "true" ? true : false;
        }
        case EnumFeatureName.About: {
            return process.env.REACT_APP_IS_ABOUT_AXIOS_MOCK === "true" ? true : false;
        }
        default: {
            return process.env.REACT_APP_IS_AXIOS_MOCK === "true" ? true : false;
        }
    }
}