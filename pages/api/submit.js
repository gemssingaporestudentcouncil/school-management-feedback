// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const AirtablePlus = require("airtable-plus");

  // baseID, apiKey, and tableName can alternatively be set by environment variables
  const airtable = new AirtablePlus({
    baseID: "appfGKftHqWluhJUg",
    apiKey: process.env.AIRTABLE,
    tableName: "Questions",
  });

  await airtable.create({ Question: req.query.question });

  res.statusCode = 200;
  res.send('Done');
};
