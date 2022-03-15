let data =[
    {
        name: "Mateo",
        age: "30",
        attribute: "He is Tall"
    },
    {
        name: "Sarah",
        age: "32",
        attribute: "She is Beautiful"
    },
    {
        name: "John",
        age: "20",
        attribute: "He is Smart"
    },
    {
        name: "Tim",
        age: "27",
        attribute: "He is Rich"
    },
    {
        name: "Sam",
        age: "22",
        attribute: "He is Well-Built"
    },
    {
        name: "Joey",
        age: "34",
        attribute: "He loves Writing"
    }
]

const  info = document.querySelector("#info");

let details = data.map( (item) => {
    return "<div>" + item.name + " " + "is " + item.age + " years old" + ", " + item.attribute +"</div>"
})

info.innerHTML = details.join("\n");