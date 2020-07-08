/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */
import Vue from 'vue';
import dayjs from 'dayjs';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
      list : []
    },
    mutations: {
        add (state, val) {
            const nowDate = dayjs().valueOf();
            state.list = [
                ...state.list,
                {
                    create_date_ms: nowDate,
                    create_date: dayjs(nowDate).format('YYYY / MM / DD'),
                    value: val
                }
            ];
        },
        update (state, val){
            state.list = state.list.map( item => {
                if( item.create_date_ms==val.create_date_ms ){
                    console.log( '--->',item.value , val.value );
                    return item = { ...item, value: val.value};
                }
                return item;
            });
        },
        remove (state, val){
            state.list = state.list.filter( item => {
                if( item.create_date_ms!=val ){
                    return item;
                }
            })
        }
    }
})