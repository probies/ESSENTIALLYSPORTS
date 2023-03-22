// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import { parseString } from 'xml2js';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  var config = {
    method: 'get',
    url: 'https://www.essentiallysports.com/feed',
  };

  await axios(config)
    .then(function (response: any) {
      //console.log(JSON.stringify(response.data));
      //res.send(response.data)

      let jsonData = {};
      
      parseString(
        response?.data
          ?.replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>')
          .replace(/&quot;/g, '"'),
        {
          trim: true,
          explicitArray: false,
          mergeAttrs: true,
        },
        (err, result) => {
          if (err) {
            throw err;
          }
          jsonData = result;
        },
      );

      res.send(jsonData)

    })
    .catch(function (error: any) {
      console.log(error);
    });

}
