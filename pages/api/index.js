// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import originalProjectData from "../../data/data";

export default (req, res) => {
  res.status(200).json(originalProjectData);
};
