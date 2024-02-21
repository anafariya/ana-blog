import type { NextApiRequest, NextApiResponse } from "next";

const handlePreview = (req: NextApiRequest, res: NextApiResponse) => {
    res.setPreviewData({});
    res.writeHead(307, { Location: "/" });
    res.end();
};

export default handlePreview;
