// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    setTimeout(() => {
        res.status(200).json({
            result: [
                "David",
                "John",
                "Mary",
                "Paul",
                "Peter",
                "Cherry",
                "James",
                "William",
                "Thomas",
                "Oliver",
                "Daniel",
                "Michael",
                "Alexander",
                "Jack",
            ],
        });
    }, 2000);
}
