export type MenuItem = {
    name: string;
    contents: string;
    price: string;
}

export const rullar: MenuItem[] = [
    {
        name: "Fajita",
        contents: "Stekt kyckling med paprika, lök, BBQ sås, vitlökssås, saltgurka, och sallader",
        price: "125 kr",
    },
    {
        name: "Kyckling tenders",
        contents: "Friterad kyckling, sallader, saltgurka och såser",
        price: "125 kr",
    },
    {
        name: "Falafel klassisk",
        contents: "Falafel, sallader, saltgurka och tahinisås",
        price: "99 kr",
    },
    {
        name: "Falafel med halloumi",
        contents: "Falafel, halloumi, sallader, saltgurka och tahinisås",
        price: "119 kr",
    },
    {
        name: "Falafel med aubergine",
        contents: "Falafel, aubergine, sallader, saltgurka och tahinisås",
        price: "119 kr",
    },
];

export const tallrikar: MenuItem[] = [
    {
        name: "Quesadilla",
        contents: "Kyckling eller grönsaker i tortilla bröd med riven ost",
        price: "125 kr",
    },
    {
        name: "Fajita",
        contents: "Stekt kyckling med paprika, lök, BBQ sås, vitlökssås, saltgurka, sallader och pommes",
        price: "150 kr",
    },
    {
        name: "Kyckling tenders",
        contents: "Friterad kyckling, sallader, saltgurka, såser och pommes",
        price: "150 kr",
    },
    {
        name: "Falafel klassisk",
        contents: "Falafel, sallader, saltgurka, tahinisås och pommes",
        price: "125 kr",
    },
    {
        name: "Falafel mix",
        contents: "Falafel, halloumi, aubergine, sallader, saltgurka, pommes och tahinisås",
        price: "150 kr",
    },
];

export const snacks: MenuItem[] = [
    {
        name: "Nacho guacamole",
        contents: "Nachochips och guacamole",
        price: "54 kr",
    },
    {
        name: "Nacho supremo",
        contents: "Nachochips, cheddarost, tomat och jalapeño",
        price: "54 kr",
    },
    {
        name: "Cheese fries",
        contents: "Pommes, tomat, cheddarost och jalapeño",
        price: "54 kr",
    }
];

export const barnmeny = [
    {
        name: "Barnmeny",
        contents: "3 st kyckling tenders, pommes och juice",
        price: "99 kr",
    }
]
