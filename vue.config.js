/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

module.exports = {
    css: {
        extract: true,
        sourceMap: false,
        loaderOptions: {
            sass: {
                data: `@import "~@/stylesheets/common.scss";`
            }
        },
        modules: false,
    }
  }