/* Axios Custom Config Begin */
import { NoAuthorization, Authorization } from './config'
/* Axios Custom Config End */

export default class CompanyService {

    static login = (email, password) => {
        return NoAuthorization.post(
            'company/login',
            {'email': email, 'password': password }
        )
    }
}
