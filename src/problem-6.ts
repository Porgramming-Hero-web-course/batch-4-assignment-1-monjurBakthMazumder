{
    //
    interface Profile{
        name: string;
        age:number;
        email:string;
    }
    function updateProfile(obj1: Profile, obj2:Partial<Profile>): Profile{
        if(obj2.name){
            obj1.name = obj2.name;
        }
        if(obj2.email){
            obj1.email = obj2.email;
        }
        if(obj2.age){
            obj1.age = obj2.age;
        }
        return obj1
    }
    //
}