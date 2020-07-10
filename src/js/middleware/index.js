    import { ADD_ARTICLE } from "../constants/action-types";
    
    export function supplierDataMiddleware({ dispatch }) {
      return function(next) {
        return function(action) {
          //chck
          return next(action);
        };
      };
    }