// /api/new-meetup

//POSTEV /api/new-meetup
export default function handler(req, res) {
  // Find out which kind of request was sent.
  const method = req.method;
  if (method === "POST") {
    // contains the body of the incoming request, the data of the incoming request.
    const data = req.body;
    const { image, title, description, address } = data;
  }
}
