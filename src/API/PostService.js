import axios from "axios";

export default class PostService {
    static async getAll(results = 10, page = 1) {
        try {
            const response = await axios.get('https://randomuser.me/api/', {
                params: {
                    results: results,
                    page: page
                }
            });
            return response
        } catch (e) {
            console.log(e);
        }
    }
}