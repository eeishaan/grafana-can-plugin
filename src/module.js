// The MIT License (MIT)

// Copyright (c) 2016 Grafana
// Copyright 2017, Juniper Networks, Inc.

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

import {GenericDatasource} from './datasource';
import {GenericDatasourceQueryCtrl} from './query_ctrl';
import {GenericAnnotationsQueryCtrl} from './annotation_ctrl';
class GenericConfigCtrl {
  constructor($scope) {
    this.current.url = this.current.url;
    this.current.jsonData = this.current.jsonData || {};
    this.current.jsonData.keystoneUrl = this.current.jsonData.keystoneUrl;
    this.current.jsonData.canPassword = this.current.jsonData.canPassword;
    this.current.jsonData.canUsername = this.current.jsonData.canUsername;
    this.current.jsonData.canTenant = this.current.jsonData.canTenant;
  }
}

GenericConfigCtrl.templateUrl = 'partials/config.html';

class GenericQueryOptionsCtrl {}
GenericQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

// class GenericAnnotationsQueryCtrl {}
// GenericAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';

export {
  GenericDatasource as Datasource,
  GenericDatasourceQueryCtrl as QueryCtrl,
  GenericConfigCtrl as ConfigCtrl,
  GenericQueryOptionsCtrl as QueryOptionsCtrl,
  GenericAnnotationsQueryCtrl as AnnotationsQueryCtrl
};
