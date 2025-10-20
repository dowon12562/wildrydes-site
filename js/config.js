window._config = {
    cognito: {
        userPoolId: 'ap-northeast-2_ObmA5Or6a', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: '374t18128tagqbiaoehnjs20fr', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'ap-northeast-2' // e.g. us-east-2
    },
    api: {
        invokeUrl: 'https://uf70g6all7.execute-api.ap-northeast-2.amazonaws.com/prod' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
console.debug('CONFIG_LOADED', window._config);