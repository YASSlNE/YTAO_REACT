const youtubedl = require('youtube-dl-exec')
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
// const ads = [
//   {title: 'Hello, world (again)!'}
// ];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads



const fun=async (res, yturl)=>{
	const get_only_url=yturl.replace("/?v=","") // gets the youtube link

	let audio_source={url:"", title:""}

	await youtubedl(get_only_url,{'format': 'bestaudio',
						 skipDownload: true,
						 dumpSingleJson: true,}).then(output=>{
						 	// console.log(output)
						 	// text=res.send(output)
						 	formats=output['formats']
						 	audio_source["url"]=formats[6]['resolution'].includes('audio only')?formats[6]['url']:false
						 	audio_source["title"]=output["title"]
						 }
						 )



	await res.send(audio_source)




}
app.get('/', (req, res) => {
  // res.send(ads);
  fun(res, req['url'])
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});


