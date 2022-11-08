// Variables
{
    const a: string = "1";
    console.log('a', a);
}

// Functions
{
    const getFullName = (name: string, surname: string): string => name + " " + surname;
    console.log(getFullName("Samuel", "Fontes"));
}

// Interface
{

    interface IUser {
        name: string;
        age?: number;
        getMessage(): string
    }

    const user: IUser = {
        name: "samuel",
        age: 30,
        getMessage() {
            return `Hello ${this.name}`;
        },
    };

    const user2: IUser = {
        name: "jack",
        getMessage() {
            return `Hello ${this.name}`;
        },
    };

    console.log(user.getMessage());

}

// Type alias & Union
{
    type ID = string;
    type PopularTag = string;
    type MaybePopularTag = PopularTag | null;

    const popularTags: PopularTag[] = ["tag1", "tag2"];

    const dragonsTag: MaybePopularTag = "Dragon";

    interface UserInterface {
        id: ID,
        name: string,
        surname: string
    }

    let user: UserInterface | null = null;



    let username: string = "samuel";
    let pageName: string | number = 1;

    let errorMessage: string | null = null;

}

// void, any, never, unknown
{
    const doSomething = (): void => {
        console.log("doSomething");
    };
    let doNotDoThis: any = "this is just like javascript";
    doNotDoThis = false;
    const doNever = (): never => {
        throw "never say never";
    };

    let vAny: any = 10;
    let vUnknown: unknown = 10;

    let pageNumber: string = "1";
    let numericPageNumber: number = (pageNumber as unknown) as number;

    let s1: string = vAny;
    let s2: string = vUnknown as string;
    console.log(s1);
}

// type assertion
{
    let page: any = "1";
    let pageNumber = page as string;
}

// DOM
{
    const someElement = document.querySelector('.foo') as HTMLInputElement;
    console.log("someElement", someElement.value);

    someElement.addEventListener('blur', event => {
        const target = event.target as HTMLInputElement

        console.log("event", target.value)
    });
}

// Classes

{
    interface UserInterface {
        getFullName(): string;
    };

    class User implements UserInterface {
        protected firstName: string; // protected is allowed in class and it's children
        private lastName: string;
        readonly uncahgableName: string;
        static readonly maxAge = 50;

        constructor(firstName: string, lastName: string) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.uncahgableName = firstName;
        }

        getFullName(): string {
            return this.firstName + " " + this.lastName;
        }
    }

    const user = new User("Samuel", "Fontes");
    console.log(user.getFullName());
    console.log(user.uncahgableName);
    console.log(User.maxAge);


    class Admin extends User {
        private editor: string

        setEditor(editor: string): void {
            this.editor = editor
        }

        getEditor(): string {
            return this.editor;
        }
    }
    const admin = new Admin("foo", "bar");
    console.log(admin.getEditor())
}

// Generics
{
    const addId = <T extends object>(obj: T)=> {
        const id = Math.random().toString(16);
        return {
            ...obj,
            id
        }
    }

    interface UserInterface<T>{
        name:string;
        data: T;
    }
    const user: UserInterface<{meta:string}> = {
        name: "sam",
        data: {
            meta: "meta"
        }
    }

    const user2: UserInterface<string[]> = {
        name: 'John',
        data: ['foo','bar','baz'],
    }

    const result = addId<UserInterface<string[]>>(user2);

    console.log("result",result);
}

// ENUMS
{
    // const statuses = {
    //     notStarted: 0,
    //     inProgress: 1,
    //     done: 2,
    // }
    // console.log(statuses.inProgress)

    enum StatusEnum {
        NotStarted = "notStarted",
        InProgress = "inProgress",
        Done = "done"
    }

    interface Task{
        id: string;
        status: StatusEnum;
    }

    let notStartedStatus: StatusEnum = StatusEnum.NotStarted
    notStartedStatus = StatusEnum.Done;

    console.log(notStartedStatus);
}