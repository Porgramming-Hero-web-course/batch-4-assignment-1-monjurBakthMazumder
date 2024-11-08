The significance of Union ( | ) type and intersection ( & ) type in Typescript:

Union ( | ):  when we know we get a value but we don’t know about the type of value like a roll which will be number or string type that time the union type help us to use multiple type for a veritable. For using a type safety the union type help us to. if we don't have union type we cant solved this type of problem.
- Example: 
    type Roll = String | Number
    const myScrollRoll : Roll = 23
    const profationRoll : Roll = "Full Stack Developer"


Intersection ( & ): we create a new type using multiple type using Intersection. Its work like that there are 2 type one is PrimarySchool and one is HighSchool. Now we want new one type EducationLife which contain the all property of PrimarySchool and HighSchool that type we easily create new type FullStackDeveloper using intersection.
- Example: 
    type PrimarySchool = {
        primarySchool : "ABC School"
    }
    type HighSchool = {
        highSchool : "shah Helal Hight school"
    }
    type EducationLife = PrimarySchool & HighSchool
    const myEducationLife : EducationLife = {
        primarySchool : "ABC School",
        highSchool : "shah Helal Hight school"
    }