import axios from 'axios'
import {Modal} from 'antd'
import Utils from '../utils/utils'

export default class Axios {

  static requestList(_this, url, params, isMock) {
    var data = {
      params: params,
      isMock
    }
    this.ajax({
      url,
      data
    }).then((data) => {
      if (data && data.result) {
        let list = data.result.item_list.map((item, index) => {
          item.key = index;
          return item;
        });
        _this.setState({
          list,
          pagination: Utils.pagination(data, (current) => {
            _this.params.page = current;
            _this.requestList();
          })
        })
      }
    });
  }


  static ajax(options) {
    let loading;
    if (options.data && options.data.isShowLoading !== false) {
      // loading = document.getElementById('ajaxLoading');
      // loading.style.display = 'block';
    }
    let baseApi = '';
    if (options.isMock) {
      baseApi = 'https://www.easy-mock.com/mock/5b5de2849b54da5dcc7d1897/example/';
    } else {
      baseApi = 'https://www.easy-mock.com/mock/5b5de2849b54da5dcc7d1897/example/';
    }
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.params) || ''
      }).then(response => {
        console.log('response', response)
        if (response.status === 200) {
          resolve(response.data);
        } else {
          reject(response.data);
        }
      }).catch(err => {
        reject(err);
      })
    });
  }
}