const node_kakao = require('node-kakao');
const { KnownDataStatusCode } = require('node-kakao');
const JsonUtil = node_kakao.util.JsonUtil;
const axios = require('axios').default;

/**
 * 카카오톡 반응 추가해주는 함수
 * @author inyeoptti
 *
 * @param {{deviceUUID: string, accessToken: string}} { deviceUUID, accessToken }
 * @param {node_kakao.TalkChannel | node_kakao.TalkOpenChannel | node_kakao.TalkNormalChannel} channel
 * @param {node_kakao.TalkChatData} data
 * @param {number} type 0~6까지 가능
 * @return {{status: node_kakao.KnownDataStatusCode, success: boolean, reseult: any}} 
 */
async function set({ deviceUUID, accessToken }, channel, data, type) {
    if (channel instanceof node_kakao.TalkOpenChannel) {
        let client = await node_kakao.api.createSessionWebClient(
            { deviceUUID, accessToken },
            node_kakao.DefaultConfiguration,
            'https',
            'talk-pilsner.kakao.com'
        );
        const headers = client.createSessionHeader({'Content-Type':'application/json'});
        const reqData = client._client.buildAxiosReqData('POST', headers);
        reqData.url = client._client.toApiURL(`messaging/chats/${channel.channelId.toString()}/bubble/reactions`);
        reqData.data = JsonUtil.stringifyLoseless({
            logId: data.chat.logId,
            linkId: channel.linkId,
            reqId: new Date().getTime(),
            type
        });
        
        const res = (await axios.request(reqData)).data;
        return {
            status: res.status,
            success: res.status === KnownDataStatusCode.SUCCESS,
            result: res
        };
    }
}

module.exports = {set};