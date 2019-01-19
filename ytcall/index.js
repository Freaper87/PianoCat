import axios from 'axios'
export default (req, res, next) => {
	if (req.method === 'POST') {
      	let body = '';
	    req.on('data', chunk => {
	        body += chunk.toString();
	    });
	    req.on('end', () => {
	        axios.get('https://www.googleapis.com/youtube/v3/videos?part=statistics&id=' + body + '&key=' + process.env.VUE_APP_KEY)
			.then(ytres => {
				res.end(JSON.stringify(ytres.data.items))	
			})
	    });
    } else {
    	next();
    }
}