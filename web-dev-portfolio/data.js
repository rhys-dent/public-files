const projects = [
    {
        url: "https://master.dojb0il0pmvkq.amplifyapp.com/",
        thumbnailPath: "kanaquiz.jpg",
        description:
            "A simple web application intended to help to users memorize the Japanese alphabet. Both hiragana and katana.",
        createdWith: ["ReactJS", "Amplify (Amazon Web Service)"],
    },
    {
        url: "http://prometheuspm.com/",
        thumbnailPath: "prometheus-property-management.jpg",
        description:
            "A brochure website developed during my practicum to help promote my employer's property management to potential clients. ",
        createdWith: ["ReactJS", "Amplify (Amazon Web Service)"],
    },
    {
        url: "https://master.d3tgrseuznqkr.amplifyapp.com/",
        thumbnailPath: "tallycraft.jpg",
        description:
            "A single page website created to share my mother's crafting hobby in a catagorized and easy to navigate manner.",
        createdWith: [
            "ReactJS",
            "Amplify (Amazon Web Service)",
            "Simple Storage Service (Amazon Web Service)",
        ],
    },
];
class Project {
    constructor(url, thumbnailPath, description, createdWith) {
        this.url = url;
        this.thumbnailPath = thumbnailPath;
        this.description = description;
        this.createdWith = createdWith;
    }
    getCreatedWithElement() {
        const ulCreatedWith = document.createElement('ul');
        this.createdWith.forEach(item => {
            const liCreatedWith = document.createElement('li');
            liCreatedWith.innerText = item;
            ulCreatedWith.appendChild(liCreatedWith);
        })
        return ulCreatedWith;
    }
    getThumbnailElement() {
        const img = document.createElement('img');
        img.src = this.thumbnailPath;
        img.style.width = '40%';
        return img;
    }
    getInfoElement() {
        const info = document.createElement('div');
        const h2Title = document.createElement('h2');
        const aUrl = document.createElement('a');
        const pDescription = document.createElement('p');
        pDescription.innerText = this.description;
        aUrl.href = this.url;
        aUrl.innerText = this.url;
        h2Title.appendChild(aUrl);
        info.appendChild(h2Title);
        info.appendChild(pDescription);
        info.appendChild(this.getCreatedWithElement())
        return info;
    }
    getElement() {
        const section = document.createElement('section')
        section.style.height = '50vh';
        section.style.border = '2px solid black';
        section.style.display = 'flex';
        section.appendChild(this.getThumbnailElement());
        section.appendChild(this.getInfoElement());
        return section;
    }
}