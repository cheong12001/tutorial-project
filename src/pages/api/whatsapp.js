// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    setTimeout(() => {
        res.status(200).json({
            result: [
                {
                    name: "Kunal",
                    createdAt: "05/03/2018",
                    description: "How is your scholarship going on ?",
                    unread: 2,
                },
                {
                    name: "Jane",
                    createdAt: "08/03/2019",
                    description: "Hey There! Are you using Whatsapp?",
                    unread: 2,
                },
                {
                    name: "Mark",
                    createdAt: "03/10/2019",
                    description: "Hey There! Are you using Whatsapp?",
                    unread: 2,
                },
                {
                    name: "Rahul",
                    createdAt: "03/03/2018",
                    description: "When are the elections?",
                    unread: 0,
                },
                {
                    name: "Nikita",
                    createdAt: "27/02/2018",
                    description: "Yo wassup!",
                    unread: 0,
                },
                {
                    name: "Vacation Trip",
                    createdAt: "26/02/2018",
                    description: "Photo",
                    unread: 0,
                },
            ],
        });
    }, 2000);
}
