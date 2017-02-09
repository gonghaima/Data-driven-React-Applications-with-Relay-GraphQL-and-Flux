import {get} from 'jquery';
import ServerActions from './actions/ServerActions';
let API={
    fetchLinks(){
        console.log("1. In API");
        get("/data/links").done(resp=>{
            console.log(resp);
            ServerActions.receiveLinks(resp);
        });
    }
};
export default API;