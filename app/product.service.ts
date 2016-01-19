/**
 * Created by robertkarlsson on 19/01/16.
 */
import {Injectable} from 'angular2/core';
import {GEMS} from './mock-gems'

@Injectable()

export class ProductService {
    getGems(){
       return GEMS;
    }
}